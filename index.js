// Hi Skidders!
// Welcome to Editable RPC!!!
// Written with 🧠 by GhoSty | Publiced By Tejvz
// Feel free to edit this RPC! But Give Credits
const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

let r;
let startTimestamp = Date.now();
let buttonName = 'Github';
let buttonUrl = 'https://github.com/tejvz';
let rpcURL = 'https://dsc.gg/tejv';
let rpcType = 'PLAYING'; // COMPETING, WATCHING, PLAYING, STREAMING
let rpcName = 'Tejv ⛦';
let rpcDetails = 'dsc.gg/tejv';
let assetsSmallText = 'dsc.gg/tejv';
let assetsLargeText = 'dsc.gg/tejv on top';
let assetsLargeImage = 'https://cdn.discordapp.com/attachments/1211178935405248513/1391728959028334693/polar.gif?ex=686cf418&is=686ba298&hm=02598644cd486a2d6bcaf349aab627e63ed86adfc4e2f0da63ac62bb0a862f5b&';
let assetsSmallImage = 'https://cdn.discordapp.com/attachments/1211178935405248513/1391729133561577583/standard.gif?ex=686cf442&is=686ba2c2&hm=27738c14b68fb2426c68a486988b962a9df5258b21ae16324bf4be6bcb6ad270&';
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const timestamps = fs.readFileSync('tejvz.txt', 'utf8').split('\n');
  const randomTimestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  const [hours, minutes, seconds] = randomTimestamp.split(':');
  startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);

  updateRichPresence();
  client.user.setPresence({ status: "dnd" });
});

client.on('message', message => {
  if (message.author.id === client.user.id) {
    const args = message.content.split(' ');
    const command = args[0];

    if (command === '>simg' && args.length === 2) {
      const imgUrl = args[1];
      r.setAssetsSmallImage(imgUrl);
      client.user.setActivity(r);
      message.delete();

    } else if (command === '>time' && args.length === 2) {
      const newTime = args[1];
      if (isValidTimestamp(newTime)) {
        const [hours, minutes, seconds] = newTime.split(':');
        startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
        updateRichPresence();
        message.delete();
      } else {
        message.edit('Invalid timestamp format. Use HH:MM:SS.');
      }

    } else if (command === '>bname' && args.length === 2) {
      buttonName = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>burl' && args.length === 2) {
      buttonUrl = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>rpcurl' && args.length === 2) {
      rpcURL = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>rpctype' && args.length === 2) {
      rpcType = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>rpcname' && args.length === 2) {
      rpcName = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>rpcd' && args.length === 2) {
      rpcDetails = args.slice(1).join(' ');
      updateRichPresence();
      message.delete();

    } else if (command === '>stext' && args.length === 2) {
      assetsSmallText = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>ltext' && args.length === 2) {
      assetsLargeText = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>limg' && args.length === 2) {
      assetsLargeImage = args[1];
      updateRichPresence();
      message.delete();

    } else if (command === '>rpch') {
      message.delete();
      message.channel.send(
        "```" +
`>limg: Changes the Large RPC image
Usage: >limg IMAGE_URL

>simg: Changes the Small RPC image
Usage: >simg IMAGE_URL

>time: Changes the RPC elapsed time
Usage: >time TIME [For Example - >time 20:20:20]

>bname: Changes the RPC Button Name
Usage: >bname NAME

>burl: Changes the RPC Button Url
Usage: >burl URL

>rpcurl: Changes the RPC Url [For Streaming Status Only]
Usage: >rpcurl URL [For Example - >rpcurl https://link]

>rpctype: Changes the RPC Type
Usage: >rpctype TYPE [For Example - >rpctype STREAMING, WATCHING, COMPETING]

>rpcname: Changes the RPC Name
Usage: >rpcname NAME

>rpcd: Changes the RPC Details
Usage: >rpcd DETAILS

>stext: Changes the Small Text
Usage: >stext TEXT

>ltext: Changes the Large Text
Usage: >ltext TEXTL` +
        "```"
      );
    }
  }
});

function isValidTimestamp(timestamp) {
  const regex = /^\d{2}:\d{2}:\d{2}$/;
  return regex.test(timestamp);
}

function updateRichPresence() {
  r = new Discord.RichPresence()
    .setApplicationId('1113183256343482519')
    .setType(rpcType)
    .setURL(rpcURL)
    .setName(rpcName)
    .setDetails(rpcDetails)
    .setStartTimestamp(startTimestamp)
    .setAssetsLargeImage(assetsLargeImage)
    .setAssetsLargeText(assetsLargeText)
    .setAssetsSmallImage(assetsSmallImage)
    .setAssetsSmallText(assetsSmallText)
    .setButtons([
      { name: buttonName, url: buttonUrl }
    ]);

  client.user.setActivity(r);
}

client.login(process.env.TOKEN);
