import {
  ArrowRight,
  BarChart3,
  Heart,
  Leaf,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import { ACTIVITY_LEVELS, PROFILES } from "../data/homeData";
import SectionTag from "./SectionTag";

const PROFILE_ICONS = {
  Adult: "🧍",
  Kid: "👶",
  "Pregnant Woman": "🤰",
  "Feeding Mother": "🤱",
  Bodybuilder: "🏋️",
};

export default function ProteinCalculator() {
  // --------------------------------
  // FORM STATES
  // --------------------------------
  const [profile, setProfile] = useState("Adult");
  const [age, setAge] = useState(25);

  // Height can be entered as centimeters or decimal feet.
  const [heightUnit, setHeightUnit] = useState("cm");
  const [height, setHeight] = useState(170);

  // Weight can be entered as kilograms or pounds.
  const [weightUnit, setWeightUnit] = useState("kg");
  const [weight, setWeight] = useState(20);

  // Gender is displayed only for Kid profile.
  const [gender, setGender] = useState("Boy");

  const [activity] = useState(
    ACTIVITY_LEVELS?.[2]?.label ||
      ACTIVITY_LEVELS?.[0]?.label ||
      ""
  );

  // --------------------------------
  // RESULT STATE
  // --------------------------------
  const [result, setResult] = useState({
    bmi: "--",
    protein: "--",
    status: "",
    calculated: false,
  });

  // --------------------------------
  // HELPERS
  // --------------------------------
  const showValidationMessage = (message) => {
    // Uses the same simple popup behavior as the existing component.
    alert(message);
  };

  const getProfileAgeMessage = (selectedProfile, ageValue) => {
    if (selectedProfile === "Adult" && ageValue < 20) {
      return "For the Adult profile, age must be 20 years or above.";
    }

    if (selectedProfile === "Kid" && ageValue > 15) {
      return "For the Kid profile, age must be 15 years or below.";
    }

    return "";
  };

  const getHeightCm = () => {
    const value = Number(height);

    if (heightUnit === "cm") {
      return value;
    }

    // The requested FT range is 2.0–11.9 decimal feet.
    return value * 30.48;
  };

  const getWeightKg = () => {
    const value = Number(weight);

    if (weightUnit === "kg") {
      return value;
    }

    return value * 0.45359237;
  };

  const validateForm = () => {
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (!Number.isFinite(ageValue)) {
      showValidationMessage("Please select a valid age.");
      return false;
    }

    const ageMessage = getProfileAgeMessage(profile, ageValue);
    if (ageMessage) {
      showValidationMessage(ageMessage);
      return false;
    }

    if (!Number.isFinite(heightValue)) {
      showValidationMessage("Please enter a valid height.");
      return false;
    }

    if (
      heightUnit === "cm" &&
      (heightValue < 50 || heightValue > 249)
    ) {
      showValidationMessage(
        "Height must be between 50 and 249 cm."
      );
      return false;
    }

    if (
      heightUnit === "ft" &&
      (heightValue < 2 || heightValue > 11.9)
    ) {
      showValidationMessage(
        "Height must be between 2 and 11.9 ft."
      );
      return false;
    }

    if (!Number.isFinite(weightValue)) {
      showValidationMessage("Please enter a valid weight.");
      return false;
    }

    if (
      weightUnit === "kg" &&
      (weightValue < 10 || weightValue > 209)
    ) {
      showValidationMessage(
        "Weight must be between 10 and 209 kg."
      );
      return false;
    }

    if (
      weightUnit === "lb" &&
      (weightValue < 20 || weightValue > 419)
    ) {
      showValidationMessage(
        "Weight must be between 20 and 419 lb."
      );
      return false;
    }

    return true;
  };

  // --------------------------------
  // CALCULATE RESULTS
  // --------------------------------
  const handleCalculate = () => {
    if (!validateForm()) return;

    const heightCm = getHeightCm();
    const weightKg = getWeightKg();

    if (!heightCm || !weightKg) {
      showValidationMessage("Please enter valid height and weight.");
      return;
    }

    // BMI = weight (kg) / height (m)^2.
    // Height and weight are converted to metric units above, so the same
    // formula works whether the user selected cm/ft or kg/lb.
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    // Keep BMI labels consistent with the existing calculator UI.
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

    // Protein estimate (grams/day).
    // Uses the selected activity factor and profile-specific multiplier
    // already defined in this component. The exact PHP-equivalent formula
    // requires the calculate_protein_requirement() function from health_helper.php.
    const activityData = ACTIVITY_LEVELS?.find(
      (item) => item.label === activity
    );
    const activityFactor = Number(activityData?.factor ?? 1.2);

    const profileProteinFactors = {
      Adult: 1,
      Kid: 1,
      "Pregnant Woman": 1.15,
      "Feeding Mother": 1.25,
      Bodybuilder: 1.45,
    };
    const profileFactor = profileProteinFactors[profile] ?? 1;

    // Keep the age available to the calculation so age-based adjustments can
    // be added once the PHP helper's exact rules are available.
    const ageValue = Number(age);
    let ageFactor = 1;

    // General estimate only; this is not a replacement for the backend helper.
    if (profile === "Kid" && ageValue > 0 && ageValue <= 3) {
      ageFactor = 1.1;
    }

    const protein = Math.max(
      1,
      Math.round(weightKg * activityFactor * profileFactor * ageFactor)
    );

    setResult({
      bmi: bmi.toFixed(1),
      protein,
      status,
      calculated: true,
    });
  };

  // --------------------------------
  // PROFILE CHANGE
  // --------------------------------
  const handleProfileChange = (item) => {
    setProfile(item);

    // Keep the currently selected values when switching profiles.
    // Validation happens when Calculate is pressed.
    setResult({
      bmi: "--",
      protein: "--",
      status: "",
      calculated: false,
    });
  };

  // --------------------------------
  // HEIGHT UNIT CHANGE
  // --------------------------------
  const handleHeightUnitChange = () => {
    if (heightUnit === "cm") {
      const feetValue = Number(height) / 30.48;
      setHeight(Number(feetValue.toFixed(1)));
      setHeightUnit("ft");
    } else {
      const cmValue = Number(height) * 30.48;
      setHeight(Math.round(cmValue));
      setHeightUnit("cm");
    }

    setResult((prev) => ({
      ...prev,
      calculated: false,
    }));
  };

  // --------------------------------
  // WEIGHT UNIT CHANGE
  // --------------------------------
  const handleWeightUnitChange = () => {
    if (weightUnit === "kg") {
      const lbValue = Number(weight) / 0.45359237;
      setWeight(Math.round(lbValue));
      setWeightUnit("lb");
    } else {
      const kgValue = Number(weight) * 0.45359237;
      setWeight(Math.round(kgValue));
      setWeightUnit("kg");
    }

    setResult((prev) => ({
      ...prev,
      calculated: false,
    }));
  };

  const ProfileIcon = PROFILE_ICONS[profile] || UserRound;

  return (
    <section
      id="calculator"
      className="scroll-mt-20 bg-white px-3 py-6 sm:px-5 sm:py-8"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
          rounded-2xl
          bg-gradient-to-r
          from-[#f0faea]
          to-[#edf9e9]
          p-4
          shadow-soft
          sm:p-6
          lg:p-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-6
            lg:grid-cols-[39%_61%]
            lg:gap-7
          "
        >
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <SectionTag>
              Personalized Nutrition Insights
            </SectionTag>

            <h2
              className="
                mt-4
                text-[27px]
                font-black
                leading-[1.08]
                tracking-tight
                text-protein-dark
                sm:text-[31px]
              "
            >
              Know Your Protein Need
              <br />
              & BMI in Seconds
            </h2>

            <p
              className="
                mt-3
                max-w-[430px]
                text-[13px]
                leading-5
                text-slate-600
                sm:text-sm
              "
            >
              Get personalized results based on your
              age, lifestyle and goals. One simple
              calculator for everyone.
            </p>

            <div
              className="
                mt-5
                grid
                grid-cols-4
                gap-1
                sm:mt-6
                sm:gap-2
              "
            >
              {[
                [UserRound, "Understand", "Your Body"],
                [Leaf, "Know Protein", "Requirement"],
                [BarChart3, "Get Your BMI", ""],
                [Heart, "Make Better", "Food Choices"],
              ].map(([Icon, title, subtitle]) => (
                <div
                  key={title}
                  className="min-w-0 text-center"
                >
                  <div
                    className="
                      mx-auto
                      grid
                      h-9
                      w-9
                      place-items-center
                      rounded-full
                      bg-white
                      text-protein-green
                      shadow-sm
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={18}
                      className="sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      font-bold
                      leading-3
                      text-slate-700
                      sm:text-[9px]
                    "
                  >
                    {title}
                  </p>

                  {subtitle && (
                    <p
                      className="
                        text-[8px]
                        font-bold
                        leading-3
                        text-slate-700
                        sm:text-[9px]
                      "
                    >
                      {subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CALCULATOR CARD */}
          <div
            className="
              mx-auto
              w-full
              max-w-[900px]
              rounded-2xl
              bg-white
              p-3
              shadow-card
              sm:p-5
            "
          >
            {/* PROFILE TABS */}
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-2
                scrollbar-hide
              "
            >
              {PROFILES.map((item) => {
                const icon = PROFILE_ICONS[item] || "👤";
                const selected = profile === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleProfileChange(item)}
                    className={`
                      flex
                      min-w-[112px]
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      px-1
                      py-1
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
                      sm:min-w-[125px]
                      sm:text-base
                      ${
                        selected
                          ? "border-protein-green bg-protein-green text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-green-50"
                      }
                    `}
                  >
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {icon}
                    </span>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>

            {/* KID GENDER */}
            {profile === "Kid" && (
              <div className="mt-4">
                <p className="mb-3 text-lg font-bold text-slate-800">
                  Select Gender
                </p>

                <div className="grid grid-cols-2 gap-5">
                  {[
                    {
                      value: "Boy",
                      emoji: "👦",
                    },
                    {
                      value: "Girl",
                      emoji: "👧",
                    },
                  ].map((item) => {
                    const selected = gender === item.value;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => {
                          setGender(item.value);
                          setResult((prev) => ({
                            ...prev,
                            calculated: false,
                          }));
                        }}
                        className="flex flex-col items-center"
                      >
                        <div
                          className={`
                            grid
                            h-24
                            w-24
                            place-items-center
                            rounded-full
                            border
                            text-4xl
                            shadow-sm
                            transition-all
                            sm:h-20
                            sm:w-20
                            ${
                              selected
                                ? "border-protein-green bg-protein-green"
                                : "border-slate-200 bg-white"
                            }
                          `}
                        >
                          {item.emoji}
                        </div>

                        <span
                          className={`
                            mt-2
                            text-base
                            font-bold
                            ${
                              selected
                                ? "text-protein-dark"
                                : "text-slate-700"
                            }
                          `}
                        >
                          {item.value}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* AGE */}
            <div
              className={`
                mt-2
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-4
                shadow-sm
              `}
            >
              <label className="block text-sm font-medium text-slate-500">
                Age (YRS)

                <select
                  value={age}
                  onChange={(e) => {
                    setAge(Number(e.target.value));
                    setResult((prev) => ({
                      ...prev,
                      calculated: false,
                    }));
                  }}
                  className="
                    mt-2
                    h-10
                    w-full
                    rounded-xl
                    border-0
                    bg-slate-100
                    px-3
                    text-base
                    font-medium
                    text-slate-800
                    outline-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                >
                  {Array.from({ length: 101 }, (_, index) => index).map(
                    (value) => (
                      <option key={value} value={value}>
                        {value} years
                      </option>
                    )
                  )}
                </select>
              </label>
            </div>

            {/* FOUR COLUMN CALCULATOR CARD */}
            <div
              className="
                mt-2
                grid
                grid-cols-2
                gap-3
                lg:grid-cols-4
              "
            >
              {/* HEIGHT */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-3
                  shadow-sm
                "
              >
                <div className="flex min-h-[30px] items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Height
                  </span>
                  {/*<span className="text-protein-green">
                    <UserRound size={20} />
                  </span>*/}
                </div>

                <input
                  type="number"
                  min={heightUnit === "cm" ? 50 : 2}
                  max={heightUnit === "cm" ? 249 : 11.9}
                  step={heightUnit === "cm" ? 1 : 0.1}
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                    setResult((prev) => ({
                      ...prev,
                      calculated: false,
                    }));
                  }}
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-xl
                    bg-slate-100
                    px-3
                    text-base
                    text-slate-800
                    outline-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                />

                <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (heightUnit !== "cm") {
                        handleHeightUnitChange();
                      }
                    }}
                    className={`
                      flex-1
                      rounded-lg
                      py-1.5
                      text-sm
                      font-bold
                      ${
                        heightUnit === "cm"
                          ? "bg-white text-protein-green shadow-sm"
                          : "text-slate-500"
                      }
                    `}
                  >
                    CM
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (heightUnit !== "ft") {
                        handleHeightUnitChange();
                      }
                    }}
                    className={`
                      flex-1
                      rounded-lg
                      py-1.5
                      text-sm
                      font-bold
                      ${
                        heightUnit === "ft"
                          ? "bg-white text-protein-green shadow-sm"
                          : "text-slate-500"
                      }
                    `}
                  >
                    FT
                  </button>
                </div>

                {/*<p className="mt-1 text-[10px] text-slate-400">
                  {heightUnit === "cm"
                    ? "50–249 cm"
                    : "2–11.9 ft"}
                </p>*/}
              </div>

              {/* WEIGHT */}
              <div
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-3
                  shadow-sm
                "
              >
                <div className="flex min-h-[30px] items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Weight
                  </span>
                  {/*<span className="text-protein-green">
                    <Heart size={20} />
                  </span>*/}
                </div>

                <input
                  type="number"
                  min={weightUnit === "kg" ? 10 : 20}
                  max={weightUnit === "kg" ? 209 : 419}
                  step="1"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    setResult((prev) => ({
                      ...prev,
                      calculated: false,
                    }));
                  }}
                  className="
                    mt-2
                    h-11
                    w-full
                    rounded-xl
                    bg-slate-100
                    px-3
                    text-base
                    text-slate-800
                    outline-none
                    focus:ring-2
                    focus:ring-green-400
                  "
                />

                <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (weightUnit !== "kg") {
                        handleWeightUnitChange();
                      }
                    }}
                    className={`
                      flex-1
                      rounded-lg
                      py-1.5
                      text-sm
                      font-bold
                      ${
                        weightUnit === "kg"
                          ? "bg-white text-protein-green shadow-sm"
                          : "text-slate-500"
                      }
                    `}
                  >
                    KG
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (weightUnit !== "lb") {
                        handleWeightUnitChange();
                      }
                    }}
                    className={`
                      flex-1
                      rounded-lg
                      py-1.5
                      text-sm
                      font-bold
                      ${
                        weightUnit === "lb"
                          ? "bg-white text-protein-green shadow-sm"
                          : "text-slate-500"
                      }
                    `}
                  >
                    LB
                  </button>
                </div>

                {/*<p className="mt-1 text-[10px] text-slate-400">
                  {weightUnit === "kg"
                    ? "10–209 kg"
                    : "20–419 lb"}
                </p>*/}
              </div>

              {/* BMI */}
              <div
                className="
                  flex
                  min-h-[170px]
                  flex-col
                  items-center
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-3
                  text-center
                  shadow-sm
                "
              >
                <div className="flex min-h-[30px] items-center justify-center text-blue-500">
                  <BarChart3 size={23} />
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Your BMI
                </p>

                <p className="mt-3 text-3xl font-black text-blue-600">
                  {result.bmi}
                </p>

                <span
                  className={`
                    mt-2
                    rounded-full
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    ${
                      result.calculated
                        ? "bg-blue-50 text-blue-600"
                        : "bg-slate-100 text-slate-400"
                    }
                  `}
                >
                  {result.calculated ? result.status : "--"}
                </span>
              </div>

              {/* DAILY PROTEIN */}
              <div
                className="
                  flex
                  min-h-[170px]
                  flex-col
                  items-center
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-3
                  text-center
                  shadow-sm
                "
              >
                <div className="flex min-h-[30px] items-center justify-center text-protein-green">
                  <Heart size={23} />
                </div>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Daily Protein
                </p>

                <p className="mt-3 text-3xl font-black text-protein-green">
                  {result.calculated
                    ? `${result.protein}g`
                    : "--"}
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Recommended daily need
                </p>
              </div>
            </div>

            {/* CALCULATE BUTTON */}
            <button
              type="button"
              onClick={handleCalculate}
              className="
                mt-5
                flex
                h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-protein-green
                text-base
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-green-800
                hover:shadow-md
                active:scale-[0.99]
              "
            >
              Calculate
              <ArrowRight size={18} />
            </button>

            <p
              className="
                mt-2
                text-center
                text-[8px]
                leading-3
                text-slate-400
              "
            >
              Results are estimates. Consult a professional
              for medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
