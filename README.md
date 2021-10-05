# COMMAND LINE VIDEO DOWNLOADING UTILITY [CLVD - UTILITY]
A command line tool to download Youtube videos
Supports both mp3 and mp4 formats
No more websites filled with ads

## Installation
- First put all the files in the same folder

- `Node.js`is required for the script to work [Click here to goto Node.js website](https://nodejs.org/en/)
> Tested on `Node v14.17`

- After installing Node.js run the `install.bat` file. It will download the rest of the dependincies for you

- If you followed the instruction you are done with installation


### Running on Repl.it
You can host this on Repl.it. 
- Make a new bash repl.
- git clone this repo
- if you want you can delete `run.bat` and `install.bat` as they wont work in bash repl
- type `npm install` on console and press enter to install all packages
- After downloading click RUN on top to start the program



## Downloading from Youtube

- Run the run.bat
- Enter the video name
- Type the format to download [MP3 OR MP4]


## Screenshots
 ### ENTERING VIDEO DETAILS AND DOWNLOAD FORMAT
![ENTERING VIDEO DETAILS AND DOWNLOAD FORMAT](https://cdn.discordapp.com/attachments/894302915508969482/894954795692064808/unknown.png)

### VIDEO FOUND AND DOWNLOADING STARTED
![VIDEO FOUND AND DOWNLOADING STARTED](https://cdn.discordapp.com/attachments/894302915508969482/894955079717777438/unknown.png)

### VIDEO NOT FOUND
![VIDEO NOT FOUND](https://cdn.discordapp.com/attachments/894302915508969482/894956324348121148/unknown.png)


## FAQ

### Why is the video downloading taking too long.
It complety depends on the duration of video, your computer specifications and network speed

### NODE.JS
Node js is the runtime for running javascript outside browser environment. This program uses `ytdl-core` and some other packages to retrieve data from youtube and download. If you dont have packages installed correctly it can throw an error.

### Errors
I have not added error handling for permission errors.
If you are having permission issues try running `run.bat` on administrator mode
Support: [Join Discord Server](https://discord.gg/3qTY9JdQ6z)