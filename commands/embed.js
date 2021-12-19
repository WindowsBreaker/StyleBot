const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("create a new embed Object")
    .addStringOption(option =>
      option
        .setName("title")
	.setDescription("title of the embed")
	.setRequired(true))
    .addStringOption(option =>
      option
        .setName("description")
	.setDescription("description of the embed")
	.setRequired(true))
    .addStringOption(option =>
      option
        .setName("footer")
	.setDescription("footer of the embed")
	.setRequired(true)),
  async execute(interaction) {
    const embed = new MessageEmbed()
        .setTitle(interaction.options.getString('title'))
        .setDescription(interaction.options.getString('description'))
        .setFooter(interaction.options.getString('footer'))
    interaction.reply({embeds: [embed]});
  },
};
