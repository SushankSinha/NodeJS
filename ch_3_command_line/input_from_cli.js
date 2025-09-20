// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('How are you?', (ans)=>{
//     console.log(`${ans}!`);
//     readline.close();
// });

const {input} = require('@inquirer/prompts');

async function askQuestions() {
    const ans = await input({
        message: `What is your name?`,
        name: 'name'
    });
    console.log(`Hi ${ans}!`)
}

askQuestions();