# 🛡️ Advanced Password Strength Analyzer (Client-Side Evaluation Engine)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A high-performance, real-time password security evaluation engine. Built specifically to analyze cryptographic strength based on structural complexity, entropy, and standard cybersecurity protocols without transmitting sensitive data over the network.

**[🔴 Live Deployment (Vercel)](https://pro-stack-hub-password-analyzer.vercel.app)**

---

## 🏗️ Architecture & Development Approach

Unlike standard UI-bound logic, this project implements a **Modular Architecture** typical of enterprise React applications:
- **Separation of Concerns:** The evaluation logic is entirely decoupled from the React components (`src/utils/passwordChecker.js`), ensuring the core algorithm can be unit-tested or reused in backend Node.js environments.
- **Render Optimization:** Utilized React's `useMemo` hook to cache the security analysis, preventing unnecessary re-renders and maintaining a 60fps UI even during rapid typing.
- **Zero-Dependency Core:** The password evaluation engine relies on raw Regex and mathematical scoring, avoiding bulky third-party validation libraries.

## ✨ Key Features
- **Real-Time Entropy Scoring:** Evaluates multiple constraints (length, casing, numerics, symbols) in milliseconds.
- **Actionable Feedback Loop:** Dynamically generates a specific array of issues, guiding the user to strengthen their password.
- **Glassmorphism UI:** Built with custom, dependency-free CSS implementing modern backdrop-filters and smooth state transitions.

---

## 🔒 Security Brief: Password Best Practices
As per industry-standard cybersecurity guidelines, organizations and end-users should enforce the following:

1. **Length > Complexity:** A minimum of 12-14 characters. A long, memorable passphrase (e.g., `Coffee-Desk-Sunset-99`) is cryptographically stronger against brute-force/dictionary attacks than a short, complex password (`P@ss12`).
2. **High Entropy:** Ensure a diverse character space—mixing uppercase, lowercase, numerics, and non-alphanumeric symbols.
3. **Avoid Predictability:** Never use sequential patterns (123456, qwerty), common dictionary words, or easily OSINT-discoverable personal data (DOBs, phone numbers).
4. **Contain the Blast Radius:** Enforce strict "No Reuse" policies across different applications to mitigate credential stuffing attacks.
5. **MFA is Mandatory:** A strong password is only the primary defense layer. It must be paired with Multi-Factor Authentication (MFA/2FA).

---

## 💻 Local Setup & Installation

Clone the repository and run it locally:
# Clone the repository
git clone https://github.com/namangwl/ProStackHub_PasswordAnalyzer.git
# Navigate to the directory
cd ProStackHub_PasswordAnalyzer

# Install dependencies
npm install

# Start the Vite development server
npm run dev
\`\`\`

---
*Developed as part of the ProStackHub Cybersecurity & Development Internship Track.*
