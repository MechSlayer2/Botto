module.exports = class tests
{
    constructor()
    {
        this.name = "tests";
        this.alias = [];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
        if (message.author.id != 456897466680213515) return;
          console.log(await this.funciones.comprobarPausa(message.guild))
    }
}