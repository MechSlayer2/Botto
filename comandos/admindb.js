module.exports = class admindb
{
    constructor()
    {
        this.name = "admindb";
        this.alias = [];
        this.funciones = require("../funciones");
    }

    async run(client, message, args)
    {
        if (message.author.id != 456897466680213515) return;
        const fs = require("fs")
        var args2 = message.content.match(/^(\S+)\s(.*)/).slice(1)
        var args3 = args2[1].match(/^(\S+)\s(.*)/).slice(1)
        var consulta = args3[1]
        var index = parseInt(args3[0])
        fs.appendFile('logs.txt',Date.now()+ " " +message.author.id +" ha ejecutado: "+ args3 + "\n", 'utf8',
    
            function(err) { 
                if (err) throw err;
                
                
        });
        
        if (message.author.id != 456897466680213515) return;
        var res = await this.funciones.consulta(consulta)
        message.reply(String(JSON.stringify(res[index])))
        
    }
}