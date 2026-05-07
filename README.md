UMIT UniBot 🤖

An AI-powered student support chatbot built using HTML, CSS, JavaScript, Node.js, Express, and OpenAI API.
The chatbot provides college related information using a custom dataset and also supports PDF summarization.

Features

- AI-powered chatbot
- College specific question answering
- Custom knowledge base using "data.txt"
- PDF upload and summarization
- Real time chat interface
- Domain specific responses
- Simple and modern UI

Technologies Used

Frontend
- HTML
- CSS
- JavaScript
Backend
- Node.js
- Express.js
AI Integration
- OpenAI API
Libraries Used
- express
- cors
- body-parser
- multer
- pdf-parse
- openai

Project Structure

UMIT-UniBot
│
├── index.html
├── server.js
├── data.txt
├── package.json
├── package-lock.json
├── node_modules/
├── uploads/

Installation

1. Clone or Download Project
Place all files inside a project folder.

2. Install Node.js
Download and install Node.js.

3. Install Dependencies
Open terminal in project folder and run:
npm install

Required Packages
If needed, install manually:
npm install express cors body-parser openai multer pdf-parse

Add API Key
Open "server.js"
Replace:
apiKey: "GIVEN IN THE CODE"

Run the Project

Start the server:
node server.js

Open the Application

Open browser and visit:

http://localhost:3000

How It Works

Chat System
1. User enters message
2. Frontend sends request to backend
3. Backend reads "data.txt"
4. AI processes question using provided context
5. Response is returned to user

PDF Summarization
1. User uploads PDF
2. Backend extracts text using "pdf-parse"
3. Extracted text is sent to AI
4. AI returns summarized content

Knowledge Base
The chatbot uses "data.txt" as a lightweight knowledge base.

It contains:
- College information
- Courses
- Placements
- Facilities
- FAQs

Important Files

index.html
Contains frontend UI and JavaScript logic.

server.js
Handles backend logic, API calls, routes, and PDF processing.

data.txt
Stores chatbot knowledge and FAQ data.

API Model Used
gpt-4.1-mini

Used for:
- Chat responses
- PDF summarization

Advantages
- Fast responses
- Domain-specific answers
- Easy to update
- Lightweight architecture
- Beginner-friendly implementation

Limitations
- Depends on "data.txt"
- Cannot answer unknown questions
- PDF parsing may fail for scanned documents

Future Improvements
- Add database support
- Add authentication
- Improve UI/UX
- Add multilingual support
- Add semantic search

Example Questions

- What is UMIT?
- Does UMIT provide placements?
- Which branch is best in UMIT?
- What courses are available?
- Summarize this PDF

Conclusion
UMIT UniBot demonstrates the integration of frontend development, backend systems, AI APIs, and file processing into a practical student support application.
