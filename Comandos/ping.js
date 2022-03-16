const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("[🤖] » Obtenha o ping do websocket da mensagem"),
	run: async (client, interaction) => {
	
		interaction.followUp({  content: `🏓 | Ping é \`${client.ws.ping}\` ms.` })
	},
};