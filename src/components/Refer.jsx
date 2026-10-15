// import React from "react";
// import { ArrowRight } from "lucide-react";

// const ReferFriend = () => {
//   const handleRefer = () => {
//     const section = document.getElementById("app-promo");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <section
//       id="refer"
//       className="relative flex min-h-[480px] w-full flex-col items-center justify-between overflow-hidden bg-gradient-to-r from-lime-400 to-green-500 bg-cover bg-center bg-no-repeat px-4 py-8 sm:min-h-[540px] sm:px-8 sm:py-10 lg:min-h-[600px] lg:py-4"
//       style={{
//         backgroundImage: "url('./assets/refer.png')",
//       }}
//     >
//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

//       {/* Heading at the top */}
//       <div className="relative z-10 w-full text-center">
//         <h2 className="text-3xl font-extrabold tracking-tight text-green-900 drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
//           Refer a Friend
//         </h2>

//         <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-red-600 sm:text-base md:text-lg">
//           Share the goodness of EatProtein with your friends
//           and enjoy exciting rewards together!
//         </p>
//       </div>

//       {/* Button at the bottom */}
//       <div className="relative z-10 mt-8 flex w-full justify-center">
//         <button
//           type="button"
//           onClick={handleRefer}
//           className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 sm:px-9 sm:py-4 sm:text-base"
//         >
//           Refer &amp; Save
//           {/*<ArrowRight size={19} />*/}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ReferFriend;




// import React, { useEffect, useState } from "react";
// import {
//   X,
//   Copy,
//   Check,
//   Link as LinkIcon,
//   Share2,
//   Gift,
// } from "lucide-react";
// import {
//   FaWhatsapp,
//   FaFacebookF,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// const ReferFriend = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // Uses the current page URL as the referral link.
//   // Replace this with your actual referral URL when available.
//   const referralLink =
//     typeof window !== "undefined"
//       ? window.location.origin
//       : "https://example.com";

//   const shareMessage =
//     "Join me on EatProtein! Discover healthy, protein-rich food choices. Check it out here:";

//   const encodedMessage = encodeURIComponent(
//     `${shareMessage} ${referralLink}`
//   );

//   const encodedUrl = encodeURIComponent(referralLink);

//   const shareLinks = {
//     whatsapp: `https://wa.me/?text=${encodedMessage}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
//     instagram: "https://www.instagram.com/",
//     email: `mailto:?subject=${encodeURIComponent(
//       "Join me on EatProtein!"
//     )}&body=${encodedMessage}`,
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(referralLink);
//       setCopied(true);
//     } catch {
//       // Fallback for browsers where Clipboard API is unavailable.
//       const textArea = document.createElement("textarea");
//       textArea.value = referralLink;
//       textArea.style.position = "fixed";
//       textArea.style.opacity = "0";
//       document.body.appendChild(textArea);
//       textArea.select();

//       const successful = document.execCommand("copy");
//       document.body.removeChild(textArea);

//       setCopied(successful);
//     }

//     window.setTimeout(() => setCopied(false), 2000);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCopied(false);
//   };

//   // Close on Escape and prevent background scrolling while open.
//   useEffect(() => {
//     if (!isModalOpen) return;

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeModal();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [isModalOpen]);

//   const socialItems = [
//     {
//       name: "WhatsApp",
//       href: shareLinks.whatsapp,
//       icon: <FaWhatsapp size={24} />,
//       color: "bg-[#25D366]",
//       description: "Share with friends",
//     },
//     {
//       name: "Facebook",
//       href: shareLinks.facebook,
//       icon: <FaFacebookF size={22} />,
//       color: "bg-[#1877F2]",
//       description: "Share your link",
//     },
//     {
//       name: "Instagram",
//       href: shareLinks.instagram,
//       icon: <FaInstagram size={24} />,
//       color:
//         "bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4]",
//       description: "Open Instagram",
//     },
//     {
//       name: "Email",
//       href: shareLinks.email,
//       icon: <FaEnvelope size={22} />,
//       color: "bg-[#EA4335]",
//       description: "Send an email",
//     },
//   ];

//   return (
//     <>
//       <section
//         id="refer"
//         className="
//           relative isolate flex w-full flex-col
//           items-center overflow-hidden
//           bg-[#f7fbea]
//           min-h-[600px]
//           sm:min-h-[650px]
//           md:min-h-[600px]
//           lg:min-h-[560px]
//         "
//       >
//         {/* Desktop and tablet background image */}
//         <div
//           className="
//             absolute inset-0 -z-10 hidden
//             sm:flex items-center justify-center
//           "
//         >
//           <img
//             src="/assets/refer.png"
//             alt=""
//             className="h-full w-full object-contain object-center"
//           />
//         </div>

//         {/* Mobile layout */}
//         <div className="relative flex w-full flex-col items-center sm:hidden">
//           <div className="relative z-10 w-full px-4 pb-3 pt-7 text-center">
//             <h2 className="text-3xl font-extrabold tracking-tight text-green-900 drop-shadow-sm">
//               Refer a Friend
//             </h2>

//             <p className="mx-auto mt-2 max-w-sm text-sm font-semibold leading-6 text-red-600">
//               Share the goodness of EatProtein with your friends
//               and enjoy exciting rewards together!
//             </p>
//           </div>

//           <div className="w-full px-3">
//             <img
//               src="/assets/refer1.png"
//               alt="Refer a friend steps and rewards"
//               className="block h-auto w-full object-contain object-top"
//             />
//           </div>

//           <div className="relative z-10 flex w-full justify-center px-4 pb-6 pt-4">
//             <button
//               type="button"
//               onClick={() => setIsModalOpen(true)}
//               className="
//                 inline-flex items-center justify-center
//                 rounded-xl bg-red-500 px-7 py-3.5
//                 text-sm font-bold text-white shadow-lg
//                 transition duration-300 hover:-translate-y-1
//                 hover:bg-red-600 hover:shadow-xl
//                 focus:outline-none focus:ring-4
//                 focus:ring-green-900/20
//               "
//             >
//               Refer &amp; Save
//             </button>
//           </div>
//         </div>

//         {/* Desktop and tablet heading */}
//         <div
//           className="
//             relative z-10 hidden w-full
//             px-4 pt-7 text-center
//             sm:block sm:px-8 sm:pt-8
//             md:pt-9 lg:pt-7
//           "
//         >
//           <h2
//             className="
//               text-3xl font-extrabold tracking-tight
//               text-green-900 drop-shadow-sm
//               sm:text-4xl md:text-5xl lg:text-5xl
//             "
//           >
//             Refer a Friend
//           </h2>

//           <p
//             className="
//               mx-auto mt-3 max-w-xl
//               text-sm font-semibold leading-6 text-red-600
//               sm:text-base sm:leading-7 md:text-lg
//             "
//           >
//             Share the goodness of EatProtein with your friends
//             and enjoy exciting rewards together!
//           </p>
//         </div>

//         {/* Desktop and tablet button */}
//         <div
//           className="
//             relative z-10 mt-auto hidden w-full justify-center
//             px-4 pb-7 pt-8 sm:flex sm:pb-8
//             md:pb-9 lg:pb-7
//           "
//         >
//           <button
//             type="button"
//             onClick={() => setIsModalOpen(true)}
//             className="
//               inline-flex items-center justify-center
//               rounded-xl bg-red-500 px-7 py-3.5
//               text-sm font-bold text-white shadow-lg
//               transition duration-300 hover:-translate-y-1
//               hover:bg-red-600 hover:shadow-xl
//               focus:outline-none focus:ring-4
//               focus:ring-green-900/20
//               sm:px-9 sm:py-4 sm:text-base
//             "
//           >
//             Refer &amp; Save
//           </button>
//         </div>

//         {/* Existing desktop and tablet overlay */}
//         <div
//           className="
//             pointer-events-none absolute inset-0 -z-0 hidden
//             bg-gradient-to-b from-white/15
//             via-transparent to-white/10 sm:block
//           "
//         />
//       </section>

//       {/* Referral popup */}
//       {isModalOpen && (
//         <div
//           className="
//             fixed inset-0 z-[100] flex items-center
//             justify-center overflow-y-auto
//             bg-black/60 p-4 backdrop-blur-sm
//           "
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               closeModal();
//             }
//           }}
//         >
//           <div
//             role="dialog"
//             aria-modal="true"
//             aria-labelledby="refer-modal-title"
//             className="
//               relative my-auto w-full max-w-md
//               overflow-hidden rounded-3xl bg-white
//               shadow-2xl
//             "
//           >
//             {/* Popup header */}
//             <div className="relative overflow-hidden bg-[#075c40] px-6 pb-7 pt-8 text-center text-white">
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 aria-label="Close referral popup"
//                 className="
//                   absolute right-4 top-4 rounded-full
//                   bg-white/15 p-2 text-white
//                   transition hover:bg-white/25
//                 "
//               >
//                 <X size={20} />
//               </button>

//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
//                 <Gift size={30} />
//               </div>

//               <h2
//                 id="refer-modal-title"
//                 className="mt-4 text-2xl font-extrabold"
//               >
//                 Refer a Friend
//               </h2>

//               <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/85">
//                 Share the goodness of EatProtein with your
//                 friends and spread healthy eating!
//               </p>
//             </div>

//             <div className="p-5 sm:p-6">
//               {/* Referral link */}
//               <label
//                 htmlFor="referral-link"
//                 className="mb-2 block text-sm font-bold text-[#075c40]"
//               >
//                 Your referral link
//               </label>

//               <div className="flex min-w-0 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2">
//                 <LinkIcon
//                   size={18}
//                   className="ml-1 shrink-0 text-[#087b4b]"
//                 />

//                 <input
//                   id="referral-link"
//                   type="text"
//                   readOnly
//                   value={referralLink}
//                   onFocus={(event) => event.target.select()}
//                   className="
//                     min-w-0 flex-1 bg-transparent
//                     text-sm text-gray-600 outline-none
//                   "
//                 />

//                 <button
//                   type="button"
//                   onClick={handleCopy}
//                   className="
//                     inline-flex shrink-0 items-center
//                     justify-center gap-1.5 rounded-lg
//                     bg-[#087b4b] px-3 py-2.5
//                     text-xs font-bold text-white
//                     transition hover:bg-[#075c40]
//                     sm:text-sm
//                   "
//                 >
//                   {copied ? <Check size={16} /> : <Copy size={16} />}
//                   {copied ? "Copied" : "Copy"}
//                 </button>
//               </div>

//               {copied && (
//                 <p
//                   role="status"
//                   className="mt-2 text-xs font-semibold text-[#087b4b]"
//                 >
//                   Link copied to clipboard!
//                 </p>
//               )}

//               {/* Social sharing */}
//               <div className="my-5 flex items-center gap-3">
//                 <div className="h-px flex-1 bg-gray-200" />
//                 <span className="text-xs font-semibold text-gray-400">
//                   OR SHARE VIA
//                 </span>
//                 <div className="h-px flex-1 bg-gray-200" />
//               </div>

//               <div className="grid grid-cols-4 gap-2">
//                 {socialItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     target={
//                       item.name === "Email" ? undefined : "_blank"
//                     }
//                     rel={
//                       item.name === "Email"
//                         ? undefined
//                         : "noopener noreferrer"
//                     }
//                     aria-label={item.name}
//                     title={item.description}
//                     className="
//                       flex min-w-0 flex-col items-center
//                       gap-2 rounded-xl border border-gray-100
//                       bg-white px-1 py-3 text-center
//                       transition hover:-translate-y-1
//                       hover:bg-gray-50 hover:shadow-sm
//                     "
//                   >
//                     <span
//                       className={`
//                         flex h-11 w-11 items-center
//                         justify-center rounded-full
//                         text-white ${item.color}
//                       `}
//                     >
//                       {item.icon}
//                     </span>

//                     <span className="text-[11px] font-semibold text-gray-700 sm:text-xs">
//                       {item.name}
//                     </span>
//                   </a>
//                 ))}
//               </div>

//               <p className="mt-5 text-center text-xs leading-5 text-gray-400">
//                 Invite your friends to discover EatProtein.
//               </p>

//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="
//                   mt-4 w-full rounded-xl border
//                   border-gray-200 px-4 py-3
//                   text-sm font-bold text-gray-600
//                   transition hover:bg-gray-50
//                 "
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ReferFriend;


import React, { useEffect, useState } from "react";
import {
  X,
  Copy,
  Check,
  Link as LinkIcon,
  Gift,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const ReferFriend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Referral link uses the current website URL.
  const referralLink =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://example.com";

  const shareMessage =
    "Join me on EatProtein! Discover healthy, protein-rich food choices. Check it out here:";

  const encodedMessage = encodeURIComponent(
    `${shareMessage} ${referralLink}`
  );

  const encodedUrl = encodeURIComponent(referralLink);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedMessage}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    instagram: "https://www.instagram.com/",
    email: `mailto:?subject=${encodeURIComponent(
      "Join me on EatProtein!"
    )}&body=${encodedMessage}`,
  };

  // Copy referral link.
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(referralLink);
        setCopied(true);
      } else {
        const textArea = document.createElement("textarea");

        textArea.value = referralLink;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        setCopied(successful);
      }
    } catch {
      setCopied(false);
    }

    window.setTimeout(() => setCopied(false), 2000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCopied(false);
  };

  // Close popup with Escape and prevent background scrolling.
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setCopied(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  // Social media sharing items.
  const socialItems = [
    {
      name: "WhatsApp",
      href: shareLinks.whatsapp,
      icon: <FaWhatsapp size={24} />,
      color: "bg-[#25D366]",
      description: "Share with friends",
    },
    {
      name: "Facebook",
      href: shareLinks.facebook,
      icon: <FaFacebookF size={22} />,
      color: "bg-[#1877F2]",
      description: "Share your link",
    },
    {
      name: "Instagram",
      href: shareLinks.instagram,
      icon: <FaInstagram size={24} />,
      color:
        "bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4]",
      description: "Open Instagram",
    },
    {
      name: "Email",
      href: shareLinks.email,
      icon: <FaEnvelope size={22} />,
      color: "bg-[#EA4335]",
      description: "Send an email",
    },
  ];

  return (
    <>
      {/* ==================================================
          REFER A FRIEND SECTION
      ================================================== */}
      <section
        id="refer"
        className="
          relative isolate flex w-full flex-col
          items-center overflow-hidden
          bg-[#f7fbea]
          min-h-[600px]
          sm:min-h-[650px]
          md:min-h-[600px]
          lg:min-h-[560px]
        "
      >
        {/* ==================================================
            DESKTOP AND TABLET VIDEO BACKGROUND
            Muted, autoplaying, looping, and responsive.
        ================================================== */}
        <div
          className="
            absolute inset-0 -z-10 hidden
            overflow-hidden sm:block
          "
        >
          <video
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
            "
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src="/assets/refer-video-muted.mp4"
              type="video/mp4"
            />

            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* ==================================================
            MOBILE LAYOUT
            Keeps the original mobile illustration.
        ================================================== */}
        <div
          className="
            relative flex w-full flex-col
            items-center sm:hidden
          "
        >
          {/* Mobile heading */}
          <div
            className="
              relative z-10 w-full
              px-4 pb-3 pt-7 text-center
            "
          >
            <h2
              className="
                text-3xl font-extrabold
                tracking-tight text-green-900
                drop-shadow-sm
              "
            >
              Refer a Friend
            </h2>

            {/*<p
              className="
                mx-auto mt-2 max-w-sm
                text-sm font-semibold
                leading-6 text-red-600
              "
            >
              Share the goodness of EatProtein with your friends
              and enjoy exciting rewards together!
            </p>*/}
          </div>

          {/* Mobile referral illustration */}
          <div className="w-full px-3">
            <img
              src="/assets/refer1.png"
              alt="Refer a friend steps and rewards"
              className="
                block h-auto w-full
                object-contain object-top
              "
            />
          </div>

          {/* Mobile Refer & Save button */}
          <div
            className="
              relative z-10 flex w-full
              justify-center px-4 pb-6 pt-4
            "
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="
                inline-flex items-center justify-center
                rounded-xl bg-red-500 px-7 py-3.5
                text-sm font-bold text-white shadow-lg
                transition duration-300
                hover:-translate-y-1
                hover:bg-red-600 hover:shadow-xl
                focus:outline-none focus:ring-4
                focus:ring-green-900/20
              "
            >
              Refer &amp; Save
            </button>
          </div>
        </div>

        {/* ==================================================
            DESKTOP AND TABLET HEADING
        ================================================== */}
        <div
          className="
            relative z-10 hidden w-full
            px-4 pt-7 text-center
            sm:block sm:px-8 sm:pt-8
            md:pt-9 lg:pt-7
          "
        >
          <h2
            className="
              text-3xl font-extrabold
              tracking-tight text-green-900
              drop-shadow-sm
              sm:text-4xl md:text-5xl lg:text-5xl
            "
          >
            Refer a Friend
          </h2>

         {/* <p
            className="
              mx-auto mt-3 max-w-xl
              text-sm font-semibold
              leading-6 text-red-600
              sm:text-base sm:leading-7
              md:text-lg
            "
          >
            Share the goodness of EatProtein with your friends
            and enjoy exciting rewards together!
          </p>*/}
        </div>

        {/* ==================================================
            DESKTOP AND TABLET REFER BUTTON
        ================================================== */}
        <div
          className="
            relative z-10 mt-auto hidden w-full
            justify-center px-4 pb-7 pt-8
            sm:flex sm:pb-8
            md:pb-9 lg:pb-7
          "
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="
              inline-flex items-center justify-center
              rounded-xl bg-red-500 px-7 py-3.5
              text-sm font-bold text-white shadow-lg
              transition duration-300
              hover:-translate-y-1
              hover:bg-red-600 hover:shadow-xl
              focus:outline-none focus:ring-4
              focus:ring-green-900/20
              sm:px-9 sm:py-4 sm:text-base
            "
          >
            Refer &amp; Save
          </button>
        </div>

        {/* ==================================================
            ORIGINAL DESKTOP AND TABLET OVERLAY
            Helps preserve the existing section appearance.
        ================================================== */}
        <div
          className="
            pointer-events-none absolute inset-0
            -z-0 hidden
            bg-gradient-to-b
            from-white/15 via-transparent
            to-white/10 sm:block
          "
        />
      </section>

      {/* ==================================================
          REFERRAL POPUP MODAL
      ================================================== */}
      {isModalOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            overflow-y-auto bg-black/60
            p-4 backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="refer-modal-title"
            className="
              relative my-auto w-full max-w-md
              overflow-hidden rounded-3xl
              bg-white shadow-2xl
            "
          >
            {/* Popup header */}
            <div
              className="
                relative overflow-hidden
                bg-[#075c40] px-6 pb-7
                pt-8 text-center text-white
              "
            >
              {/* Close icon */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close referral popup"
                className="
                  absolute right-4 top-4
                  rounded-full bg-white/15
                  p-2 text-white
                  transition hover:bg-white/25
                "
              >
                <X size={20} />
              </button>

              {/* Gift icon */}
              <div
                className="
                  mx-auto flex h-14 w-14
                  items-center justify-center
                  rounded-full bg-white/15
                "
              >
                <Gift size={30} />
              </div>

              <h2
                id="refer-modal-title"
                className="mt-4 text-2xl font-extrabold"
              >
                Refer a Friend
              </h2>

              <p
                className="
                  mx-auto mt-2 max-w-xs
                  text-sm leading-6 text-white/85
                "
              >
                Share the goodness of EatProtein with your
                friends and spread healthy eating!
              </p>
            </div>

            {/* Popup content */}
            <div className="p-5 sm:p-6">
              {/* Referral link label */}
              <label
                htmlFor="referral-link"
                className="
                  mb-2 block text-sm
                  font-bold text-[#075c40]
                "
              >
                Your referral link
              </label>

              {/* Referral link and copy button */}
              <div
                className="
                  flex min-w-0 items-center gap-2
                  rounded-xl border border-gray-200
                  bg-gray-50 p-2
                "
              >
                <LinkIcon
                  size={18}
                  className="ml-1 shrink-0 text-[#087b4b]"
                />

                <input
                  id="referral-link"
                  type="text"
                  readOnly
                  value={referralLink}
                  onFocus={(event) => event.target.select()}
                  className="
                    min-w-0 flex-1 bg-transparent
                    text-sm text-gray-600 outline-none
                  "
                />

                <button
                  type="button"
                  onClick={handleCopy}
                  className="
                    inline-flex shrink-0
                    items-center justify-center
                    gap-1.5 rounded-lg
                    bg-[#087b4b] px-3 py-2.5
                    text-xs font-bold text-white
                    transition hover:bg-[#075c40]
                    sm:text-sm
                  "
                >
                  {copied ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}

                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Copy status */}
              {copied && (
                <p
                  role="status"
                  className="
                    mt-2 text-xs font-semibold
                    text-[#087b4b]
                  "
                >
                  Link copied to clipboard!
                </p>
              )}

              {/* Social sharing separator */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />

                <span
                  className="
                    text-xs font-semibold
                    text-gray-400
                  "
                >
                  OR SHARE VIA
                </span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Social sharing options */}
              <div className="grid grid-cols-4 gap-2">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={
                      item.name === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      item.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={item.name}
                    title={item.description}
                    className="
                      flex min-w-0 flex-col
                      items-center gap-2
                      rounded-xl border border-gray-100
                      bg-white px-1 py-3 text-center
                      transition hover:-translate-y-1
                      hover:bg-gray-50 hover:shadow-sm
                    "
                  >
                    <span
                      className={`
                        flex h-11 w-11 items-center
                        justify-center rounded-full
                        text-white ${item.color}
                      `}
                    >
                      {item.icon}
                    </span>

                    <span
                      className="
                        text-[11px] font-semibold
                        text-gray-700 sm:text-xs
                      "
                    >
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Popup footer */}
              <p
                className="
                  mt-5 text-center text-xs
                  leading-5 text-gray-400
                "
              >
                Invite your friends to discover EatProtein.
              </p>

              {/* Close button */}
              <button
                type="button"
                onClick={closeModal}
                className="
                  mt-4 w-full rounded-xl
                  border border-gray-200
                  px-4 py-3 text-sm
                  font-bold text-gray-600
                  transition hover:bg-gray-50
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferFriend;
