//get input from a readable stream  such as the process.stdin stream

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How are you?', (ans)=>{
    console.log(`${ans}!`);
    readline.close();
});

//A more abstract solution is provided by the Inquirer.js package
const {input} = require('@inquirer/prompts');

async function askQuestions() {
    const ans = await input({
        message: `What is your name?`,
        name: 'name'
    });
    console.log(`Hi ${ans}!`)
}

askQuestions();