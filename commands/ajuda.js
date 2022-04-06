const Discord = require("discord.js");

module.exports = {
    name: "ajuda",
    author: "lucas",

run: async(client, message, args) => {

    let cor_das_embeds = "RANDOM";

    let embed_1 = new Discord.MessageEmbed()

    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**__Olá ${message.author}, selecione uma das opções abaixo:__**\n\n\`◀️\` ***Painel Inicial***\n\`📬\` ***E-mails***\n\`☎\` ***Ramais***\n\`💻\` ***Comandos***\n\`🔗\` ***Redes Sociais***\n\`❌\` ***Fechar Painel***`)
    .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setColor(cor_das_embeds);

    message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {

      msg.react("◀️")
      msg.react("📬")
      msg.react("☎")
      msg.react("💻")
      msg.react("🔗")
      msg.react("❌")

      let filtro_1 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id; let coletor_1 = msg.createReactionCollector({ filter: filtro_1});
      let filtro_2 = (r, u) => r.emoji.name === '📬' && u.id === message.author.id; let coletor_2 = msg.createReactionCollector({ filter: filtro_2});
      let filtro_3 = (r, u) => r.emoji.name === '☎' && u.id === message.author.id; let coletor_3 = msg.createReactionCollector({ filter: filtro_3});
      let filtro_4 = (r, u) => r.emoji.name === '💻' && u.id === message.author.id; let coletor_4 = msg.createReactionCollector({ filter: filtro_4});
      let filtro_5 = (r, u) => r.emoji.name === '🔗' && u.id === message.author.id; let coletor_5 = msg.createReactionCollector({ filter: filtro_5});
      let filtro_6 = (r, u) => r.emoji.name === '❌' && u.id === message.author.id; let coletor_6 = msg.createReactionCollector({ filter: filtro_6});

      coletor_1.on("collect", (eas_help) => {
        
        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_2 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**__Olá ${message.author}, selecione uma das opções abaixo:__**\n\n\`◀️\` ***Painel Inicial***\n\`📬\` ***E-mails***\n\`☎\` ***Ramais***\n\`💻\` ***Comandos***\n\`🔗\` ***Redes Sociais***\n\`❌\` ***Fechar Painel***`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_2] });

      });


      coletor_2.on("collect", (eas_help) => {

        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "E-mails";

        let embed_3 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja os \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_3] });

      });

      coletor_3.on("collect", (eas_help) => {

        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Ramais";

        let embed_4 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja os \`${categoria}\` abaixo:\n\n...**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_4] });

      });

      coletor_4.on("collect", (eas_help) => {

        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Comandos";

        let embed_5 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja os nossos \`${categoria}\` abaixo:\n\n
        -ajuda (Exibe funções e ajuda do bot) \n -anunciar (Comando para anunciar (exige permissão)) \n -chamado (Cria um chamado) \n -temperatura "local" (Exibe a temperatura) \n -ticket (Cria uma sala privada para contato com a Gerência/TI) \n -close (Fecha o ticket) \n -ping (Exibe a latência do bot)**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_5] });

      });

      coletor_5.on("collect", (eas_help) => {

        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let categoria = "Redes Sociais";

        let embed_6 = new Discord.MessageEmbed()

        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }) )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja as nossas \`${categoria}\` abaixo:
        \nFacebook:** Escola Almeida Santos\n\n **Instagram:** @escolaalmeidasantos \n\n **Whatsapp:** 1194029-3718**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_6] });
        
      });

      coletor_6.on("collect", (eas_help) => {

        eas_help.users.remove(message.author.id); // Parte que retira a reação do usuário

        let embed_7 = new Discord.MessageEmbed()

        .setAuthor(`Fechando painel de ajuda em 5 segundos.`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(cor_das_embeds);
        
        msg.edit({ content: `${message.author}`, embeds: [embed_7] });

        setTimeout( () => {

            msg.delete();

            let embed_8 = new Discord.MessageEmbed()

            .setDescription(`**${message.author} O painel de ajuda foi encerrado.**`)
            .setColor(cor_das_embeds);

            message.reply({ content: `${message.author}`, embeds: [embed_8] });

        }, 5000);
        
      });

    })
  }
}