"use client";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar showSearch={false} />

      <h1 className="sm:text-center sm:text-2xl text-4xl text-weirdBrown font-bold mt-20 mb-10 px-[10%]">
        {t("privacyPolicy")}
      </h1>
      <div className="mb-10 px-[10%]">
        <p className="text-light-black-11 text-lg mb-4">{t("lastUpdated")}</p>
        <p>{t("description")}</p>
        <p>{t("personalDataUsage")}</p>
        <h2>{t("interpretationAndDefinitions")}</h2>
        <h3>{t("interpretation")}</h3>
        <p>{t("capitalizedWordsMeaning")}</p>
        <h3>{t("definitions")}</h3>
        <p>{t("forPurposesOfPrivacyPolicy")}</p>
        <ul>
          <li>
            <p>
              <strong>Account</strong> {t("uniqueAccount")}
            </p>
          </li>
          <li>
            <p>
              <strong>Affiliate</strong> {t("entityControl")}
            </p>
          </li>
          <li>
            <p>
              <strong>Company</strong> {t("theCompany")}
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies</strong> {t("cookies")}
            </p>
          </li>
          <li>
            <p>
              <strong>Country</strong> {t("spain")}
            </p>
          </li>
          <li>
            <p>
              <strong>Device</strong> {t("device1")}
            </p>
          </li>
          <li>
            <p>
              <strong>Personal Data</strong> {t("personalInformation")}
            </p>
          </li>
          <li>
            <p>
              <strong>Service</strong> {t("theWebsite")}
            </p>
          </li>
          <li>
            <p>
              <strong>Service Provider</strong> {t("dataProcessor")}
            </p>
          </li>
          <li>
            <p>
              <strong>Third-party Social Media Service</strong>{" "}
              {t("theWebsite")}
            </p>
          </li>
          <li>
            <p>
              <strong>Usage Data</strong> {t("refersToAnyWebsite")}
            </p>
          </li>
          <li>
            <p>
              <strong>Website</strong> {t("refersToDataCollectedAutomatically")}
              <a
                href="https://www.yougo-crafts.store/home"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.yougo-crafts.store/home
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>You</strong> {t('refersToYouGoCrafts"')}
            </p>
          </li>
        </ul>
        <h2>{t("meansTheIndividual")}</h2>
        <h3>{t("collectingAndUsingYourPersonalData")}</h3>
        <h4>{t("typesOfDataCollected")}</h4>
        <p>{t("personalData")}</p>
        <ul>
          <li>
            <p>{t("whileUsingOurService")}</p>
          </li>
          <li>
            <p>{t("emailAddress")}</p>
          </li>
          <li>
            <p>{t("firstNameAndLastName")}</p>
          </li>
          <li>
            <p>{t("addressStateProvincePostalCodeCity")}</p>
          </li>
          <li>
            <p>{t("usageData")}</p>
          </li>
        </ul>
        <h4>{t("usageData")}</h4>
        <p>{t("usageDataTitle")}</p>
        <p>
          {t("usageDataContent")}
        </p>
        <p>{t("mobileDeviceInfo")}</p>
        <p>{t("browserInfo")}</p>
        <h4>{t("thirdPartySocialMedia")}</h4>
        <p>{t("socialMediaServices")}</p>
        <ul>
          <li>{t("socialMediaList")}</li>
        </ul>
        <p>{t("thirdPartyInfo")}</p>
        <p>{t("additionalInfo")}</p>
        <h4>{t("trackingTechnologiesAndCookies")}</h4>
        <p>
        {t("trackingTechnologiesAndDescription")}
        </p>
        <ul>
          <li>
            <strong>Cookies or Browser Cookies.</strong>{t("cookieDescription1")}
          </li>
          <li>
            <strong>Web Beacons.</strong> {t("cookieDescription2")}
          </li>
        </ul>
        <p>
        {t("cookieDescription3")}
        </p>
        <p>
        {t("cookieDescription4")}
        </p>
        <ul>
          <li>
            <p>
              <strong>{t("necessaryCookies")}</strong>
            </p>
            <p>{t("cookieType")}</p>
            <p>{t("administeredBy")}</p>
            <p>
            {t("cookiePurpose")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("cookiesPolicyAcceptance")}</strong>
            </p>
            <p>{t("cookieTypePersistent")}</p>
            <p>{t("administeredByUs")}</p>
            <p>
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Functionality Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </p>
          </li>
        </ul>
        <p>
          For more information about the cookies we use and your choices
          regarding cookies, please visit our Cookies Policy or the Cookies
          section of our Privacy Policy.
        </p>
        <h3>Use of Your Personal Data</h3>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <p>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </p>
          </li>
          <li>
            <p>
              <strong>For the performance of a contract:</strong> the
              development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any
              other contract with Us through the Service.
            </p>
          </li>
          <li>
            <p>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application&apos;s push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </p>
          </li>
          <li>
            <p>
              <strong>To provide You</strong> with news, special offers and
              general information about other goods, services and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </p>
          </li>
          <li>
            <p>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </p>
          </li>
          <li>
            <p>
              <strong>For other purposes</strong>: We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing and your experience.
            </p>
          </li>
        </ul>
        <p>
          We may share Your personal information in the following situations:
        </p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may share Your personal
            information with Service Providers to monitor and analyze the use of
            our Service, to contact You.
          </li>
          <li>
            <strong>For business transfers:</strong> We may share or transfer
            Your personal information in connection with, or during negotiations
            of, any merger, sale of Company assets, financing, or acquisition of
            all or a portion of Our business to another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share Your information with
            Our affiliates, in which case we will require those affiliates to
            honor this Privacy Policy. Affiliates include Our parent company and
            any other subsidiaries, joint venture partners or other companies
            that We control or that are under common control with Us.
          </li>
          <li>
            <strong>With business partners:</strong> We may share Your
            information with Our business partners to offer You certain
            products, services or promotions.
          </li>
          <li>
            <strong>With other users:</strong> when You share personal
            information or otherwise interact in the public areas with other
            users, such information may be viewed by all users and may be
            publicly distributed outside. If You interact with other users or
            register through a Third-Party Social Media Service, Your contacts
            on the Third-Party Social Media Service may see Your name, profile,
            pictures and description of Your activity. Similarly, other users
            will be able to view descriptions of Your activity, communicate with
            You and view Your profile.
          </li>
          <li>
            <strong>With Your consent</strong>: We may disclose Your personal
            information for any other purpose with Your consent.
          </li>
        </ul>
        <h3>Retention of Your Personal Data</h3>
        <p>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </p>
        <p>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </p>
        <h3>Transfer of Your Personal Data</h3>
        <p>
          Your information, including Personal Data, is processed at the
          Company&apos;s operating offices and in any other places where the
          parties involved in the processing are located. It means that this
          information may be transferred to — and maintained on — computers
          located outside of Your state, province, country or other governmental
          jurisdiction where the data protection laws may differ than those from
          Your jurisdiction.
        </p>
        <p>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </p>
        <p>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </p>
        <h3>Delete Your Personal Data</h3>
        <p>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </p>
        <p>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </p>
        <p>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </p>
        <p>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </p>
        <h3>Disclosure of Your Personal Data</h3>
        <h4>Business Transactions</h4>
        <p>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>
        <h4>Law enforcement</h4>
        <p>
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </p>
        <h4>Other legal requirements</h4>
        <p>
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            Protect the personal safety of Users of the Service or the public
          </li>
          <li>Protect against legal liability</li>
        </ul>
        <h3>Security of Your Personal Data</h3>
        <p>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent&apos;s consent before We collect and use that
          information.
        </p>
        <h2>Links to Other Websites</h2>
        <p>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party&apos;s site. We strongly advise You to review the
          Privacy Policy of every site You visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul>
          <li>By email: info@egeriadesarrollosocial.org</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
