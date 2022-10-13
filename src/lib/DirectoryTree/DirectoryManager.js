"use strict";
const fs = require("fs");
const { DirectoryTree } = require("./DirectoryTree");
export class DirectoryManager {
    /**
     *
     * @param {string} outDir
     *
     */
    constructor(outDir) {
        this.outDir = outDir;
        this.directoryTree = DirectoryTree;
    }

    getDirectoryTree() {
        return this.directoryTree;
    }

    getCertainElement(directoryTree, elementWantingToFind) {
        for (let i = 0; i < directoryTree.length; i++) {
            if (directoryTree[i] === elementWantingToFind) {
                return directoryTree[i];
            }
        }
    }

    createDirectories() {
        for (let i = 0; i < this.getDirectoryTree().length; i++) {
            fs.mkdir(`../out/src${this.getDirectoryTree()[i]}`);
        }
    }
}
