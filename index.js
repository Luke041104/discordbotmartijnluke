const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("Test bot", { type: "PLAYING" });

});

bot.on("message", async message => {

   // Als bot bericht stuurt stuur dan return
    if(message.author.bot) return;
    
    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");
    
    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if(command === `${prefix}youtube`){


        var botEmbed = new discord.RichEmbed()
           .setDescription("Onze YouTube:")
           .setColor("#ff1f0f")
           .addField("Martrijn: https://www.youtube.com/channel/UC_BxDiARJxbqvZYnHOsJXNw ")
           .addField("GamenMetLuke: https://www.youtube.com/channel/UCx7jPblI0AW_9yj2Vz--6DQ ");
          return message.channel.send(botEmbed);

    }

    if(command === `${prefix}test`){

        return message.channel.send("test succesvol");


    }
    
});


bot.login(process.env.token);