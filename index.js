const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 


client.login(config.token);

client.once('ready', async () => {

    console.log("✅ - Estou online!")

});

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

process.on("multipleResolves", (type, promise, reason) => {
    console.log('🚫 Erro Detectado:\n\n!' + type, promise, reason)
})
process.on("unhandRejection", (reason, promise) => {
    console.log('🚫 Erro Detectado:\n\n!' + reason, promise)
})
process.on("uncaughtException", (error, origin) => {
    console.log('🚫 Erro Detectado:\n\n!' + error, origin)
})
process.on("uncaughtExceptionMonitor", (error, origin) => {
    console.log('🚫 Erro Detectado:\n\n!' + error, origin)
})