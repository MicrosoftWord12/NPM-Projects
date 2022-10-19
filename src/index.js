const cp = require("child_process");
const readline = require("readline");
const { FileManager } = require("./lib/FileLoader/FileManager");
const { DirectoryManager } = require("./lib/DirectoryTree/DirectoryManager");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    rl.question("Would you like to create a discord.js project?", (answer) => {
        answer = answer.toLowerCase();
        if (answer === "yes") {
            cp.exec("npm init -y");
            rl.question("Would you like a JSON Config File or a .env file?", (answer) => {
                answer = answer.toLowerCase();
                if (answer === "json") {
                } else {
                    // .env File Config
                }
            });
        }
    });
}

module.exports = {
    main,
};
