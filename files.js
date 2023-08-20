const fs = require('fs/promises')
const path = require('path')

const chalk = require('chalk')


const createFile = async (fileName, content) => {
    const file = {
        fileName, content
    }
}


module.exports = { createFile }