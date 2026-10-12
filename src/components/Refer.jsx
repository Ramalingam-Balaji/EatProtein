import React from "react";
import { ArrowRight } from "lucide-react";

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
      className="relative flex min-h-[480px] w-full flex-col items-center justify-between overflow-hidden bg-gradient-to-r from-lime-400 to-green-500 bg-cover bg-center bg-no-repeat px-4 py-8 sm:min-h-[540px] sm:px-8 sm:py-10 lg:min-h-[600px] lg:py-4"
      style={{
        backgroundImage: "url('./assets/refer.png')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

      {/* Heading at the top */}
      <div className="relative z-10 w-full text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-green-900 drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
          Refer a Friend
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-red-600 sm:text-base md:text-lg">
          Share the goodness of EatProtein with your friends
          and enjoy exciting rewards together!
        </p>
      </div>

      {/* Button at the bottom */}
      <div className="relative z-10 mt-8 flex w-full justify-center">
        <button
          type="button"
          onClick={handleRefer}
          className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 sm:px-9 sm:py-4 sm:text-base"
        >
          Refer &amp; Save
          {/*<ArrowRight size={19} />*/}
        </button>
      </div>
    </section>
  );
};

export default ReferFriend;