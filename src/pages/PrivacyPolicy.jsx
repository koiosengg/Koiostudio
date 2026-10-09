import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Koiostudio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Read how Koiostudio collects, uses, stores, and protects the information you share through our website and enquiry forms."
      );
    }
  }, []);

  return (
    <main className="privacy-page">
      <div className="privacy-hero">
        <div className="privacy-glow" aria-hidden="true" />
        <div className="privacy-hero-text">
          <h1>Privacy Policy</h1>
          <p>
            This policy explains what information Koiostudio collects through
            this website, why we collect it, and how we handle it.
          </p>
          <span className="privacy-updated">Last updated: 9 October 2026</span>
        </div>
      </div>

      <div className="privacy-container">
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Koiostudio ("we", "us", "our") is a creative and digital solutions
            studio providing design, development, branding, and digital
            marketing services. This Privacy Policy applies to our website and
            to the enquiry, referral, and client onboarding forms available on
            it.
          </p>
          <p>
            By using this website or submitting a form, you acknowledge the
            practices described in this Privacy Policy. If you do not agree
            with them, please do not use the forms or provide us with your
            information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>
            We collect information that you choose to provide to us and a
            limited amount of technical information generated when you visit
            the website.
          </p>

          <h3>Information you provide directly</h3>
          <ul>
            <li>
              <strong>Contact and enquiry details</strong> such as your name,
              email address, phone or WhatsApp number, company name, and the
              message you send us.
            </li>
            <li>
              <strong>Connections / referral registration details</strong> such
              as your name, company or brand name, email, WhatsApp and phone
              number, state and city, the services you offer, your business
              category, keywords, team setup, target clients, referral
              preferences, website, portfolio and LinkedIn links, and a short
              introduction.
            </li>
            <li>
              <strong>Client onboarding details</strong> such as your brand or
              business name, website, industry, business address, contact
              person, designation, phone number, email address, business or GST
              registration number, business overview, campaign objectives,
              target audience information, marketing budgets, current channels,
              creative assets, reporting preferences, and branding or design
              preferences. You choose what to include in free-text fields.
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <p>
            When you visit the website, our hosting and infrastructure
            providers may process limited technical information such as your IP
            address, browser and device type, the pages requested, and
            timestamps, in server logs used for delivering and securing the
            site. We do not currently operate user accounts, and we do not
            operate analytics or advertising tracking on this website.
          </p>
          <p className="privacy-note">
            We do not ask for passwords or payment card details on this
            website. Please never submit passwords through our forms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiries and requests.</li>
            <li>
              To review referral and onboarding submissions and prepare
              proposals, briefs, or internal project documents.
            </li>
            <li>To provide the services you have requested and to communicate with you about them.</li>
            <li>
              To send transactional and confirmation emails related to your
              submission.
            </li>
            <li>
              To maintain internal records of enquiries, referrals, and client
              onboarding in our business tools.
            </li>
            <li>
              To operate, maintain, secure, and improve the website and our
              services.
            </li>
            <li>
              To comply with applicable legal obligations and to enforce our
              agreements.
            </li>
          </ul>
          <p>
            We do not use the information you submit through our forms to send
            you unrelated marketing newsletters.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            This website does not set its own advertising or analytics cookies.
            Some content embedded or loaded from third parties may use cookies
            or similar technologies:
          </p>
          <ul>
            <li>
              <strong>Google Maps</strong> is embedded on our Contact page
              through a Google embed, which may set cookies in your browser.
            </li>
            <li>
              <strong>Google Fonts</strong> are loaded from Google's servers,
              which may log your IP address and browser information to serve
              the fonts.
            </li>
          </ul>
          <p>
            Our client onboarding forms temporarily use your browser's session
            storage to remember information while you move between steps in
            the same session. This is stored only in your browser and is
            cleared when the browsing session ends.
          </p>
          <p>
            You can control or delete cookies through your browser settings.
            Blocking cookies may affect the embedded maps and other
            third-party features.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. How We Share Information</h2>
          <p>
            We do not sell your personal information. We share information only
            as described below:
          </p>
          <ul>
            <li>
              <strong>Service providers</strong> who help us operate the
              website and process submissions, including Google (for Google
              Apps Script, Google Sheets, Google Drive, Gmail, Google Maps, and
              Google Fonts) and our website hosting provider.
            </li>
            <li>
              <strong>Professional advisers and authorities</strong> where
              required to comply with the law, respond to lawful requests, or
              protect our rights.
            </li>
            <li>
              <strong>Business transfers</strong> in connection with a merger,
              acquisition, or sale of assets, where information may be
              transferred as part of that transaction.
            </li>
          </ul>
          <p>
            Third-party providers process information under their own privacy
            policies and terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Third-Party Services</h2>
          <p>
            The following third-party services may be involved when you use
            this website:
          </p>
          <div className="privacy-table-wrap">
            <table className="privacy-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                  <th>Information involved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Service">
                    Google Apps Script, Sheets, Drive, Gmail
                  </td>
                  <td data-label="Purpose">
                    Receiving and storing form submissions and sending
                    confirmation and notification emails
                  </td>
                  <td data-label="Information involved">
                    The information you submit through our forms, plus your
                    email address
                  </td>
                </tr>
                <tr>
                  <td data-label="Service">Google Maps</td>
                  <td data-label="Purpose">
                    Displaying our office location on the Contact page
                  </td>
                  <td data-label="Information involved">
                    Technical data such as IP address and browser details
                  </td>
                </tr>
                <tr>
                  <td data-label="Service">Google Fonts</td>
                  <td data-label="Purpose">
                    Loading the website's typefaces
                  </td>
                  <td data-label="Information involved">
                    Technical data such as IP address and browser details
                  </td>
                </tr>
                <tr>
                  <td data-label="Service">Website hosting provider</td>
                  <td data-label="Purpose">Hosting and serving the website</td>
                  <td data-label="Information involved">
                    Technical data such as IP address and request logs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="privacy-section">
          <h2>7. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably
            necessary to fulfil the purposes described in this Privacy Policy,
            to comply with our legal obligations, to resolve disputes, and to
            enforce our agreements. When information is no longer needed, we
            take reasonable steps to delete or de-identify it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures designed
            to protect personal information against unauthorised access,
            disclosure, alteration, or destruction. These include the use of
            secure connections (HTTPS) and reputable cloud service providers.
          </p>
          <p>
            However, no method of transmission over the internet or method of
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Children's Privacy</h2>
          <p>
            Our website and services are intended for businesses and
            professionals. They are not directed at children, and we do not
            knowingly collect personal information from children through this
            website. If you believe a child has provided us with personal
            information, please contact us so we can take appropriate action.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Your Privacy Rights</h2>
          <p>
            Depending on your location and the applicable law, you may have
            rights regarding your personal information, which can include the
            right to:
          </p>
          <ul>
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction of information that is inaccurate or incomplete.</li>
            <li>Request deletion of your personal information.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Object to or request restriction of certain processing.</li>
            <li>Request a copy of your information in a portable format where applicable.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in
            the "Contact Us" section below. We may need to verify your request
            before acting on it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. International Data Transfers</h2>
          <p>
            Some of our service providers may process information in countries
            other than your own. Where required by applicable law, we take
            appropriate steps relating to such transfers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Links to Third-Party Websites</h2>
          <p>
            Our website may contain links to third-party websites and services,
            such as social media profiles, WhatsApp, client portfolios, and
            external references you share with us. We are not responsible for
            the privacy practices or content of those third parties, and we
            encourage you to review their privacy policies.
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable requirements. When we do, we
            will revise the "Last updated" date at the top of this page. We
            encourage you to review this page periodically.
          </p>
        </section>

        <section className="privacy-section">
          <h2>14. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle
            your information, please contact us:
          </p>
          <ul className="privacy-contact">
            <li>
              <strong>Koiostudio</strong>
            </li>
            <li>
              No.315/64, Mallasandra village, Thalaghattapura Post,
              Bengaluru-560109
            </li>
            <li>
              Email:{" "}
              <a href="mailto:info@koiostudio.com">info@koiostudio.com</a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+918909765654">+91 89097 65654</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
