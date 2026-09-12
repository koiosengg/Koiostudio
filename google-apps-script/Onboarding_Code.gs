/**
 * ==============================================================================
 * KOIOSTUDIO - SCRIPT 2: CLIENT ONBOARDING (2 FORMS)
 * Attach this script to your dedicated Onboarding Google Sheet.
 * Handles:
 *  1. Meta & Google Ads Onboarding (/onboarding/ads)
 *  2. Logo & Brand Discovery Questionnaire (/onboarding/logo-and-branding)
 *
 * Features:
 *  - Appends submission rows to dedicated tabs in the Google Sheet
 *  - Generates a styled Google Document (.docx / Word format, NOT PDF)
 *  - Emails the .docx document and Google Doc link to the Owner (Koiostudio)
 *  - Sends a branded confirmation email to the Client & Owner
 * ==============================================================================
 */

const CONFIG = {
  OWNER_EMAIL: "info@koiostudio.com", // <-- Owner & studio notification email
  OWNER_NAME: "Koiostudio",
  STUDIO_PHONE: "+91 7338658118",
  STUDIO_WEBSITE: "https://koiostudio.com",
  FOLDER_NAME: "Koiostudio Onboarding Documents", // Google Drive folder where docs are saved
};

function doPost(e) {
  try {
    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);

    const formType = data.formType || "Client Onboarding";
    let docUrl = "";
    let docxBlob = null;
    let clientEmail = data.email || data.contactEmail || "";
    let clientName = data.contactPerson || "Valued Client";
    let brandName = data.brandName || data.businessName || data.companyName || "Brand";

    // 1. Create Document & Save to Drive
    if (formType.includes("Ads Onboarding")) {
      const docResult = createAdsOnboardingDoc(data);
      docUrl = docResult.url;
      docxBlob = docResult.docxBlob;
    } else if (formType.includes("Logo") || formType.includes("Discovery") || formType.includes("Branding")) {
      const docResult = createLogoBrandingDoc(data);
      docUrl = docResult.url;
      docxBlob = docResult.docxBlob;
    }

    // 2. Send Emails
    sendNotificationToOwner(formType, data, brandName, clientName, clientEmail, docUrl, docxBlob);

    if (clientEmail) {
      sendConfirmationToClient(formType, data, brandName, clientName, clientEmail, docxBlob);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Form submission processed successfully",
        docUrl: docUrl || null,
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error processing submission: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "online",
      service: "Koiostudio Onboarding Backend",
      timestamp: new Date().toISOString(),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}





// ==============================================================================
// GOOGLE DRIVE & DOC GENERATION (IN WORD .DOCX FORMAT, NOT PDF)
// ==============================================================================

function getOrCreateTargetFolder() {
  const folders = DriveApp.getFoldersByName(CONFIG.FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(CONFIG.FOLDER_NAME);
}

function exportDocAsDocx(docId, docName) {
  const url = "https://docs.google.com/feeds/download/documents/export/Export?id=" + docId + "&exportFormat=docx";
  const response = UrlFetchApp.fetch(url, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true
  });
  return response.getBlob().setName(docName + ".docx");
}

function createAdsOnboardingDoc(d) {
  const brandName = d.businessName || "Client";
  const docTitle = "Meta & Google Ads Onboarding - " + brandName;
  const doc = DocumentApp.create(docTitle);
  const body = doc.getBody();

  formatDocHeader(body, "KOIOSTUDIO | CLIENT ONBOARDING", "Meta & Google Ads Client Onboarding Brief", brandName);

  addSectionTitle(body, "1. Business & Contact Information");
  addKeyValueTable(body, [
    ["Business / Brand Name", d.businessName || "N/A"],
    ["Website", d.website || "N/A"],
    ["Industry / Niche", d.industry || "N/A"],
    ["Point of Contact", d.contactPerson || "N/A"],
    ["Designation", d.designation || "N/A"],
    ["Phone Number", d.phone || "N/A"],
    ["Email Address", d.email || "N/A"],
    ["GST / Business Registration", d.gstNumber || "N/A"],
    ["Business Address", d.businessAddress || "N/A"],
    ["Business Overview", d.businessOverview || "N/A"],
  ]);

  addSectionTitle(body, "2. Campaign Objectives & Target Audience");
  addKeyValueTable(body, [
    ["Campaign Goals", d.campaignGoals || "N/A"],
    ["Primary Objective Details", d.primaryObjectiveDetails || "N/A"],
    ["Target Age Group", d.targetAge || "N/A"],
    ["Target Gender", d.targetGender || "N/A"],
    ["Target Locations", d.targetLocations || "N/A"],
    ["Target Languages", d.targetLanguages || "N/A"],
    ["Target Interests & Occupations", d.targetInterests || "N/A"],
    ["Target Income Group", d.targetIncomeGroup || "N/A"],
    ["Key Competitors", d.competitors || "N/A"],
    ["Products/Services to Advertise", d.productsToAdvertise || "N/A"],
  ]);

  addSectionTitle(body, "3. Advertising Budgets & Strategy");
  addKeyValueTable(body, [
    ["Monthly Google Ads Budget", d.googleAdsBudget || "N/A"],
    ["Monthly Meta Ads Budget", d.metaAdsBudget || "N/A"],
    ["Daily Budget Preference", d.dailyBudgetPreference || "N/A"],
    ["Expected Campaign Duration", d.expectedCampaignDuration || "N/A"],
    ["Currently Active Channels", d.currentChannels || "N/A"],
    ["Previous Ads Experience", d.previousAdExperience || "N/A"],
    ["Previous Ad Results & Feedback", d.previousAdDetails || "N/A"],
    ["Unique Selling Proposition (USP)", d.usp || "N/A"],
    ["Current Offers & Promotions", d.currentOffers || "N/A"],
  ]);

  addSectionTitle(body, "4. Creative Assets, Tracking & KPIs");
  addKeyValueTable(body, [
    ["Available Creative Assets", d.creativeAssets || "N/A"],
    ["Google Platform Access", d.googleAccess || "N/A"],
    ["Meta Platform Access", d.metaAccess || "N/A"],
    ["Website Platform / CMS", d.cms || "N/A"],
    ["Website Access / Developer Details", d.websiteLogin || "N/A"],
    ["Tracking & Pixels Setup", d.trackingSetup || "N/A"],
    ["Lead Management Process", d.leadManagement || "N/A"],
    ["Target CPL / CPA", d.targetCPL || "N/A"],
    ["Target ROAS", d.targetROAS || "N/A"],
    ["Monthly Target Leads / Sales", d.monthlyLeadTarget || "N/A"],
    ["Reporting Frequency", d.reportingFrequency || "N/A"],
    ["Additional Notes & Instructions", d.additionalNotes || "N/A"],
  ]);

  doc.saveAndClose();

  const file = DriveApp.getFileById(doc.getId());
  const folder = getOrCreateTargetFolder();
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);

  const docxBlob = exportDocAsDocx(doc.getId(), docTitle);

  return { url: doc.getUrl(), id: doc.getId(), docxBlob: docxBlob };
}

function createLogoBrandingDoc(d) {
  const brandName = d.brandName || "Client";
  const docTitle = "Logo & Brand Discovery Brief - " + brandName;
  const doc = DocumentApp.create(docTitle);
  const body = doc.getBody();

  formatDocHeader(body, "KOIOSTUDIO | BRAND DISCOVERY", "Logo Design & Brand Identity Brief", brandName);

  addSectionTitle(body, "1. Basic Brand Information & Story");
  addKeyValueTable(body, [
    ["Brand Name", d.brandName || "N/A"],
    ["Preferred Spelling / Styling", d.brandNameSpelling || "N/A"],
    ["Story / Meaning Behind Name", d.brandStoryMeaning || "N/A"],
    ["Tagline / Slogan", d.tagline || "N/A"],
    ["Tagline Status", d.taglineOpenToSuggestions || "N/A"],
    ["Business Owner / Contact Person", d.contactPerson || "N/A"],
    ["Contact Phone", d.contactPhone || "N/A"],
    ["Contact Email", d.contactEmail || "N/A"],
    ["Social Media & Website Links", d.socialLinks || "N/A"],
    ["Business Overview", d.businessOverview || "N/A"],
    ["Core Brand Values", d.brandValues || "N/A"],
    ["Emotions Brand Should Evoke", d.desiredEmotions || "N/A"],
  ]);

  addSectionTitle(body, "2. Audience, Positioning & Operations");
  addKeyValueTable(body, [
    ["Brand Personality Traits", d.brandPersonality || "N/A"],
    ["Business / Store Model", d.businessType || "N/A"],
    ["Target Delivery Scale", d.deliveryScale || "N/A"],
    ["Ideal Customer Profile", d.idealCustomer || "N/A"],
    ["Target Age & Demographics", d.targetAgeGroups || "N/A"],
    ["Product / Service Lineup", d.productOfferings || "N/A"],
    ["Hero / Best-Selling Products", d.heroProducts || "N/A"],
  ]);

  addSectionTitle(body, "3. Logo Design Preferences");
  addKeyValueTable(body, [
    ["Existing Logo", d.hasExistingLogo || "N/A"],
    ["Likes/Dislikes of Existing Logo", d.existingLogoFeedback || "N/A"],
    ["Preferred Logo Types", d.preferredLogoTypes || "N/A"],
    ["Desired Logo Feel / Vibe", d.logoFeel || "N/A"],
    ["Preferred Shapes / Structure", d.preferredShapes || "N/A"],
    ["Specific Elements to Include", d.elementsWanted || "N/A"],
    ["Elements to Strictly Avoid", d.elementsAvoid || "N/A"],
  ]);

  addSectionTitle(body, "4. Colors, Typography & Brand Voice");
  addKeyValueTable(body, [
    ["Preferred Colors", d.preferredColors || "N/A"],
    ["Colors to Avoid", d.avoidColors || "N/A"],
    ["Color Mood & Palette Style", d.colorMoods || "N/A"],
    ["Typography & Font Styles", d.fontStyles || "N/A"],
    ["3 Words Defining the Brand", d.brandVoiceThreeWords || "N/A"],
    ["Brand Personified", d.brandPersonified || "N/A"],
  ]);

  addSectionTitle(body, "5. Collaterals, References & Deliverables");
  addKeyValueTable(body, [
    ["Print Collaterals Required", d.printCollaterals || "N/A"],
    ["Digital Collaterals Required", d.digitalCollaterals || "N/A"],
    ["Competitor Branding References", d.competitorReferences || "N/A"],
    ["Moodboard / Pinterest / Behance Links", d.moodboardLinks || "N/A"],
    ["1-Year & 5-Year Vision", d.visionFuture || "N/A"],
    ["Target Launch Date / Deadline", d.deadlineOrLaunchDate || "N/A"],
    ["Non-negotiables / Final Notes", d.finalNotes || "N/A"],
  ]);

  doc.saveAndClose();

  const file = DriveApp.getFileById(doc.getId());
  const folder = getOrCreateTargetFolder();
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);

  const docxBlob = exportDocAsDocx(doc.getId(), docTitle);

  return { url: doc.getUrl(), id: doc.getId(), docxBlob: docxBlob };
}



function formatDocHeader(body, subtitle, title, clientName) {
  const pSub = body.appendParagraph(subtitle);
  pSub.setHeading(DocumentApp.ParagraphHeading.HEADING3);
  pSub.setForegroundColor("#D97706");
  pSub.setBold(true);

  const pTitle = body.appendParagraph(title);
  pTitle.setHeading(DocumentApp.ParagraphHeading.TITLE);
  pTitle.setForegroundColor("#111827");
  pTitle.setBold(true);

  const pMeta = body.appendParagraph("Prepared For: " + clientName + "  |  Date: " + Utilities.formatDate(new Date(), "Asia/Kolkata", "MMMM dd, yyyy - hh:mm a") + "\n");
  pMeta.setForegroundColor("#6B7280");
  pMeta.setItalic(true);
}

function addSectionTitle(body, title) {
  const p = body.appendParagraph("\n" + title);
  p.setHeading(DocumentApp.ParagraphHeading.HEADING2);
  p.setForegroundColor("#1F2937");
  p.setBold(true);
}

function addKeyValueTable(body, rows) {
  const table = body.appendTable();
  table.setBorderColor("#E5E7EB");
  table.setBorderWidth(1);

  rows.forEach(function(row, idx) {
    const tableRow = table.appendTableRow();
    const cellKey = tableRow.appendTableCell(row[0]);
    const cellVal = tableRow.appendTableCell(String(row[1]));

    cellKey.setWidth(180);
    cellKey.setBackgroundColor(idx % 2 === 0 ? "#F9FAFB" : "#FFFFFF");
    cellKey.getChild(0).asParagraph().setBold(true).setForegroundColor("#374151");

    cellVal.setBackgroundColor(idx % 2 === 0 ? "#F9FAFB" : "#FFFFFF");
    cellVal.getChild(0).asParagraph().setForegroundColor("#111827");
  });
}

function sendNotificationToOwner(formType, data, brandName, clientName, clientEmail, docUrl, docxBlob) {
  const subject = `[New Onboarding Intake] ${brandName} – ${formType}`;
  const phone = data.phone || data.contactPhone || data.whatsapp || "Not provided";

  let htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 600px;">
      <div style="background-color: #111827; padding: 24px; border-radius: 8px 8px 0 0; color: #ffffff;">
        <h2 style="margin: 0; color: #F59E0B; font-size: 20px;">Koiostudio Onboarding Portal</h2>
        <p style="margin: 4px 0 0 0; color: #9CA3AF; font-size: 14px;">New Client Intake Received</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; background-color: #ffffff;">
        <p>Hi <strong>${CONFIG.OWNER_NAME}</strong>,</p>
        <p>A new client has submitted their onboarding questionnaire through the website portal:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 140px;">Questionnaire:</td>
            <td style="padding: 8px 0; color: #111827; font-weight: bold;">${formType}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Brand / Company:</td>
            <td style="padding: 8px 0; color: #111827;">${brandName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Client Name:</td>
            <td style="padding: 8px 0; color: #111827;">${clientName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email Address:</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${clientEmail}">${clientEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #111827;">${phone}</td>
          </tr>
        </table>
  `;

  if (docUrl) {
    htmlBody += `
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 14px 16px; margin: 20px 0; border-radius: 4px;">
        <strong>📄 Editable Google Document Created:</strong><br>
        <a href="${docUrl}" target="_blank" style="color: #b45309; font-weight: bold; text-decoration: underline;">Open ${brandName} Onboarding Document →</a>
      </div>
      <p style="font-size: 13px; color: #6b7280;">
        <em>Note: Attached as a Microsoft Word (.docx) document (not PDF) to this email.</em>
      </p>
    `;
  }

  htmlBody += `
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 12px; color: #9ca3af; margin: 0;">
          All responses have been logged to the Onboarding Google Spreadsheet.
        </p>
      </div>
    </div>
  `;

  const emailOptions = {
    to: CONFIG.OWNER_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
  };

  if (docxBlob) {
    emailOptions.attachments = [docxBlob];
  }

  MailApp.sendEmail(emailOptions);
}

function sendConfirmationToClient(formType, data, brandName, clientName, clientEmail, docxBlob) {
  const subject = `We've received your onboarding submission – ${CONFIG.OWNER_NAME}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #111827; padding: 28px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; color: #F59E0B; font-size: 24px; letter-spacing: 1px;">KOIOSTUDIO</h1>
        <p style="margin: 6px 0 0 0; color: #E5E7EB; font-size: 14px;">Creative Design, Branding & Marketing</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 28px; border-radius: 0 0 8px 8px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #111827;">Hi <strong>${clientName}</strong>,</p>
        
        <p>
          Thank you for completing the <strong>${formType}</strong> for <strong>${brandName}</strong>. We're excited to partner with you!
        </p>

        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 18px; margin: 20px 0;">
          <h3 style="margin: 0 0 10px 0; color: #111827; font-size: 15px;">🚀 What Happens Next?</h3>
          <ol style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px; line-height: 1.7;">
            <li><strong>Review & Analysis:</strong> Our strategy & design team will review your responses and requirements.</li>
            <li><strong>Kickoff Call:</strong> We will reach out via WhatsApp / Email within 24–48 hours to align on timelines, deliverables, and next milestones.</li>
            <li><strong>Execution:</strong> Work kicks off as per our agreed project schedule.</li>
          </ol>
        </div>

        <p style="font-size: 14px; color: #4b5563;">
          If you have any quick questions or additional reference files to share in the meantime, feel free to reply directly to this email or reach us on WhatsApp.
        </p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        
        <table style="width: 100%; font-size: 13px; color: #6b7280;">
          <tr>
            <td>
              <strong>Koiostudio Team</strong><br>
              Email: <a href="mailto:${CONFIG.OWNER_EMAIL}" style="color: #d97706;">${CONFIG.OWNER_EMAIL}</a><br>
              Phone: ${CONFIG.STUDIO_PHONE}<br>
              Web: <a href="${CONFIG.STUDIO_WEBSITE}" style="color: #d97706;">${CONFIG.STUDIO_WEBSITE}</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  const emailOptions = {
    to: clientEmail,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: CONFIG.OWNER_EMAIL
  };

  if (docxBlob) {
    emailOptions.attachments = [docxBlob];
  }

  MailApp.sendEmail(emailOptions);
}
