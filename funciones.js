
async function consulta(_consulta = String)
{
    var mysql = require("mysql");
    var client = mysql.createConnection(
    {
        user:"root",
        password: "",
        host: "localhost",
        port: "3306",
    })
    console.log(_consulta)
    return new Promise 
    (
        (resolve, reject) =>
        {
            client.query(_consulta, (err, rows) => 
            {
                try{
                    if (err){
                        console.log(err)
                        return reject(err)
                    }
                    if (rows)
                    {
                        resolve (rows);
                    }
                    else
                    {
                        
                        resolve(true);
                    }
                } catch(e)
                {

                }
            });
        }
    ).catch((e) => {console.log(e); return reject(e)});
    

}

async function registrarGuild(guild)
{
    var queris = 
    [
        `CREATE DATABASE IF NOT EXISTS g${guild.id}`,
        `ALTER DATABASE g${guild.id} CHARACTER SET utf8 COLLATE utf8_general_ci`,
        `CREATE TABLE IF NOT EXISTS g${guild.id}.usuarios (id BIGINT, nombre TEXT, xp BIGINT, nivel BIGINT, puntos BIGINT, ultimotiro DATETIME, tiros INT, ultimoclaim DATETIME, claims INT, diario DATETIME, adiario DATETIME)`,
        `CREATE TABLE IF NOT EXISTS g${guild.id}.libres (nombre TEXT not null, anime TEXT not null, url TEXT not null, claims INT not null, id INT not null)`,
        `CREATE TABLE IF NOT EXISTS g${guild.id}.reclamadas (id INT not null, owner BIGINT not null, favorita BOOLEAN not null)`,
        `CREATE TABLE IF NOT EXISTS g${guild.id}.canciones (id INT not null, url TEXT not null)`
    ];

    for (let i = 0; i < queris.length; i++) {
        try{
            const element = queris[i];
            await this.consulta(element, "g" + guild.id)
        } catch(e)
        {
            console.log(e);
            console.log("Error en la " + i);
            break;
        }
        
    }
    var waifius = await this.consulta(`SELECT * FROM g${guild.id}.libres WHERE id = 000`)
    if(waifius.length == 0)
    {
        await this.consulta(`INSERT INTO g${guild.id} SELECT * FROM defecto.waifus`);
    }
}

async function comprobarPausa(guild)
{
    var resp = await consulta(`SELECT pausado FROM g${guild.id}.configuracion`)
    var pausado = resp[0]["pausado"]
    return Boolean(pausado)

}



module.exports =
{
    registrarGuild, consulta, comprobarPausa
    
    
}