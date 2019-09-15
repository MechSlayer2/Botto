module.exports = class djvolumen
{
    constructor()
    {
        this.name = "djvolumen";
        this.alias = [];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
        if (message.author.id != "456897466680213515" || message.author.id != "367633371838283776"){
        if (message.guild.voiceConnection == null) {await message.reply("No estoy en ninguna sala :|"); return;}
        var volumen = parseInt(args[1])
        var ajustado = volumen;
        if (volumen < 0) ajustado = 0;
        else if (volumen > 200) ajustado = 200
        message.guild.voiceConnection.dispatcher.setVolume(ajustado/100)
        await message.reply(`Volumen ajustado al ${ajustado}%`)
        }
    }
}