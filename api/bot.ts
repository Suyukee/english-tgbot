import { Bot, webhookCallback } from 'grammy';

export const config = {
	runtime: 'edge',
};

const token = process.env.BOT_TOKEN;
if (!token) throw new Error('BOT_TOKEN не установлен');

const bot = new Bot(token);

bot.command('start', (ctx) => ctx.reply('Добро пожаловать. Запущен и работает!'));

bot.start();

export default webhookCallback(bot, 'std/http');
