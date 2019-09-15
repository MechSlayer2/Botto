module.exports = class agregarcancion
{
    constructor()
    {
        this.name = "agregarancion";
        this.alias = ["agc"];
        this.funciones = require("./../funciones");
        this.waitUntil = require("async-wait-until");
    }

    async run(client, message, args)
    {
        var link = args[1]
        var funciones = this.funciones;
        console.log(args)
        var http = require("url-exists")
        var Exists = http(link, async function (err, e) {
            if (e == true)
            {
                await message.reply("Agregando canción...");
                
                if (link.includes("watch") && link.includes("youtube"))
                {
                    
                    
                    await funciones.consulta(`INSERT INTO g${message.guild.id}.canciones (url) VALUES ('${link}')`);
                    await message.reply("Canción agregada :D")
                    
                    
                }
                else
                {
                    await message.reply("Sólo soporto youtube :(")
                }
            }
            else
            {
                await message.reply("El enlace es inválido");
            }
            
        })
    }
}