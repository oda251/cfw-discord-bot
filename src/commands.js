import { SlashCommandBuilder } from '@discordjs/builders';

const ping = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('pong!')

//const hello = new SlashCommandBuilder()
//     .setName('hello')
//     .setDescription('挨拶をします。')
//     .addStringOption(option =>
//         option
//             .setName('language')
//             .setDescription('言語を指定します。')
//             .setRequired(true) //trueで必須、falseで任意
//             .addChoices(
//             	{name:'Japanese', value:'ja'},
//             	{name:'English', value:'en'}
//             )
//     );

export const commands = [ping]