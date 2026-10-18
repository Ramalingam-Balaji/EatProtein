
import { useState } from "react";
import {
  ArrowRight,
  UsersRound,
  ShoppingCart,
  Megaphone,
  Heart,
  MapPin,
  ChartNoAxesCombined,
  ClipboardList,
  Store,
  GraduationCap,
  Smartphone,
  PackageCheck,
  CheckCircle2,
  FileText,
  Boxes,
  ShieldCheck,
  Search,
  LoaderCircle,
  Leaf,
} from "lucide-react";

/* =========================================
   STORE PARTNER PAGE DATA
========================================= */

const benefits = [
  {
    icon: UsersRound,
    title: "More Visibility",
    description:
      "Get discovered by customers in your local area through the EatProtein app.",
    iconStyle: "bg-green-100 text-green-700",
  },
  {
    icon: ShoppingCart,
    title: "Increase Store Orders",
    description:
      "Receive online orders from nearby customers looking for healthy, high-protein foods.",
    iconStyle: "bg-orange-100 text-orange-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Get featured in the app, promotions and local marketing campaigns.",
    iconStyle: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    title: "Be Part of a Healthier Community",
    description:
      "Support people in making better food choices and build long-term customer trust.",
    iconStyle: "bg-rose-100 text-rose-600",
  },
];

const onboardingSteps = [
  {
    number: "1",
    icon: FileText,
    title: "Register Your Store",
    description:
      "Fill out the store registration form with your basic details.",
    color: "bg-green-700",
  },
  {
    number: "2",
    icon: Store,
    title: "Verification & Setup",
    description:
      "Our team verifies your details and helps you set up your store on the platform.",
    color: "bg-orange-500",
  },
  {
    number: "3",
    icon: GraduationCap,
    title: "List Your Products",
    description:
      "Add your high-protein products with accurate information.",
    color: "bg-blue-600",
  },
  {
    number: "4",
    icon: Smartphone,
    title: "Start Receiving Orders",
    description:
      "Go live and start getting orders from nearby customers through the EatProtein app.",
    color: "bg-green-700",
  },
];

const supportItems = [
  "Store listing on EatProtein app",
  "Guidance on product listing and nutrition information",
  "Marketing and promotional support",
  "Ongoing support from our team",
  "Access to a community of health-conscious customers",
];

const requirements = [
  {
    icon: Store,
    text: "Local food stores, supermarkets, meat shops, organic stores, or healthy food retailers",
  },
  {
    icon: MapPin,
    text: "Must be in our serviceable area",
  },
  {
    icon: FileText,
    text: "Valid business registration (as per local norms)",
  },
  {
    icon: Boxes,
    text: "Ability to provide quality products and fulfill orders",
  },
  {
    icon: Heart,
    text: "Commitment to offer accurate product information",
  },
];

const communityBenefits = [
  {
    icon: UsersRound,
    text: "More Customers",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: ChartNoAxesCombined,
    text: "Higher Order Volume",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: UsersRound,
    text: "Local Community Trust",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Heart,
    text: "Be Part of a Bigger Mission",
    color: "bg-rose-100 text-rose-600",
  },
];

/* =========================================
   REUSABLE SECTION LABEL
========================================= */

function SectionLabel({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-green-800 sm:text-xs">
      {children}
    </span>
  );
}

/* =========================================
   REUSABLE SECTION HEADING
========================================= */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
      {eyebrow && (
        <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-600 sm:text-xs">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================
   REUSABLE CHECK ITEM
========================================= */

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
      <CheckCircle2
        size={19}
        className="mt-0.5 shrink-0 fill-green-700 text-white"
      />
      <span>{children}</span>
    </li>
  );
}

/* =========================================
   STORE PARTNER PAGE
========================================= */

export default function StorePartner() {
  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    phone: "",
    email: "",
    storeType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFormStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/store-partner-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to submit your registration. Please try again."
        );
      }

      setFormStatus({
        type: "success",
        message:
          result.message ||
          "Your store registration has been sent successfully. Our team will contact you.",
      });

      setFormData({
        storeName: "",
        ownerName: "",
        phone: "",
        email: "",
        storeType: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToRegistration = () => {
    document.getElementById("store-registration")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToBenefits = () => {
    document.getElementById("store-benefits")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      {/* =====================================
          1. HERO SECTION
      ===================================== */}

      <section
        id="store-partner"
        className="relative isolate overflow-hidden bg-[#f0faed]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f6fff3] via-[#f0faed] to-[#e5f4d9]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-7 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-14">
          {/* Hero content */}

          <div className="relative z-20 order-1">
            <SectionLabel>For Store Owners</SectionLabel>

            <h1 className="mt-3 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#101e28] sm:text-5xl lg:text-[52px]">
              Join EatProtein
              <span className="block">
                as a{" "}
                <span className="text-green-700">Store Partner</span>
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              List your store, reach more customers and grow your sales
              with EatProtein.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToRegistration}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:px-6 sm:text-sm"
              >
                Register Your Store
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={scrollToBenefits}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-700/50 bg-white/90 px-5 py-3 text-xs font-extrabold text-green-800 transition hover:bg-green-50 sm:px-6 sm:text-sm"
              >
                View Benefits
              </button>
            </div>

            {/* Four small hero benefits */}

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
              {[
                { icon: UsersRound, text: "Reach Nearby Customers" },
                { icon: ChartNoAxesCombined, text: "Increase Store Orders" },
                { icon: Megaphone, text: "Marketing Support" },
                { icon: Heart, text: "Be Part of a Healthier Community" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-green-800 shadow-sm sm:h-11 sm:w-11">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <p className="mt-2 max-w-28 text-[10px] font-bold leading-4 text-slate-800 sm:text-[11px]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero artwork */}

          <div className="relative order-2 min-w-0">
            <div className="absolute inset-6 rounded-full bg-green-200/50 blur-3xl" />

            <img
              src="/assets/store-partner-hero.png"
              alt="EatProtein store partner in a healthy food store"
              fetchPriority="high"
              className="relative z-10 mx-auto max-h-[420px] w-full rounded-2xl object-contain object-center sm:max-h-[470px] lg:max-h-[500px]"
            />

            {/* Decorative message cards */}

            <div className="absolute right-0 top-3 z-20 hidden w-40 flex-col gap-2 sm:flex lg:-right-1 lg:top-5">
              {[
                { icon: MapPin, text: "Get Discovered by Local Customers" },
                { icon: ShoppingCart, text: "Receive App Orders" },
                { icon: ChartNoAxesCombined, text: "Grow Your Business" },
                { icon: UsersRound, text: "Be Part of a Trusted Platform" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 rounded-xl border border-green-50 bg-white/95 p-2 shadow-md"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green-50 text-green-700">
                      <Icon size={17} />
                    </span>

                    <p className="text-[9px] font-extrabold leading-3.5 text-slate-800">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-3 left-3 z-20 rounded-xl bg-white/90 px-3 py-2 shadow-md sm:bottom-5 sm:left-4">
              <p className="text-[10px] font-extrabold text-green-800 sm:text-xs">
                Healthy Food Choices
              </p>
              <p className="text-[10px] text-slate-600 sm:text-xs">
                Start Here!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          2. WHY PARTNER WITH EATPROTEIN
      ===================================== */}

      <section
        id="store-benefits"
        className="scroll-mt-20 px-4 py-9 sm:px-6 sm:py-12 lg:px-10"
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Partner with a purpose"
            title={
              <>
                Why Partner with{" "}
                <span className="text-green-700">EatProtein?</span>
              </>
            }
            description="We work with local food stores to make healthy protein foods accessible to more people."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.025)] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5"
                >
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-xl ${item.iconStyle} transition group-hover:scale-105`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-3 text-sm font-black leading-5 text-slate-900 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          3. HOW IT WORKS
      ===================================== */}

      <section
        id="store-how-it-works"
        className="mx-3 rounded-2xl bg-[#eff9e9] px-4 py-7 sm:mx-5 sm:px-6 sm:py-9 lg:mx-6 lg:px-8"
      >
        <div className="mx-auto max-w-[1360px]">
          <SectionLabel>Simple Onboarding</SectionLabel>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            How It Works
          </h2>

          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Get your store live on EatProtein in just a few easy steps.
          </p>

          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {onboardingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative flex gap-3 sm:flex-col sm:items-start"
                >
                  <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full ${step.color} text-xs font-black text-white`}
                    >
                      {step.number}
                    </span>

                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-green-800 shadow-sm sm:h-14 sm:w-14">
                      <Icon size={24} />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900 sm:mt-3 sm:text-base">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                      {step.description}
                    </p>
                  </div>

                  {index < onboardingSteps.length - 1 && (
                    <ArrowRight
                      size={21}
                      className="absolute -right-1 top-4 hidden text-slate-400 lg:block"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          4. SUPPORT AND REQUIREMENTS
      ===================================== */}

      <section
        id="store-requirements"
        className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-12 lg:gap-6">
          {/* What you get */}

          <article className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 lg:col-span-5">
            <SectionLabel>What You Get</SectionLabel>

            <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
              Our Support to Grow Your Store
            </h2>

            <ul className="mt-4 space-y-2">
              {supportItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </article>

          {/* App mockup */}

          <div className="relative flex min-h-[240px] items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f2faed] to-[#e0f2d8] lg:col-span-3">
            <img
              src="/assets/eatprotein-app.png"
              alt="EatProtein mobile application showing food categories"
              loading="lazy"
              className="max-h-[320px] w-full object-contain object-bottom"
            />
          </div>

          {/* Who can join */}

          <article className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 lg:col-span-4">
            <SectionLabel>Who Can Join</SectionLabel>

            <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
              Store Partner Requirements
            </h2>

            <ul className="mt-4 space-y-3">
              {requirements.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-green-50 text-green-800">
                      <Icon size={18} />
                    </span>

                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      {/* =====================================
          5. COMMUNITY BANNER
      ===================================== */}

      <section
        id="store-community"
        className="relative isolate overflow-hidden bg-[#164d28]"
      >
        <img
          src="/assets/store-partner-community.png"
          alt="Healthy food store and local store partner community"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-green-950/35" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-5 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_300px] lg:px-10">
          {/* Banner message */}

          <div className="max-w-xl rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl sm:p-6">
            <SectionLabel>Together for a Healthier Tomorrow</SectionLabel>

            <h2 className="mt-2 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Grow Your Business.
              <span className="block text-green-700">
                Support a Healthier Community.
              </span>
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              Join EatProtein as a store partner and be a part of the
              movement to make high-protein, nutritious foods easily
              accessible to everyone.
            </p>

            <button
              type="button"
              onClick={scrollToRegistration}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-orange-600 sm:text-sm"
            >
              Register Your Store
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Community benefits */}

          <div className="grid gap-2 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-1">
            {communityBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl p-2"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${item.color}`}
                  >
                    <Icon size={19} />
                  </span>

                  <p className="text-xs font-extrabold text-slate-800 sm:text-sm">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          6. STORE REGISTRATION FORM
      ===================================== */}

      <section
        id="store-registration"
        className="scroll-mt-20 bg-white px-3 py-5 sm:px-5 sm:py-7 lg:px-6"
      >
        <div className="mx-auto grid max-w-[1400px] gap-6 rounded-2xl border border-green-100 bg-[#f0f9e9] p-4 sm:p-6 lg:grid-cols-[0.8fr_1.8fr] lg:gap-8 lg:p-7">
          {/* Form introduction */}

          <div className="flex flex-col items-start justify-center">
            <SectionLabel>Get Started Today</SectionLabel>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Register Your Store
            </h2>

            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-600 sm:text-sm">
              Share your details and our team will get in touch with you
              to complete the onboarding process.
            </p>

            <div className="mt-5 hidden items-center gap-2 text-sm font-bold text-green-800 lg:flex">
              <ShieldCheck size={21} />
              Simple and secure registration
            </div>
          </div>

          {/* Registration form */}

          <div className="min-w-0 rounded-xl bg-white p-4 shadow-sm sm:p-5">
            {formStatus.type === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[300px] flex-col items-center justify-center px-4 py-8 text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700">
                  <CheckCircle2 size={35} />
                </span>

                <h3 className="mt-4 text-xl font-black text-green-800">
                  Registration Submitted!
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  {formStatus.message}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setFormStatus({ type: "", message: "" })
                  }
                  className="mt-5 rounded-full bg-green-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
                >
                  Register Another Store
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h3 className="text-lg font-black text-slate-900">
                    Store Registration
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Fields marked with * are required.
                  </p>
                </div>

                {formStatus.type === "error" && (
                  <div
                    role="alert"
                    className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-xs leading-5 text-red-700 sm:text-sm"
                  >
                    {formStatus.message}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                >
                  <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Store name */}

                    <div>
                      <label
                        htmlFor="storeName"
                        className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                      >
                        Store Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="storeName"
                        name="storeName"
                        type="text"
                        value={formData.storeName}
                        onChange={handleChange}
                        placeholder="Enter your store name"
                        autoComplete="organization"
                        maxLength={150}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                      />
                    </div>

                    {/* Owner name */}

                    <div>
                      <label
                        htmlFor="ownerName"
                        className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                      >
                        Owner Name <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="ownerName"
                        name="ownerName"
                        type="text"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Enter owner name"
                        autoComplete="name"
                        maxLength={100}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                      />
                    </div>

                    {/* Phone */}

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        title="Enter a valid 10-digit Indian mobile number"
                        maxLength={10}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                      />
                    </div>

                    {/* Email */}

                    <div className="sm:col-span-2 lg:col-span-2">
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        maxLength={254}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                      />
                    </div>

                    {/* Store type */}

                    <div>
                      <label
                        htmlFor="storeType"
                        className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                      >
                        Store Type <span className="text-red-600">*</span>
                      </label>

                      <select
                        id="storeType"
                        name="storeType"
                        value={formData.storeType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs text-slate-700 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                      >
                        <option value="" disabled>
                          Select store type
                        </option>
                        <option value="Grocery Store">Grocery Store</option>
                        <option value="Supermarket">Supermarket</option>
                        <option value="Organic Food Store">
                          Organic Food Store
                        </option>
                        <option value="Meat Shop">Meat Shop</option>
                        <option value="Dairy Store">Dairy Store</option>
                        <option value="Health Food Store">
                          Health Food Store
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[11px] font-extrabold text-slate-800 sm:text-xs"
                    >
                      Message (Optional)
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your store or products"
                      rows={3}
                      maxLength={1000}
                      className="min-h-20 w-full resize-y rounded-lg border border-slate-200 bg-[#fbfcfd] px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100 sm:text-sm"
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-700 to-green-800 px-5 py-3 text-xs font-extrabold text-white shadow-sm transition hover:from-green-800 hover:to-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle
                          size={17}
                          className="animate-spin"
                        />
                        Submitting Registration...
                      </>
                    ) : (
                      <>
                        Submit Registration
                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] leading-5 text-slate-500 sm:text-xs">
                    By submitting, you agree to be contacted about your
                    EatProtein store partnership registration.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
