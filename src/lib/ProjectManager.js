const FileLoader = require("./FileLoader/FileLoader");
const FileManager = require("./FileLoader/FileManager");
const DirectoryManager = require("./DirectoryTree/DirectoryManager");

class ProjectManager {
    getFileLoader() {
        return FileLoader;
    }

    getFileManager() {
        return FileManager;
    }

    getDirectoryManager() {
        return DirectoryManager;
    }
}
