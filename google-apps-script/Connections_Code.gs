/**
 * ==============================================================================
 * KOIOSTUDIO - SCRIPT 1: CONNECTIONS FORM (MAHI'S CIRCLE)
 * Attach this script to Mahi's existing Connections Google Sheet.
 * Matches the exact Google Form column headers already present in her sheet.
 * ==============================================================================
 */

const CONFIG = {
  OWNER_EMAIL: "info@koiostudio.com", // <-- Receives notifications
  OWNER_NAME: "Mahi",
};

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);

  try {
    var rawData = e.postData.contents;
    var d = JSON.parse(rawData);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Combine website, portfolio, and linkedin links into the single link column
    var links = [
      d.websiteUrl ? "Website: " + d.websiteUrl : "",
      d.portfolioUrl ? "Portfolio: " + d.portfolioUrl : "",
      d.linkedinUrl ? "LinkedIn: " + d.linkedinUrl : ""
    ].filter(Boolean).join("\n");

    // Match exact column layout of Mahi's existing sheet:
    // 1. Timestamp
    // 2. Email Address
    // 3. Full Name
    // 4. Company Email Address
    // 5. Whatsapp Phone Number
    // 6. Phone number to call
    // 7. State
    // 8. City
    // 9. Company / Brand Name
    // 10. Locations Served
    // 11. What do you offer?
    // 12. Business category
    // 13. Keywords
    // 14. Team setup
    // 15. Target clients
    // 16. Open for referrals
    // 17. Referral types
    // 18. Website / Portfolio / LinkedIn Link
    // 19. Elevator / Intro Pitch
    var row = [
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      d.email || "",
      d.fullName || "",
      d.email || "",
      d.whatsapp || "",
      d.phone || d.whatsapp || "",
      d.state || "",
      d.city || "",
      d.companyName || "",
      d.locationsServed || "",
      d.servicesOffered || "",
      d.category || "",
      d.keywords || "",
      d.teamSetup || "",
      d.targetClients || "",
      d.openForReferrals || "",
      d.referralTypes || "",
      links,
      d.introPitch || ""
    ];

    sheet.appendRow(row);

    // Send email notification to Mahi
    sendConnectionsEmailToOwner(d, links);

    // Send confirmation email to applicant
    if (d.email) {
      sendConnectionsEmailToApplicant(d);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Response logged to Connections sheet" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "online", service: "Mahi's Circle Connections API" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function sendConnectionsEmailToOwner(d, links) {
  var subject = `[New Connection] ${d.fullName || "Someone"} joined Mahi’s Circle (${d.companyName || "N/A"})`;
  var htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 600px;">
      <div style="background-color: #111827; padding: 20px; border-radius: 8px 8px 0 0; color: #ffffff;">
        <h2 style="margin: 0; color: #F59E0B; font-size: 18px;">Mahi’s Circle – New Connection</h2>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 20px; border-radius: 0 0 8px 8px; background-color: #ffffff;">
        <p>Hi <strong>${CONFIG.OWNER_NAME}</strong>,</p>
        <p>A new professional has submitted their details to <strong>Mahi’s Circle</strong>:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 14px 0;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold; width: 140px;">Full Name:</td><td>${d.fullName || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Company / Brand:</td><td>${d.companyName || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${d.email}">${d.email || "N/A"}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">WhatsApp:</td><td>${d.whatsapp || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Location:</td><td>${d.city || ""}, ${d.state || ""}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Category:</td><td>${d.category || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Services:</td><td>${d.servicesOffered || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Links:</td><td><pre style="font-family: inherit; margin: 0; white-space: pre-wrap;">${links || "N/A"}</pre></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 6px 0; font-weight: bold;">Intro Pitch:</td><td>${d.introPitch || "N/A"}</td></tr>
        </table>
        
        <p style="font-size: 13px; color: #6b7280;">Logged directly into your Connections Google Sheet.</p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.OWNER_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

function sendConnectionsEmailToApplicant(d) {
  var subject = `Welcome to Mahi’s Circle – Response Recorded!`;
  var htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 600px;">
      <div style="background-color: #111827; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="margin: 0; color: #F59E0B; font-size: 20px;">Mahi’s Circle</h2>
        <p style="margin: 4px 0 0 0; color: #9CA3AF; font-size: 13px;">Trusted Connections & Referrals</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; background-color: #ffffff;">
        <p>Hi <strong>${d.fullName}</strong>,</p>
        <p>Thank you for sharing your details and services with <strong>Mahi’s Circle</strong>.</p>
        <p>Our goal is simple: connect great people with great opportunities. Whenever an aligned collaboration or referral opportunity shows up in our network, we will introduce you directly.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 13px; color: #6b7280; margin: 0;">Best regards,<br><strong>Mahi</strong></p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: d.email,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: CONFIG.OWNER_EMAIL
  });
}
