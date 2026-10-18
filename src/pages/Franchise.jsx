
import { useState } from "react";
import {
  ArrowRight,
  Download,
  MapPin,
  Store,
  Headset,
  ChartNoAxesCombined,
  Smartphone,
  Users,
  Handshake,
  FileText,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Leaf,
  ShoppingBag,
  TrendingUp,
  LoaderCircle,
  Mail,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Growing Demand",
    description:
      "More people are looking for healthy, protein-rich food options in their area.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Store,
    title: "Partner with Local Stores",
    description:
      "Work with existing stores in your area. No need to open your own store.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Earn from Order Revenue",
    description:
      "Get an agreed percentage from eligible orders placed through EatProtein in your area.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Headset,
    title: "Full Support",
    description:
      "Get training, onboarding, marketing support and dedicated assistance from our team.",
    color: "bg-rose-100 text-rose-600",
  },
];

const advantages = [
  {
    icon: MapPin,
    title: "Area Based Opportunity",
  },
  {
    icon: Store,
    title: "No Own Store Required",
  },
  {
    icon: Headset,
    title: "Complete Support",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Growing Market",
  },
];

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Apply for Partnership",
    description: "Fill out the inquiry form and share your details.",
    color: "bg-green-700",
  },
  {
    number: "2",
    icon: MapPin,
    title: "Area Evaluation",
    description: "We review and discuss your preferred area.",
    color: "bg-orange-600",
  },
  {
    number: "3",
    icon: Handshake,
    title: "Agreement & Onboarding",
    description: "Sign the partnership agreement and get trained.",
    color: "bg-blue-600",
  },
  {
    number: "4",
    icon: Store,
    title: "Connect Local Stores",
    description: "Help us onboard stores in your area.",
    color: "bg-green-700",
  },
  {
    number: "5",
    icon: ChartNoAxesCombined,
    title: "Drive Orders & Earn",
    description:
      "Customers place orders via the app and you earn as per the agreed model.",
    color: "bg-orange-600",
  },
];

const responsibilities = [
  "Manage your assigned city/area.",
  "Onboard and coordinate with local food stores.",
  "Promote EatProtein to customers in your area.",
  "Work with our team on marketing activities.",
  "Ensure a great customer experience.",
];

const support = [
  {
    icon: MapPin,
    text: "Area allocation based on mutual discussion.",
    color: "text-green-700 bg-green-50",
  },
  {
    icon: Smartphone,
    text: "App platform and technology support.",
    color: "text-green-700 bg-green-50",
  },
  {
    icon: GraduationCap,
    text: "Training and onboarding support.",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: Users,
    text: "Ongoing business support from our team.",
    color: "text-green-700 bg-green-50",
  },
  {
    icon: Megaphone,
    text: "Marketing materials and guidance.",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: ChartNoAxesCombined,
    text: "Growth opportunities as your area scales.",
    color: "text-orange-600 bg-orange-50",
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  investment: "",
  interest: "",
};

function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#e4f5df] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#176b35] sm:text-xs">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-7 text-center sm:mb-9">
      {eyebrow && (
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 sm:text-xs">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-black leading-tight tracking-tight text-[#10251c] sm:text-3xl lg:text-[34px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-500 sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5">
      <div
        className={`mb-3 grid h-10 w-10 place-items-center rounded-xl ${item.color}`}
      >
        <Icon size={23} strokeWidth={2.3} />
      </div>

      <h3 className="text-sm font-extrabold text-[#14251c] sm:text-base">
        {item.title}
      </h3>

      <p className="mt-2 text-xs leading-[1.65] text-gray-500 sm:text-[13px]">
        {item.description}
      </p>
    </article>
  );
}

export default function Franchise() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/franchise-inquiry", {
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
            "We couldn't send your enquiry. Please try again.",
        );
      }

      setStatus("success");
      setMessage(
        result.message ||
          "Your enquiry has been sent successfully. Our team will contact you.",
      );
      setFormData({ ...initialForm });
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message ||
          "Unable to connect to the server. Please try again later.",
      );
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#17231d]">
      {/* HERO */}
      <section
        id="franchise"
        className="relative overflow-hidden bg-gradient-to-r from-[#f0fae9] via-[#f8fcf4] to-[#edf8e8]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-14">
          <div className="relative z-10">
            <SectionTag>Business Opportunity</SectionTag>

            <h1 className="mt-4 max-w-xl text-[34px] font-black leading-[1.08] tracking-tight text-[#10251c] sm:text-4xl md:text-5xl lg:text-[48px]">
              Grow a Healthier Community with{" "}
              <span className="text-[#087b3c]">EatProtein</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
              Be a part of a growing movement to make healthy protein foods
              accessible to more people. Manage your area, connect local
              stores, and earn through order revenue.
            </p>

            <div className="mt-5 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4510b] px-5 py-3 text-xs font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-orange-700 sm:text-sm"
              >
                Send Franchise Inquiry
                <ArrowRight size={16} />
              </a>

              <a
                href="/assets/eatprotein-franchise-brochure.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-300 bg-white/90 px-5 py-3 text-xs font-extrabold text-green-800 transition hover:bg-green-50 sm:text-sm"
              >
                <Download size={16} />
                Download Franchise Brochure
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center sm:items-start sm:text-left"
                  >
                    <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-white text-[#087b3c] shadow-sm">
                      <Icon size={22} />
                    </div>
                    <p className="max-w-24 text-[10px] font-bold leading-4 text-gray-700 sm:text-[11px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute inset-8 rounded-full bg-green-200/40 blur-3xl" />

            <img
              src="/assets/franchise-hero-reference.jpg"
              alt="EatProtein area partnership and local food store illustration"
              className="relative z-10 mx-auto aspect-[3/2] w-full rounded-2xl object-cover object-center sm:rounded-3xl"
            />

            <div className="absolute bottom-3 left-2 z-20 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-lg sm:bottom-5 sm:left-3 sm:px-4 sm:py-3">
              <p className="text-[10px] font-semibold text-gray-500">
                Your Area
              </p>
              <p className="text-xs font-black text-green-800 sm:text-sm">
                Your Business Opportunity
              </p>
            </div>

            <div className="absolute right-2 top-3 z-20 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-lg sm:right-3 sm:top-5 sm:px-4 sm:py-3">
              <p className="text-[10px] font-bold text-green-800 sm:text-xs">
                Local Stores
              </p>
              <p className="text-[10px] text-gray-500">
                In Your Area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BECOME A PARTNER */}
      <section id="why-us" className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partner with a purpose"
            title={
              <>
                Why Become an <span className="text-green-700">EatProtein</span>{" "}
                Area Partner?
              </>
            }
            description="Help people access healthy protein foods while building a rewarding business opportunity."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {benefits.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[26px] bg-gradient-to-r from-[#eef9e8] to-[#f3fbef] px-4 py-6 sm:px-7 sm:py-8">
          <SectionTag>How It Works</SectionTag>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#10251c] sm:text-3xl">
            A Simple and Transparent Model
          </h2>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            From application to earnings — a clear and easy process.
          </p>

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${step.color} text-xs font-black text-white`}
                    >
                      {step.number}
                    </span>

                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-green-700 shadow-sm">
                      <Icon size={24} />
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight
                        size={20}
                        className="ml-auto hidden text-gray-400 lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-3 text-sm font-extrabold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-gray-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES AND SUPPORT */}
      <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionTag>Your Role as an Area Partner</SectionTag>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#10251c] sm:text-3xl">
              What You Will Do
            </h2>

            <ul className="mt-5 space-y-3">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs leading-5 text-gray-600 sm:text-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 fill-green-700 text-white"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <SectionTag>Our Support to You</SectionTag>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#10251c] sm:text-3xl">
              What You Get from EatProtein
            </h2>

            <div className="mt-5 grid gap-x-4 gap-y-4 sm:grid-cols-2">
              {support.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.color}`}
                    >
                      <Icon size={21} />
                    </div>

                    <p className="text-xs leading-5 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT BANNER */}
      <section className="relative overflow-hidden bg-[#eef9e8]">
        <img
          src="/assets/franchise-community-reference.jpg"
          alt="Healthy food choices, EatProtein app and a happy family"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative mx-auto flex min-h-[190px] max-w-7xl items-center px-5 py-7 sm:min-h-[220px] sm:px-8 lg:min-h-[240px]">
          <div className="max-w-[44%] rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:max-w-[310px] sm:p-5">
            <SectionTag>Our Impact</SectionTag>

            <h2 className="mt-2 text-base font-black leading-tight text-[#10251c] sm:text-2xl">
              More Healthy Communities With You
            </h2>

            <ul className="mt-2 space-y-1 text-[9px] text-gray-700 sm:text-xs">
              {[
                "Better food choices",
                "Increased protein awareness",
                "Healthier families",
                "Stronger local businesses",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={13}
                    className="shrink-0 fill-green-700 text-white"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FRANCHISE ENQUIRY */}
      <section id="contact" className="bg-white px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[24px] bg-gradient-to-r from-[#edf8e7] to-[#f6fbf2] p-4 sm:p-6 lg:p-8">
          <div className="grid items-start gap-6 lg:grid-cols-[0.75fr_1.55fr] lg:gap-8">
            <div className="lg:sticky lg:top-8">
              <SectionTag>Get Started</SectionTag>

              <h2 className="mt-3 text-3xl font-black leading-[1.08] tracking-tight text-[#10251c] sm:text-4xl lg:text-[42px]">
                Send Your{" "}
                <span className="text-green-700">Franchise Inquiry</span>
              </h2>

              <p className="mt-3 max-w-sm text-xs leading-6 text-gray-600 sm:text-sm">
                Take the first step towards building a healthier community
                with EatProtein. Our team will get in touch with you shortly.
              </p>

              <div className="mt-5 space-y-3 text-xs text-gray-600">
                <a
                  href="tel:+919440701380"
                  className="flex items-center gap-2 hover:text-green-800"
                >
                  <Phone size={16} className="text-green-700" />
                  +91 9440701380
                </a>

                <a
                  href="mailto:support@eatprotein.in"
                  className="flex items-center gap-2 hover:text-green-800"
                >
                  <Mail size={16} className="text-green-700" />
                  support@eatprotein.in
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm sm:p-6">
              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[300px] flex-col items-center justify-center text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="mt-4 text-xl font-black text-green-800">
                    Thank You for Your Interest!
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
                    {message}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setMessage("");
                    }}
                    className="mt-5 rounded-full border border-green-200 px-5 py-2 text-sm font-bold text-green-800 transition hover:bg-green-50"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-black text-[#153b25] sm:text-xl">
                    Franchise Inquiry
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Share your details and our team will contact you.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          autoComplete="name"
                          maxLength={100}
                          required
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          autoComplete="tel"
                          pattern="[6-9][0-9]{9}"
                          title="Enter a valid 10-digit Indian mobile number"
                          maxLength={10}
                          required
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Email Address <span className="text-red-500">*</span>
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
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Preferred City / Area{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Select city / area"
                          autoComplete="address-level2"
                          maxLength={150}
                          required
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="investment"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Approximate Investment Budget (Optional)
                        </label>
                        <select
                          id="investment"
                          name="investment"
                          value={formData.investment}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs text-gray-600 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        >
                          <option value="">Select your budget range</option>
                          <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                          <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                          <option value="₹10–20 Lakhs">₹10–20 Lakhs</option>
                          <option value="Above ₹20 Lakhs">Above ₹20 Lakhs</option>
                          <option value="Need guidance">Need guidance</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="mb-1.5 block text-[11px] font-bold text-gray-700"
                        >
                          Tell Us About Your Interest (Optional)
                        </label>
                        <input
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          placeholder="e.g. I want to know more about area partnership"
                          maxLength={1000}
                          className="w-full rounded-lg border border-gray-200 bg-[#fbfcfb] px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-700"
                      >
                        {message}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#087b3c] to-[#006b32] px-5 py-3.5 text-xs font-extrabold text-white shadow-md transition hover:from-green-800 hover:to-green-900 disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
                    >
                      {status === "sending" ? (
                        <>
                          <LoaderCircle size={17} className="animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ArrowRight size={17} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] leading-5 text-gray-400">
                      Your details will be submitted securely for follow-up
                      about your EatProtein franchise enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
