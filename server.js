const pdfParse = require("pdf-parse");
const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

// 📄 Read data.txt
const data = fs.readFileSync(path.join(__dirname, "data.txt"), "utf-8");

const app = express();
app.use(cors());
app.use(express.static(__dirname)); // serve frontend
app.use(bodyParser.json());

// 🔐 API Key
const openai = new OpenAI({
  apiKey: "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"
});


// 💬 CHAT ROUTE
app.post("/chat", async (req, res) => {
  let userMessage = req.body.message;

  if (!userMessage) {
    return res.json({ reply: "Please enter a message." });
  }

  userMessage = userMessage.toLowerCase();

  console.log("User message:", userMessage);

  // ⚡ quick replies
  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    return res.json({ reply: "Hello! How can I help you today?" });
  }

  if (userMessage.includes("bye")) {
    return res.json({ reply: "Goodbye! Have a great day!" });
  }

  if (userMessage.includes("thank")) {
    return res.json({ reply: "You're welcome! 😊" });
  }

  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
Context:
${data}

Question:
${userMessage}
`
    });

    const reply = response.output_text || "I don't know";

    console.log("FINAL REPLY:", reply);

    res.json({ reply });

  } catch (error) {
    console.error("CHAT ERROR:", error);
    res.json({ reply: "Something went wrong." });
  }
});


// 📄 PDF UPLOAD ROUTE (FIXED ✅)
app.post("/upload-pdf", upload.single("file"), async (req, res) => {
  try {
    console.log("PDF route hit");

    if (!req.file) {
      console.log("No file received");
      return res.json({ summary: "No file uploaded" });
    }

    console.log("FILE RECEIVED:", req.file);

    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    console.log("PDF TEXT LENGTH:", pdfData.text.length);

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
Summarize this PDF in simple points:

${pdfData.text}
`
    });

    const summary = response.output_text || "No summary";

    res.json({ summary });

  } catch (error) {
    console.error("PDF ERROR:", error);
    res.json({ summary: "Error processing PDF" });
  }
});


// 🚀 START SERVER
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});