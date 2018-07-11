const embed = require('discord.js'); 
const Discord = require('discord.js'); 
const client = new Discord.Client();
var prefix = 'k!' 
client.on("ready", () => {client.user.setGame('k!yardım | Oralet <3 | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 
}); 
client.on('message', msg => { 
if (msg.content === prefix + 'yardım') { 
let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Ben sadece bir test botuyum :cry: Oralet <3",
"İşte, Oralet'in komutları")
.addField("KOMUTLAR", 
"tüm komutlar burada ->") 
.addField("Ana Komutlar", 
"o!bilgi = Botun bilgilerini gösterir. \n o!istatistik = Botun istatistiklerini gösterir. \n o!davet = Botun ekleme linkini gösterir. \n o!sunucular = Haraca bağlanan sunucular. \n o!tavsiye = Tavsiyenizi iletir. ") 
.addField(":cry: Mod Komutları :hammer: ",  
"\n o!temizçek = Kanalı tamamen temizler. \n o!temizle <sayı> = Belirtilen sayı kadar mesaj siler.") 
.addField(":joy: Eğlence Komutları :stuck_out_tongue: ", 
"*\n o!yazıtura = Yazı tura atar şansına ne gelirse.\n o!havalıyürü = Havalı yürür. \n o!havalıyumruk = Havalı bir şekilde yumruk atar.\n o!selamla = Politakacı gibi selamlar. \n o!tokatla = Birini tokatlar. \n o!topuğunasık = Birinin topuğuna sıkar. \n o!avatar = Profil fotoğrafını gösterir. \n o!yanıyorsunfuatabi = Dene de gör! \n hıyar = Şimdi yedim ulan seni!") 
.setFooter(`Bot yapımcısı: Emir | AgentSLayer#5218'dir`) 
msg.member.send({embed: embed}) 
}
});
client.on('message', msg => { 
if(msg.content === prefix + 'yardım') { 
let embed = new Discord.RichEmbed()  
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  
.addField("Özel mesaj olarak gönderdim", 
"Özel mesajlarını kontrol et! :postbox:") 
msg.channel.send({embed: embed})  
} 
});
client.on('message', msg => { 
if(msg.content.toLowerCase() === 'kivi') { 
let embed = new Discord.RichEmbed()  
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  
.addField("Ben mi? Hayır hayır! Bana seslenme!", 
"Oralet, oralet! Evet ona söyle!") 
msg.channel.send({embed: embed})  
} 
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    if  (msg.channel.type === 'dm') {
      const ozelmesajuyarii = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL);
    msg.author.sendEmbed(ozelmesajuyarii); }
    if (msg.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Ana kanal:', msg.guild.defaultChannel)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt);
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }
});
if(msg.content === prefix + 'sayı'){
let embed = new Discord.RichEmbed()
        .setColor("#1bc643")
        .setTitle("Sucessfully opened slot for PREMIUM RANK!")
        .addField("Created At", message.author.createdAt)

        .setDescription("SYSTEM");

    message.channel.sendMessage(embed);
    channel.setName('Reserved_Slot')
.then(newChannel => console.log(Channel's new name is ${newChannel.name})) .catch(console.error);
    return;
}
                                9


 


client.login(process.env.BOT_TOKEN)
