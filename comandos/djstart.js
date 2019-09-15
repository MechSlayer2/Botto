module.exports = class djstart
{
    
    constructor()
    {
        this.waitUntil = require("async-wait-until");
        this.sleep = require('util').promisify(setTimeout);
        this.fs = require("fs");
        this.funciones = require("../funciones");
        this.yt = require("ytdl-core")
        this.alias = [];
        
        this.name = "djstart";
    }
    async run(client, message, args)
    {
        if (message.author.id != "456897466680213515" || message.author.id != "367633371838283776"){
        message.reply("Iniciando")
        const channel = message.member.voiceChannel;
        
        
        const streamOptions = { seek: 0, volume: 1 }
        
        
        if (channel)
        {
            try {
                if (message.guild.voiceConnection != null) {message.reply("Ya estoy en una sala, desconéctame primero ^_^"); return;};
                var voiceConnection = await channel.join();
                var reproducir = true;
                while (reproducir) {
                    var lista = await this.funciones.consulta(`SELECT url FROM g${message.guild.id}.canciones ORDER BY RAND()`)
                    
                    for (let id = 0; id < lista.length; id++) {
                        
                        var cur = lista[id]
                        const stream = this.yt(cur["url"], { filter : 'audioonly' });
                        const url = lista[id];
                        var voiceConnection = await channel.join();
                        
                        await voiceConnection.playStream(stream);
                        
                        
                        await this.sleep(1000);
                        await this.waitUntil(() => {
                            try{
                                    
                                if (!voiceConnection.speaking)
                                {
                                    
                                    return true
                                    
                                }
                                else if (voiceConnection.dispatcher == null)
                                {
                                    return true;
                                }
                                else
                                {
                                    return false;
                                }
                            } catch(e)
                            {
                                console.log(e)
                            }
                            }, 300000, 2000).catch((e) => {console.log(e)})

                            

                            if (voiceConnection == null) {console.log("Desconectando en " + message.guild.name); reproducir = false; break;};
                
                            
                        }
                        
                    }
                                 
            } catch(e)
            {
                console.log(e);
            }
        
        };
    }
    };

    
}
