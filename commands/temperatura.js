const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
    name: "temperatura",
    author:"lucas",
    description: "Mostra a temperatura em uma região específica",

    async run (bot, message, args) {
        weather.find({search: args.join(""), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Por favor, indique a região, &tempo * lugar desejado *')

            if(result === undefined || result.length === 0) return message.channel.send('Localização invalida!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Previsão do tempo em: ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('🌪️ - `\`Zona de tempo`\`', `UTC ${location.timezone}`, true)
            .addField('🍃 - Tipo de grau', '*Celcius*', true)
            .addField('🌡️  - Temperatura', `${current.temperature}°`, true)
            .addField('💨 - Vento', `${current.winddisplay}`, true)
            .addField('☁️ - sensação térmica', `${current.feelslike}°`, true)
            .addField('💧 - Humidade', `${current.humidity}%`, true)

            message.channel.send({embeds: [embed]})
        })
    }
}