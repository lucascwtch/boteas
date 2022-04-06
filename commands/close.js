const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "close",
    author: "lucas",

    run: async(client, message, args) => {
        let confirmando_sistema = db.get(`sistema_de_tickets_${message.guild.id}`);

        if (confirmando_sistema === null || false) return message.reply(`O sistema  de tickets está \`desativado\`!`);

        let confirmando_ticket = message.author.id;

        if (message.channel.name != confirmando_ticket) return message.reply(`Este canal não é seu ticket.`);

        let embed_1 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`Você deseja fechar o seu ticket?`);

        message.reply({ embeds: [embed_1] }).then(msg => {

            let emoji_sim = "✅";
            let nome_emoji_sim = "✅";

            let emoji_nao = "❌";
            let nome_emoji_nao = "❌";

            msg.react(emoji_sim)
            msg.react(emoji_nao)

            let filtro_1 = (emoji_eas, user_eas) => emoji_eas.emoji.name === nome_emoji_sim && user_eas.id === message.author.id; // Confirma
            let coletor_1 = msg.createReactionCollector({filter: filtro_1}); // Confirma

            let filtro_2 = (emoji_eas, user_eas) => emoji_eas.emoji.name === nome_emoji_nao && user_eas.id === message.author.id; // Desconfirma
            let coletor_2 = msg.createReactionCollector({filter: filtro_2}); // Desconfirma

            coletor_1.on("collect", () => {

                message.reply(`Fechando o seu ticket...`).then(msg => {

                    setTimeout( () => {
                        msg.edit(`Fechando o seu ticket.....`)
                    }, 2000);

                    setTimeout( () => {
                        message.channel.delete()
                    }, 5000)

                });

            });

            coletor_2.on("collect", async () => {

                msg.delete();

                let eas = await message.reply(`O comando foi cancelado.`);

                setTimeout( () => {
                    eas.delete();
                    message.delete();
                }, 6000); 
            });
            
        })

    }
}