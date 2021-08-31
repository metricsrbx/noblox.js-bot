const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Select a member and ban them.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        guild.members.ban(user);
		return interaction.reply({ content: `Banned ${user.username}`, ephemeral: true });
	},
};