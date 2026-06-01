# Contributing to ms-ui-kit 🚀

Thank you for checking out **ms-ui-kit**! We are incredibly excited to welcome you. Whether you are fixing a small styling bug or building a completely new UI component, your contributions make this library better for everyone.

## ⭐ Support the Project

If you enjoy using or contributing to **ms-ui-kit**, please consider giving the repository a **star** on GitHub. It helps the project gain visibility, motivates contributors, and supports the growth of the open-source community around the project.

⭐ https://github.com/maheshshinde9100/ms-ui-kit

This repository is proudly participating in **GirlScript Summer of Code (GSSoC '26)**. Since we are a growing, focused project, we keep things simple, welcoming, and collaborative! Please read through these quick guidelines before getting started.

---

## 📌 GSSoC '26 Rules & Expectations

To ensure fair play and smooth tracking on the leaderboard, we strictly follow the official GSSoC guidelines:

* **Claim Before You Build:** Do not start working on a task or open a Pull Request (PR) until a project maintainer has explicitly assigned the issue to you. Unsolicited PRs cannot be accepted.
* **No Point Farming (Trivial Changes):** GSSoC rewards quality over quantity. Tiny PRs solely for changing whitespaces, fixing typos in comments, or modifying cosmetic text in the README will be marked as invalid/spam.
* **Inactivity Policy:** If you are assigned an issue but show no progress or communication within **3 days**, the issue will be unassigned so another contributor can take it over.
* **AI Tool Transparency:** You are welcome to use AI (ChatGPT, Copilot, etc.) as a learning tool to help debug or sketch code. However, blindly copy-pasting unverified AI code is not allowed. You must fully understand the code you submit.

---

## 🛠️ Getting Started

### Prerequisites

* Node.js 18.x or higher
* npm

### Local Setup Instructions

1. Fork the repository.
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/ms-ui-kit.git
   cd ms-ui-kit
   ```
3. Add upstream remote:

   ```bash
   git remote add upstream https://github.com/maheshshinde9100/ms-ui-kit.git
   ```
4. Install dependencies:

   ```bash
   npm install
   ```
5. Run the development server:

   ```bash
   npm run dev
   ```

Open http://localhost:5173 in your browser.

---

## 🌿 Branch Naming Preference

| Prefix | Focus Area                        | Example                     |
| ------ | --------------------------------- | --------------------------- |
| feat/  | New UI component or functionality | feat/avatar-component       |
| fix/   | Bug fixes and improvements        | fix/navbar-mobile-toggle    |
| docs/  | Documentation updates             | docs/add-contributing-guide |
| style/ | Styling and formatting updates    | style/button-padding        |

Create your branch:

```bash
git checkout -b <prefix>/your-feature-name
```

---

## 🎨 UI Component Code Standards

* Built with React + Tailwind CSS + Lucide React.
* Ensure responsiveness across mobile, tablet, and desktop.
* Build reusable and configurable components using props.
* Follow the existing folder structure and coding style.
* Avoid adding unnecessary dependencies.

---

## 📥 Submitting Your Pull Request (PR)

1. Sync with the latest main branch:

   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch-name
   git merge main
   ```

2. Push your changes:

   ```bash
   git push origin your-branch-name
   ```

3. Open a Pull Request.

4. PR Requirements:

   * Use a clear title.
   * Link the issue using `Closes #issue_number` or `Fixes #issue_number`.
   * Include screenshots/GIFs for UI changes.
   * Ensure your code is tested before submission.

---

## 🤝 Need Help?

If you have any questions regarding issues, setup, or contribution workflow, feel free to ask in the issue discussion before starting work.

Thank you for contributing to **ms-ui-kit** and helping us build a better React UI component library. Happy coding! 🎉
