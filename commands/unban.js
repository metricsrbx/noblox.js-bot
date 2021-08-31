const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban someone.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const id = interaction.options.get('target')?.value;
		guild.members.unban(id);
		return interaction.reply({ content: `Unbanned ${user.username}`, ephemeral: true });
	},
};