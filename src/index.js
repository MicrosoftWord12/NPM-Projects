const cp = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function main() {
    rl.question("Would you like to create a discord.js project?", (answer) => {
        answer = answer.toLowerCase();
        if (answer === "yes") {
            rl.question("Would you like a JSON Config File or a .env file?", (answer) => {
                answer = answer.toLowerCase();
                if (answer === "json") {
                    //Json File Config
                } else {
                    // .env File Config
                }
            });
        }
    });
}
