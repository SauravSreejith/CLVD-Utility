# 🎥 Command-Line YouTube Video Downloader

![](https://i.ibb.co/ZyF0Vjr/huge.png)

A simple yet powerful command-line utility to download YouTube videos and audio directly to your computer.  
No ads, no trackers, no clutter — just fast and reliable downloads.

Supports:
- ✅ Video download (MP4)
- ✅ Audio extraction (MP3)

> Tested on **Node.js v23.4.0**

---

## 🚀 Features

- Download YouTube videos as MP4
- Convert YouTube videos to MP3 audio
- No external websites or annoying ads
- Lightweight and fast
- Compatible with Replit for easy hosting

---

## 🛠️ Installation

### 1. Install Node.js (Required)

Node.js is required to run this program.  
Download and install Node.js based on your operating system:

- **Windows**:  
  Download from [https://nodejs.org/en/download](https://nodejs.org/en/download), run the installer, and follow the setup instructions.

- **macOS**:  
  Use Homebrew:  
  ```bash
  brew install node
  ```

- **Linux (Debian/Ubuntu-based)**:  
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```

- **Arch Linux**:  
  ```bash
  sudo pacman -S nodejs npm
  ```

After installation, verify:
```bash
node -v
npm -v
```

### 2. Download the Project Files

- Clone the repository or download the ZIP file and extract it.
- Place all files in the same folder.

### 3. Install Dependencies

For Windows:
- Double-click the `install.bat` file to automatically install dependencies.

For other platforms (or manually):
```bash
npm install
```

---

## ▶️ Usage

### Windows
- Run `run.bat`.

### macOS / Linux / Replit
- Open your terminal and navigate to the project directory.
- Start the program with:
  ```bash
  node index.js
  ```

### Steps to Download:

1. Enter the **video name** when prompted.
2. Choose the **format**: `mp3` or `mp4`.
3. Wait for the download to complete!

---

## 💻 Running on Replit

You can also host and run this project on Replit:

1. Create a new **Bash** Repl.
2. Clone this repository:
   ```bash
   git clone <your-repo-link>
   cd <repo-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the program:
   ```bash
   node index.js
   ```

> Tip: You can safely delete `install.bat` and `run.bat` on Replit since they're Windows-specific.

---

## ❓ FAQ

### Why is the download taking too long?
Download speed depends on:
- Video duration
- Your internet speed
- System performance

Longer videos will naturally take more time.

### What is Node.js?
Node.js is a JavaScript runtime that allows you to run JavaScript code outside a browser.  
This project uses Node.js along with `ytdl-core` and other packages to fetch and process YouTube content.

### I’m seeing permission errors!
If you encounter permission issues, try:
- Running `run.bat` as Administrator on Windows.
- On macOS/Linux, ensure you have write permissions to the destination directory.

### Video not found?
- Double-check your search query.
- URLS are not supported as of now
- Ensure your internet connection is stable.
- Try using more specific keywords.

---

## ❤️ Made with Love, using JavaScript





