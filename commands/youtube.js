const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        var botEmbed = new discord.RichEmbed()
           .setDescription("Onze YouTube:")
           .setColor("#ff1f0f")
           .addField("Martrijn: https://www.youtube.com/channel/UC_BxDiARJxbqvZYnHOsJXNw ")
           .addField("GamenMetLuke: https://www.youtube.com/channel/UCx7jPblI0AW_9yj2Vz--6DQ ");
          return message.channel.send(botEmbed);

    }




module.exports.help = {
    name: "youtube"
}