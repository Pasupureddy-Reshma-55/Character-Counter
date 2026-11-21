# 📝 Character Counter – Word & Character Counting Tool

## 📌 Project Overview

The **Character Counter** is a simple, interactive, and user-friendly web application developed to count the total number of characters and words entered by a user.

This application provides real-time text analysis by automatically calculating the number of characters, words, and remaining characters while the user types. It has a maximum input limit of 200 characters, making it useful for writing short messages, social media captions, descriptions, and other text-based content.

The application also includes a Clear button that allows users to remove all entered text and reset the counters instantly.

The main objective of this project is to create a useful text-counting tool while gaining practical experience in front-end web development using HTML, CSS, and JavaScript.

## 🎯 Project Objectives

- Develop a simple and interactive text-counting application.
- Calculate characters and words automatically.
- Display the remaining character limit dynamically.
- Understand JavaScript DOM manipulation.
- Learn how to handle user input events.
- Improve logical thinking and problem-solving skills.
- Gain practical experience in front-end development.

## ✨ Key Features

### 1. Real-Time Character Counting
Automatically counts the total number of characters entered by the user without requiring an additional button click.

### 2. Automatic Word Counting
Counts the total number of words entered in the text area. It handles multiple spaces between words and displays zero when the text area is empty.

### 3. Maximum Character Limit
The application allows users to enter a maximum of 200 characters using the HTML maxlength attribute.

### 4. Remaining Character Display
Displays the number of characters remaining out of the maximum limit of 200.

### 5. Clear Text Functionality
Provides a Clear button that removes all entered text and resets the character count, word count, and remaining character count.

### 6. Simple User Interface
Provides a clean and attractive interface with a light blue background, white container, and blue-colored buttons.

### 7. Instant Updates
All counting results are updated dynamically whenever the user enters or removes text.

## 🛠️ Technologies Used

| Technology | Description |
|---|---|
| HTML5 | Creates the structure and text input area. |
| CSS3 | Designs the layout, colors, buttons, and styling. |
| JavaScript | Implements character counting, word counting, and clear functionality. |

## ⚙️ How the Application Works

1. The user opens the Character Counter application.
2. A text area is displayed with a placeholder asking the user to enter text.
3. The user starts typing inside the text area.
4. JavaScript detects the input event.
5. The application calculates the total characters using the string length property.
6. It calculates the total words by splitting the entered text using whitespace.
7. It calculates the remaining characters by subtracting the entered characters from 200.
8. All results are displayed instantly on the screen.
9. When the user clicks the Clear button, the text area and all counters are reset.

## 📊 Example Output

| Input | Result |
|---|---|
| Hello | 5 Characters, 1 Word |
| Hello World | 11 Characters, 2 Words |
| Welcome to JavaScript | 22 Characters, 3 Words |

**Maximum Characters:** 200

**Remaining Characters:** 200 − Entered Characters

## 📂 Project Structure

```text
Character-Counter/
│
├── Character Counter.html
│
├── Character Counter.css
│
├── Character Counter.js
│
└── README.md
```

### File Description

- **Character Counter.html:** Contains the webpage structure, text area, character count, word count, remaining count, and Clear button.
- **Character Counter.css:** Contains the styling, background colors, container design, buttons, and layout.
- **Character Counter.js:** Contains the JavaScript logic for real-time counting, word calculation, remaining character calculation, and clearing the text.
- **README.md:** Provides project information, features, technologies, and instructions.

## 🚀 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project

Open the downloaded project folder in Visual Studio Code or any code editor.

### Step 3: Run the Application

Open the `Character Counter.html` file in your web browser.

### Step 4: Start Using

Enter your text in the text area and watch the character count, word count, and remaining character count update automatically.

## 💻 JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

- **DOM Manipulation:** Accessing and updating HTML elements.
- **Variables:** Storing user input and calculation results.
- **Event Listeners:** Detecting user input using the input event.
- **Functions:** Creating reusable functions for counting and clearing text.
- **String Length:** Finding the total number of characters.
- **String Methods:** Using trim() and split() to calculate words.
- **Conditional (Ternary) Operator:** Handling empty text input.
- **innerHTML:** Displaying calculated results dynamically.

## 📚 What I Learned

While developing this project, I gained practical knowledge of:

1. Creating web page structures using HTML.
2. Designing attractive interfaces using CSS.
3. Handling user input through JavaScript.
4. Working with JavaScript string methods.
5. Counting words and characters dynamically.
6. Using DOM manipulation to update webpage content.
7. Implementing event listeners and functions.
8. Managing input limits using HTML attributes.
9. Improving problem-solving and logical skills.

## 🔮 Future Enhancements

The following features can be added to improve the application:

- Add a copy-text button.
- Add uppercase and lowercase conversion.
- Add sentence counting functionality.
- Add reading time estimation.
- Add dark mode and light mode.
- Add a text download option.
- Improve the responsive design for mobile devices.
- Add a reset confirmation message.

## 🌟 Advantages

- Easy to use and understand.
- Provides instant counting results.
- Saves time when checking text length.
- Helps users stay within character limits.
- Requires no additional software installation.
- Lightweight and fast web application.

## 🎓 Project Purpose

This project was developed as a beginner-friendly front-end web development project to practice HTML, CSS, and JavaScript concepts.

It demonstrates how interactive web applications can be created using basic web technologies and how JavaScript can dynamically update webpage content based on user actions.

## 👩‍💻 Author

**P.Reshma**

GitHub Profile: https://github.com/your-reshma

## 📄 License

This project is created for educational and learning purposes.

## ❤️ Support

If you find this project useful, please consider giving this repository a ⭐ star on GitHub.

**Thank you for visiting my project!**

Developed with ❤️ using HTML, CSS, and JavaScript.
