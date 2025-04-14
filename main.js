
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const ytsr = require("youtube-sr").default;


const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  magenta: "\x1b[35m",
  white: "\x1b[37m"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(query) {
  return new Promise(resolve => rl.question(query, resolve));
}


function formatDuration(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const padmin = String(minutes).padStart(2, '0');
    const padsec = String(seconds).padStart(2, '0');

    return hours > 0 ? `${hours}:${padmin}:${padsec}` : `${minutes}:${padsec}`;
}

async function main() {
  console.clear();
  console.log(`${colors.bright}${colors.red}CLVD${colors.white} Utility${colors.reset}\n`);

  try {
    const query = await prompt(`${colors.cyan}Search video:${colors.reset} `);
    const format = await prompt(`${colors.yellow}Download Format [mp3 or mp4]:${colors.reset} `);

    const allowedFormats = ['mp3', 'mp4'];
    if (!allowedFormats.includes(format.toLowerCase())) {
      console.log(`${colors.magenta}Invalid format provided. Must be either mp3 or mp4.${colors.reset}`);
      return main();
    }

    console.log(`\n${colors.cyan}Searching for video...${colors.reset}\n`);
    const searchResults = await ytsr.search(query, { limit : 1});

    if (!searchResults) {
      console.log(`${colors.red}Video not found.${colors.reset}`);
      return main();
    }

    const info = await ytdl.getBasicInfo(searchResults[0].url)
    console.log(`${colors.green}Video Found!${colors.reset}`);
    console.log(`${colors.cyan}Title:${colors.reset} ${info.videoDetails.title}`);
    console.log(`${colors.cyan}Duration:${colors.reset} ${formatDuration(info.videoDetails.lengthSeconds)}`);
    console.log(`${colors.cyan}Category:${colors.reset} ${info.videoDetails.category || 'N/A'}`);
    console.log(`${colors.cyan}Author:${colors.reset} ${info.videoDetails.author.name || 'N/A'}\n`);


    const filename = searchResults[0].title.replace(/[^a-zA-Z0-9 -]/g, '');;
    const filepath = path.join(process.cwd(), `${filename}.${format}`);

    if (fs.existsSync(filepath)) {
      console.log(`${colors.yellow}File already exists. Deleting...${colors.reset}`);
      fs.unlinkSync(filepath);
    }

    console.log(`${colors.yellow}Starting download...${colors.reset}`);

    

    const stream = ytdl(searchResults[0].url, { filter: format === 'mp4' ? 'audioandvideo' : 'audioonly' });

    stream.pipe(fs.createWriteStream(filepath));

    stream.on('end', () => {
      console.log(`${colors.green}Download complete! Saved as: ${filepath}${colors.reset}`);
      looper();
    });

    stream.on('error', (err) => {
      console.error(`${colors.red}Error during download: ${err.message}${colors.reset}`);
      looper();
    });

  } catch (err) {
    console.error(`${colors.red}Error: ${err.message}${colors.reset}`);
    looper();
  }
}


function looper() {
  prompt(`\n${colors.cyan}Do you want to download another video? (y/n):${colors.reset} `)
    .then(answer => {
      if (answer.trim().toLowerCase() === 'y') {
        main();
      } else {
        console.log(`${colors.green}Goodbye!${colors.reset}`);
        rl.close();
      }
    });
}

main();
