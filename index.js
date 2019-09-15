const Discord = require("discord.js");
const fs = require("fs");
const {CommandHandler} = require("djs-commands");
const funciones = require("./funciones");

const CH = new CommandHandler({
    folder: __dirname + "/comandos/",
    prefix: ['s.']

});

const client = new Discord.Client();



client.on("ready", () => {
    console.log("Ready");
    
});

client.on("message", async message => {
    
    if(!message.content.startsWith("s.")) return;
    if(message.author.bot) return;
    if(message.channel.type == "dm");
    const args = message.content.split(" ").filter(String);
    const command = args[0];
    const cmd = CH.getCommand(command);
    console.log(message.content)
    if (message.author.id == 456897466680213515 && args[0] == "s.eval")
    {
        try{
            var result = await eval(message.content.match(/^(\S+)\s(.*)/).slice(1)[1]);
            await message.channel.send(String(result));
            
        } catch(e){
            await message.channel.send(String(e));
            console.log(e);
        }
    }
    if (!cmd) return;
    try {
        cmd.run(client, message, args);
    } catch (e) {
        console.log(e);
    }

})

client.on("guildCreate", async guild => 
{
    const funciones = require("./funciones");
    await funciones.registrarGuild(guild);
    

})

client.login("NjIxMDAwMDUyMTkzNjI0MDc0.XXwatg.7eyOqi9CcIiZbMfHsdGTIQTKOIg");