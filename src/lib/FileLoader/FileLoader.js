const fs = require("fs");
const path = require("path");

class FileLoader {
    //#region Bot Files
    botFile = path.resolve(__filename);
    createBotFile = (botFileType) => {
        botFileType.toLowerCase();
        if (botFileType.contains("env")) {
            const mainBotFile = fs.readFileSync(botFile, "utf-8");
            fs.appendFileSync("./src/bot.js", mainBotFile, "utf-8");
        } else if (botFileType.contains("json")) {
            const mainBotFile = fs.readFileSync(botFile, "utf-8");
            fs.appendFileSync("./src/bot.js", mainBotFile, "utf-8");
        }
    };

    //#endregion

    //#region Config Files

    envFile = path.resolve(__dirname, "../../Templates/Configs/.env");
    jsonFile = path.resolve(__dirname, "../../Templates/Configs/Config.json");

    createEnvFile = () => {
        const mainEnvFile = fs.readFileSync(envFile, "utf-8");
        fs.appendFileSync(".env", mainEnvFile, { encoding: "utf-8" });
    };

    createJsonFile = () => {
        const mainJsonFile = fs.readFileSync(jsonFile, "utf-8");
        fs.appendFileSync("config.json", mainJsonFile, { encoding: "utf-8" });
    };

    //#endregion

    //#region handler files

    commandHandlerFile = path.resolve(__dirname, "../../Templates/Handlers/CommandHandler.js");
    eventHandlerFile = path.resolve(__dirname, "../../Templates/Handlers/EventHandler.js");
    commandExecutorFile = path.resolve(__dirname, "../../Templates/Handlers/message.js");

    createCommandHandler = () => {
        const mainCommandHandlerFile = fs.readFileSync(commandHandlerFile, "utf-8");
        fs.appendFileSync("./src/Handlers/CommandHandler.js", mainCommandHandlerFile, "utf-8");
    };

    createEventHandler = () => {
        const mainEventHandlerFile = fs.readFileSync(eventHandlerFile, "utf-8");
        fs.appendFileSync("./src/Handlers/EventHandler.js", mainEventHandlerFile, "utf-8");
    };

    createExecutorHandler = () => {
        const commandExecutorHandlerFile = fs.readFileSync(commandExecutorFile, "utf-8");
        fs.appendFileSync("./src/Handlers/message.js", commandExecutorFile, "utf-8");
    };

    //#endregion
}

module.exports = FileLoader;
