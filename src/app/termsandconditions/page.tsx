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

        <h1 className="text-xl text-primary my-4">Submissions and Privacy</h1>
        <p>
          In the event that you submit or post any ideas, creative suggestions,
          designs, photographs, information, advertisements, data or proposals,
          including ideas for new or improved products, services, features,
          technologies or promotions, you expressly agree that such submissions
          will automatically be treated as non-confidential and non-proprietary
          and will become the sole property of You Go Crafts without any
          compensation or credit to you whatsoever. You Go Crafts and its
          affiliates shall have no obligations with respect to such submissions
          or posts and may use the ideas contained in such submissions or posts
          for any purposes in any medium in perpetuity, including, but not
          limited to, developing, manufacturing, and marketing products and
          services using such ideas.
        </p>

        <h1 className="text-xl text-primary my-4">Promotions</h1>
        <p>
          You Go Crafts may, from time to time, include contests, promotions,
          sweepstakes, or other activities (“Promotions”) that require you to
          submit material or information concerning yourself. Please note that
          all Promotions may be governed by separate rules that may contain
          certain eligibility requirements, such as restrictions as to age and
          geographic location. You are responsible to read all Promotions rules
          to determine whether or not you are eligible to participate. If you
          enter any Promotion, you agree to abide by and to comply with all
          Promotions Rules.
        </p>
        <p>
          Additional terms and conditions may apply to purchases of goods or
          services on or through the Services, which terms and conditions are
          made a part of this Agreement by this reference.
        </p>

        <h1 className="text-xl text-primary my-4">Typographical Errors</h1>
        <p>
          In the event a product and/or service is listed at an incorrect price
          or with incorrect information due to typographical error, we shall
          have the right to refuse or cancel any orders placed for the product
          and/or service listed at the incorrect price. We shall have the right
          to refuse or cancel any such order whether or not the order has been
          confirmed and your credit card charged. If your credit card has
          already been charged for the purchase and your order is canceled, we
          shall immediately issue a credit to your credit card account or other
          payment account in the amount of the charge.
        </p>

        <h1 className="text-xl text-primary my-4">Miscellaneous</h1>
        <p>
          If for any reason a court of competent jurisdiction finds any
          provision or portion of these Terms & Conditions to be unenforceable,
          the remainder of these Terms & Conditions will continue in full force
          and effect. Any waiver of any provision of these Terms & Conditions
          will be effective only if in writing and signed by an authorized
          representative of You Go Crafts. You Go Crafts will be entitled to
          injunctive or other equitable relief (without the obligations of
          posting any bond or surety) in the event of any breach or anticipatory
          breach by you. You Go Crafts operates and controls the You Go Crafts
          Service from its offices in . The Service is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation. Accordingly, those persons who choose to access the You Go
          Crafts Service from other locations do so on their own initiative and
          are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable. These Terms & Conditions (which
          include and incorporate the You Go Crafts Privacy Policy) contains the
          entire understanding, and supersedes all prior understandings, between
          you and You Go Crafts concerning its subject matter, and cannot be
          changed or modified by you. The section headings used in this
          Agreement are for convenience only and will not be given any legal
          import.
        </p>

        <h1 className="text-xl text-primary my-4">Disclaimer</h1>
        <p>
          You Go Crafts is not responsible for any content, code or any other
          imprecision.
        </p>
        <p>You Go Crafts does not provide warranties or guarantees.</p>
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
          The You Go Crafts Service and its contents are provided &quot;as is&quot; and
          &quot;as available&quot; without any warranty or representations of any kind,
          whether express or implied. You Go Crafts is a distributor and not a
          publisher of the content supplied by third parties; as such, You Go
          Crafts exercises no editorial control over such content and makes no
          warranty or representation as to the accuracy, reliability or currency
          of any information, content, service or merchandise provided through
          or accessible via the You Go Crafts Service. Without limiting the
          foregoing, You Go Crafts specifically disclaims all warranties and
          representations in any content transmitted on or in connection with
          the You Go Crafts Service or on sites that may appear as links on the
          You Go Crafts Service, or in the products provided as a part of, or
          otherwise in connection with, the You Go Crafts Service, including
          without limitation any warranties of merchantability, fitness for a
          particular purpose or non-infringement of third party rights. No oral
          advice or written information given by You Go Crafts or any of its
          affiliates, employees, officers, directors, agents, or the like will
          create a warranty. Price and availability information is subject to
          change without notice. Without limiting the foregoing, You Go Crafts
          does not warrant that the You Go Crafts Service will be uninterrupted,
          uncorrupted, timely, or error-free.
        </p>
        <h1 className="text-xl text-primary my-4">Contact Us</h1>
        <p>Don&apos;t hesitate to contact us if you have any questions.</p>
        <ul>
          <li>
            Via Email:{" "}
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
