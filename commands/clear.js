const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js');

module.exports = {

    name: 'clear',
    aliases: ['limpar chat'],

    run: async (client, message, args) => {

        let clearchannel = message.guild.channels.cache.get("959205370251866120"); //// CANAL DAS LOGS

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`${message.author} **Você não tem permissão para usar esse comando!**`)

        try {

            let delamount = args[0];
            let msg_del = parseInt(delamount) + 1
            let incomplet = new MessageEmbed()
            .setTitle(`🧹 | LIMPAR MENSAGENS`)

            .setColor("RED")

            .setDescription(`**\n📋 | Descrição: Use esse comando para limpar o chat.\n\n❓ | Como eu uso? !clear (messages) \n\n📜 | Exemplo: !clear 10**`)

            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({embeds: [incomplet]})

            if (parseInt(delamount) > 99) return message.reply('❌ | **Você só pode limpar de 1 mensagem até 99!**')
            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            let clear = new MessageEmbed()
            .setTitle(`🧹 | CLEAR`)
            .setColor("WHITE")
            .setThumbnail(``)
            .setDescription(`**> 🧹 | Foram limpas ${delamount} mensagens em ${message.channel}.\n\n> 🎓 | CLEAR AUTHOR: ${message.author}**`)

            if (!clearchannel) {
                return message.channel.send("**:x: |Eu não encontrei o canal de logs.**");
            }

            clearchannel.send({ embeds: [clear] });

        } catch (e) {
            console.log(e)
        }

    }
}

