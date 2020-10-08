module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(messege, args){
        messege.channel.send('Pong!');
    }
}