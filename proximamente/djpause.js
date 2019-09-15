module.exports = class djpause
{
    constructor()
    {
        this.name = "pause";
        this.alias = ["djpausar"];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
        if (message.guild.voiceConnection.paused) return;
        if (message.guild.voiceConnection == null) return;
        await this.funciones.consulta(`UPDATE g${message.guild.id}.configuracion SET pausado = TRUE`)
        message.guild.voiceConnection.dispatcher.pause()

    }
}