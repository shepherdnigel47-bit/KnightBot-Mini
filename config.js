/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VV25KiSBD9lY161Ri5iIoRHbGAiJeGRhHF3piHEgos5FpV3Jzw3zfonp6Zh93Z3rciq+LkyTwnk28gyzFFW9SB+TdQEFxDhvoj6woE5kCtwhARMAQBZBDMAbUS6WBFuntsoT9e3DmPS87CAVF93K4qYWTuNsiLio1ruE/gMQRFdUmw/xtAe+JkeH+q4I1dg+NFf3YrffYS40ZZxMnJHlQDkZd2d3MhmE/g0SNCTHAW6cUVpYjAZIs6G2LyOfqdoUemAvd6dBOeQyrtJdUj24KII3O90jTiVS4T4MlC+vpz9DtROEe+/6rfg/jotAMrrLtT95IGsCTrwGL3WBC80klH0e6dPsVRhoJ1gDKGWffpvue6PDq0lexxms5vX8QRPafOMQh03XG5aGy3o1l1W1QDZnySePKiL8pyr7G2DSSrRbWs7geF57tBbB/qUWga+/F16yeEz38lbpMPr9z+T9+NbWtG55V1PoXNAW2CgMneKMy38cBA1lJO3bbuNGN39lf0c/RjOQpvNyfTvJf6iGzuSgeKEglNjqvW5pZ2V27keLKpT0v/J33IKvI7lhd42ineQKIvi3yy9ANFbTZpm4cUn6myM080kMz9ZDDxb75wJ2Z48TUUGTdPrsKlZ5+Ox3h3UMV2q+oGGant7CiMsNI8vVV0Q906AHP+MQQERZgyAhnOsz4mSkMAg9pBPkHsrbtgqr3eZ+4CP+/qLQtyq7kv6XLm0HVdrr12VjbOlG/gYqPt/CcwBAXJfUQpClaYspx0JqIURoiC+V9fhyBDLXvX7S0bPwQhJpS5WVUkOQw+RP24hL6fVxlzuszX+gMiYM79DCPGcBbRvo1VBol/xTXSrpBRMA9hQtGPAhFBAZgzUqEfQ6vlQd/3pSDsJW1pgyFI3/TAAZgDYSJO+RnHTzl5Np/If9IvTQ8Li+JLhhgYggz2r4ESEXypKM4QpX84eVL1faRgCJJ3GEmcSsJsKskyL/I9UB9//CigzxcgBnFCwRxo1tQdo0bVt2XR+JxhKDRStEgBPwv+MM67MrMkF1QjDYUToXdNFsbtVQ92m6SKoLT3+e0NBs9O2Wy0E/f0DyBgDtI65XLvJojj44JbW526O52llb72yti5H7QR9RNF95J6ZyTls+lpoqLEtZfWgz2eJDfOvdeLWrCTUkPLV06LLy+NeFR7lw1BgGrso1+TBeM43xyluFxjK8SXpHjF5WGgr/xLPFKgKkl8a5uXta0OFoPG4FdN0I2ceMolC5c7G6f9ySlXV4scx23lK6/Xu/6KBUV5t/TbSCXfVxl+c1svZf8ZYvS2Gb5L9p/SvhPvHcg9hr9gfN81/zKvariBVrQvMjkpp2ZTB5V53q9c7fWSG5XrWU5hZA5XUm2XMPB4fB2CIoEszEna/8nSCwRDQPKq9/M6C/PfZNLU9VpTomVfdgIpU37OyAGniDKYFmDOT6ciPxEnsvT+yiZ5sYL0CuYgS0X1Ah5/A8CET9pvBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
