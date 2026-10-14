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



import React from "react";

const ReferFriend = () => {
  const handleRefer = () => {
    const section = document.getElementById("app-promo");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
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
      {/* Desktop, tablet and larger screens - unchanged */}
      <div
        className="
          absolute inset-0 -z-10 hidden
          sm:flex items-center justify-center
        "
      >
        <img
          src="/assets/refer.png"
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      {/* Mobile layout */}
      <div className="relative flex w-full flex-col items-center sm:hidden">

        {/* Mobile heading and description above the steps image */}
        <div className="relative z-10 w-full px-4 pb-3 pt-7 text-center">
          <h2
            className="
              text-3xl font-extrabold tracking-tight
              text-green-900 drop-shadow-sm
            "
          >
            Refer a Friend
          </h2>

          <p
            className="
              mx-auto mt-2 max-w-sm
              text-sm font-semibold leading-6
              text-red-600
            "
          >
            Share the goodness of EatProtein with your friends
            and enjoy exciting rewards together!
          </p>
        </div>

        {/* Full steps image - visible between text and button */}
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

        {/* Button below the complete steps image */}
        <div className="relative z-10 flex w-full justify-center px-4 pb-6 pt-4">
          <button
            type="button"
            onClick={handleRefer}
            className="
              inline-flex items-center justify-center
              rounded-xl bg-red-500
              px-7 py-3.5
              text-sm font-bold text-white
              shadow-lg
              transition duration-300
              hover:-translate-y-1
              hover:bg-red-600 hover:shadow-xl
              focus:outline-none
              focus:ring-4 focus:ring-green-900/20
            "
          >
            Refer &amp; Save
          </button>
        </div>
      </div>

      {/* Desktop and tablet heading - unchanged */}
      <div
        className="
          relative z-10 hidden w-full
          px-4 pt-7 text-center
          sm:block sm:px-8 sm:pt-8
          md:pt-9
          lg:pt-7
        "
      >
        <h2
          className="
            text-3xl font-extrabold tracking-tight
            text-green-900 drop-shadow-sm
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
          "
        >
          Refer a Friend
        </h2>

        <p
          className="
            mx-auto mt-3 max-w-xl
            text-sm font-semibold leading-6
            text-red-600
            sm:text-base sm:leading-7
            md:text-lg
          "
        >
          Share the goodness of EatProtein with your friends
          and enjoy exciting rewards together!
        </p>
      </div>

      {/* Desktop and tablet button - unchanged */}
      <div
        className="
          relative z-10 mt-auto hidden w-full justify-center
          px-4 pb-7 pt-8
          sm:flex sm:pb-8
          md:pb-9
          lg:pb-7
        "
      >
        <button
          type="button"
          onClick={handleRefer}
          className="
            inline-flex items-center justify-center
            rounded-xl bg-red-500
            px-7 py-3.5
            text-sm font-bold text-white
            shadow-lg
            transition duration-300
            hover:-translate-y-1
            hover:bg-red-600 hover:shadow-xl
            focus:outline-none
            focus:ring-4 focus:ring-green-900/20
            sm:px-9 sm:py-4 sm:text-base
          "
        >
          Refer &amp; Save
        </button>
      </div>

      {/* Existing overlay for desktop and tablet */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-0 hidden
          bg-gradient-to-b
          from-white/15 via-transparent to-white/10
          sm:block
        "
      />
    </section>
  );
};

export default ReferFriend;