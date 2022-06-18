const { Telegraf } = require('telegraf')

const bot = new Telegraf('5181953945:AAHk97ntywb8kw12WqHSEOFnPtM9hglEKKg')
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()