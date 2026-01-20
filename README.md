React AI Recipe Ingredient App

This is a simple React application that allows users to input ingredients and send them to the Claude AI for processing. The app aims to help users find recipe suggestions or gain insights based on the ingredients they have on hand.

Features

Input ingredients (comma-separated) into a form.

Send the list of ingredients to Claude AI for analysis.

Receive recipe suggestions or insights based on the ingredients.

User-friendly interface built with React.

Technologies Used

React – Frontend framework used to build the app's user interface.

Claude AI API – Used for processing and generating recipe suggestions or insights based on the ingredients.

Axios/Fetch – Used to send requests to the backend/API.

CSS – For styling the components.

Setup & Installation

To get the project up and running locally:

Prerequisites

Ensure you have Node.js and npm installed. You can check this by running the following commands in your terminal:

node -v
npm -v

If you don't have them installed, you can download and install them from Node.js Official Website
.

Installation

Clone the repository to your local machine:

git clone https://github.com/yourusername/react-ai-recipe-app.git

Navigate to the project directory:

cd react-ai-recipe-app

Install the dependencies:

npm install

Set up your API Key:

Create a .env.local file in the root of the project (if not already created).

Inside .env.local, add your Claude AI API key:

REACT_APP_CLAUDE_API_KEY=your_api_key_here

You can obtain your Claude AI API key from Claude AI's official site
.

Start the development server:

npm start

Your app should now be running at http://localhost:3000
.

How to Use

Enter Ingredients: In the input field, type the ingredients you have (separate them by commas).

Submit: Press the "Send Ingredients" button to send your list of ingredients to Claude AI for analysis.

View Results: Once Claude AI processes your ingredients, it will return recipe suggestions or relevant insights that match your ingredients.

Example

Ingredients: "chicken, tomatoes, garlic, olive oil"

AI Response: "You can make a delicious chicken tomato stew or a grilled chicken salad."

Contributing

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature/your-feature).

Create a new Pull Request.

License

This project is licensed under the MIT License – see the LICENSE
file for details.

Acknowledgements

Thanks to Claude AI
for providing the AI model.

Inspiration for this project comes from the idea of making cooking easier using technology.
