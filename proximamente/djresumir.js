module.exports = class djresumir
{
    constructor()
    {
        this.name = "djresume";
        this.alias = ["djresumir"];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
          if(message.guild.voiceConnection == null) {await message.reply("Primero conéctame a una sala de voz :)"); return;}
          if(!message.guild.voiceConnection.dispatcher.paused) {await message.reply("No estoy pausado"); return;};
          message.guild.voiceConnection.dispatcher.resume()
    }
}