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
let assetsLargeImage = 'https://cdn.discordapp.com/attachments/1393670154545660028/1394494232814813294/polar.gif?ex=68770375&is=6875b1f5&hm=8f70378eb5d06bd4773df6b37659814336c97cc43a4f0da6e4113b43eed9cb45&';
let assetsSmallImage = 'https://cdn.discordapp.com/attachments/1211178935405248513/1394634886932992154/10564c02da3b3109d1c8769f0eef2845.jpg?ex=68778674&is=687634f4&hm=4181f76d59d036e26c421eb4ffb8997f6943020f5a079d2b7323c12b435e6f01&';
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
