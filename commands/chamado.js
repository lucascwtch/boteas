const Discord = require("discord.js");

module.exports = {
    name: "chamado",
    run: async(client, message, args) => {
        let nome;
        let problema;
        let horario;

        const idcanal = "959211613741780992" // id do canal de chamados

        ///////////////////////////////////////////////////////////////////////

        const embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter({
            text: "Escola Almeida Santos",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        .setTitle(`Olá, digite o seu nome por favor!`)

        ///////////////////////////////////////////////////////////////////////

        const embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter({
            text: "Escola Almeida Santos",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        .setTitle(`Obrigado, agora por favor, digite qual o seu problema!`)

        ///////////////////////////////////////////////////////////////////////

        const embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter({
            text: "Escola Almeida Santos",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        .setTitle(`Obrigado, agora por favor, digite o horário em que ocorreu seu problema!`)

        ///////////////////////////////////////////////////////////////////////

        const embed4 = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setFooter({
            text: "Escola Almeida Santos",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        .setTitle(`Certo, seu chamado foi registrado no nosso sistema!`)

        ///////////////////////////////////////////////////////////////////////
        /* EMBEDS ACIMA */
        const td = await message.channel.send({ embeds: [embed1] })
        message.delete()
        const filter = (m) => m.author.id == message.author.id
        const collector = message.channel.createMessageCollector({ filter, time: 120000, max: 1 })
        collector.on("collect", async msg1 => {
            nome = msg1.content
            msg1.delete()
            td.delete()
            const td1 = await message.channel.send({ embeds: [embed2] })
            const collector2 = message.channel.createMessageCollector({ filter, time: 120000, max: 1})
            collector2.on("collect", async msg2 => {
                problema = msg2.content
                msg2.delete()
                td1.delete()
                const td2 = await message.channel.send({ embeds: [embed3] })
                const collector3 = message.channel.createMessageCollector({ filter, time: 120000, max: 1})
                collector3.on("collect", async msg3 => {
                    horario = msg3.content
                    msg3.delete()
                    td2.delete()
                    message.channel.send({ embeds: [embed4] }).then(td3 => {
                        setTimeout(() => td3.delete(), 8000)
                    })
                    const canalchamados = message.guild.channels.cache.get(idcanal)
                    let embed5 = new Discord.MessageEmbed()
                    .setTitle(`Novo chamado!`)
                    .addFields(
                        {name: `Nome:`, value: `${nome}`},
                        {name: `Problema:`, value: `${problema}`},
                        {name: `Horário:`, value: `${horario}`},
                        {name: `Solucionado?`, value: `Não.`}
                    )
                    .setColor("RED")
                    .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true}))
                    .setFooter({
                        text: `Tag de quem criou o chamado: ${message.member.user.tag}`
                    })
                    canalchamados.send({ embeds: [embed5] }).then(td4 => {
                        const emojis = ["✅"]
                        const emojis2 = ["🔔"]
                        const emojis3 = ["❌"]

                        emojis.forEach(em => td4.react(em))
                        emojis2.forEach(em => td4.react(em))
                        emojis3.forEach(em => td4.react(em))

                        const rfilter = (reaction, user) => emojis.includes(reaction.emoji.name) && !user.bot
                        const rcollector = td4.createReactionCollector({ filter: rfilter, max: 1 })

                        const afilter = (reaction, user) => emojis2.includes(reaction.emoji.name) && !user.bot
                        const acollector = td4.createReactionCollector({ filter: afilter, max: 1 })

                        const xfilter = (reaction, user) => emojis3.includes(reaction.emoji.name) && !user.bot
                        const xcollector = td4.createReactionCollector({ filter: xfilter, max: 1 })

                        rcollector.on("collect", (r, u) => {
                            switch(r.emoji.name) {
                                case emojis[0]:
                                    embed5.fields[3] = {name: `Solucionado?`, value: `Sim, por ${u.tag}.`}
                                    embed5.setColor("GREEN")
                                    td4.edit({ embeds: [embed5] })
                                    break;
                            }
                        })
                        acollector.on("collect", (r, u) => {
                            switch(r.emoji.name) {
                                case emojis2[0]:
                                    embed5.fields[3] = {name: `Status:`, value: `Verificando, por ${u.tag}.`}
                                    embed5.setColor("YELLOW")
                                    td4.edit({ embeds: [embed5] })
                                    break;
                             }
                        })
                        xcollector.on("collect", (r, u) => {
                            switch(r.emoji.name) {
                                case emojis3[0]:
                                embed5.fields[3] = {name: `Status:`, value: `NÃO RESOLVIDO, por ${u.tag}.`}
                                embed5.setColor("BLACK")
                                td4.edit({ embeds: [embed5] })
                                break;

                          }
                        })
                    })
                })
            })
        })
      }
    }