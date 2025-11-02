## 🖼️ Online Photo Printing Demo

### 📌 Objective

This project is a **simple mock-up demo** of an online photo printing web application, built using **Next.js** and **TypeScript (TSX)**.
It allows users to **upload photos**, **select print sizes**, and **calculate the total price** automatically — simulating a real-world photo printing experience.

---

### 🚀 Live Demo

🔗 **[View Live on Vercel](https://your-vercel-demo-link.vercel.app)**
💻 **[GitHub Repository](https://github.com/your-username/photo-print-demo)**

---

### 🧠 Features

✅ Upload up to **5 photos** (mobile-friendly drag & select).
✅ Preview **photo thumbnails** instantly.
✅ Choose print sizes — **4×6**, **5×7**, **8×10**.
✅ Automatic **price calculation**:

| Size                                                                                     | Price (AED) |
| ---------------------------------------------------------------------------------------- | ----------- |
| 4×6                                                                                      | 1.5         |
| 5×7                                                                                      | 3           |
| 8×10                                                                                     | 5           |
| ✅ **Responsive layout** (mobile-first design).                                           |             |
| ✅ Fake **“Pay Now”** button with confirmation modal and success popup (no real payment). |             |

---

### 🏗️ Tech Stack

* **Next.js 14** (React + App Router)
* **TypeScript (TSX)**
* **Tailwind CSS** for responsive UI
* **Framer Motion** for smooth animations
* **Lucide Icons** for simple modern icons

---

### ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/photo-print-demo.git
   cd photo-print-demo
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run the development server**

   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🧩 How It Works

* The app uses the **File API** and `URL.createObjectURL` for instant image previews (no backend required).
* Prices are defined in a simple **price map** based on selected size.
* The total updates automatically as you upload or remove photos.
* A modal confirms the order before “payment,” followed by a success popup animation.

---

### 📱 Mobile Optimization

* Built mobile-first using Tailwind breakpoints.
* Images and modals scale well on all screen sizes.
* Light CSS and no heavy dependencies → **fast page load** even on 3G.

---

### 🧹 Code Quality

* Clean, modular structure (`components`, `types`, etc.).
* Clear naming conventions and comments for maintainability.
* Small stateful logic blocks using React hooks.

---

### 🙌 Author

**Aalia Khan**
Frontend Developer | React & Next.js Enthusiast
📧 [[your.email@example.com](mailto:your.email@example.com)]
🌐 [your-portfolio-link.com]

---

Would you like me to tailor the **README’s “Author” and “Demo links” section** with your actual GitHub/Vercel links so you can just paste and go?
