Visual AI Agent - Chrome Extension

Overview

## 📌 Project Overview

Visual AI Agent is an AI-powered Chrome extension developed to analyze the content of the currently active browser tab. 
The extension captures the visible webpage as a screenshot and processes it using Google's Gemini AI model to generate a 
meaningful summary of the page. The application automatically detects the active website and extracts visual information 
from the displayed content. Based on the captured image, the AI analyzes the webpage and provides a concise description of 
what the page contains. This project demonstrates the integration of Chrome Extension APIs with Artificial Intelligence 
to automate webpage understanding. It showcases how browser automation and AI can work together to deliver useful insights
from web content. The extension is built using HTML, CSS, and JavaScript, making it lightweight and easy to use. It leverages 
Chrome's captureVisibleTab  API for screen capture and communicates with the Gemini API using the Fetch API for AI-powered analysis.
The project follows a modular structure, separating the user interface, browser operations, and AI logic into different files for
better readability and maintainability. Visual AI Agent serves as a practical example of combining browser automation, image processing,
and generative AI in a real-world application. It can be further enhanced with features such as browsing history analysis, productivity 
tracking, website categorization, dashboard analytics, and cloud-based data storage, making it a strong foundation for intelligent browser
assistant applications.

Features

- 📸 Capture the active browser tab
- 🌐 Detect the current website
- 🔍 Analyze webpage content using AI
- 📝 Generate an AI-powered summary
- 🖼️ Display the captured screenshot
- ⚡ Lightweight and easy to use
- 💻 Built using Chrome Extension APIs and JavaScript
-----
How it works? 

1. Open any webpage in Google Chrome.
2. Click the **Visual AI Agent** extension.
3. Press the **Capture & Analyze** button.
4. The extension captures the visible browser tab as an image.
5. The captured page is analyzed using the Google Gemini AI model.
6. AI identifies the webpage content and generates a concise summary.
7. The website name, screenshot, and AI-generated analysis are displayed in the popup.
-------------
 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Chrome Extension APIs
- Google Gemini API (Vision)
- Fetch API

---

Project Structure

```
visual-ai-agent/
│
├── manifest.json              # Chrome extension configuration
├── background.js              # Background service worker
│
├── popup/
│   ├── popup.html             # Extension popup UI
│   ├── popup.css              # Popup styling
│   └── popup.js               # Popup functionality
│
├── scripts/
│   ├── ai.js                  # Gemini AI API integration
│   ├── capture.js             # Screen capture functions
│   ├── browser.js             # Browser utility functions
│   └── utils.js               # Helper functions
│
└── README.md
```

---

 Installation

1. Clone the repository

```bash
git clone https://github.com/andekiran7/visual-AI-agent.git
```

2. Open Chrome and navigate to:

```
chrome://extensions
```

3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the **visual-ai-agent** project folder.

6. Pin the extension and start using it.

---

How It Works

1. Open any webpage.
2. Click the Visual AI Agent extension.
3. Press **Capture & Analyze**.
4. The extension captures the visible browser tab.
5. The screenshot is sent to the AI model for analysis.
6. The generated summary is displayed in the popup.

---

Sample Output

- Website Name
- Screenshot Preview
- AI-generated Summary
- User Activity Analysis

---

Future Enhancements

- User activity history
- Dashboard with analytics
- Website categorization
- Productivity tracking
- Local database integration
- Cloud synchronization
- Enhanced AI insights

---
Screen Shots:
<img width="892" height="368" alt="Screenshot 2026-07-31 003747" src="https://github.com/user-attachments/assets/b2d7ea60-21b6-43a7-9995-e5a639253fed" />

<img width="554" height="310" alt="Screenshot 2026-07-31 002533" src="https://github.com/user-attachments/assets/36166f9c-c842-4c4b-88ce-2a5c9bee8edc" />

Author

**Kiran Ande**

GitHub: https://github.com/andekiran7

