import {
  ArrowRight,
  BarChart3,
  Heart,
  Leaf,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import {
  ACTIVITY_LEVELS,
  PROFILES,
} from "../data/homeData";

import SectionTag from "./SectionTag";

export default function ProteinCalculator() {
  // --------------------------------
  // FORM STATES
  // --------------------------------

  const [profile, setProfile] = useState("Adult");
  const [age, setAge] = useState(30);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(8);
  const [weight, setWeight] = useState(70);

  const [activity, setActivity] = useState(
    ACTIVITY_LEVELS?.[2]?.label ||
      ACTIVITY_LEVELS?.[0]?.label ||
      ""
  );

  // Gender is required only for Kid profile
  const [gender, setGender] = useState("Boy");

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
  // CALCULATE RESULTS
  // --------------------------------

  const handleCalculate = () => {
    const ageValue = Number(age);
    const feetValue = Number(feet);
    const inchesValue = Number(inches);
    const weightValue = Number(weight);

    // --------------------------------
    // BASIC VALIDATION
    // --------------------------------

    if (
      !ageValue ||
      ageValue < 5 ||
      ageValue > 100 ||
      !feetValue ||
      feetValue < 3 ||
      feetValue > 8 ||
      Number.isNaN(inchesValue) ||
      inchesValue < 0 ||
      inchesValue > 11 ||
      !weightValue ||
      weightValue < 20 ||
      weightValue > 250
    ) {
      alert("Please enter valid details.");
      return;
    }

    // --------------------------------
    // PROFILE AGE VALIDATION
    // --------------------------------

    if (profile === "Adult" && ageValue < 20) {
      alert(
        "For the Adult profile, age must be 20 years or above."
      );
      return;
    }

    if (profile === "Kid" && ageValue > 15) {
      alert(
        "For the Kid profile, age must be 15 years or below."
      );
      return;
    }

    // --------------------------------
    // HEIGHT
    // --------------------------------

    const heightCm = Math.max(
      100,
      feetValue * 30.48 + inchesValue * 2.54
    );

    // --------------------------------
    // BMI
    // --------------------------------

    const bmi =
      weightValue / ((heightCm / 100) ** 2);

    // --------------------------------
    // ACTIVITY FACTOR
    // --------------------------------

    const activityData = ACTIVITY_LEVELS?.find(
      (item) => item.label === activity
    );

    const factor = activityData?.factor ?? 1.2;

    // --------------------------------
    // PROFILE MULTIPLIER
    // --------------------------------

    let profileMultiplier = 1;

    if (profile === "Bodybuilder") {
      profileMultiplier = 1.45;
    } else if (profile === "Pregnant Woman") {
      profileMultiplier = 1.15;
    } else if (profile === "Feeding Mother") {
      profileMultiplier = 1.25;
    } else if (profile === "Kid") {
      profileMultiplier = 1.0;
    }

    // --------------------------------
    // PROTEIN
    // --------------------------------

    const protein = Math.round(
      weightValue *
        factor *
        profileMultiplier
    );

    // --------------------------------
    // BMI STATUS
    // --------------------------------

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

    // --------------------------------
    // UPDATE RESULT
    // --------------------------------

    setResult({
      bmi: bmi.toFixed(1),
      protein,
      status,
      calculated: true,
    });
  };

  return (
    <section
      id="calculator"
      className="scroll-mt-20 bg-white px-3 py-6 sm:px-5 sm:py-8"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
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
          {/* ======================================
              LEFT CONTENT
          ====================================== */}

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

            {/* ======================================
                BENEFITS
            ====================================== */}

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
                [
                  UserRound,
                  "Understand",
                  "Your Body",
                ],
                [
                  Leaf,
                  "Know Protein",
                  "Requirement",
                ],
                [
                  BarChart3,
                  "Get Your BMI",
                  "",
                ],
                [
                  Heart,
                  "Make Better",
                  "Food Choices",
                ],
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

          {/* ======================================
              CALCULATOR CARD
          ====================================== */}

          <div
            className="
              w-full
              max-w-[550px]
              min-h-[300px]
              mx-auto
              rounded-2xl
              bg-white
              p-3
              shadow-card
              sm:p-5
            "
          >
            {/* ======================================
                PROFILE TABS
            ====================================== */}

            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-2
                scrollbar-hide
              "
            >
              {PROFILES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setProfile(item)}
                  className={`
                    whitespace-nowrap
                    rounded-lg
                    px-3
                    py-2
                    text-[19px]
                    font-semibold
                    transition-all
                    duration-200
                    sm:px-4
                    sm:text-[10px]

                    ${
                      profile === item
                        ? "bg-protein-green text-white shadow-sm"
                        : "bg-gray-100 text-slate-600 hover:bg-green-100"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* ======================================
                MAIN CALCULATOR
            ====================================== */}

            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-4
                lg:grid-cols-[minmax(0,1fr)_150px]
              "
            >
              {/* ====================================
                  LEFT - FORM FIELDS
              ==================================== */}

              <div className="min-w-0">
                {/* AGE / HEIGHT / INCHES */}

                <div
                  className="
                    grid
                    grid-cols-3
                    gap-2
                    sm:gap-3
                  "
                >
                  {/* AGE */}

                  <label
                    className="
                      min-w-0
                      text-[10px]
                      font-semibold
                      text-slate-700
                      sm:text-[10px]
                    "
                  >
                    Age

                    <span
                      className="
                        block
                        font-normal
                        text-slate-400
                      "
                    >
                      Years
                    </span>

                    <input
                      type="number"
                      min="5"
                      max="100"
                      value={age}
                      onChange={(e) =>
                        setAge(e.target.value)
                      }
                      className="
                        mt-1
                        h-9
                        w-full
                        min-w-0
                        rounded-md
                        border
                        border-slate-200
                        px-2
                        text-sm
                        outline-none
                        transition
                        focus:border-green-500
                        sm:px-3
                      "
                    />
                  </label>

                  {/* FEET */}

                  <label
                    className="
                      min-w-0
                      text-[9px]
                      font-semibold
                      text-slate-700
                      sm:text-[10px]
                    "
                  >
                    Height

                    <span
                      className="
                        block
                        font-normal
                        text-slate-400
                      "
                    >
                      Feet
                    </span>

                    <input
                      type="number"
                      min="3"
                      max="8"
                      value={feet}
                      onChange={(e) =>
                        setFeet(e.target.value)
                      }
                      className="
                        mt-1
                        h-9
                        w-full
                        min-w-0
                        rounded-md
                        border
                        border-slate-200
                        px-2
                        text-sm
                        outline-none
                        transition
                        focus:border-green-500
                        sm:px-3
                      "
                    />
                  </label>

                  {/* INCHES */}

                  <label
                    className="
                      min-w-0
                      text-[9px]
                      font-semibold
                      text-slate-700
                      sm:text-[10px]
                    "
                  >
                    Inches

                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={inches}
                      onChange={(e) =>
                        setInches(e.target.value)
                      }
                      className="
                        mt-[17px]
                        h-9
                        w-full
                        min-w-0
                        rounded-md
                        border
                        border-slate-200
                        px-2
                        text-sm
                        outline-none
                        transition
                        focus:border-green-500
                        sm:px-3
                      "
                    />
                  </label>
                </div>

                {/* WEIGHT / ACTIVITY */}

                <div
                  className="
                    mt-3
                    grid
                    grid-cols-2
                    gap-2
                    sm:gap-3
                  "
                >
                  {/* WEIGHT */}

                  <label
                    className="
                      min-w-0
                      text-[9px]
                      font-semibold
                      text-slate-700
                      sm:text-[10px]
                    "
                  >
                    Weight

                    <span
                      className="
                        block
                        font-normal
                        text-slate-400
                      "
                    >
                      kg
                    </span>

                    <input
                      type="number"
                      min="20"
                      max="250"
                      value={weight}
                      onChange={(e) =>
                        setWeight(e.target.value)
                      }
                      className="
                        mt-1
                        h-9
                        w-full
                        min-w-0
                        rounded-md
                        border
                        border-slate-200
                        px-2
                        text-sm
                        outline-none
                        transition
                        focus:border-green-500
                        sm:px-3
                      "
                    />
                  </label>

                  {/* ACTIVITY */}

                 {/* <label
                    className="
                      min-w-0
                      text-[9px]
                      font-semibold
                      text-slate-700
                      sm:text-[10px]
                    "
                  >
                    Activity Level

                    <select
                      value={activity}
                      onChange={(e) =>
                        setActivity(e.target.value)
                      }
                      className="
                        mt-[17px]
                        h-9
                        w-full
                        min-w-0
                        rounded-md
                        border
                        border-slate-200
                        bg-white
                        px-1
                        text-[9px]
                        outline-none
                        transition
                        focus:border-green-500
                        sm:px-2
                        sm:text-[10px]
                      "
                    >
                      {ACTIVITY_LEVELS.map((item) => (
                        <option
                          key={item.label}
                          value={item.label}
                        >
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </label>*/}
                

                {/* ======================================
                    GENDER - KID ONLY
                ====================================== */}

                {profile === "Kid" && (
                  <div className="mt-3">
                    <label
                      className="
                        block
                        min-w-0
                        text-[9px]
                        font-semibold
                        text-slate-700
                        sm:text-[10px]
                      "
                    >
                      Gender

                      <select
                        value={gender}
                        onChange={(e) =>
                          setGender(e.target.value)
                        }
                        className="
                          mt-1
                          h-9
                          w-full
                          rounded-md
                          border
                          border-slate-200
                          bg-white
                          px-2
                          text-sm
                          text-slate-700
                          outline-none
                          transition
                          focus:border-green-500
                          sm:px-3
                        "
                      >
                        <option value="Boy">
                          Boy
                        </option>

                        <option value="Girl">
                          Girl
                        </option>
                      </select>
                    </label>
                  </div>
                )}
              </div>
              </div>

              {/* ====================================
                  RIGHT - RESULTS
              ==================================== */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                  lg:grid-cols-1
                "
              >
                {/* BMI */}

                <div
                  className="
                    flex
                    min-h-[82px]
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-50
                    p-2
                    text-center
                    sm:min-h-[88px]
                    sm:p-3
                  "
                >
                  <p
                    className="
                      text-[23px]
                      font-black
                      leading-none
                      text-protein-dark
                      sm:text-[25px]
                    "
                  >
                    {result.bmi}
                  </p>

                  {result.calculated ? (
                    <span
                      className="
                        mt-2
                        rounded-full
                        bg-green-100
                        px-2
                        py-1
                        text-[8px]
                        font-bold
                        text-green-700
                        sm:text-[9px]
                      "
                    >
                      {result.status}
                    </span>
                  ) : (
                    <span
                      className="
                        mt-2
                        rounded-full
                        bg-slate-100
                        px-2
                        py-1
                        text-[8px]
                        font-bold
                        text-slate-400
                        sm:text-[9px]
                      "
                    >
                      --
                    </span>
                  )}

                  <p
                    className="
                      mt-1
                      text-[8px]
                      text-slate-500
                      sm:text-[9px]
                    "
                  >
                    BMI
                  </p>
                </div>

                {/* DAILY PROTEIN */}

                <div
                  className="
                    flex
                    min-h-[82px]
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-50
                    p-2
                    text-center
                    sm:min-h-[88px]
                    sm:p-3
                  "
                >
                  <p
                    className="
                      text-[23px]
                      font-black
                      leading-none
                      text-protein-dark
                      sm:text-[25px]
                    "
                  >
                    {result.calculated
                      ? `${result.protein}g`
                      : "--"}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      leading-3
                      text-slate-500
                      sm:text-[9px]
                    "
                  >
                    Daily Protein
                    <br />
                    Need
                  </p>
                </div>
              </div>
            </div>

            {/* ======================================
                CALCULATE BUTTON
            ====================================== */}

            <button
              type="button"
              onClick={handleCalculate}
              className="
                flex
                h-10
                w-40
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-protein-green
                text-xs
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
              Calculate My Results

              <ArrowRight size={15} />
            </button>

            {/* ======================================
                DISCLAIMER
            ====================================== */}

            <p
              className="
                mt-2
                text-center
                text-[8px]
                leading-3
                text-slate-400
              "
            >
              Results are estimates. Consult a
              professional for medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
