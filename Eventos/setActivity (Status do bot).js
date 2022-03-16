const Gamedig = require('gamedig')
setInterval( () => Gamedig.query({
    type: 'fivem',
    host: 'localhost',
  }).then(async(state) => {

      let activities = [
        `🙋‍♂️ Jogadores ${state.players.length}/${state.maxplayers}`,
        `🎮 ${nome}`,
        `📡 IP: ${state.connect}`,
        `📌 Versão: 1.0`
    ];

    const random = Math.floor(Math.random() * activities.length);

    client.user.setActivity(`${activities[random]}`, {type: 'PLAYING'});

  }).catch((error) => {
    let activities = [
        `📡 IP: Servidor Offline`,
        `🎮 ${nome}`,
        `📌 Versão: 1.0`
    ];

    const random = Math.floor(Math.random() * activities.length);

    client.user.setActivity(`${activities[random]}`, {type: 'PLAYING'});
  }), 10000)