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
      <div className="overflow-y-scroll h-screen md:h-[84.4vh]">
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
            <p>{t("CookieType")}</p>
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
            {t("cookiesPurpose")}
            </p>
          </li>
          <li>
            <p>
              <strong>{t("functionalityCookiesTitle")}</strong>
            </p>
            <p>{t("functionalityCookiesType")}</p>
            <p>{t("functionalityCookiesAdministered")}</p>
            <p>
            {t("functionalityCookiesPurpose")}
            </p>
          </li>
        </ul>
        <p>
        {t("moreInfoAboutCookies")}
        </p>
        <h3>{t("useOfPersonalDataTitle")}</h3>
        <p>{t("useOfPersonalDataPurposes")}</p>
        <ul>
          <li>
            <p>
              <strong>To provide and maintain our Service</strong>, {t("useOfPersonalDataPurposes1")}
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your Account:</strong> {t("useOfPersonalDataPurposes2")}
            </p>
          </li>
          <li>
            <p>
              <strong>For the performance of a contract:</strong> {t("useOfPersonalDataPurposes3")}
            </p>
          </li>
          <li>
            <p>
              <strong>To contact You:</strong> {t("useOfPersonalDataPurposes4")}
            </p>
          </li>
          <li>
            <p>
              <strong>To provide You</strong> {t("useOfPersonalDataPurposes5")}
            </p>
          </li>
          <li>
            <p>
              <strong>To manage Your requests:</strong> {t("useOfPersonalDataPurposes6")}
            </p>
          </li>
          <li>
            <p>
              <strong>For business transfers:</strong> {t("mergeDivestiture")}
            </p>
          </li>
          <li>
            <p>
              <strong>For other purposes</strong>: {t("otherPurposes")}
            </p>
          </li>
        </ul>
        <p>
        {t("sharePersonalInfo")}
        </p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> {t("shareWithServiceProviders")}
          </li>
          <li>
            <strong>For business transfers:</strong> {t("shareTransferInfo")}
          </li>
          <li>
            <strong>With Affiliates:</strong> {t("shareWithAffiliates")}
          </li>
          <li>
            <strong>With business partners:</strong> {t("shareWithBusinessPartners")}
          </li>
          <li>
            <strong>With other users:</strong> {t("publicInteractionDisclaimer")}
          </li>
          <li>
            <strong>With Your consent</strong>: {t("otherPurposeDisclosure")}
          </li>
        </ul>
        <h3>{t("retentionHeading")}</h3>
        <p>
        {t("retentionParagraph1")}
        </p>
        <p>
        {t("retentionParagraph2")}
        </p>
        <h3>{t("transferHeading")}</h3>
        <p>
        {t("transferParagraph1")}
        </p>
        <p>
        {t("transferParagraph2")}
        </p>
        <p>
        {t("transferParagraph3")}
        </p>
        <h3>{t("deletePersonalData")}</h3>
        <p>
        {t("deletePersonalDataContent1")}
        </p>
        <p>
        {t("deletePersonalDataContent2")}
        </p>
        <p>
        {t("deletePersonalDataContent3")}
        </p>
        <p>
        {t("deletePersonalDataContent4")}
        </p>
        <h3>{t("disclosurePersonalData")}</h3>
        <h4>{t("businessTransactions")}</h4>
        <p>
        {t("businessTransactionsContent")}
        </p>
        <h4>{t("lawEnforcement")}</h4>
        <p>
        {t("lawEnforcementContent")}
        </p>
        <h4>{t("otherLegalRequirements")}</h4>
        <p>
        {t("otherLegalRequirementsContent")}
        </p>
        <ul>
          <li>{t("complyLegalObligation")}</li>
          <li>{t("protectDefendRights")}</li>
          <li>
          {t("preventInvestigateWrongdoing")}
          </li>
          <li>
          {t("protectPersonalSafety")}
          </li>
          <li>{t("protectAgainstLegalLiability")}</li>
        </ul>
        <h3>{t("securityPersonalData")}</h3>
        <p>
        {t("dataSecurityDisclaimer")}
        </p>
        <h2>{t("childrensPrivacy")}</h2>
        <p>
          {t("childrensPrivacyContent")}
        </p>
        <p>
        {t("relyOnConsent")}
        </p>
        <h2>{t("linksToOtherWebsites")}</h2>
        <p>
        {t("otherWebsitesContent")}
        </p>
        <p>
        {t("noControlDisclaimer")}
        </p>
        <h2>{t("changesToPrivacyPolicy")}</h2>
        <p>
        {t("updateNotification")}
        </p>
        <p>
        {t("notificationMethods")}
        </p>
        <p>
        {t("reviewPeriodically")}
        </p>
        <h2>{t("contactUs")}</h2>
        <p>
        {t("questionsAboutPolicy")}
        </p>
        <ul>
          <li>{t("contactMethods")}</li>
        </ul>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
