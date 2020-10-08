module.exports = {

    name: 'info',

    description: 'Server and user info.',

    execute(message,args,Discord){

const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#1500f6')
    .setTitle('Info')
    .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n\nYour username: ${message.author.username}\nYour ID: ${message.author.id}`)
    .setTimestamp()
    .setFooter('|</>|',)

message.channel.send(exampleEmbed);


    }
}