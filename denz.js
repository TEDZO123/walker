;const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ggs = require('google-it')
const ffmpeg = require('fluent-ffmpeg')
const request = require('request');
const base64Img = require('base64-img')
const ms = require('parse-ms')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const color = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const tttawal = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
nana = []
const X = "❌"
const O = "⭕️"
const tunjuk = "👈"

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//Case By Sparrow
const { dwldm } = require('./lib/dwldm')
const { grpm } = require('./lib/grpm')
const { mkrm } = require('./lib/mkrm')
const { otrm } = require('./lib/otrm')
const { ownm } = require('./lib/ownm')
const { stkrm } = require('./lib/stkrm')
const { credit } = require('./lib/crd')

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

offline = true
publik = false
waktuafk = '-'
alasanafk = '-'
prefix = ""
fake = 'ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴'
owner = '917356378949' //ganti pake no lu
numbernye = '0'

// APIKEY
HunterApi = 'Ikyy69'

const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

module.exports = denz = async (denz, mek) => {
    try {
    	if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		denz.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		denz.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
		me = denz.user
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
	    const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = await getBuffer(me.imgUrl)

        mess = {
			wait: '\`\`\`⇜⇝「 ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ⚙️..... 」\`\`\`',
			success: '\`\`\`⇜⇝「 sᴜᴄᴄᴜss🖤 」\`\`\`',
			error: {
				stick: '\`\`\`⇜⇝「 ᴄᴀɴɴᴏᴛ ᴀᴄᴄᴇss ᴠɪᴅᴇᴏs💜! 」\`\`\`',
				Iv: '\`\`\`⇜⇝「 ɪɴᴠᴀɪʟᴅ ʟɪɴᴋ ᴛʀʏ ᴀɢᴀɪɴ💙! 」\`\`\`',
                api: '\`\`\`⇜⇝「 ᴇʀʀᴏʀ💔 」\`\`\`'
			},
			only: {
				group: '\`\`\`⇜⇝「 ᴏɴʟʏ ғᴏʀ ᴡɪᴛʜ ɪɴ ɢʀᴏᴜᴘs🤍! 」\`\`\`',
				ownerG: '\`\`\`⇜⇝「 sᴏʀʀʏ ʙʀᴏ ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴏᴡɴᴇʀs💖! 」\`\`\`',
				ownerB: '\`\`\`⇜⇝「 sᴏʀʀʏ ʙʀᴏ ᴏɴʟʏ ғᴏʀ ᴡ4ʟᴋ36.Eғx💜! 」\`\`\`',
				admin: '\`\`\`⇜⇝「 ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs🧡! 」\`\`\`',
				Badmin: '\`\`\`⇜⇝「 ᴍᴀᴋᴇ ᴛʜᴇ ʙᴏᴛ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ💘 」\`\`\`'
			}
		}
		const botNumber = denz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`,"917356378949@s.whatsapp.net"] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? denz.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
        mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        mentionUser.push
		const conts = mek.key.fromMe ? denz.user.jid : denz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        pushname = mek.key.fromMe ? denz.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await denz.chats.all()
		const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		idttt = []
	players1 = []
	players2 = []
	gilir = []
	for (let t of nana){
	  idttt.push(t.id)
	  players1.push(t.player1)
	  players2.push(t.player2)
	  gilir.push(t.gilir)
	}
	const isTTT = isGroup ? idttt.includes(from) : false
	isPlayer1 = isGroup ? players1.includes(sender) : false
  isPlayer2 = isGroup ? players2.includes(sender) : false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
	if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
			denz.sendMessage(mek.key.remoteJid, `ʜɪ\nʙʀᴏ owner ɪs ʙᴜsʏ ɴᴏᴡ *ᴏғғʟɪɴᴇ*\n\n*ʀᴇᴀsᴏɴ :* ${alasanafk}\n*sɪɴᴄᴇ :* ${heheh.hours} ʜᴏᴜʀ, ${heheh.minutes} ᴍɪɴᴜᴛᴇ, ${heheh.seconds} sᴇᴄᴏɴᴅs ᴀɢᴏ\n\nᴘʟᴇᴀsᴇ ᴍsɢ ʜɪᴍ ᴀғᴛᴇʀ *10 ᴍɪɴᴜᴛᴇs*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 404, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === denz.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
						denz.sendMessage(mek.key.remoteJid, `ʜɪ\nʙʀᴏ ᴏᴡɴᴇʀ ɪs ʙᴜsʏ ɴᴏᴡ *ᴏғғʟɪɴᴇ*\n\n*ʀᴇᴀsᴏɴ :* ${alasanafk}\n*sɪɴᴄᴇ :* ${heheh.hours} ʜᴏᴜʀ, ${heheh.minutes} ᴍɪɴᴜᴛᴇ, ${heheh.seconds} sᴇᴄᴏɴᴅs ᴀɢᴏ\n\nᴘʟᴇᴀsᴇ ᴍsɢ ʜɪᴍ ᴀғᴛᴇʀ *10 ᴍɪɴᴜᴛᴇs*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 404, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
				}
						}
					}
				}
			}
		}
		if (!publik) {
			if (!mek.key.fromMe) return
		}
const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var waktoo = ase.getHours();
                        var jamss = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "ᴛᴏᴏᴏ ʟᴀᴛᴇ - sʟᴇᴇᴘ ʙʀᴏ 🖤"; break;
                case 1: waktoo = "ᴛᴏᴏᴏ ʟᴀᴛᴇ - sʟᴇᴇᴘ ʙʀᴏ 🖤"; break;
                case 2: waktoo = "ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ - ᴛɪᴍᴇ ᴛᴏ ᴡᴀᴋᴇ ᴜᴘ 💜"; break;
                case 3: waktoo = "ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ - ᴛɪᴍᴇ ᴛᴏ ᴡᴀᴋᴇ ᴜᴘ 💜"; break;
                case 4: waktoo = "ᴅᴀᴡɴ🤍"; break;
                case 5: waktoo = "ᴅᴀᴡɴ🤍"; break;
                case 6: waktoo = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ🥰\n- ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ 🖤"; break;
                case 7: waktoo = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ🥰\n- ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ 🖤"; break;
                case 8: waktoo = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ🥰\n- ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ 🖤"; break;
                case 9: waktoo = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ🥰\n- ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ 🖤"; break;
                case 10: waktoo = "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ🥰\n- ʜᴀᴠᴇ ᴀ ɴɪᴄᴇ ᴅᴀʏ 🖤"; break;
                case 11: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ☺️\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴘʀᴀʏ 🙂"; break;
                case 12: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ☺️\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴘʀᴀʏ 🙂"; break;
                case 13: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ☺️\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴘʀᴀʏ 🙂"; break;
                case 14: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ☺️\n- ᴛᴀᴋᴇ ʀᴇsᴛ ʙʀᴏ 🤗"; break;
                case 15: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🤗\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴛᴀᴋᴇ ᴀ ʙᴀᴛʜ ᴀɴᴅ ᴘʀᴀʏ ☺️️"; break;
                case 16: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🤗\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴛᴀᴋᴇ ᴀ ʙᴀᴛʜ ᴀɴᴅ ᴘʀᴀʏ ☺️"; break;
                case 17: waktoo = "ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ🤗\n- ʜɪ ʙʀᴏ🥰"; break;
                case 18: waktoo = "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ🌘\n- ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴘʀᴀʏ 😊"; break;
                case 19: waktoo = "ɢᴏᴏʀ ᴇᴠᴇɴɪɴɢ🤍"; break;
                case 20: waktoo = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌚"; break;
                case 21: waktoo = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌚"; break;
                case 22: waktoo = "ɢᴏᴏᴅ ɴɪɢʜᴛ🌚\n- ᴛᴀᴋᴇ ʀᴇsᴛ ʙʀᴏ & ᴅᴏɴᴛ sᴛᴀʏ ᴜᴘ ʟᴀᴛᴇ😌"; break;
                case 23: waktoo = "ᴛᴏᴏ ʟᴀᴛᴇ \n- sʟᴇᴇᴘ ʙʀᴏ, ɪᴛs ɴᴏᴛ ɢᴏᴏᴅ ᴛᴏ sᴛᴀʏ ᴜᴘ ʟᴀᴛᴇ🙃 :)"; break;
            }
            switch(jamss){
                case 0: jamss = "ᴍɪᴅɴɪɢʜᴛ🌃"; break;
                case 1: jamss = "ᴍɪᴅɴɪɢʜᴛ🌃"; break;
                case 2: jamss = "ᴍɪᴅɴɪɢʜᴛ🌃"; break;
                case 3: jamss = "ᴍɪᴅɴɪɢʜᴛ🌃"; break;
                case 4: jamss = "ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ💜"; break;
                case 5: jamss = "ᴇᴀʀʟʏ ᴍᴏʀɴɪɴɢ💜"; break;
                case 6: jamss = "ᴍᴏʀɴɪɴɢ🏙"; break;
                case 7: jamss = "ᴍᴏʀɴɪɴɢ🏙"; break;
                case 8: jamss = "ᴍᴏʀɴɪɴɢ🏙"; break;
                case 9: jamss = "ᴍᴏʀɴɪɴɢ🏙"; break;
                case 10: jamss = "ᴍᴏʀɴɪɴɢ🏙"; break;
                case 11: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌁"; break;
                case 12: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌁"; break;
                case 13: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌁"; break;
                case 14: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌁"; break;
                case 15: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌇"; break;
                case 16: jamss = "ᴀғᴛᴇʀɴᴏᴏɴ🌇"; break;
                case 17: jamss = "ᴇᴠᴇɴɪɴɢ🌆"; break;
                case 18: jamss = "ᴇᴠᴇɴɪɴɢ🌆"; break;
                case 19: jamss = "ᴇᴠᴇɴɪɴɢ🌆"; break;
                case 20: jamss = "ɴɪɢʜᴛ🌌"; break;
                case 21: jamss = "ɴɪɢʜᴛ🌌"; break;
                case 22: jamss = "ᴇɴᴊᴏʏ ɴɪɢʜᴛ ᴠɪʙᴇ🌌"; break;
                case 23: jamss = "ᴍɪᴅɴɪɢʜᴛ🌃"; break;
            }
            var tampilHari = "" + waktoo;
            var tampilUcapan = "" + jamss;
            global.config = {
    unvoke: true,
    unvokeMe: false
}
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					denz.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Kolkata').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        denz.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        denz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact)
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await denz.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        denz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			denz.sendMessage(from, teks, text, { quoted: mek })
		}
		const simir = (teks) => {
			denz.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${sender.split('@')[0]}@s.whatsapp.net` } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${sender.split('@')[0]},;;;\nFN:${sender.split('@')[0]},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./denz.jpg')}}}})
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			denz.sendMessage(hehe, teks, text, { thumbnail: dfrply, sendEphemeral: true})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
denz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
denz.sendMessage(from, hasil, type, options).catch(e => {
denz.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					denz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeStatus = (from, teks, faketeks) => {
				denz.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴`, orderTitle: `ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
			}
			const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await denz.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = fs.readFileSync(`./denz.jpg`)
				denz.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 

			if (budo.startsWith(`>`)){
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                const print = function(budo){
                    denz.sendMessage(from, util.format(budo))
                }
                console.log(exc)
                eval("(async () => {try{"+exc+"}catch(e){denz.sendMessage(from,  e.toString())}})()")
			}
			if (budo.startsWith(`<`)){
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                exec(exc, (err, stdout) => {
					if (err) return denz.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						denz.sendMessage(from, stdout, text)
					}
				})
			}
			if(mek.key.fromMe){
			if (budo === `${prefix}public`){
				publik = true
				sendFakeStatus(from, 'sᴜᴄᴄᴜss🤍️', fake)
			}
			if (budo === `${prefix}self`){
				publik = false
				sendFakeStatus(from, 'sᴜᴄᴄᴜss💜️', fake)
			}
		}
		if (budo === `${prefix}k`){
		    if (!isOwner) return reply(mess.only.ownerB)
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ʀᴇʟᴘʏ ᴛᴏ ᴛᴀʀɢᴇᴛ!')
			kicknya = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupRemove(from, [kicknya])
		    sendFakeStatus(from, 'ʙʏᴇ', fake)
			}
			if (budo === `${prefix}a`){
			if (!isOwner) return reply(mess.only.ownerB)
			if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ʀᴇᴘʟʏ ᴛᴏ ᴛᴀʀɢᴇᴛ!')
			addnya = mek.message.extendedTextMessage.contextInfo.participant
		    denz.groupAdd(from, [addnya])
		    sendFakeStatus(from, `sᴜᴄᴄᴜss🤍`, fake)
			}
			// AUTO
			
 rspndbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : '';
 if (rspndbutton) { if (rspndbutton == 'downloadmenu')
 {denz.sendMessage(from, dwldm(), text, {quoted: mek})}} 		
 if (rspndbutton) { if (rspndbutton == 'groupmenu')
 {denz.sendMessage(from, grpm(), text, {quoted: mek})}} 		
 if (rspndbutton) { if (rspndbutton == 'makermenu')
 {denz.sendMessage(from, mkrm(), text, {quoted: mek})}} 		
 if (rspndbutton) { if (rspndbutton == 'othermenu')
 {denz.sendMessage(from, otrm(), text, {quoted: mek})}} 		
 if (rspndbutton) { if (rspndbutton == 'ownermenu')
 {denz.sendMessage(from, ownm(), text, {quoted: mek})}} 		 		
 if (rspndbutton) { if (rspndbutton == 'stickermenu')
 {denz.sendMessage(from, stkrm(), text, {quoted: mek})}} 		
 if (rspndbutton) { if (rspndbutton == 'credit')
 {denz.sendMessage(from, crd(), text, {quoted: mek})}} 	
 			
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					denz.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `「 ᴡ4ʟᴋ36.Eғx 」 ➫➬➭ ${anji}`, orderTitle: `「 ᴡ4ʟᴋ36.Eғx 」➫➬➭ ${anji}`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					denz.sendMessage(from, result, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `「 ᴡ4ʟᴋ36.Eғx 」 ➫➬➭ ${anju}`, orderTitle: `「 ᴡ4ʟᴋ36.Eғx 」➫➬➭  ${anju}`, sellerJid: '0@s.whatsapp.net'}}}, mimetype: 'audio/mp4', duration: 27997200, ptt: true})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					denz.sendMessage(from, result, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `「 ᴡ4ʟᴋ36.Eғx 」➫➬➭ ${anjh}`, orderTitle: `「 ᴡ4ʟᴋ36.Eғx 」 ➫➬➭ ${anjh}`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('ᴛʜᴇ ᴀᴅᴍɪɴ ɪs ɴᴏᴛ ғʀᴇᴇ, ʀɪɢʜᴛ? :v')
				denz.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ, ᴀᴜᴛᴏ ᴋɪᴄᴋ ɪs ᴀᴄᴛɪᴠᴇ!')
				sleep (5000)
				denz.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			if (bad.includes(messagesD)) {
				daui = fs.readFileSync('./Kick.mp3')
				denz.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
				}

const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : ??',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍇 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}
generateBoard = async(board) => {
    var text = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            text += "\n         "
        }
        text += x
        count += 1
    }
    return text
}
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {

            var { enemy, mode, board, step } = tictactoe[senderNumber]

            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`ɴᴜᴍʙᴇʀ ${budy} ʜᴀs ʙᴇᴇɴ ғɪʟʟᴇᴅ`)

            var data = tictactoe[senderNumber]

            data["enemy"] = senderNumber

            mode = mode == X ? O : X

            data["mode"] = mode

            data["board"][Number(budy) - 1] = data["mode"]

            data["step"] += 1

            var player1 = enemy

            var player2 = senderNumber

            if (step % 2 == 0) {

                player1 = senderNumber

                player2 = enemy

            } else {

                mode = data["mode"] == X ? O : X

            }

            tictactoe[enemy] = data

            delete tictactoe[senderNumber]

            var teks = `Player 1: @${player1.split("@")[0]} (${mode})`

            mode = mode == X ? O : X

            var text2 = `\n\nPlayer 2: @${player2.split("@")[0]} (${mode})`

            board = await generateBoard(data["board"])

            var win = await getWin(data["board"])

            if (win) {

                teks = board

                teks += "\n\n"

                teks += `@${player1} vs @${player2}\n`

                if (win == mode) {

                    teks += `ʀᴇsᴜʟᴛs : @${player2} WIN`

                    return denz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {

                        delete tictactoe[enemy]

                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))

                    })

                } else {

                    teks += `ʀᴇsᴜʟᴛs : @${player1} WIN`

                    return denz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {

                        delete tictactoe[enemy]

                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))

                    })

                }

            }

            if (data["step"] == 9) {

                teks = board

                teks += "\n\n"

                teks += `@${player1} vs @${player2}\n`

                teks += `ʀᴇsᴜʟᴛs : sᴇʀɪᴇs`

                return denz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {

                    delete tictactoe[enemy]

                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))

                })

            }

            player2 == senderNumber ? teks += sʜᴏᴡ : text2 += sʜᴏᴡ

            teks += "\n"

            teks += board

            teks += text2

            return denz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {

                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))

            })

        }
        if (isTTT && isPlayer1){
nuber = parseInt(body)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('ᴇɴᴛᴇʀ ɴᴜᴍʙᴇʀ ᴄᴏʀʀᴇᴄᴛʟʏ')
main = nana.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('ɪᴛs ᴀʟʀᴇᴀᴅʏ ғɪʟʟᴇᴅ ᴛʜᴇ ᴏᴛʜᴇʀ ᴄᴏɴᴛᴀɴᴛ ʙʀᴏ')
if (main[0].gilir.includes(sender)) return reply('ᴡᴀɪᴛ ʏᴏᴜʀ ᴛᴜʀɴ ʙʀᴏ')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = nana.filter(hhg => !hhg.id.includes(from))
nana = naa
pop = main[0]
nana.push(pop)
tto = nana.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = ` *TicTacToe* \nʏᴇʏʏʏ ɢᴀᴍᴇ ᴡᴏɴ ʙʏ *@${tty.player1.split('@')[0]}*\n`
ucapan2 = ` *TicTacToe* \n*ᴛʜᴇ ғɪɴᴀʟ ʀᴇsʟᴜᴛ:*\n\n${ttt}`
denz.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
reply(ucapan2)
naa = nana.filter(hhg => !hhg.id.includes(from))
return nana = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = ` *TicTacToe* \n*_ɢᴀᴍᴇ ᴅʀᴀᴡ ᴅᴜᴇ ᴛᴏ ᴅᴇᴀᴅʟᴏᴄᴋ_*`
ucapan2 = ` *TicTacToe* \n*ᴛʜᴇ ғɪɴᴀʟ ʀᴇsᴜʟᴛ:*\n\n${ttt}`
reply(ucapan1)
reply(ucapan2)
naa = nana.filter(hhg => !hhg.id.includes(from))
return nana = naa
}
ucapan = ` *TicTacToe* \nᴛᴜʀɴ @${tty.player2.split('@')[0]}\nPlayer1 @${tty.player1.split('@')[0]}\n\n${ttt}`
 denz.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(body)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('ᴇɴᴛᴇʀ ɴᴜᴍʙᴇʀs ᴄᴏʀʀᴇᴄᴛʟʏ')
main = nana.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('ɪᴛs ᴀʟʀᴇᴀᴅʏ ғɪʟʟᴇᴅ ᴛʜᴇ ᴏᴛʜᴇʀ ᴄᴏɴᴛᴀɴᴛ ʙʀᴏ')
if (main[0].gilir.includes(sender)) return reply('ᴡᴀɪᴛ ʏᴏᴜʀ ᴛᴜʀɴ ʙʀᴏ')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = nana.filter(hhg => !hhg.id.includes(from))
nana = naa
pop = main[0]
nana.push(pop)
tto = nana.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = ` *TicTacToe* \nʏᴇʏʏʏ ɢᴀᴍᴇ ᴡᴏɴ ʙʏ *@${tty.player2.split('@')[0]}*\n`
ucapan2 = ` *TicTacToe* \n*ᴛʜᴇ ғɪɴᴀʟ ʀᴇsᴜʟᴛ:*\n\n${ttt}`
denz.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
reply(ucapan2)
naa = nana.filter(hhg => !hhg.id.includes(from))
return nana = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = ` *TicTacToe* \n*_ɢᴀᴍᴇ ᴅʀᴀᴡ ᴅᴜᴇ ᴛᴏ ᴅᴇᴀᴅʟᴏᴄᴋ_*`
ucapan2 = ` *TicTacToe* \n*ᴛʜᴇ ғɪɴᴀʟ ʀᴇsᴜʟᴛ:*\n\n${ttt}`
reply(ucapan1)
reply(ucapan2)
naa = nana.filter(hhg => !hhg.id.includes(from))
return nana = naa
}
ucapan = ` *TicTacToe* \nᴛᴜʀɴ @${tty.player1.split('@')[0]}\nPlayer2 @${tty.player2.split('@')[0]}\n\n${ttt}`
 denz.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
       const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'pink'), color(`${pushname}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'gold'))}
        
        switch (command) {
			   case 'help':
		        dtod = "917356378949@s.whatsapp.net" //
		        runtime = process.uptime()
				const jmn = moment.tz('Asia/Kolkata').format('H:m:s')
				let d = new Date
				let locale = 'en'
				let gmt = new Date(0).getTime() - new Date('1 January 2020').getTime()
				let weton = ['🖤', '💜','🤍','💖'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				let week = d.toLocaleDateString(locale, { weekday: 'long' })
				let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
                let batanu = global.batrei[global.batrei.length - 1]
                const crewbot = fs.readFileSync('crewbot.png')
		        const menu = `ʜɪ   ${pushname}! ʙʀᴏ ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ?
		
		
		
		
		         ${tampilHari}     
		
		
━━━━━━━━━━━━━━━━
  ╔༆ᴄʀᴇᴀᴛᴏʀ : wa.me/917356378949                                         
  ║🍻ᴄʜᴀʀɢᴇ : ${batanu}%                                                                    
  ║🍻sᴛᴀᴛᴜs :${publik ? 'ᴘᴜʙʟɪᴄ😚' : 'sᴇʟғ🙂'}        
  ║🍻ʜᴏᴜʀ : ${jmn}
  ║🍻ᴅᴀʏ : ${week} ${weton}
  ╚༄ᴅᴀᴛᴇ : ${calender}
━━━━━━━━━━━━━━━━            
┏━━━━━━━━━━━━━━━⓶⓿⓶②
┃      ᴏɪ  ${pushname}!
┃ *_ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍᴇɴᴜ_*    ┃
┗━━━━━━━━━━━━━━━𒆜
⎉⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⇵⎉
╔𒆜*ᴀʙᴏᴜᴛ*
║➽ ${prefix}ᴅᴇʟᴇᴛᴇ
║➽ ${prefix}sᴛᴀᴛᴜs
║➽ ${prefix}ʀᴜɴᴛɪᴍᴇ
║➽ ${prefix}sᴘᴇᴇᴅ
║➽ ${prefix}ʜᴇʟᴘ
║➽ ${prefix}ᴏᴡɴᴇʀ
╚➽ ${prefix}ᴍᴇɴᴜ
 ╔𒈒
 ║ ғᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɪɴsᴛᴀɢʀᴀᴍ :https://instagram.com/_w4lk36.EFx
 ╚𒈒
╔➽*𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔*
║➭ ${prefix}ᴏᴡɴᴇʀᴍᴇɴᴜ
║➭ ${prefix}ᴍᴀᴋᴇʀᴍᴇɴᴜ
║➭ ${prefix}ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
║➭ ${prefix}ɢʀᴏᴜᴘᴍᴇɴᴜ
║➭ ${prefix}sᴛɪᴄᴋᴇʀᴍᴇɴᴜ
║➭ ${prefix}ᴛᴏᴏʟsᴍᴇɴᴜ
║➭ ${prefix}ᴏᴛʜᴇʀᴍᴇɴᴜ
╚➽ғᴜᴄᴋɪɴɢ ɪs ɴᴏᴛ ᴇᴀsʏ ғᴏʀ ᴀʟʟ✵

➽ sᴘʏʀᴏ / ᴀᴍᴇᴇɴ 𒆜
ʟᴏᴠᴇ ʏᴏᴜ ᴀʟʟ!`

                denz.sendMessage(from, crewbot, image, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./denz.jpg`)},"title": fake,"description": fake,"currencyCode": "IDR","priceAmount1000": "66638635","retailerId": fake,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}, thumbnail: dfrply, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [dtod]}, caption: menu})
				break
				
case 'menu':
let pi=denz["prepareMessageFromContent"](from,{
"listMessage":{
"title":"ʜɪ sᴇʟᴇᴄᴛ ᴀɴʏ ᴛʜɪɴɢ ғʀᴏᴍ ᴛʜɪs","description":`${""}
     ᴏɪɪ  ${pushname}     
╔➽ᴄʀᴇᴀᴛᴏʀ⟼ ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴
║
║➽ʜᴏsᴛ sᴇʀᴠᴇʀ📡⟼ ʀᴀɪʟᴡᴀʏ
║
║➽sᴇʀᴠᴇʀ🧬⟼ ʙᴀɪʟʏᴇs
║
║➽ғʀᴀᴍᴇ ᴡᴏʀᴋ📂⟼ ᴊᴀᴠᴀsᴄʀɪᴘᴛ
║
║➽ᴘʀᴇғɪx⟼ (ᴍᴜʟᴛɪ ᴘʀᴇғɪx)
║
║➽sᴛᴀᴛᴜs⟼ ${publik ? 'ᴘᴜʙʟɪᴄ ɴᴏᴡ' : 'sᴇʟғ ɴᴏᴡ'} 
║
╚➽ᴏᴡɴᴇʀ⟼ @917356378949            
${tampilUcapan}
${" "}
   ʜʏ ${pushname}   sᴇʟᴇᴄᴛ ᴀ ᴏᴘᴛɪᴏɴ
${""}
`,"buttonText":" ᴄʟɪᴄᴋ ʜᴇʀᴇ ","listType":"SINGLE_SELECT","sections":[{
"title":"sᴇʟᴇᴄᴛ ᴏɴᴇ","rows":[{
"title":"convertmenu","rowId":"0"
}
,{"title":"downloadmenu","rowId":"0"}
,{"title":"groupmenu","rowId":"0"}
,{"title":"makermenu","rowId":"0"}
,{"title":"othermenu","rowId":"0"}
,{"title":"ownermenu","rowId":"0"}
,{"title":"stickermenu","rowId":"0"}
,{"title":"credit","rowId":"0"}
]}]}},{});denz.relayWAMessage(pi,{waitForAck:true})

break
				
				
				
				
				
				
				case 'ownermenu':
				case 'menuowner':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@Adith')[Adith]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menuowner = `◪ *𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔*
╔༆${prefix}bc 「 _teks/reply gif/image/video with caption_ 」
║༄${prefix}tobc 「 _reply sticker/audio with caption_ 」
║༄${prefix}return 「 _javascript_ 」
║༄${prefix}clearall
║༄${prefix}public
║༄${prefix}self
║༄${prefix}upswteks 「 _text_ 」
║༄${prefix}upswlokasi 「 _text_ 」
║༄${prefix}upswaudio 「 _reply audio_ 」
║༄${prefix}upswvoice 「 _reply audio_ 」
║༄${prefix}upswsticker 「 _reply sticker_ 」
║༄${prefix}upswimage 「 _reply image with caption_ 」
║༄${prefix}upswgif 「 _reply gif with caption_ 」
║༄${prefix}upswvideo 「 _reply video with caption_ 」
║༄${prefix}shutdown
║༄${prefix}offline 「 _reason_ 」
║༄${prefix}online
║༄${prefix}exif 「 _name|author_ 」
║༄${prefix}setprofile 「 _reply image_ 」
║༄${prefix}setthumb 「 _reply image_ 」
║༄${prefix}setprefix 「 _text_ 」
║༄${prefix}setname 「 _text_ 」
║༄${prefix}setbio 「 _text_ 」
║༄${prefix}addsticker 「 _name_ 」
║༄${prefix}delsticker 「 _name_ 」
║༄${prefix}addvn 「 _name_ 」
║༄${prefix}delvn 「 _name_ 」
║༄${prefix}addimage 「 _name_ 」
║༄${prefix}delimage 「 _name_ 」
║༄${prefix}bug
║༄${prefix}bugtroli
║༄${prefix}buglokasi
║༄${prefix}bughole
║༄${prefix}leave
║༄${prefix}join 「 _link group_ 」
║༄${prefix}addrespon 「 _ask|answer_ 」
╚༄${prefix}delrespon 「 _name_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 206, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menuowner})
				break
				case 'makermenu':
				case 'menumaker':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menumaker = `◪ *𝐌??𝐊𝐄𝐑 𝐌𝐄𝐍𝐔*
╔༆${prefix}tahta 「 _text_ 」
║༄${prefix}matrix 「 _text_ 」
║༄${prefix}googletxt 「 _text_ 」
║༄${prefix}spiderman 「 _text_ 」
║༄${prefix}express 「 _text_ 」
╚༄${prefix}pubg 「 _text1|text2_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menumaker})
				break
				case 'downloadmenu':
				case 'menudownload':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menudownload = `◉𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔◉
╔༆${prefix}ytsearch 「 _judul_ 」
║༄${prefix}ytmp4 「 _link yt_ 」
║༄${prefix}ytmp3 「 _link yt_ 」
║༄${prefix}play 「 _song name_ 」
║༄${prefix}video 「 _video name_ 」
║༄${prefix}tinyurl 「 _name_ 」
║༄${prefix}lirik 「 _name_ 」
║༄${prefix}resepmasakan 「 _name_ 」
║༄${prefix}artimimpi 「 _text_ 」
║༄${prefix}bilangangka 「 _number_ 」
║༄${prefix}kalkulator 「 _number_ 」
║༄${prefix}fancytext 「 _text_ 」
║༄${prefix}githubstalk 「 _username_ 」
╚༄${prefix}ss 「 _url_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menudownload})
				break
				case 'groupmenu':
				case 'menugroup':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menugroup = `◪ *𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔*
╔༆ ${prefix}getpict 「 _@tag_ 」
│ ༄${prefix}getbio 「 _@tag_ 」
│༄ ${prefix}promote 「 _@tag_ 」
│ ༄${prefix}demote 「 _@tag_ 」
│ ༄${prefix}antilink 「 _1/0_ 」
│༄ ${prefix}autosticker 「 _1/0_ 」
│༄ ${prefix}welcome 「 _1/0_ 」
│༄ ${prefix}antibule 「 _1/0_ 」
│༄ ${prefix}creategrup 「 _name|@tag_ 」
│༄ ${prefix}getppgc
│༄ ${prefix}getdeskgc
│༄ ${prefix}sider 「 _reply text_ 」
│༄ ${prefix}hacked 「 _text_ 」
│༄ ${prefix}setnamegc 「 _text_ 」
│༄ ${prefix}setdeskgc 「 _text_ 」
│༄ ${prefix}tictactoe「 _x/o @tag_ 」
│༄ ${prefix}delttt
│༄ ${prefix}fitnah 「 _@tag|text1|text2_ 」
│༄ ${prefix}kontak 「 _@tag|name_ 」
│༄ ${prefix}kontag 「 _@tag|name_ 」
│༄ ${prefix}group 「 _open/close_ 」
│༄ ${prefix}linkgrup
│༄ ${prefix}hidetag 「 _text_ 」
│༄ ${prefix}sticktag 「 _name sticker_ 」
╚༆ ${prefix}totag 「 _reply media_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menugroup})
				break
				case 'othermenu':
				case 'menuother':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menuother = `◪ *𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔*
╔༆ ${prefix}slots
│༄ ${prefix}suit 「 _gunting/batu/kertas_ 」
│༄ ${prefix}tag「 _nomor_ 」
│༄ ${prefix}tagme
│༄ ${prefix}tts 「 _kodebhs teks_ 」
│༄ ${prefix}readmore 「 _teks1|teks2_ 」
│༄ ${prefix}fitnahpc 「 _nomor|teks1|teks2_ 」
│༄ ${prefix}chat 「 _nomor|teks_ 」
│༄ ${prefix}fdeface 「 _reply img|teks1|teks2_ 」
│༄ ${prefix}listimage
│༄ ${prefix}liststicker
│༄ ${prefix}listvn
│༄ ${prefix}infogempa
│༄ ${prefix}pantun
│༄ ${prefix}spam 「 _teks|jumlah_ 」
│༄ ${prefix}sharelock 「 _teks1|teks2_ 」
╚༆ ${prefix}ephemeral 「 _teks_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menuother})
				break
				case 'stickermenu':
				case 'menusticker':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menusticker = `◉𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔◉
╔༆  ${prefix}sticker
│༄ ${prefix}stickerwm 「 _nama|author_ 」
│༄ ${prefix}takestick 「 _nama|author_ 」
│༄ ${prefix}colong 「 _reply sticker_ 」
│༄ ${prefix}dadu
│༄ ${prefix}semoji 「 _emoji_ 」
╚༆  ${prefix}attp 「 _teks_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menusticker})
				break
				case 'toolsmenu':
				case 'menutools':
				try {
				             pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				fcrew = await getBuffer(pporang)
				var icrew = fs.readFileSync('icrew.jpg')
				var menutools = `◪ *𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔*
╔༆ ${prefix}toimg
│༄ ${prefix}tomp3 「 _reply video_ 」
│༄ ${prefix}tomp4 「 _reply sticker gif_ 」
│༄ ${prefix}robot 「 _reply audio_ 」
│༄ ${prefix}detikvn 「 _reply audio caption angka_ 」
╚༆ ${prefix}detikvideo 「 _reply video caption angka_ 」`
				denz.sendMessage(from, icrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}`, orderTitle: `${tampilUcapan} ${pushname}`, sellerJid: '0@s.whatsapp.net'}}}, thumbnail: fcrew, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: menutools})
				break
				case 'credit':
	dtod = '917356378949'
   dtod1 = '919946470485'
   dtod2 = '6587253226'
   dtod3 = '917560810451'
   dtod4 ='0'
   var yez = `
ᴊᴏᴋᴇʀ_ʙᴏᴛ ᴄᴏᴍᴍᴜɴɪᴛʏ🇮🇳


𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎:


➽ ᴡ4ʟᴋ36.ᴇғx
➽ ᴀᴊᴍᴀʟ - ᴀᴄʜᴜ
➽ ᴀᴍᴇᴇɴ sᴇʀ
➽ sᴘʏʀᴏ sᴇʀ
➽ ᴊᴏᴋᴇʀ sᴇʀ
➽ ᴊɪʜᴀᴅ

𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎:

ᴀᴊᴍᴀʟ - ᴀᴄʜᴜ ᴀɴᴅ ᴀᴍᴇᴇɴ

𝐎𝐅𝐅𝐈𝐂𝐀𝐋 𝐖𝐄𝐁𝐒𝐈𝐓𝐄𝐒:

✰ https://aneeswalker.github.io/ 
✰ https://ajmal-achu.github.io/
`			   
     credit = denz.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 2021, "message": `${yez}`, "footerText": "⁩ꪶ͢ᴡᴀʟᴋᴇʀꫂ⁴⁰⁴", "thumbnail": fs.readFileSync('./denz.jpg'), "surface": 'CATALOG'}}, {quoted: mek})
            denz.relayWAMessage(credit)
        break	
case 'delttt':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
reply(mess.wait)
laa = nana.filter(toek => !toek.id.includes(from)) 
nana = laa
reply('Done✔️ Gan')
break
case 'viewonce':
res = await denz.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
denz.relayWAMessage(res)
break				
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=ikygans`, {method: 'get'})
teks = anu.result
reply(teks)
break			
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=ikygans`, {method: 'get'})
					gstalk = `❏ *𝐆𝐈𝐓𝐇𝐔𝐁 𝐒𝐓𝐀𝐋𝐊😁*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					denz.sendMessage(from, buff, image, {quoted: mek, caption: gstalk})
					break 
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=ikygans`, {method: 'get'})
					gempa = `❏ *𝐈𝐍𝐅𝐎 𝐆𝐄𝐌𝐏𝐀🤠*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					denz.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					break 				
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await denz.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await denz.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'voice':
					encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediat = await denz.downloadAndSaveMediaMessage(encmediat)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediat} ${ran}`, (err) => {
					fs.unlinkSync(mediat)
					if (err) return reply('*_ғᴀɪʟᴅ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴘᴛᴛ_*')
					topt = fs.readFileSync(ran)
					denz.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					})
					break
case 'secvn':
                    reply(mess.wait)
			    	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	                mediat = await denz.downloadAndSaveMediaMessage(encmediat)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediat)
					denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
					fs.unlinkSync(mediat)
				    break			
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('most!')
if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  denz.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await denz.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('most!')
	  for (let i = 0; i < args[0]; i++) {
	  denz.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await denz.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('most!')
	  for (let i = 0; i < args[0]; i++) {
	  denz.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await denz.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('most!')
	if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  denz.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
				case 'd':
				case 'del':
				case 'delete':
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome 1`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒂𝒄𝒕𝒊𝒗𝒆🐦')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						sendFakeStatus(from, `Sukses`, fake)
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒇𝒆𝒂𝒕𝒖𝒓𝒆 𝒊𝒔 𝒅𝒆𝒂𝒅😵')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						sendFakeStatus(from, `Sukses`, fake)
					} else {
						reply('1 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖓, 0 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖋𝖋🐦')
					}
					break
					case 'antibule':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('Activated')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `Sukses`, fake)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('Deactivated')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `Sukses`, fake)
					} else {
						reply('1 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖓, 0 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖋𝖋🐦')
					}
						break				
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
				case 'clearall':
				if (!isOwner) return reply(mess.only.ownerB)
					anu = await denz.chats.all()
					denz.setMaxListeners(25)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					sendFakeStatus(from, `Success`, fake)
					break
				case 'detikvn':
encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediat = await denz.downloadAndSaveMediaMessage(encmediat)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediat)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediat)
				break
				case 'detikvideo':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						denz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(media)
				break
				case 'autosticker':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`Penggunaan:\n\n${prefix}autosticker 1\natau\n${prefix}autosticker 0`)
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Activated')
						autosticker.push(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						sendFakeStatus(from, `Sukses`, fake)
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						sendFakeStatus(from, `Sukses`, fake)
					} else {
						reply('1 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖓, 0 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖋𝖋🐦')
					}
                                      break
				case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Activated')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						sendFakeStatus(from, `Sukses`, fake)
						denz.sendMessage(from, `ALLERT!!! Group this has been installed anti-link\n If You Violate Then I Will Kick`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Deactivated')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						sendFakeStatus(from, `Success`, fake)
					} else {
						reply('1 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖓, 0 𝖙𝖔 𝖙𝖚𝖗𝖓 𝖔𝖋𝖋🐦')
					}
					break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
if (args.length < 1) return reply(`Contoh : ${prefix}sharelock crew|bot`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
denz.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
				case 'tts':
					if (args.length < 1) return denz.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return denz.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? replyfrom('text is long')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								denz.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.min)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targetnya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					} else {
						sendFakeStatus(from, `𝑆𝑈𝐶𝐶𝐸𝑆`, fake)
						denz.groupDemoteAdmin(from, mentioned)
					}
					break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targernya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					} else {
						sendFakeStatus(from, `𝑆𝑈𝐶𝐶𝐸𝑆`, fake)
						denz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await denz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					denz.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'grup':
					case 'group':
					case 'gc':
					if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'open') {
					    sendFakeStatus(from, `𝑆𝑈𝐶𝐶𝐸𝑆`, fake)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						sendFakeStatus(from, `𝑆𝑈𝐶𝐶𝐸𝑆`, fake)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'spam':
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					denz.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					denz.groupUpdateSubject(from, `${body.slice(11)}`)
					sendFakeStatus(from, '𝑆𝑈𝐶𝐶𝐸𝑆', fake)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					denz.groupUpdateDescription(from, `${body.slice(10)}`)
					sendFakeStatus(from, '𝑆𝑈𝐶𝐶𝐸𝑆', fake)
					break
				case 'setthumb':
			if (!isQuotedImage) return reply('Reply imagenya!')
			if (!arg) return reply
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await denz.downloadMediaMessage(boij)
				fs.unlinkSync(`./denz.jpg`)
                await sleep(1000)
				fs.writeFileSync(`./denz.jpg`, delb)
				denz.sendMessage(from, `\`\`\`𝑆𝑈𝐶𝐶𝐸𝑆\`\`\``, text, { quoted: { key: { fromMe: false, participant: `1@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
				break
				case 'setprofile':
				case 'setpp':
				denz.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await denz.downloadAndSaveMediaMessage(enmediau)
					await denz.updateProfilePicture(botNumber, mediau)
					denz.sendMessage(from, `\`\`\`𝑆𝑈𝐶𝐶𝐸𝑆\`\`\``, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: await getBuffer(me.imgUrl), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				denz.updatePresence(from, Presence.composing)
				denz.groupLeave(from)
						break
				case 'bc':
					denz.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`𝑆𝑈𝐶𝐶𝐸𝑆 mengirim𝐵𝑅𝑂𝐴𝐷𝐶𝐴𝑆𝑇 ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`𝑆𝑈𝐶𝐶𝐸𝑆 mengirim 𝐵𝑅𝑂𝐴𝐷𝐶𝐴𝑆𝑇 ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`𝑆𝑈𝐶𝐶𝐸𝑆 mengirim 𝐵𝑅𝑂𝐴𝐷𝐶𝐴𝑆𝑇 ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`𝑆𝑈𝐶𝐶𝐸𝑆 mengirim 𝐵𝑅𝑂𝐴𝐷𝐶𝐴𝑆𝑇:\n${body.slice(4)}`)
					}
					break			
					case 'shutdown':
					if (!isOwner) return reply(mess.only.ownerB)
				sendFakeStatus(from, '𝑺𝒉𝒖𝒕𝒊𝒏𝒈 𝒅𝒐𝒘𝒏......', fake)
				await sleep(1000)
				return denz.sendMessage(from, JSON.stringify(eval(process.exit())), text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: '𝑺𝑲𝒀𝑳𝑰𝑵𝑬-𝑩𝑶𝑻', orderTitle: '𝑺𝑲𝒀𝑳𝑰𝑵𝑬-𝑩𝑶𝑻', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await denz.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					denz.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await denz.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						denz.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 999999999, quoted: mek })
						fs.unlinkSync(ran)
					})
					break			
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await denz.groupMetadata(anu)
				denz.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getppgc':
					if (!isGroup) return reply(mess.only.group)
					anu = from
		if (`${anu}@g.us`) {
		try {
					ppimg = await denz.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await denz.groupMetadata(anu)
				ano = await denz.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				denz.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'getbio':
				    if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Tag orangnya!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    const p = await denz.getStatus(`${mentioned}`, MessageType.text)
                    reply(p.status)
                    if (p.status == 401) {
                    reply(mess.error.api)
                    }
                    break
				case 'getpict':
				case 'getpic':
				case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await denz.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            denz.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+91')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            denz.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp mitnick`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					denz.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
			if (args === 0) return reply('where is emoji?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					denz.sendMessage(from, tagq, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `𝑺𝑲𝒀𝑳𝑰𝑵𝑬 𝑩𝑶𝑻`, orderTitle: `𝑺𝑲𝒀𝑳𝑰𝑵𝑬 𝑩𝑶𝑻`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					denz.sendMessage(from, tagu, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `𝑺𝑲𝒀𝑳𝑰𝑵𝑬 𝑩𝑶𝑻`, orderTitle: `𝑺𝑲𝒀𝑳𝑰𝑵𝑬 𝑩𝑶𝑻`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
				if (!isOwner) return reply(mess.only.ownerB)
				 if (args.length < 1) return ephe('Link nya mana?')
					denz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
sendFakeStatus(from, `Succes Bergabung Dalam Group`)
break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await denz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await denz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            denz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
				var groups = denz.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = denz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await denz.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? 'Dicas' : 'Tidak Dicas'
					const latensi = speed() - timestamp
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = denz.user.phone
					stamtus = `⍟ ────────────────── ⍟

ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ : ${privat.length}
ɢʀᴏᴜᴘ ᴄʜᴀᴛ : ${groups.length}
ᴛᴏᴛᴀʟ ᴄʜᴀᴛ : ${totalChat.length}
sᴘᴇᴇᴅ : ${latensi.toFixed(4)} Second
ʀᴜɴᴛɪᴍᴇ : ${kyun(uptime)}
ʙᴀᴛᴛᴇʀʏ : ${JSON.stringify(baterai)}% - ${listrik}
sᴛᴀᴛᴜs : ${publik ? 'Public' : 'Self'}
ᴜsᴇ ᴏғ ʀᴀᴍ : ${ram2}
ʜᴏsᴛɴᴀᴍᴇ : ${os.hostname()}
ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
ᴜᴘᴛɪᴍᴇ : ${kyun(os.uptime())}
ᴍɴᴄ : ${mnc}
ᴍᴄᴄ : ${mcc}
ᴅᴇᴠɪᴄᴇ ᴍᴏᴅᴇʟ : ${denz.user.phone.device_model}
ᴅᴇᴠɪᴄᴇ ᴍᴀɴᴜғᴀᴄᴛᴜʀᴇʀ : ${device_manufacturer}
ᴡᴀ ᴠᴇʀsɪᴏɴ: ${denz.user.phone.wa_version}
ᴏs ᴠᴇʀsɪᴏɴ: ${denz.user.phone.os_version}

⍟ ────────────────── ⍟`
denz.sendMessage(from, stamtus, text, { thumbnail: dfrply, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: 'ꪶ͢ᴡ4ʟᴋᴇ6ꫂ⁴⁰⁴', orderTitle: 'ᴀᴅɪᴛʜsᴇʀ 𝑩𝑶𝑻', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
break
				case 'tobc':
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
				var bc = body.slice(6)
					denz.updatePresence(from, Presence.composing)
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'audio/mp4', duration: 999999999, ptt: true })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await denz.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                denz.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'ephemeral':    
					if (!isGroup) return reply(mess.only.group)
					ppgc = await denz.getProfilePicture(from)
                teks = args.join(' ')
                sksks = body.slice(11)
                options = {
                sendEphemeral: true, 
               thumbnail: await imageToBase64(ppgc)
                }
              await denz.sendMessage(from, `${sksks}`, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break
            case 'online':
            if (!isOwner) return reply(mess.only.ownerB)
				offline = false
				sendFakeStatus(from, `*Status : ONLINE*`)
				break
			case 'offline':
			if (!isOwner) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				sendFakeStatus(from, `Fitur OFFLINE diaktifkan`)
				break       
            case 'hidetag':
            if (!isGroup) return reply(mess.only.group)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break         
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   denz.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                denz.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                denz.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                denz.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
					case 'ytmp4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *ʏᴛᴍᴘ4*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP3\n*ғɪʟᴇsɪᴢᴇ* : ${filesizeF}\n*Link* : ${a.data}\n\n_sᴏʀʀʏ, ᴛʜᴇ ᴅᴜʀᴀᴛɪᴏɴ ᴇxcᴇᴇᴅs ᴛʜᴇ ᴍᴀxɪᴍᴜᴍ ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ...🎈_`)
								const captions = `❏ *ʏᴛᴍᴘ4*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP4\n❏ *sɪᴢᴇ* : ${filesizeF}\n\n_ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ⚙️......, ᴠɪᴅᴇᴏ ɪs sᴇɴᴅɪɴɢ......🎈_`
								sendMediaURL(from, thumb, captions)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            if (!args.length) return reply('What is your title?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Title:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Watched:* ${items[i].views}
├ ❏ *Duration:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await denz.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
            case 'ytmp3':
						if (args.length === 0) return reply(`sᴇɴᴅ ᴏʀᴅᴇʀ *${prefix}ytmp3 <ʏᴛ ʟɪɴᴋ>*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *ʏᴛᴍᴘ3*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP3\n*ғɪʟᴇsɪᴢᴇ* : ${filesizeF}\n*ʟɪɴᴋ* : ${a.data}\n\n_sᴏʀʀʏ, ᴛʜᴇ ᴅᴜʀᴀᴛɪᴏɴ ᴇxcᴇᴇᴅs ᴛʜᴇ ᴍᴀxɪᴍᴜᴍ ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ...🎈_`)
								const captions = `❏ *ʏᴛᴍᴘ3*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP3\n❏ *sɪᴢᴇ* : ${filesizeF}\n\n_ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ⚙️......, ᴀᴜᴅɪᴏ ɪs sᴇɴᴅɪɴɢ......🎈_`
								sendMediaURL(from, thumb, captions)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
                    case 'play':
                            if (args.length === 0) return reply(`sᴇɴᴅ ᴏʀᴅᴇʀs *${prefix}play* _ᴛʜᴇ ᴛɪᴛʟᴇ ᴏғ ᴛʜᴇ sᴏɴɢ ᴛᴏ sᴇᴀʀᴄʜ ғᴏʀ_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *ᴘʟᴀʏ*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP3\n*ғɪʟᴇsɪᴢᴇ* : ${filesizeF}\n*Link* : ${a.data}\n\n_sᴏʀʀʏ, ᴛʜᴇ ᴅᴜʀᴀᴛɪᴏɴ ᴇxcᴇᴇᴅs ᴛʜᴇ ᴍᴀxɪᴍᴜᴍ ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ...🎈_`)
                                    const captions = `❏ *ᴘʟᴀʏ*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP3\n❏ *sɪᴢᴇ* : ${filesizeF}\n\n_ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ⚙️......, ᴀᴜᴅɪᴏ ɪs sᴇɴᴅɪɴɢ......🎈_`
								    sendMediaURL(from, thumb, captions)
                                    sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                            case 'video':
                            if (args.length === 0) return reply(`sᴇɴᴅ ᴏʀᴅᴇʀs *${prefix}video* _ᴛʜᴇ ᴛɪᴛʟᴇ ᴏғ ᴛʜᴇ ᴠɪᴅᴇᴏ ᴛᴏ sᴇᴀʀᴄʜ ғᴏʀ_`)
                            const playi = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaihah = playi.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulaihah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *ᴠɪᴅᴇᴏ*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP4\n*ғɪʟᴇsɪᴢᴇ* : ${filesizeF}\n*ʟɪɴᴋ* : ${a.data}\n\n_sᴏʀʀʏ, ᴛʜᴇ ᴅᴜʀᴀᴛɪᴏɴ ᴇxcᴇᴇᴅs ᴛʜᴇ ᴍᴀxɪᴍᴜᴍ ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ...🎈._`)
                                    const captions = `❏ *ʏᴛᴍᴘ3*\n\n❏ *ᴛɪᴛʟᴇ* : ${title}\n❏ *ᴇxᴛ* : MP4\n❏ *sɪᴢᴇ* : ${filesizeF}\n\n_ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ⚙️....., ᴀᴜᴅɪᴏ ɪs sᴇɴᴅɪɴɢ......🎈_`
								    sendMediaURL(from, thumb, captions)
                                    sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break		
                    case 'exif':
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = body.slice(6)
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(11)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							denz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					sendFakeStatus(from, `*Speed: ${latensyi.toFixed(4)} Second*`)
					break
				case 'return':
				if (!isOwner) return reply(mess.only.ownerB)
					return denz.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					break
				case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							denz.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=ikygans`)
					break
				break
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('What Name of The sticker')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					denz.sendMessage(from, `Success, please check with *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 sendFakeStatus(from, 'Sukses', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
                    case 'addbgm':
					if (!isQuotedAudio) return reply('*Reply to Audio*')
					nm = body.slice(7)
					if (!nm) return reply('*What is The bgm name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					denz.sendMessage(from, `*Bgm Added*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: `${nm}`, orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
	                case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					denz.sendMessage(from, `*Bgm Deleted*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./denz.jpg'), surface: 200, message: 'walker', orderTitle: '404', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break				
				case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_To take vn please reply to this message with the caption of the vn name_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('WhatThe name of the image?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await denz.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					denz.sendMessage(from, `Succes, please check with *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 sendFakeStatus(from, 'Succes', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take an image, please reply to this message with the caption of the image name_`
					denz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await denz.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				denz.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				teks = `${waktu(runtime)}`
				sendFakeStatus(from, teks, `*Runtime*`)
				break
			case 'setprefix':
			if (!isOwner) return reply(mess.only.ownerB)
			if (args.length < 1) return reply('where is prefix?')
				prefix = args[0]
				sendFakeStatus(from, 'Succes😌', fake)
				break
				case 'setbio':
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('The text?')
					iyek = body.slice(8)
					denz.setStatus(`${iyek}`)
					sendFakeStatus(from, 'Succes😌', fake)
					break
					case 'setname':
					if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('The text?')
                anu = body.slice(9)
                denz.updateProfileName(anu)
                sendFakeStatus(from, 'Succes😌', fake)
                break
			case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Penggunaan ${prefix}add nomor`)
				denz.groupAdd(from, [args[0] + '@s.whatsapp.net'])
				sendFakeStatus(from, `Succes`, fake)
				break
			case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Penggunaan ${prefix}kick nomor|tag`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						denz.groupRemove(from, mentioned[i])
                    }
                    sendFakeStatus(from, 'bye bro', fake)
                } else {
                    denz.groupRemove(from, args[0] + '@s.whatsapp.net')
                    sendFakeStatus(from, 'bye bro', fake)
                }
				break		
				case 'tictactoe':
            case 'ttt':            
            if (!isGroup) return reply(mess.only.group)
  if (mentionUser.length == 0) return await reply("Lu mau maen ama siapa oy")
                if (args.length == 1) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
               if (!["x", "o"].includes(args[0].toLowerCase())) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
                nantang = X
                pelawan = O
                if (args[0].toLowerCase() == "o") {
                    nantang = O
                    pelawan = X
                }
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = sender
                var lawan = mentionUser[0]
                tesk = `Player 1: @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n         "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\nPlayer 2: @${lawan.split("@")[0]} (${pelawan})`
                return denz.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                break
		default:
		break
		if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								denz.sendMessage(from, buffer, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
					  }
					} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
	console.log(color('[ERROR]', 'red'), e)
	// console.log(e)
	}
    }
    }