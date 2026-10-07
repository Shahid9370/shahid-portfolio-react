# Shahid Shaikh — QA Engineer Portfolio

A modern, responsive React portfolio for **Shahid Shaikh**, a QA Engineer focused on manual testing, REST API testing, OCR/LLM data validation, FinTech workflows and AI-powered products.

The portfolio is designed as a polished front-end showcase combining a glassmorphism interface, animated interactions, light/dark themes and practical QA-focused content.

## Live project

- **Repository:** [github.com/Shahid9370/shahid-portfolio-react](https://github.com/Shahid9370/shahid-portfolio-react)
- **Live site:** [shahid-portfolio-react.vercel.app](https://shahid-portfolio-react.vercel.app)

## Features

- Responsive single-page portfolio layout
- Floating glassmorphism navigation header
- Custom profile image branding in the header
- Desktop navigation with active-section highlighting
- Mobile navigation with animated open/close behavior
- Escape-key and resize handling for the mobile menu
- Dark/light theme toggle
- Theme preference saved in `localStorage`
- System color-scheme detection on first visit
- Animated hero section with QA validation dashboard
- Animated QA metrics and floating technology chips
- About section with QA methodology highlights
- Experience timeline for PowerCred Technologies, UptoSkills and Aroma Brand Solutions
- Skills section with color-coded capability cards
- Current-learning panel for Playwright, TypeScript and CI/CD
- TypeScript-driven project data
- Project filter tabs for:
  - All work
  - Manual QA
  - API testing
  - Data validation
  - FinTech & AI
  - Automation
- Animated project filtering with Motion
- Expandable project details using native `<details>` elements
- QA process section showing the requirement-to-release workflow
- Education, certifications and publication section
- Contact purpose selector:
  - Hire me
  - Professional connection
  - QA service or project
- Gmail compose links with prefilled recipient, subject and message body
- LinkedIn profile link
- Phone and email contact links
- Responsive footer
- Back-to-top control
- Reduced-motion support for accessibility
- Production build support through Vite

## Technology stack

### Core

- React 19
- TypeScript
- Vite
- ESLint

### UI and animation

- Motion for React
- Lucide React icons
- Custom CSS design system
- CSS variables for themes
- CSS glassmorphism effects
- CSS gradients and responsive media queries

### Build and styling support

- Tailwind CSS 4 package and Vite plugin are installed
- The current visual system is primarily implemented in `src/index.css` so that the design remains centralized and easy to customize
- `clsx` is available for future conditional class composition

## Getting started

### Requirements

- Node.js 20 or newer recommended
- npm
- Git

### Install

```bash
# Clone the repository
git clone https://github.com/Shahid9370/shahid-portfolio-react.git

# Enter the project folder
cd shahid-portfolio-react

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown by Vite, normally:

```text
http://localhost:5173/
```

### Run linting

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

## Folder structure

```text
shahid-portfolio-react/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   └── shahid-profile.png
│   └── resume/
│       └── Shahid_Shaikh_QA_Engineer_Resume_2026.pdf
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BackToTop.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   │
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Education.tsx
│   │       ├── Experience.tsx
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       ├── QAProcess.tsx
│   │       └── Skills.tsx
│   │
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── hooks/
│   │   └── useTheme.ts
│   │
│   ├── types/
│   │   └── portfolio.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Application structure

The application entry point is `src/main.tsx`. It loads the global stylesheet and renders `App`.

`src/App.tsx` composes the complete portfolio in this order:

```text
Header
Hero
About
Experience
Skills
Projects
QA Process
Education
Contact
Footer
Back to top
```

## Section documentation

### Header

File:

```text
src/components/layout/Header.tsx
```

The header contains:

- Profile image branding
- Shahid's name and QA Engineer label
- Desktop navigation
- Resume link
- Theme toggle
- Mobile hamburger menu
- Active section tracking using `IntersectionObserver`
- Scroll state styling

The mobile menu:

- Opens and closes from the menu button
- Animates with Motion
- Locks body scrolling while open
- Closes when a navigation link is selected
- Closes when the user presses `Escape`
- Closes automatically when the viewport becomes desktop width

### Hero

File:

```text
src/components/sections/Hero.tsx
```

The hero introduces Shahid's QA profile with:

- Availability status
- Manual QA, API Testing and AI Validation focus
- Main positioning statement: “I test products before users do.”
- Primary and secondary calls to action
- QA metrics
- Animated QA validation console
- Rotating orbit elements
- Floating API, data-validation and OCR/LLM chips
- Animated validation chart
- Scroll-to-explore cue

### About

File:

```text
src/components/sections/About.tsx
```

The About section explains Shahid's testing mindset and presents four focus areas:

1. Understand the requirement
2. Challenge the happy path
3. Validate the data flow
4. Report with useful evidence

### Experience

Files:

```text
src/components/sections/Experience.tsx
src/data/experience.ts
```

The experience timeline covers:

- QA Intern at PowerCred Technologies
- Software Tester Intern at UptoSkills
- Web Development Intern at Aroma Brand Solutions

The featured PowerCred role highlights OCR/LLM validation, bank statement formats, IDP, KYC/eKYC, Postman, Jira, Python scripting and regression testing.

### Skills

Files:

```text
src/components/sections/Skills.tsx
src/data/skills.ts
```

Skill categories include:

- Manual and functional testing
- API and data testing
- Document validation
- FinTech and KYC/eKYC
- Defect management
- QA scripting

The learning panel documents the next-stage focus:

- Playwright
- TypeScript
- CI/CD

### Projects

Files:

```text
src/components/sections/Projects.tsx
src/data/projects.ts
src/types/portfolio.ts
```

Projects are stored as typed data rather than being hard-coded directly into the component. Each project includes:

- Title and description
- Project type
- Categories
- Metrics
- Tools
- Scope
- Approach
- Result

The filter state is managed inside `Projects.tsx`. Motion animates cards entering, leaving and repositioning in the grid.

### QA Process

File:

```text
src/components/sections/QAProcess.tsx
```

The QA workflow is presented as a quality loop:

1. Requirement analysis
2. Scenario design
3. Test execution
4. Defect reporting
5. Retesting and regression
6. Release validation

### Education

File:

```text
src/components/sections/Education.tsx
```

The Education section contains academic background, certifications and the publication:

```text
Cyber Security for AI Systems: A Survey
```

### Contact

File:

```text
src/components/sections/Contact.tsx
```

The contact section uses a purpose-based email flow. Visitors choose one of three options before opening Gmail:

- Hire me
- Professional connection
- QA service or project

After selection, the component generates a Gmail compose URL containing:

- Recipient: `shahidsrs93@gmail.com`
- A relevant subject line
- A prepared message template

The visitor still needs to review and send the message manually. The portfolio does not send email automatically.

The LinkedIn URL is:

```text
https://www.linkedin.com/in/shahidshaikh-developer
```

### Footer and back-to-top

Files:

```text
src/components/layout/Footer.tsx
src/components/common/BackToTop.tsx
```

The footer provides quick navigation, LinkedIn and email links. The back-to-top button appears after the visitor scrolls down the page.

## Theme system

Theme logic is implemented in:

```text
src/hooks/useTheme.ts
```

The supported themes are:

```text
dark
light
```

The current theme is stored using this local-storage key:

```text
shahid-portfolio-theme
```

Theme CSS variables are defined in `src/index.css`:

```css
:root {
  --bg: #080b14;
  --surface: rgba(18, 28, 48, 0.65);
  --text: #f5f7fb;
  --text-soft: #cbd5e5;
  --muted: #8d9ab0;
  --primary: #8ab4ff;
  --primary-strong: #5e91ff;
  --secondary: #b890ff;
  --cyan: #6ee7f9;
  --green: #83e6a7;
}
```

Light theme overrides are applied with:

```css
[data-theme="light"] {
  --bg: #eef3fb;
  --surface: rgba(255, 255, 255, 0.7);
  --text: #142033;
  --text-soft: #40516c;
  --muted: #687891;
  --primary: #356bd8;
  --primary-strong: #2254bf;
  --secondary: #7649be;
  --cyan: #087f99;
  --green: #16874a;
}
```

## Color system

| Token | Dark theme | Purpose |
|---|---|---|
| `--bg` | `#080b14` | Main page background |
| `--bg-soft` | `#0f1728` | Soft background surfaces |
| `--surface` | `rgba(18, 28, 48, 0.65)` | Glass cards and panels |
| `--surface-strong` | `rgba(19, 30, 53, 0.92)` | Header and high-contrast panels |
| `--surface-light` | `rgba(255, 255, 255, 0.07)` | Subtle controls and tags |
| `--border` | `rgba(255, 255, 255, 0.14)` | Standard borders |
| `--border-strong` | `rgba(138, 180, 255, 0.48)` | Active and hover borders |
| `--text` | `#f5f7fb` | Primary text |
| `--text-soft` | `#cbd5e5` | Supporting text |
| `--muted` | `#8d9ab0` | Secondary and metadata text |
| `--primary` | `#8ab4ff` | Main accent |
| `--primary-strong` | `#5e91ff` | Buttons and strong accents |
| `--secondary` | `#b890ff` | Purple gradient accent |
| `--cyan` | `#6ee7f9` | API, data and validation accent |
| `--green` | `#83e6a7` | Availability and success status |

## Animation and interaction map

### Page load

- Hero content fades upward in a staggered sequence.
- Hero visual fades in and scales into position.
- The scroll cue fades in after the main hero content.

### Header

- Header receives the `is-scrolled` class after scrolling more than 24 pixels.
- Scrolled header moves slightly upward and receives a stronger border.
- Desktop navigation highlights the section currently visible in the viewport.
- Mobile navigation opens with a smooth height, opacity and vertical movement animation.

### Hero visual

- Outer orbit rotates continuously.
- Inner orbit rotates in the opposite direction.
- QA shield floats and gently rotates.
- Validation chart bars pulse continuously.
- API, data and OCR/LLM chips float vertically.
- QA console lifts and straightens on hover.

### About and Experience

- Content reveals while entering the viewport.
- Focus cards lift slightly on hover.
- Experience cards lift and brighten their border on hover.

### Skills

- Skill cards reveal with staggered timing.
- Cards lift on hover and display color-specific glow effects.
- Learning items slide into view.
- Automation progress bar grows when rendered.

### Projects

- Filter buttons update the selected category.
- Project cards animate when added, removed or repositioned.
- Project cards lift on hover.
- Native project details panels expand and collapse.

### QA Process and Education

- Workflow rows slide in from the side.
- Process rows move slightly on hover.
- Education items reveal in sequence.

### Accessibility

When the user enables `prefers-reduced-motion`, major animations and transitions are minimized or disabled through CSS and Motion behaviour.

## Assets

### Favicon

```text
public/favicon.svg
```

### Profile image

```text
public/images/shahid-profile.png
```

The header loads the profile image with:

```tsx
<img src="/images/shahid-profile.png" alt="" />
```

The empty alt text is intentional because the adjacent brand text already identifies Shahid.

### Resume

```text
public/resume/Shahid_Shaikh_QA_Engineer_Resume_2026.pdf
```

The resume is available from the desktop and mobile header.

## Responsive behaviour

The layout adapts at several viewport widths:

- Desktop: full navigation and two-column layouts
- Tablet: reduced navigation spacing and stacked section layouts
- Mobile: hamburger navigation, one-column cards and full-width actions
- Small mobile: compact header controls, smaller hero typography and reduced visual spacing

The mobile header is designed for narrow screens and keeps the theme toggle and hamburger button aligned on the right side.

## Accessibility details

The portfolio includes:

- Semantic sections and headings
- Accessible navigation labels
- `aria-expanded` and `aria-controls` on the mobile menu
- `aria-current` for active navigation items
- Keyboard Escape support for closing the mobile menu
- Visible focus styles with `:focus-visible`
- Accessible labels for icon-only buttons
- Radio-group semantics for contact intent selection
- Reduced-motion support
- Native keyboard-friendly `<details>` controls for project information

## Deployment

The project creates a static Vite build, so it can be deployed to Vercel, Netlify, GitHub Pages or another static hosting provider.

### Vercel

1. Import the GitHub repository into Vercel.
2. Keep the framework preset as Vite.
3. Use the default build command:

```bash
npm run build
```

4. Use the default output directory:

```text
dist
```

### Netlify

Use:

```text
Build command: npm run build
Publish directory: dist
```

### GitHub Pages

For GitHub Pages, configure the Vite base path if the site is served from a repository subpath. If using a custom domain or a host that serves from the root, the default Vite configuration is sufficient.

## Updating portfolio content

### Update projects

Edit:

```text
src/data/projects.ts
```

The `Project` type is defined in:

```text
src/types/portfolio.ts
```

### Update experience

Edit:

```text
src/data/experience.ts
```

### Update skills

Edit:

```text
src/data/skills.ts
```

### Update contact templates

Edit the `emailTemplates` object in:

```text
src/components/sections/Contact.tsx
```

### Update theme colors

Edit the CSS variables at the top of:

```text
src/index.css
```

## Quality checklist

Before publishing changes, run:

```bash
npm run lint
npm run build
```

Then manually check:

- Desktop header navigation
- Mobile hamburger menu
- Light and dark themes
- Hero buttons
- Project filters
- Project detail expansion
- Gmail compose links
- LinkedIn link
- Resume link
- Phone link
- Back-to-top button
- 320px, 375px, 390px and desktop layouts
- Keyboard navigation
- Reduced-motion behaviour

## Known implementation notes

- Gmail compose links open Gmail in a new browser tab and prefill the message. They cannot send email automatically.
- The default email-app flow depends on the visitor's operating-system `mailto:` configuration.
- The project is currently a front-end-only application with no backend or database.
- Portfolio data is intentionally kept in typed local files for simple maintenance.

## License

This portfolio is a personal project by Shahid Shaikh. Contact the author before reusing personal content, profile information, resume files or branding assets.
