import { SlashCommandBuilder } from '@discordjs/builders';

export const shiftName = new SlashCommandBuilder()
    .setName('shift-name')
    .setDescription('あなたの直近のシフトを伝えます')
	.addStringOption(option =>
		option
			.setName('intra-name')
			.setDescription('イントラ名を教えてください')
			.setRequired(true)
	);

export const shiftDate = new SlashCommandBuilder()
	.setName('shift-date')
	.setDescription('指定日のシフトを伝えます')
	.addStringOption(option =>
		option
			.setName('date')
			.setDescription('日付を教えてください format: YYYY/MM/DD')
			.setRequired(true)
	);

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

export const commands = [shiftName, shiftDate];