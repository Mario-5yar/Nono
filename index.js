require("dotenv").config();
const client = require("./clients/discord.js");
require('./clients/discord-inviter.js')

const { readdirSync } = require("fs");

let eventsFolder = readdirSync("events");

for (const eventFile of eventsFolder) {
  let event = require("./events/" + eventFile);
  event(client);
}

let commandsFolder = readdirSync("commands");

for (const commandFile of commandsFolder) {
  let command = require("./commands/" + commandFile);
  client.commands.set(command.name, command);
}

process.on('unhandledRejection', console.log)
process.on('uncaughtException', console.log)
process.on('uncaughtExceptionMonitor', console.log)
