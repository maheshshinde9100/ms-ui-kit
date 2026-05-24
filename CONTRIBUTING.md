# Contributing to ms-ui-kit 🚀

Thank you for checking out **ms-ui-kit**! We are incredibly excited to welcome you. Whether you are fixing a small styling bug or building a completely new UI component, your contributions make this library better for everyone.

This repository is proudly participating in **GirlScript Summer of Code (GSSoC '26)**. Since we are a growing, focused project, we keep things simple, welcoming, and collaborative! Please read through these quick guidelines before getting started.

---

## 📌 GSSoC '26 Rules & Expectations

To ensure fair play and smooth tracking on the leaderboard, we strictly follow the official GSSoC guidelines:

- **Claim Before You Build:** Do not start working on a task or open a Pull Request (PR) until a project maintainer has explicitly assigned the issue to you. Unsolicited PRs cannot be accepted.
- **No Point Farming (Trivial Changes):** GSSoC rewards quality over quantity. Tiny PRs solely for changing whitespaces, fixing typos in comments, or modifying cosmetic text in the README will be marked as invalid/spam.
- **Inactivity Policy:** If you are assigned an issue but show no progress or communication within **3 days**, the issue will be unassigned so another contributor can take it over.
- **AI Tool Transparency:** You are welcome to use AI (ChatGPT, Copilot, etc.) as a learning tool to help debug or sketch code. However, blindly copy-pasting unverified AI code is not allowed. You must fully understand the code you submit!

---

## 🛠️ Getting Started

Follow these steps to set up the UI kit on your local machine:

### Prerequisites

- **Node.js**: Version 18.x or higher.
- **Package Manager**: npm (bundled with Node.js).

### Local Setup Instructions

1. **Fork the Repository**: Click the **Fork** button at the top right of the [ms-ui-kit GitHub page](https://github.com/maheshshinde9100/ms-ui-kit).
2. **Clone Your Fork**:
   git clone https://github.com/YOUR_USERNAME/ms-ui-kit.git
   cd ms-ui-kit
3. **Set Up Upstream Remote**: Keep your local copy in sync with our main project:
   git remote add upstream https://github.com/maheshshinde9100/ms-ui-kit.git
4. **Install Dependencies**:
   npm install
5. **Run the Development Server**: Launch the Vite development server to test your work interactively:
   npm run dev

   Open http://localhost:5173 in your browser.

---

## 🌿 Branch Naming Preference

Before making code changes, branch off from the latest main branch. Please use clean, descriptive branch names utilizing these quick prefixes:

| Prefix | Focus Area                                                    | Example                     |
| :----- | :------------------------------------------------------------ | :-------------------------- |
| feat/  | New UI component or functionality                             | feat/avatar-component       |
| fix/   | Resolving bugs, styling glitches, responsiveness flaws        | fix/navbar-mobile-toggle    |
| docs/  | Improving documentation, adding comments, fixing setup guides | docs/add-contributing-guide |
| style/ | Minor Tailwind tweaks, padding fixes, or lint formatting      | style/button-padding        |

Create your branch with:
git checkout -b <prefix>/your-feature-name

---

## 🎨 UI Component Code Standards

When creating or upgrading components for **ms-ui-kit**, keep these baseline project guidelines in mind:

- **The Tech Stack:** Built natively with **React**, styled beautifully using **Tailwind CSS**, and utilizing **Lucide-React** for clean, scalable icons.
- **Responsiveness First:** Ensure any interface changes look flawless on both wide desktop layouts and mobile viewports.
- **Reusability:** Build components cleanly using flexible props (like custom className, variant, size, disabled) so they stay highly modular.

---

## 📥 Submitting Your Pull Request (PR)

Once your local changes are tested and ready:

1. **Keep it Synced:** Sync your branch with the upstream project to avoid merge conflicts:
   git checkout main
   git pull upstream main
   git checkout your-branch-name
   git merge main
2. **Push Code:** Push your feature branch to your personal fork:
   git push origin your-branch-name
3. **Open the PR:** Head over to the original [ms-ui-kit repository](https://github.com/maheshshinde9100/ms-ui-kit) and click "Compare & pull request".
4. **Fill the Details:**
   - Provide a concise title describing your change (e.g., feat: Added responsive Accordion component #12).
   - **Crucial:** Explicitly link your assigned issue in the PR description body using tracking keywords like Closes #12 or Fixes #12 so the issue closes automatically upon merge.
   - If you changed or added something visual, please include a quick screenshot or a clear descriptive GIF in the PR description body!

Thank you for lending your skills to help grow **ms-ui-kit**! Let’s build something spectacular together for GSSoC '26! 🎉
