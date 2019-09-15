module.exports = class djsalir
{
    constructor()
    {
        this.name = "djexit";
        this.alias = ["djsalir"];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
        if (message.author.id != "456897466680213515" || message.author.id != "367633371838283776"){
          if (message.guild.voiceConnection == null) {await message.reply("No estoy en ninguna sala :|"); return;}
          message.guild.voiceConnection.dispatcher.end()
          message.guild.voiceConnection.leave()
        }
    }
}