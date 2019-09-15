module.exports = class ping
{
    constructor()
    {
        this.name = 'ping';
        this.alias = ['p'];
        this.usage = '';
    }

    async run(client, message, args)
    {
        const m = await message.channel.send("Ping...");
        m.edit(`Latencia: ${m.createdTimestamp - message.createdTimestamp}ms. Latencia de la API: ${Math.round(client.ping)}ms`)
    }
}