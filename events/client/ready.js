const Logger = require('../../utils/Logger');

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    let guildsCount = await client.guilds.fetch();
    let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    
    Logger.client(`- Prêt à être utilisé par ${usersCount} utilisateurs sur ${guildsCount.size} serveurs!`);

    client.user.setStatus("dnd");
    
    // client.user.setPresence({ activities: [{ name: 'https://twitch.tv/totorock1', type: 'STREAMING' }] });
    const activities = [
      [{ name: 'https://twitch.tv/totorock1', type: 'STREAMING' }],
      [{ name: 'les clips les plus drôles de Totorock', type: 'WATCHING' }],
      [{ name: 'Totorock rager sur MK8DX', type: 'LISTENING' }]
    ]

    setInterval(() => {
    const status = activities[Math.floor(Math.random()*activities.length)]
    client.user.setPresence({ activities: [{ name: 'https://twitch.tv/totorock1', type: 'STREAMING' }] })
    
    client.user.setPresence({ activities: [{ name: 'se poser des questions sur la relativité de l\'existence de la Terre' }] })

    client.user.setPresence({ activities: [{ name: 'Totorock rager', type: 'LISTENING' }] })

    client.user.setPresence({ activities: [{ name: 'les clips les plus drôles de Totorock', type: 'WATCHING' }] })
    
  }, 5000)

    // Local sur serv de dev - Instantané
    // const devGuild = await client.guilds.cache.get('901804598354907146');
    // devGuild.commands.set(client.commands.map(cmd => cmd));

    // Global - 1h
    client.application.commands.set(client.commands.map(cmd => cmd));
  },
};
