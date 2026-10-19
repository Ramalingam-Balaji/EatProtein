// import {
//   ArrowRight,
//   BarChart3,
//   Heart,
//   Leaf,
// } from "lucide-react";

// import {
//   LuUserRound,
//   LuBaby,
// } from "react-icons/lu";

// import { GiWeightLiftingUp } from "react-icons/gi";
// import { MdPregnantWoman } from "react-icons/md";
// import { FaPersonBreastfeeding } from "react-icons/fa6";
// import {
//   FaChild,
//   FaFemale,
// } from "react-icons/fa";

// import { useState } from "react";

// import { ACTIVITY_LEVELS, PROFILES } from "../data/homeData";
// import SectionTag from "./SectionTag";

// // --------------------------------
// // PROFILE ICONS - REACT ICONS
// // --------------------------------
// const PROFILE_ICONS = {
//   Adult: LuUserRound,
//   Kid: LuBaby,
//   "Pregnant Woman": MdPregnantWoman,
//   "Feeding Mother": FaPersonBreastfeeding,
//   Bodybuilder: GiWeightLiftingUp,
// };

// // --------------------------------
// // KID GENDER ICONS - REACT ICONS
// // --------------------------------
// const GENDER_ICONS = {
//   Boy: FaChild,
//   Girl: FaFemale,
// };

// export default function ProteinCalculator() {
//   // --------------------------------
//   // FORM STATES
//   // --------------------------------
//   const [profile, setProfile] = useState("Adult");
//   const [age, setAge] = useState(25);

//   const [heightUnit, setHeightUnit] = useState("cm");
//   const [height, setHeight] = useState(170);

//   const [weightUnit, setWeightUnit] = useState("kg");
//   const [weight, setWeight] = useState(20);

//   const [gender, setGender] = useState("Boy");

//   const [activity] = useState(
//     ACTIVITY_LEVELS?.[2]?.label ||
//       ACTIVITY_LEVELS?.[0]?.label ||
//       ""
//   );

//   // --------------------------------
//   // RESULT STATE
//   // --------------------------------
//   const [result, setResult] = useState({
//     bmi: "--",
//     protein: "--",
//     status: "",
//     calculated: false,
//   });

//   // --------------------------------
//   // HELPERS
//   // --------------------------------
//   const showValidationMessage = (message) => {
//     alert(message);
//   };

//   const getProfileAgeMessage = (selectedProfile, ageValue) => {
//     const adultProfiles = [
//       "Adult",
//       "Pregnant Woman",
//       "Feeding Mother",
//       "Bodybuilder",
//     ];

//     if (adultProfiles.includes(selectedProfile) && ageValue < 20) {
//       return `For the ${selectedProfile} profile, age must be 20 years or above.`;
//     }

//     if (selectedProfile === "Kid" && ageValue > 19) {
//       return "For the Kid profile, age must be 19 years or below.";
//     }

//     return "";
//   };

//   const getHeightCm = () => {
//     const value = Number(height);

//     if (heightUnit === "cm") {
//       return value;
//     }

//     return value * 30.48;
//   };

//   const getWeightKg = () => {
//     const value = Number(weight);

//     if (weightUnit === "kg") {
//       return value;
//     }

//     return value * 0.45359237;
//   };

//   const validateForm = () => {
//     const ageValue = Number(age);
//     const heightValue = Number(height);
//     const weightValue = Number(weight);

//     if (
//       !Number.isFinite(ageValue) ||
//       ageValue < 0 ||
//       ageValue > 100
//     ) {
//       showValidationMessage("Please select a valid age.");
//       return false;
//     }

//     const ageMessage = getProfileAgeMessage(profile, ageValue);

//     if (ageMessage) {
//       showValidationMessage(ageMessage);
//       return false;
//     }

//     if (!Number.isFinite(heightValue) || heightValue <= 0) {
//       showValidationMessage("Please enter a valid height.");
//       return false;
//     }

//     if (
//       heightUnit === "cm" &&
//       (heightValue < 50 || heightValue > 249)
//     ) {
//       showValidationMessage("Height must be between 50 and 249 cm.");
//       return false;
//     }

//     if (
//       heightUnit === "ft" &&
//       (heightValue < 2 || heightValue > 11.9)
//     ) {
//       showValidationMessage("Height must be between 2 and 11.9 ft.");
//       return false;
//     }

//     if (!Number.isFinite(weightValue) || weightValue <= 0) {
//       showValidationMessage("Please enter a valid weight.");
//       return false;
//     }

//     if (
//       weightUnit === "kg" &&
//       (weightValue < 10 || weightValue > 209)
//     ) {
//       showValidationMessage("Weight must be between 10 and 209 kg.");
//       return false;
//     }

//     if (
//       weightUnit === "lb" &&
//       (weightValue < 20 || weightValue > 419)
//     ) {
//       showValidationMessage("Weight must be between 20 and 419 lb.");
//       return false;
//     }

//     return true;
//   };

//   // --------------------------------
//   // CALCULATE RESULTS
//   // --------------------------------
//   const handleCalculate = () => {
//     if (!validateForm()) return;

//     const heightCm = getHeightCm();
//     const weightKg = getWeightKg();

//     if (!heightCm || !weightKg) {
//       showValidationMessage("Please enter valid height and weight.");
//       return;
//     }

//     const heightM = heightCm / 100;
//     const bmi = weightKg / (heightM * heightM);

//     let status = "";

//     if (bmi < 18.5) {
//       status = "Underweight";
//     } else if (bmi < 25) {
//       status = "Normal";
//     } else if (bmi < 30) {
//       status = "Overweight";
//     } else {
//       status = "High";
//     }

//     const activityData = ACTIVITY_LEVELS?.find(
//       (item) => item.label === activity
//     );

//     const profileProteinFactors = {
//       Adult: 0.8,
//       Kid: 2,
//       "Pregnant Woman": 1.5,
//       "Feeding Mother": 1.5,
//       Bodybuilder: 1.7,
//     };

//     const profileFactor = profileProteinFactors[profile] ?? 1;

//     const protein = Math.max(
//       1,
//       Math.round(weightKg * profileFactor)
//     );

//     setResult({
//       bmi: bmi.toFixed(1),
//       protein,
//       status,
//       calculated: true,
//     });
//   };

//   // --------------------------------
//   // PROFILE CHANGE
//   // --------------------------------
//   const handleProfileChange = (item) => {
//     setProfile(item);

//     setResult({
//       bmi: "--",
//       protein: "--",
//       status: "",
//       calculated: false,
//     });
//   };

//   // --------------------------------
//   // HEIGHT UNIT CHANGE
//   // --------------------------------
//   const handleHeightUnitChange = () => {
//     if (heightUnit === "cm") {
//       const feetValue = Number(height) / 30.48;

//       setHeight(Number(feetValue.toFixed(1)));
//       setHeightUnit("ft");
//     } else {
//       const cmValue = Number(height) * 30.48;

//       setHeight(Math.round(cmValue));
//       setHeightUnit("cm");
//     }

//     setResult((prev) => ({
//       ...prev,
//       calculated: false,
//     }));
//   };

//   // --------------------------------
//   // WEIGHT UNIT CHANGE
//   // --------------------------------
//   const handleWeightUnitChange = () => {
//     if (weightUnit === "kg") {
//       const lbValue = Number(weight) / 0.45359237;

//       setWeight(Math.round(lbValue));
//       setWeightUnit("lb");
//     } else {
//       const kgValue = Number(weight) * 0.45359237;

//       setWeight(Math.round(kgValue));
//       setWeightUnit("kg");
//     }

//     setResult((prev) => ({
//       ...prev,
//       calculated: false,
//     }));
//   };

//   return (
//     <section
//       id="calculator"
//       className="scroll-mt-20 bg-white px-3 py-6 sm:px-5 sm:py-8"
//     >
//       <div
//         className="
//           mx-auto w-full max-w-[1450px] rounded-2xl
//           bg-gradient-to-r from-[#f0faea] to-[#edf9e9]
//           p-4 shadow-soft sm:p-6 lg:p-8
//         "
//       >
//         <div
//           className="
//             grid grid-cols-1 items-center gap-6
//             lg:grid-cols-[39%_61%] lg:gap-7
//           "
//         >
//           {/* LEFT CONTENT */}
//           <div className="min-w-0">
//             <SectionTag>
//               Personalized Nutrition Insights
//             </SectionTag>

//             <h2
//               className="
//                 mt-4 text-[27px] font-black leading-[1.08]
//                 tracking-tight text-protein-dark sm:text-[31px]
//               "
//             >
//               Know Your Protein Need
//               <br />
//               &amp; BMI in Seconds
//             </h2>

//             <p
//               className="
//                 mt-3 max-w-[430px] text-[15px]
//                 leading-5 text-slate-600 sm:text-sm
//               "
//             >
//               Get personalized results based on your age,
//               lifestyle and goals. One simple calculator
//               for everyone.
//             </p>

//             <div
//               className="
//                 mt-5 grid grid-cols-4 gap-1
//                 sm:mt-6 sm:gap-2
//               "
//             >
//               {[
//                 [LuUserRound, "Understand", "Your Body"],
//                 [Leaf, "Know Protein", "Requirement"],
//                 [BarChart3, "Get Your BMI", ""],
//                 [Heart, "Make Better", "Food Choices"],
//               ].map(([Icon, title, subtitle]) => (
//                 <div key={title} className="min-w-0 text-center">
//                   <div
//                     className="
//                       mx-auto grid h-9 w-9 place-items-center
//                       rounded-full bg-white text-protein-green
//                       shadow-sm sm:h-11 sm:w-11
//                     "
//                   >
//                     <Icon
//                       size={22}
//                       className="sm:h-[21px] sm:w-[21px]"
//                     />
//                   </div>

//                   <p
//                     className="
//                       mt-2 text-[12px] semibold
//                       leading-3 text-slate-700
//                     "
//                   >
//                     {title}
//                   </p>

//                   {subtitle && (
//                     <p
//                       className="
//                         text-[10px] semibold leading-3
//                         text-slate-700 sm:text-[12px]
//                       "
//                     >
//                       {subtitle}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CALCULATOR CARD */}
//           <div
//             className="
//               mx-auto w-full max-w-[560px]
//               rounded-2xl bg-white p-2.5
//               shadow-card sm:p-3
//             "
//           >
//             {/* PROFILE TABS */}
//             <div className="flex items-start justify-center gap-2 pb-3 sm:gap-3">
//               {PROFILES.map((item) => {
//                 const Icon = PROFILE_ICONS[item] || LuUserRound;
//                 const selected = profile === item;

//                 return (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => handleProfileChange(item)}
//                     aria-label={item}
//                     aria-pressed={selected}
//                     className="
//                       group flex min-w-0 flex-1
//                       flex-col items-center gap-1.5
//                     "
//                   >
//                     <span
//                       className={`
//                         grid h-11 w-11 place-items-center
//                         rounded-xl border transition-all duration-200
//                         sm:h-12 sm:w-12
//                         ${
//                           selected
//                             ? "border-protein-green bg-protein-green text-white shadow-md"
//                             : "border-slate-200 bg-white text-protein-green hover:border-protein-green hover:bg-green-50"
//                         }
//                       `}
//                     >
//                       <Icon size={23} />
//                     </span>

//                     <span
//                       className={`
//                         max-w-full text-center text-[9px]
//                         font-semibold leading-tight sm:text-[12px]
//                         ${
//                           selected
//                             ? "text-protein-dark"
//                             : "text-slate-600"
//                         }
//                       `}
//                     >
//                       {item}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* KID GENDER */}
//             {profile === "Kid" && (
//               <div className="mt-3">
//                 <p className="mb-3 text-sm font-bold text-slate-800">
//                   Select Gender
//                 </p>

//                 <div className="grid grid-cols-2 gap-3">
//                   {["Boy", "Girl"].map((item) => {
//                     const selected = gender === item;
//                     const Icon = GENDER_ICONS[item];

//                     return (
//                       <button
//                         key={item}
//                         type="button"
//                         onClick={() => {
//                           setGender(item);

//                           setResult((prev) => ({
//                             ...prev,
//                             calculated: false,
//                           }));
//                         }}
//                         aria-pressed={selected}
//                         className="
//                           flex flex-col items-center gap-2
//                           rounded-xl border border-slate-100
//                           bg-white p-3 transition-all
//                           hover:border-green-300 hover:bg-green-50
//                         "
//                       >
//                         <span
//                           className={`
//                             grid h-10 w-10 place-items-center
//                             rounded-full border transition-all duration-200
//                             ${
//                               selected
//                                 ? "border-protein-green bg-green-50 text-protein-green shadow-sm"
//                                 : "border-slate-200 bg-white text-protein-green"
//                             }
//                           `}
//                         >
//                           <Icon size={24} />
//                         </span>

//                         <span
//                           className={`
//                             text-sm font-bold
//                             ${
//                               selected
//                                 ? "text-protein-dark"
//                                 : "text-slate-600"
//                             }
//                           `}
//                         >
//                           {item}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* AGE */}
//             <div className="mt-2 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
//               <label className="block text-xs font-medium text-slate-500">
//                 Age (YRS)

//                 <select
//                   value={age}
//                   onChange={(e) => {
//                     setAge(Number(e.target.value));

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full rounded-lg
//                     border-0 bg-slate-100 px-2.5
//                     text-sm font-medium text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 >
//                   {Array.from({ length: 101 }, (_, index) => index).map(
//                     (value) => (
//                       <option key={value} value={value}>
//                         {value} years
//                       </option>
//                     )
//                   )}
//                 </select>
//               </label>
//             </div>

//             {/* HEIGHT, WEIGHT, BMI AND DAILY PROTEIN */}
//             <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
//               {/* HEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
//                 <div className="flex min-h-6 items-center">
//                   <span className="text-xs font-semibold text-slate-600">
//                     Height
//                   </span>
//                 </div>

//                 <input
//                   type="number"
//                   min={heightUnit === "cm" ? 50 : 2}
//                   max={heightUnit === "cm" ? 249 : 11.9}
//                   step={heightUnit === "cm" ? 1 : 0.1}
//                   value={height}
//                   onChange={(e) => {
//                     setHeight(e.target.value);

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full min-w-0 rounded-lg
//                     bg-slate-100 px-2 text-sm text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (heightUnit !== "cm") {
//                         handleHeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         heightUnit === "cm"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     CM
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (heightUnit !== "ft") {
//                         handleHeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         heightUnit === "ft"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     FT
//                   </button>
//                 </div>
//               </div>

//               {/* WEIGHT */}
//               <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2 shadow-sm">
//                 <div className="flex min-h-6 items-center">
//                   <span className="text-xs font-semibold text-slate-600">
//                     Weight
//                   </span>
//                 </div>

//                 <input
//                   type="number"
//                   min={weightUnit === "kg" ? 10 : 20}
//                   max={weightUnit === "kg" ? 209 : 419}
//                   step="1"
//                   value={weight}
//                   onChange={(e) => {
//                     setWeight(e.target.value);

//                     setResult((prev) => ({
//                       ...prev,
//                       calculated: false,
//                     }));
//                   }}
//                   className="
//                     mt-1.5 h-9 w-full min-w-0 rounded-lg
//                     bg-slate-100 px-2 text-sm text-slate-800
//                     outline-none focus:ring-2 focus:ring-green-400
//                   "
//                 />

//                 <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (weightUnit !== "kg") {
//                         handleWeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         weightUnit === "kg"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     KG
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       if (weightUnit !== "lb") {
//                         handleWeightUnitChange();
//                       }
//                     }}
//                     className={`
//                       flex-1 rounded-md py-1.5 text-xs font-bold
//                       ${
//                         weightUnit === "lb"
//                           ? "bg-white text-protein-green shadow-sm"
//                           : "text-slate-500"
//                       }
//                     `}
//                   >
//                     LB
//                   </button>
//                 </div>
//               </div>

//               {/* BMI */}
//               <div className="flex min-h-[125px] min-w-0 flex-col items-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <div className="flex min-h-6 items-center justify-center text-blue-500">
//                   <BarChart3 size={19} />
//                 </div>

//                 <p className="mt-1.5 text-xs font-semibold text-slate-600">
//                   Your BMI
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-blue-600">
//                   {result.bmi}
//                 </p>

//                 <span
//                   className={`
//                     mt-1.5 rounded-full px-2 py-1 text-[10px] font-bold
//                     ${
//                       result.calculated
//                         ? "bg-blue-50 text-blue-600"
//                         : "bg-slate-100 text-slate-400"
//                     }
//                   `}
//                 >
//                   {result.calculated ? result.status : "--"}
//                 </span>
//               </div>

//               {/* DAILY PROTEIN */}
//               <div className="flex min-h-[125px] min-w-0 flex-col items-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
//                 <div className="flex min-h-6 items-center justify-center text-protein-green">
//                   <Heart size={19} />
//                 </div>

//                 <p className="mt-1.5 text-xs font-semibold text-slate-600">
//                   Daily Protein
//                 </p>

//                 <p className="mt-2 text-2xl font-black text-protein-green">
//                   {result.calculated ? `${result.protein}g` : "--"}
//                 </p>

//                 <p className="mt-1 text-[11px] leading-3 text-slate-400">
//                   Recommended daily need
//                 </p>
//               </div>
//             </div>

//             {/* CALCULATE BUTTON */}
//             <button
//               type="button"
//               onClick={handleCalculate}
//               className="
//                 mt-3 flex h-10 w-full items-center
//                 justify-center gap-2 rounded-xl
//                 bg-protein-green text-sm font-bold text-white
//                 shadow-sm transition-all duration-200
//                 hover:bg-green-800 hover:shadow-md
//                 active:scale-[0.99]
//               "
//             >
//               Calculate
//               <ArrowRight size={16} />
//             </button>

//             <p className="mt-1.5 text-center text-[12px] leading-3 text-slate-400">
//               Results are estimates. Consult a professional for medical advice.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Heart,
  Leaf,
  UserRound,
} from "lucide-react";

import {
  LuUserRound,
  LuBaby,
} from "react-icons/lu";

import { GiWeightLiftingUp } from "react-icons/gi";
import { MdPregnantWoman } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import {
  FaChild,
  FaFemale,
} from "react-icons/fa";

import SectionTag from "./SectionTag";

const PROFILES = [
  "Adult",
  "Kid",
  "Pregnant Woman",
  "Feeding Mother",
  "Bodybuilder",
];

const PROFILE_ICONS = {
  Adult: LuUserRound,
  Kid: LuBaby,
  "Pregnant Woman": MdPregnantWoman,
  "Feeding Mother": FaPersonBreastfeeding,
  Bodybuilder: GiWeightLiftingUp,
};

const PROFILE_PROTEIN_FACTORS = {
  Adult: 0.8,
  Kid: 2,
  "Pregnant Woman": 1.5,
  "Feeding Mother": 1.5,
  Bodybuilder: 1.7,
};

// Gender icons — Boy uses FaChild, Girl uses FaFemale (react-icons/fa)
const GENDER_ICONS = {
  Boy: FaChild,
  Girl: FaFemale,
};

// Age ranges per profile
// Kids: 1 to 19, all others: 20 to 100
const getAgeRange = (selectedProfile) => {
  if (selectedProfile === "Kid") {
    return { min: 1, max: 19, defaultAge: 10 };
  }
  return { min: 20, max: 100, defaultAge: 25 };
};

const BENEFITS = [
  { Icon: UserRound, title: "Understand", subtitle: "Your Body" },
  { Icon: Leaf, title: "Know Protein", subtitle: "Requirement" },
  { Icon: BarChart3, title: "Get Your BMI", subtitle: "" },
  { Icon: Heart, title: "Make Better", subtitle: "Food Choices" },
];

const initialResult = {
  bmi: "--",
  protein: "--",
  status: "",
  calculated: false,
};

export default function BMISection({ showToast }) {
  const [profile, setProfile] = useState("Adult");
  const [age, setAge] = useState(25);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [height, setHeight] = useState(170);
  const [weightUnit, setWeightUnit] = useState("kg");
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("Boy");
  const [result, setResult] = useState(initialResult);

  const notify = (message) => {
    if (typeof showToast === "function") {
      showToast(message);
    } else {
      window.alert(message);
    }
  };

  const invalidateResult = () => {
    setResult(initialResult);
  };

  const handleProfileChange = (nextProfile) => {
    setProfile(nextProfile);

    // Reset age to a valid value inside the new profile's age range
    const { defaultAge } = getAgeRange(nextProfile);
    setAge(defaultAge);

    invalidateResult();
  };

  const getHeightCm = () => {
    const value = Number(height);
    return heightUnit === "cm" ? value : value * 30.48;
  };

  const getWeightKg = () => {
    const value = Number(weight);
    return weightUnit === "kg" ? value : value * 0.45359237;
  };

  const validateForm = () => {
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    const { min: ageMin, max: ageMax } = getAgeRange(profile);

    if (
      !Number.isFinite(ageValue) ||
      ageValue < ageMin ||
      ageValue > ageMax
    ) {
      notify(
        `For the ${profile} profile, age must be between ${ageMin} and ${ageMax} years.`
      );
      return false;
    }

    if (!Number.isFinite(heightValue) || heightValue <= 0) {
      notify("Please enter a valid height.");
      return false;
    }

    if (
      heightUnit === "cm" &&
      (heightValue < 50 || heightValue > 249)
    ) {
      notify("Height must be between 50 and 249 cm.");
      return false;
    }

    if (
      heightUnit === "ft" &&
      (heightValue < 2 || heightValue > 11.9)
    ) {
      notify("Height must be between 2 and 11.9 ft.");
      return false;
    }

    if (!Number.isFinite(weightValue) || weightValue <= 0) {
      notify("Please enter a valid weight.");
      return false;
    }

    if (
      weightUnit === "kg" &&
      (weightValue < 10 || weightValue > 209)
    ) {
      notify("Weight must be between 10 and 209 kg.");
      return false;
    }

    if (
      weightUnit === "lb" &&
      (weightValue < 20 || weightValue > 419)
    ) {
      notify("Weight must be between 20 and 419 lb.");
      return false;
    }

    return true;
  };

  const handleCalculate = () => {
    if (!validateForm()) return;

    const heightCm = getHeightCm();
    const weightKg = getWeightKg();

    if (
      !Number.isFinite(heightCm) ||
      !Number.isFinite(weightKg) ||
      heightCm <= 0 ||
      weightKg <= 0
    ) {
      notify("Please enter valid height and weight.");
      return;
    }

    // BMI = weight in kg / (height in metres)^2
    const heightM = heightCm / 100;
    const bmi = weightKg / heightM ** 2;

    let status = "";

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 25) {
      status = "Normal";
    } else if (bmi < 30) {
      status = "Overweight";
    } else {
      status = "High";
    }

    // Daily protein = weight in kg × profile protein factor
    const profileFactor = PROFILE_PROTEIN_FACTORS[profile] ?? 1;
    const protein = Math.max(1, Math.round(weightKg * profileFactor));

    setResult({
      bmi: bmi.toFixed(1),
      protein,
      status,
      calculated: true,
    });

    notify(
      `BMI: ${bmi.toFixed(1)} | Recommended Goal: ${protein}g protein/day 🎯`
    );
  };

  const handleHeightUnitChange = (nextUnit) => {
    if (nextUnit === heightUnit) return;

    const currentHeight = Number(height);

    if (Number.isFinite(currentHeight) && currentHeight > 0) {
      if (nextUnit === "ft") {
        setHeight(Number((currentHeight / 30.48).toFixed(1)));
      } else {
        setHeight(Math.round(currentHeight * 30.48));
      }
    }

    setHeightUnit(nextUnit);
    invalidateResult();
  };

  const handleWeightUnitChange = (nextUnit) => {
    if (nextUnit === weightUnit) return;

    const currentWeight = Number(weight);

    if (Number.isFinite(currentWeight) && currentWeight > 0) {
      if (nextUnit === "lb") {
        setWeight(Math.round(currentWeight / 0.45359237));
      } else {
        setWeight(Math.round(currentWeight * 0.45359237));
      }
    }

    setWeightUnit(nextUnit);
    invalidateResult();
  };

  const unitButtonClass = (selected) =>
    `flex-1 rounded-md py-1.5 text-xs font-bold transition ${
      selected
        ? "bg-white text-[#006e2d] shadow-sm"
        : "text-slate-500 hover:text-[#006e2d]"
    }`;

  // Build the age dropdown options dynamically based on the selected profile
  const { min: ageMin, max: ageMax } = getAgeRange(profile);
  const ageOptions = Array.from(
    { length: ageMax - ageMin + 1 },
    (_, index) => ageMin + index
  );

  return (
    <section
      id="bmi-section"
      className="scroll-mt-20 bg-white px-3 py-8 sm:px-5 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-gradient-to-r from-[#f0faea] to-[#edf9e9] p-4 shadow-lg shadow-green-900/5 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[45%_50%] lg:gap-7">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
              <SectionTag>
               Personalized Nutrition Insights
              </SectionTag>

            <h2 className="mt-4 text-[27px] font-black leading-[1.08] tracking-tight text-[#123b25] sm:text-[31px]">
              Know Your Protein Need
              <br />
              &amp; BMI in Seconds
            </h2>

            <p className="mt-3 max-w-[430px] text-[15px] leading-6 text-slate-600 sm:text-sm">
              Get personalized results based on your age, lifestyle
              and goals. One simple calculator for everyone.
            </p>

            <div className="mt-5 grid grid-cols-4 gap-1 sm:mt-6 sm:gap-2">
              {BENEFITS.map(({ Icon, title, subtitle }) => (
                <div key={title} className="min-w-0 text-center">
                  <div className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-white text-[#006e2d] shadow-sm sm:h-11 sm:w-11">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                  <p className="mt-2 text-[10px] font-bold leading-3 text-slate-700 sm:text-xs">
                    {title}
                  </p>

                  {subtitle && (
                    <p className="text-[9px] font-bold leading-3 text-slate-600 sm:text-xs">
                      {subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CALCULATOR CARD */}
          <div className="mx-auto w-full max-w-[500px] min-w-0 rounded-2xl bg-white p-3 shadow-lg sm:p-4">
            {/* PROFILE TABS */}
            <div className="flex items-start justify-center gap-1.5 pb-3 sm:gap-3">
              {PROFILES.map((item) => {
                const Icon = PROFILE_ICONS[item];
                const selected = profile === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleProfileChange(item)}
                    aria-label={item}
                    aria-pressed={selected}
                    className="group flex min-w-0 flex-1 flex-col items-center gap-1.5"
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-200 sm:h-12 sm:w-12 ${
                        selected
                          ? "border-[#006e2d] bg-[#006e2d] text-white shadow-md"
                          : "border-slate-200 bg-white text-[#006e2d] hover:border-[#006e2d] hover:bg-green-50"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>

                    <span
                      className={`max-w-full text-center text-[9px] font-semibold leading-tight sm:text-[11px] ${
                        selected ? "text-[#123b25]" : "text-slate-600"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* KID GENDER */}
            {profile === "Kid" && (
              <div className="mt-2">
                <p className="mb-2 text-sm font-bold text-slate-800">
                  Select Gender
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {["Boy", "Girl"].map((item) => {
                    const selected = gender === item;
                    const Icon = GENDER_ICONS[item];

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setGender(item);
                          invalidateResult();
                        }}
                        aria-pressed={selected}
                        className={`flex items-center justify-center gap-2 rounded-xl border p-3 transition ${
                          selected
                            ? "border-[#006e2d] bg-green-50 text-[#006e2d]"
                            : "border-slate-200 text-slate-600 hover:border-green-300"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.8} />
                        <span className="text-sm font-bold">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* AGE — dynamically limited based on selected profile */}
          
<div className="mt-2 rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
  <label className="block text-xs font-medium text-slate-500">
    Age (YRS)
  </label>

  <div className="mt-1.5 flex h-10 items-center overflow-hidden rounded-lg bg-slate-100">
    <button
      type="button"
      onClick={() => {
        const currentIndex = ageOptions.indexOf(Number(age));

        if (currentIndex > 0) {
          setAge(ageOptions[currentIndex - 1]);
          invalidateResult();
        }
      }}
      disabled={ageOptions.indexOf(Number(age)) <= 0}
      className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-40"
      aria-label="Decrease age"
    >
      −
    </button>

    <div className="flex flex-1 items-center justify-center gap-1">
      <input
        type="number"
        min={ageOptions[0]}
        max={ageOptions[ageOptions.length - 1]}
        value={age}
        onChange={(event) => {
          const value = event.target.value;

          if (value === "") {
            setAge("");
            invalidateResult();
            return;
          }

          setAge(Number(value));
          invalidateResult();
        }}
        onBlur={() => {
          const minAge = ageOptions[0];
          const maxAge = ageOptions[ageOptions.length - 1];
          const value = Number(age);

          if (age === "" || !Number.isFinite(value)) {
            setAge(minAge);
          } else {
            const nearestAge = ageOptions.reduce((previous, current) =>
              Math.abs(current - value) < Math.abs(previous - value)
                ? current
                : previous
            );

            setAge(Math.min(maxAge, Math.max(minAge, nearestAge)));
          }
        }}
        className="w-16 appearance-none border-0 bg-transparent p-0 text-center text-sm font-semibold text-slate-800 outline-none focus:ring-0"
        aria-label="Enter age in years"
      />

      {/* <span className="text-xs font-medium text-slate-500">
        years
      </span> */}
    </div>

    <button
      type="button"
      onClick={() => {
        const currentIndex = ageOptions.indexOf(Number(age));

        if (currentIndex >= 0 && currentIndex < ageOptions.length - 1) {
          setAge(ageOptions[currentIndex + 1]);
          invalidateResult();
        }
      }}
      disabled={ageOptions.indexOf(Number(age)) >= ageOptions.length - 1}
      className="flex h-full w-11 shrink-0 items-center justify-center text-lg font-semibold text-slate-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-40"
      aria-label="Increase age"
    >
      +
    </button>
  </div>
</div>


            {/* HEIGHT, WEIGHT, BMI AND PROTEIN */}
            <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {/* HEIGHT */}
              <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
                <label className="text-xs font-semibold text-slate-600">
                  Height
                </label>

                <input
                  type="number"
                  min={heightUnit === "cm" ? 50 : 2}
                  max={heightUnit === "cm" ? 249 : 11.9}
                  step={heightUnit === "cm" ? 1 : 0.1}
                  value={height}
                  onChange={(event) => {
                    setHeight(event.target.value);
                    invalidateResult();
                  }}
                  aria-label={`Height in ${heightUnit}`}
                  className="mt-2 h-10 w-full min-w-0 rounded-lg bg-slate-100 px-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-green-400"
                />

                <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
                  <button
                    type="button"
                    onClick={() => handleHeightUnitChange("cm")}
                    className={unitButtonClass(heightUnit === "cm")}
                  >
                    CM
                  </button>

                  <button
                    type="button"
                    onClick={() => handleHeightUnitChange("ft")}
                    className={unitButtonClass(heightUnit === "ft")}
                  >
                    FT
                  </button>
                </div>
              </div>

              {/* WEIGHT */}
              <div className="min-w-0 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
                <label className="text-xs font-semibold text-slate-600">
                  Weight
                </label>

                <input
                  type="number"
                  min={weightUnit === "kg" ? 10 : 20}
                  max={weightUnit === "kg" ? 209 : 419}
                  step="1"
                  value={weight}
                  onChange={(event) => {
                    setWeight(event.target.value);
                    invalidateResult();
                  }}
                  aria-label={`Weight in ${weightUnit}`}
                  className="mt-2 h-10 w-full min-w-0 rounded-lg bg-slate-100 px-2 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-green-400"
                />

                <div className="mt-2 flex items-center rounded-lg bg-slate-100 p-0.5">
                  <button
                    type="button"
                    onClick={() => handleWeightUnitChange("kg")}
                    className={unitButtonClass(weightUnit === "kg")}
                  >
                    KG
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWeightUnitChange("lb")}
                    className={unitButtonClass(weightUnit === "lb")}
                  >
                    LB
                  </button>
                </div>
              </div>

              {/* BMI RESULT */}
              <div className="flex min-h-[130px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
                <BarChart3 size={20} className="text-blue-500" />

                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Your BMI
                </p>

                <p className="mt-2 text-2xl font-black text-blue-600">
                  {result.bmi}
                </p>

                <span
                  className={`mt-1 rounded-full px-2 py-1 text-[9px] font-bold ${
                    result.calculated
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {result.calculated ? result.status : "--"}
                </span>
              </div>

              {/* DAILY PROTEIN RESULT */}
              <div className="flex min-h-[130px] min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-white p-2 text-center shadow-sm">
                <Heart size={20} className="text-[#006e2d]" />

                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Daily Protein
                </p>

                <p className="mt-2 text-2xl font-black text-[#006e2d]">
                  {result.calculated ? `${result.protein}g` : "--"}
                </p>

                <p className="mt-1 text-[9px] leading-3 text-slate-400">
                  Recommended daily need
                </p>
              </div>
            </div>

            {/* CALCULATE BUTTON */}
            <button
              type="button"
              onClick={handleCalculate}
              className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006e2d] text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#005320] hover:shadow-md active:scale-[0.99]"
            >
              Calculate
              <ArrowRight size={17} />
            </button>

            <p className="mt-2 text-center text-[10px] leading-4 text-slate-400">
              Results are estimates. Consult a qualified healthcare
              professional for personalized medical or nutrition advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
