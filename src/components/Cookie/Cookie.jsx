import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner = ({ handleAccept }) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      cookieName="myCookieConsent"
      onAccept={handleAccept}
      style={{ background: "#333", color: "#fff" }}
    >
      We use cookies to understand how you use the product and help us improve
      it. Please accept cookies to help us improve.
    </CookieConsent>
  );
};

// const CookieConsentBanner = ({ acceptCookie, declineCookie }) => {
//   return (
//     <div id="cookie-consent" className="bg-weirdBrown p-5 w-[30vw] rounded-2xl">
//       <p className="text-white text-xl">

//       </p>
//       <div className="flex justify-around items-center mt-5">
//         <button
//           className="bg-primary px-4 py-2 rounded-lg hover:bg-primary-2"
//           onClick={acceptCookie}
//         >
//           Accept Cookies
//         </button>
//         <button
//           className="bg-primary px-4 py-2 rounded-lg hover:bg-primary-2"
//           onClick={declineCookie}
//         >
//           Decline Cookies
//         </button>
//       </div>
//     </div>
//   );
// };

export default CookieConsentBanner;
