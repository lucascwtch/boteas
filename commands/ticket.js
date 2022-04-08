const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: "ticket",
    author: "lucas",

    run: async(client, message, args) => { //await

        let confirmando_sistema = db.get(`sistema_de_tickets_${message.guild.id}`);

        if (confirmando_sistema === null || false) return message.reply(`O sistema  de tickets está \`desativado\`!`);

        let canal_ticket = message.guild.channels.cache.find(ticket => ticket.name === `${message.author.id}`);

        if (canal_ticket) return message.reply(`Você ja possui um ticket aberto em ${canal_ticket}.`);

        let embed_1 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} Certo! Descreva o que deseja e em alguns instantes responderemos!`);

        let embed_2 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} Você deseja abrir um ticket?`);

        let embed_3 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} O seu ticket foi cancelado.`);

        message.reply({ embeds: [embed_2] }).then(msg => {

            let emoji_sim = "✅"; //
            let nome_emoji_sim = "✅"; //

            let emoji_nao = "❌"; //
            let nome_emoji_nao = "❌"; //

            msg.react(emoji_sim)
            msg.react(emoji_nao)

            let filtro_1 = (emoji_eas, user_eas) => emoji_eas.emoji.name === nome_emoji_sim && user_eas.id === message.author.id; // Confirma
            let coletor_1 = msg.createReactionCollector({filter: filtro_1}); // Confirma

            let filtro_2 = (emoji_eas, user_eas) => emoji_eas.emoji.name === nome_emoji_nao && user_eas.id === message.author.id; // Desconfirma
            let coletor_2 = msg.createReactionCollector({filter: filtro_2}); // Desconfirma

            coletor_1.on("collect", async () => {

                msg.delete();

                /*let cmd_lucas = await*/ message.guild.channels.create(`${message.author.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : message.author.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        },
                        {
                        id: '959205370251866112',
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES'] // perm para o cargo ter acesso
                        }
                    ]
                }).then(async (chat_eas) => {
        
                    chat_eas.send({ embeds: [embed_1] });
        
                    let eas_1 = await message.reply(`O seu ticket foi criado em ${chat_eas}.`);
        
                    setTimeout( () => {
                        eas_1.delete()
                        message.delete();
                    }, 6000);  
        
                });

            });

            coletor_2.on("collect", async () => {

                msg.delete();

                let eas_2 = await message.reply({ embeds: [embed_3] });

                setTimeout( () => {
                    eas_2.delete();
                    message.delete();
                }, 6000); 
            });
            
        })

    }
}
