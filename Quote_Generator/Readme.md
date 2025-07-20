# ✨ QUOTERIPPLE — Random Quote Generator

This is a clean, elegant, and responsive **Random Quote Generator** built using **HTML, CSS, and Vanilla JavaScript**. It fetches a new inspirational quote every time you click the "New Quote" button and also lets you tweet your favorite quote directly.

## 🌟 Features

- 📜 Fetches a new random quote on button click
- ✍️ Displays the quote content and author beautifully
- 🐦 Tweet the current quote with a single click
- 🎨 Stylish and responsive UI
- 🔄 Consumes the [Quotes15 API](https://rapidapi.com/15gifts/api/quotes15/) via RapidAPI

## 🔗 Live Preview

👉 [View Live App](https://quoteripple.netlify.app/)


## ⚙️ Tech Used

- HTML5
- CSS3 (Flexbox, box-shadow, responsive layout)
- JavaScript (ES6+)
- RapidAPI – [Quotes15 API](https://rapidapi.com/15gifts/api/quotes15/)

## 🚀 How It Works

1. On page load, the app fetches a random quote from the API.
2. The quote and the author name are displayed in the styled quote box.
3. Clicking the **New Quote** button triggers another fetch request.
4. The **Tweet** button opens Twitter with the quote prefilled in a new window.

## 🧪 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Deyasin-Srijon/JS-30xpress/Quote_Generator.git
   cd Quote_Generator
   ```

2. Add your **RapidAPI Key** in `script.js`:
   ```js
   const options = {
     method: "GET",
     headers: {
       "x-rapidapi-key": "YOUR_API_KEY_HERE",
       "x-rapidapi-host": "quotes15.p.rapidapi.com",
     },
   };
   ```

3. Open `index.html` in your browser.

## 🔐 Important

> ❗ **Do not expose your actual API key** in public repositories. Use `.gitignore` to avoid pushing sensitive data or shift to a backend proxy for production use.

## 💡 What I Learned

- Using Fetch API to connect with external APIs
- DOM manipulation with vanilla JavaScript
- UI styling with modern CSS techniques
- Integrating social sharing via Twitter