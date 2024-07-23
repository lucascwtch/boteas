const Discord = require("discord.js");

module.exports = {
  name: "anunciar",

  run: async(client, message, args) => {
    let eas_say = args.join(" ");
    message.delete()

    if (!message.member.permissions.has("MANAGE_SERVER")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`); 

    if (!eas_say) return message.channel.send(`❌ | ${message.author} Você precisa escrever algo para que eu possa falar!`);

    message.channel.send(`${eas_say}

    :warning: Aviso de ${message.author}! @everyone :warning: `)
}

  }
