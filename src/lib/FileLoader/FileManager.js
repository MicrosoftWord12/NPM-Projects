class FileManager {
    constructor() {
        this.fileLoader = this.files = [];
        this.createdFiles = [];
    }

    getFiles() {
        return this.files;
    }

    getCreatedFiles() {
        return this.createdFiles;
    }
}

module.exports = FileManager;
