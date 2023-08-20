const fs = require('fs/promises');
const path = require('path');

const chalk = require('chalk');

const validateData = require('./helpers/dataValidator');
const checkExtention = require('./helpers/checkExtention');
const { REFUSED } = require('dns');


const createFile = async (fileName, content) => {
    const file = {
        fileName,
        content,
    };
    const { error } = validateData(file);
    //console.log(result.error.details[0]);
    if (error) {
        console.log(chalk.red(`Please specify ${error.details[0].path[0]} params`));
        return;
    }
    const { result, extention } = checkExtention(fileName);
    if (!result) {
        console.log(chalk.red(`Sorry this application doesnt support with ${extention} extention`));
        return;
    }
    try {
        const filePath = path.join(__dirname, './files', fileName)
        await fs.writeFile(filePath, content, 'utf-8')
        console.log(chalk.blue(`The file was succesfull ${fileName} created`));
    }
    catch (error) {
        console.log(error);
    }

    //console.log({ fileName, content }) ;
};

module.exports = { createFile };
