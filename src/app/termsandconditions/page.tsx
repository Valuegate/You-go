"use client"
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import React from "react";
import { useTranslation } from "react-i18next";

const TermsAndConditionsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar showSearch={false} />

      <h1 className="sm:text-center sm:text-2xl text-4xl text-weirdBrown font-bold mt-20 mb-10 px-[10%]">
        {t('termsAndConditions')}
      </h1>

      <p className="sm:text-center sm:text-xl text-2xl text-weirdBrown font-bold mb-10 px-[10%]">
      {t('updatedAt')} <span>2024-01-08</span> 
      </p>

      <div className="mb-10 px-[10%]">
        <h1 className="text-xl text-primary my-4">{t('generalTerms')}</h1>
        <p>
        {t('termsOfService')}
        </p>
        <p>
        {t('liabilityDisclaimer')}
        </p>
        <p>
        {t('responsibilityDisclaimer')}
          <a href="https://termify.io" target="_blank">
            Termify
          </a>
          .
        </p>

        <h1 className="text-xl text-primary my-4">{t('licenseTitle')}</h1>
        <p>
        {t('licenseContent1')}
        </p>
        <p>
        {t('licenseContent2')}
        </p>
        <p>
        {t('licenseContent3')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('definitionsAndKeyTerms')}</h1>
        <p>
        {t('termsExplanation')}
        </p>
        <ul>
          <li>
          {t('cookie')}
          </li>
          <li>
          {t('company')}
          </li>
          <li>
          {t('country')}
          </li>
          <li>
          {t('device')}
          </li>
          <li>
          {t('service')}
          </li>
          <li>
          {t('thirdPartyService')}
          </li>
          <li>
          {t('website')}
          </li>
          <li>
          {t('you')}
          </li>
        </ul>

        <h1 className="text-xl text-primary my-4">{t('restrictionsTitle')}</h1>
        <p>{t('restrictionsContent')}</p>
        <ul>
          <li>
          {t('restrictionsList1')}
          </li>
          <li>
          {t('restrictionsList2')}
          </li>
          <li>
          {t('restrictionsList3')}
          </li>
        </ul>
        <h1 className="text-xl text-primary my-4">{t('returnRefundTitle')}</h1>
        <p>
        {t('returnRefundContent1')}
        </p>
        <p>
        {t('returnRefundContent2')}
        </p>
        <p>
        {t('returnRefundContent3')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('yourSuggestions')}</h1>
        <p>
        {t('feedbackIntro')}
        </p>
        <p>
        {t('freeToUse')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('yourConsent')}</h1>
        <p>
        {t('updatedTermsIntro')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('linksToOtherWebsites')}</h1>
        <p>
        {t('termsAndConditionsDescription')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('updatedTermsIntro')}</h1>
        <p>
        {t('updatedTermsIntro')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('changesTitle')}</h1>
        <p>
        {t('changesContent')}
        </p>
        <p>
        {t('termsConditionsChange')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('modificationsTitle')}</h1>
        <p>
        {t('modificationsContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('updatesTitle')}</h1>
        <p>
        {t('updatesContent1')}
        </p>
        <p>
        {t('updatesContent2')}
        </p>
        <p>
        {t('updatesContent3')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('thirdPartyServices')}</h1>
        <p>
        {t('thirdPartyContentDescription')}
        </p>
        <p>
        {t('thirdPartyDisclaimer1')}
        </p>
        <p>
        {t('thirdPartyDisclaimer2')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('termAndTermination')}</h1>
        <p>
        {t('agreementDescription1')}
        </p>
        <p>
        {t('agreementDescription2')}
        </p>
        <p>
        {t('agreementDescription3')}
        </p>
        <p>
        {t('agreementDescription4')}
        </p>
        <p>
        {t('agreementDescription5')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('copyrightInfringementNoticeTitle')}</h1>
        <p>
        {t('copyrightInfringementNoticeContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('indemnificationTitle')}</h1>
        <p>
        {t('indemnificationContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('noWarrantiesTitle')}</h1>
        <p>
        {t('websiteDisclaimer')}
        </p>
        <p>
        {t('additionalDisclaimer')}
        </p>
        <p>
        {t('jurisdictionsDisclaimer')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('jurisdictionsTiyle')}</h1>
        <p>
        {t('limitationOfLiabilityContent1')}
        </p>
        <p>
        {t('limitationOfLiabilityContent2')}
        </p>
        <p>
        {t('limitationOfLiabilityContent3')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('severabilityHeading')}</h1>
        <p>
        {t('severabilityContent1')}
        </p>
        <p>
        {t('severabilityContent2')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('waiverHeading')}</h1>
        <p>
        {t('waiverContent1')}
        </p>
        <p>
        {t('waiverContent2')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('amendmentsTitle')}</h1>
        <p>
        {t('amendmentsContent1')}
        </p>
        <p>
        {t('amendmentsContent2')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('entireAgreementTitle')}</h1>
        <p>
        {t('entireAgreementContent1')}
        </p>
        <p>
        {t('entireAgreementContent2')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('updatesToOurTermsTitle')}</h1>
        <p>
        {t('updatesToOurTermsContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('intellectualPropertyTitle')}</h1>
        <p>
        {t('intellectualPropertyContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('agreementToArbitrate')}</h1>
        <p>
        {t('arbitrationSection')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('noticeOfDispute')}</h1>
        <p>
        {t('noticeOfDisputeSection')}
          {/* <a
            href="/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="9cf5f2faf3dcf9fbf9eef5fdf8f9effdeeeef3f0f0f3eff3fff5fdf0b2f3eefb"
          >
            [email&#160;protected]
          </a>
          . You Go Crafts will send any Notice of Dispute to you by mail to your
          address if we have it, or otherwise to your email address. You and You
          Go Crafts will attempt to resolve any dispute through informal
          negotiation within sixty (60) days from the date the Notice of Dispute
          is sent. After sixty (60) days, you or You Go Crafts may commence
          arbitration. */}
        </p>

        <h1 className="text-xl text-primary my-4">{t('bindingArbitration')}</h1>
        <p>
        {t('bindingArbitrationSection')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('submissionsPrivacyTitle')}</h1>
        <p>
        {t('submissionsPrivacyContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('promotionsTitle')}</h1>
        <p>
          {t('promotionsContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('typographicalErrorsTitle')}</h1>
        <p>
          {t('typographicalErrorsContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('miscellaneousTitle')}</h1>
        <p>
        {t('miscellaneousContent')}
        </p>

        <h1 className="text-xl text-primary my-4">{t('disclaimerTitle')}</h1>
        <p>
        {t('content1')}
        </p>
        <p>{t('content2')}</p>
        <p>
          In no event shall You Go Crafts be liable for any special, direct,
          indirect, consequential, or incidental damages or any damages
          whatsoever, whether in an action of contract, negligence or other
          tort, arising out of or in connection with the use of the Service or
          the contents of the Service. The Company reserves the right to make
          additions, deletions, or modifications to the contents on the Service
          at any time without prior notice.
        </p>
        <p>
        {t('content4')}
        </p>
        <h1 className="text-xl text-primary my-4">{t('contactUsTitle')}</h1>
        <p>{t('contactUsContent')}.</p>
        <ul>
          <li>
            {t('contactViaEmail')}
            <a
              href="/cdn-cgi/l/email-protection"
              className="__cf_email__"
              data-cfemail="a5cccbc3cae5c0c2c0d7ccc4c1c0d6c4d7d7cac9c9cad6cac6ccc4c98bcad7c2"
            >
              [email&#160;protected]
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
