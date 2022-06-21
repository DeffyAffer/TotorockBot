module.exports = {
    name: 'git',
    category: 'code source',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'git',
    examples: ['git'],
    description: 'Renvoie le lien vers le code source du bot!',
    async run(client, message, args) {
      message.reply('Tu veux voir mon code source ? Va visiter https://github.com/DeffyAffer/TotorockBot !')
    },
     async runInteraction(client, interaction)  {
        interaction.reply({ content: 'Tu veux voir mon code source ? Va visiter https://github.com/DeffyAffer/TotorockBot !', ephemeral: true });

    
    }
  };