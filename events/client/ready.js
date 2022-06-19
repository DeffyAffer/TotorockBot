const Logger = require('../../utils/Logger');

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    let guildsCount = await client.guilds.fetch();
    let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    
    Logger.client(`- Prêt à être utilisé par ${usersCount} utilisateurs sur ${guildsCount.size} serveurs!`);

    client.user.setPresence({ activities: [{ name: 'emmerder Totorock', type: 'PLAYING' }], status: 'dnd' });

    // Local sur serv de dev - Instantané
    const devGuild = await client.guilds.cache.get('901804598354907146');
    devGuild.commands.set(client.commands.map(cmd => cmd));

    // Global - 1h
    client.application.commands.set(client.commands.map(cmd => cmd));
  },
};
