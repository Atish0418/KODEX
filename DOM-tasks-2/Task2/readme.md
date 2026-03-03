# 📌 **Random Color Card Generator**

> A fun interactive web project that generates colorful cards with random sizes and background colors on button click. Each card has a unique `data-id`. 🎨✨

---

## 🌟 Demo

🔗 **Live Demo:** https://extraordinary-melomakarona-5bee36.netlify.app/

---

## 🧠 What This Project Does

When the user clicks the “GENERATE CARD” button:

* A new card is created dynamically.
* Each card receives a **random RGB background color**.
* Each card gets a **random width and height**.
* Each card gets a **unique `data-id`** attribute.
* Cards are displayed in a responsive layout.

---

## 🚀 Features

* 💡 Dynamically created cards using JavaScript
* 🎨 Randomized colors using `Math.random()` and `Math.floor()`
* 📏 Random width and height
* 🔢 Each card has a unique identifier (`data-id`)
* 📱 Responsive layout
* 🧼 Clean and simple UI

---

## 🛠️ How It Works

The core logic uses:

1. **DOM Manipulation**
   Creating elements (`document.createElement`) and appending them to the page.

2. **Randomization**

   * RGB color values generated using:

     ```js
     Math.floor(Math.random() * 256)
     ```
   * Width and height randomly calculated within a range.

3. **Unique IDs**
   Each new card gets a unique `data-id`:

   ```js
   card.setAttribute("data-id", idCounter);
   ```

---

## 🧪 Installation / Run Locally

To view or develop this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```
2. **Open the project folder**

   ```bash
   cd your-repo
   ```
3. **Open `index.html` in a browser**

No backend or special build tools are required — it’s a pure HTML/CSS/JS project.

---

## 🛠️ Technologies Used

* 📄 HTML
* 🎨 CSS
* 💻 JavaScript

---

## 🎯 Usage

Simply open the webpage and click the **GENERATE CARD** button to create styled cards with random designs.

---

## 📂 Project Structure

```
📦 project-folder  
 ┣ index.html
 ┃ style.css  
 ┣ script.js 
 ┗ README.md
```

---

## 📝 Contributing

Contributions are welcome! You can:

* Add new features
* Improve responsiveness
* Add card deletion or animations

---

## 📜 License

This project is open source — feel free to use and modify. 
---

