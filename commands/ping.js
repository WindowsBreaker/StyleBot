const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription ('Pong!'),
  async execute(interaction) {
    let totalSeconds = (message.client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    const uptime = `${days}gg, ${hours}h, ${minutes}m, ${seconds}s`
    await interaction.reply({embeds: [
      new MessageEmbed()
        .setTitle(`<:styleSuccess:920305910335823882> Online\n\nAPI Latency: ${interaction.client.ws.ping}ms\nLatency: ${Date.now() - interaction.createdTimestamp}ms\nUptime: ${uptime}`)
        .setColor("#3da777")
      ],
    });
  },
};
