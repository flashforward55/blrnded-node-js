const fs = require("fs/promises");
const path = require("path");

const chalk = require("chalk");

const validateData = require("./helpers/dataValidator");
const checkExtention = require("./helpers/checkExtention");

const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };
  const { error } = validateData(file);
  if (error) {
    console.log(chalk.red(`Please specify ${error.details[0].path[0]} params`));
    return;
  }
  const { result, extention } = checkExtention(fileName);
  if (!result) {
    console.log(
      chalk.red(
        `Sorry this application doesnt support with ${extention} extention`
      )
    );
    return;
  }
  try {
    const filePath = path.join(__dirname, "./files", fileName);
    await fs.writeFile(filePath, content, "utf-8");
    console.log(chalk.blue(`The file was succesfull ${fileName} created`));
  } catch (error) {
    console.log(error);
  }

  //console.log({ fileName, content }) ;
};

const getFile = async () => {
  const dirPath = path.join(__dirname, "./files");
  const data = await fs.readdir(dirPath);

  if (data.length === 0) {
    console.log(chalk.red(`dir is empty`));
  } else {
    console.log(data);
  }
};

const getInfo = async (fileName) => {
  const dirPath = path.join(__dirname, "./files");

  const data = await fs.readdir(dirPath);
  const result = data.find((value) => value === fileName);
  if (!result) {
    console.log(chalk.red("file is not exist in that dir"));
  } else {
    const filePath = path.join(__dirname, "./files", fileName);
    const content = await fs.readFile(filePath, "utf-8");
    const extension = path.extname(filePath);
    const name = path.basename(filePath, extension);

    console.log({
      content,
      name,
      extension: extension.slice(1),
    });
  }
};

module.exports = { createFile, getFile, getInfo };
