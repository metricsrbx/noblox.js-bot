const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        user.kick();
		return interaction.reply({ content: `Kicked ${user.username}`, ephemeral: true });
	},
};