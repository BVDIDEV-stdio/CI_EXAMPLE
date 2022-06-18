const {Telegraf} = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('5181953945:AAHk97ntywb8kw12WqHSEOFnPtM9hglEKKg');
bot.start((ctx) => {
    ctx.reply("Привет\nЯ бот, который может говорить, где сейчас какая температура (введи /tempNow)\n");
});
bot.command('tempNow', (ctx) => {
    ctx.reply('Всё просто)\nВводишь город - я говорю текущую температуру)😌\n');
    bot.on('text', function (ctx) {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: ctx.message.text,
                appid: 'bd3ec6a0fc473c49d8494ab7f305316b',
                units: 'metric',
                lang: 'ru'
            }
        }).then(function (response) {
            console.log("Мне написали: " + ctx.message.text);
            ctx.reply(response.data.name + " " + response.data.main.temp);
        })
            .catch(function (error) {
                console.log("Произошла ошибка (я, походу, такого города не знаю)\n" +
                    "Поподробнее - вот тебе джсон в ленту:\n");
                console.log(JSON.stringify(error, null, '\t') + '\n'); // #спасибо_стаковерфлоу
                ctx.reply("Непонел..");
            });
    });
});

bot.launch();