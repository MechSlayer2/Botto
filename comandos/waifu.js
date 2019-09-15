module.exports = class waifu
{
    constructor()
    {
        this.name = "waifu";
        this.alias = ["w"];
        this.funciones = require("./../funciones");
    }

    async run(client, message, args)
    {
        console.log(args);
    }
}