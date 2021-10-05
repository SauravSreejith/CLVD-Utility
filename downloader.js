//WARNING: DO NOT TRY TO MAKE CHANGES IF YOU DONT KNOW WHAT YOU ARE DOING 
//YOU MUST HAVE A BASIC UNDERSTANDING OF NODE.JS AND SPECIAL CHARACTERS

//dependencies
const chalk = require('chalk');
const ytdl = require(`ytdl-core`)
const discordytdl = require("discord-ytdl-core");
var prompt = require('prompt');
var colors = require("colors/safe");
const ytsr = require('ytsr');

//internal modules
var path = require('path');
const log = console.log;
const os = require(`os`)
const fs = require('fs');


prompt.message = chalk.redBright.bold("YouTube")+chalk.whiteBright.bold(`Downloader`)
prompt.start();



const properties = {
    url: {
      description: colors.brightCyan.bold.underline("Search video")
    },
    format: {
        description: colors.brightYellow.bold.underline("Download Format [mp3 or mp4]")
    }
  }




ask()


function ask() {
    console.clear() 

    
prompt.get({properties}, async (err, result) => {
    function end() {
        setTimeout(ask, 5000);
    }

    if (err) return log(err)


    var video = result.url
    var type = result.format

    const formats = ["mp3", "mp4"]

    if (!formats.includes(type)) {
        console.clear()
        log(chalk.bgMagentaBright.whiteBright.bold(`Invalid Format provided`)+`\n Format must be either mp3 or mp4`)
        return end()
    }


    const searchResults = await ytsr(video);
    var first = searchResults.items[0]

    if (searchResults.results == 0) {
        console.clear()
        log(chalk.bgRed.whiteBright.bold(`Video not found`))
        return end()
    } else {
        console.clear()
        log(chalk.bgGreen.whiteBright.bold(`Video Found`))
        log(chalk.cyanBright(`Video Title`)+`: ${first.title}`)
        log(chalk.cyanBright(`Video Duration`)+`: ${first.duration}`)
        log(chalk.cyanBright(`Video Uploaded`)+`: ${first.uploadedAt}`)
        log(`\n`)

        var dir = os.homedir()
        log(`Fetching data from [`+chalk.redBright.bold(`You`)+chalk.whiteBright.bold(`Tube`)+`]`)

        var filename = first.title 
        var filename =  filename.replace(/[^a-zA-Z0-9 -]/g, '');

        if (type == "mp3") var stream = await discordytdl(first.url, { fmt: "mp3" })
        if (type == "mp4") var stream = await ytdl(first.url)


        log(chalk.yellowBright(`[FS] Checking if ${first.title}.${type} exists`))
        if (fs.existsSync(`./${filename}.${type}`)) {

            log(chalk.redBright(`[FS] File already exists`))
            log(chalk.yellowBright(`[FS] Attempting to delete the file`))

            fs.unlink(`./${filename}.${type}`, (err => {
                if (err) console.log(err);
                else {
                  console.log(chalk.greenBright(`[FS] Deleted`+path.join(__dirname, `${filename}.${type}`)));
                }
              }));

              const w = stream.pipe(fs.createWriteStream(`./${filename}.${type}`))

              w.on("open", () => {
                console.log(chalk.greenBright(`[FS] Started writing to file ${filename}.${type}`));
                log(chalk.cyanBright(`Download time depends on video duration!`))
                log(chalk.yellowBright(`[WARN] Please Do not Close the terminal. You will get a success message when downloading is finished`))
              });

              w.on("close", () => {
                  console.log(chalk.greenBright(`[FS] Succesfully wrote to ${filename}.${type}`))
                  return end()
              })

              w.on(`error`, e => log(e))

        } else {
            const m = stream.pipe(fs.createWriteStream(`./${filename}.${type}`))

            m.on("open", () => {
                console.log(chalk.greenBright(`[FS] Started writing to file ${filename}.${type}`));
                log(chalk.cyanBright(`Download time depends on video duration!`))
                log(chalk.yellowBright(`[WARN] Please Do not Close the terminal. You will get a success message when downloading is finished`))
            });

            m.on("close", () => {
                console.log(chalk.greenBright(`[FS] Succesfully wrote to ${filename}.${type}`))
                  return end()
            })

            m.on(`error`, e => log(e))

        }



    }

    

})

}