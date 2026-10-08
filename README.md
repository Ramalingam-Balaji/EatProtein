# EatProtein React + Tailwind CSS

A responsive EatProtein landing page recreated from the supplied reference image.

## 1. Requirements

- Node.js 18+ (Node 20+ recommended)
- VS Code
- Internet connection for the first `npm install`

## 2. Open the project

Extract/open the `EatProtein` folder in VS Code.

```bash
cd EatProtein
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start development server

```bash
npm run dev
```

Open the local URL shown by Vite, normally:

```text
http://localhost:5173
```

## 5. Build for production

```bash
npm run build
```

## Project structure

```text
EatProtein/
├── public/
│   └── assets/
│       ├── hero-food.jpg
│       ├── category-fruits.jpg
│       ├── category-meat.jpg
│       ├── category-eggs.jpg
│       ├── category-nuts.jpg
│       ├── category-pulses.jpg
│       ├── category-snacks.jpg
│       ├── category-alternatives.jpg
│       ├── app-phones.jpg
│       └── franchise-store.jpg
├── src/
│   ├── components/
│   ├── data/
│   │   ├── navItems.js
│   │   └── homeData.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Navigation

Navigation is data-driven from:

`src/data/navItems.js`

The buttons use smooth scrolling to:

- Home → hero
- High Protein Foods → category section
- Protein Calculator → calculator
- How It Works → how-it-works section
- Franchise → franchise section
- About → footer/about section
- Download App → app section

## Images

The original uploaded screenshot was cropped into reusable image assets and placed in `public/assets`.

Because the supplied image is a screenshot rather than the original source assets, the crops may contain some of the original screenshot's background/text. If you later receive the original product/hero PNGs, replace the JPGs in `public/assets` without changing the React components.

## Important

The calculator is functional on the client side. It calculates an estimated BMI and daily protein requirement from the entered values. It is a UI/demo estimate, not medical advice.
