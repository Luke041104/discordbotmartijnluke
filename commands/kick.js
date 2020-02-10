const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kick persoon reden.
    
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));
    
        if (kickUser) return message.channel.send("Persoon die je wilt kicken is niet op de server")
    
        var reason = arguments.join(" ").slice(22);
    
        if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, jij kan geen personen kicken")
    
        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan jij niet kicken")
    
        var kick = new discord.RichEmbed()
          .setDescription("Kick")
          .setColor("#ee0000")
          .addfield("Gekickte Gebruiker", kickUser)
          .addfield("Gekickt door", message.author)
          .addfield("Reden", reason)
    
        var kickChannel = message.guild.find(`name`, "test");
        if (kickChannel) return message.guild.send("Kan het kanaal niet vinden");
    
        message.guild.member(kickUser).kick(reason);
    
        kickChannel.send(kick);
    
    
    
        return;
      }

module.exports.help = {
    name: "kick"
}