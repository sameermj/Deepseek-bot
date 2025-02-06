import { Telegraf } from 'telegraf';
import { config } from './config';
import { IndexController } from './controllers/index';

const bot = new Telegraf(config.BOT_TOKEN);
const indexController = new IndexController();

bot.start((ctx) => indexController.handleStart(ctx));
bot.help((ctx) => indexController.handleHelp(ctx));
bot.on('text', (ctx) => indexController.handleText(ctx));

bot.launch().then(() => {
    console.log('Bot is up and running!');
}).catch(err => {
    console.error('Failed to launch the bot:', err);
});