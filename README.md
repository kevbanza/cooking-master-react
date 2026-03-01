# 🤖🍳 React AI Recipe Ingredient App

An AI-powered recipe suggestion application built with React.  
This app allows users to input available ingredients and receive intelligent recipe suggestions or cooking insights powered by Claude AI.

---

## 📖 Overview

The React AI Recipe Ingredient App helps users discover meal ideas based on ingredients they already have.

Users simply enter a list of ingredients, and the application sends the data to Claude AI for analysis. The AI then generates relevant recipe suggestions or cooking recommendations.

This project demonstrates API integration, state management, and modern React development practices.

---

## ✨ Features

- Input ingredients (comma-separated format)
- Send ingredient list to Claude AI API
- Receive AI-generated recipe suggestions
- Clean and user-friendly interface
- Responsive design
- Environment variable-based API key configuration

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React | Frontend framework |
| JavaScript (ES6+) | Application logic |
| Claude AI API | AI-powered recipe generation |
| Axios / Fetch | API requests |
| CSS | Styling and layout |

---

The application follows a component-based architecture using React functional components and hooks.

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check your installation:

```bash
node -v
npm -v
```

If not installed, download from the official Node.js website.

---

### 🚀 Installation

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/kevbanza/cooking-master-react.git
cd react-ai-recipe-app
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```
REACT_APP_CLAUDE_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual Claude AI API key.

⚠️ Never commit your `.env.local` file to version control.

#### 4️⃣ Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 🧠 How It Works

1. User enters ingredients separated by commas  
   Example:  
   ```
   chicken, tomatoes, garlic, olive oil
   ```

2. The app sends a request to the Claude AI API.

3. Claude AI processes the ingredient list and returns recipe suggestions.

4. The results are displayed dynamically in the interface.

---

## 🧪 Example

**Input:**  
```
chicken, tomatoes, garlic, olive oil
```

**AI Output:**  
> You can prepare a flavorful chicken tomato stew or a grilled chicken salad with garlic dressing.

---

## 📌 Future Improvements

- Add loading indicator while waiting for AI response
- Add error handling UI for failed requests
- Save previous searches
- Add recipe difficulty level
- Add cooking time estimation
- Deploy to Vercel or Netlify

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a new branch  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch  
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.  
See the `LICENSE` file for more details.

---

## 🙏 Acknowledgements

- Claude AI for providing the AI-powered language model  
- Inspired by the idea of simplifying home cooking using artificial intelligence  

---

## 👨‍💻 Author

Developed as a React + AI integration project to demonstrate API consumption and modern frontend development practices.
