const checkExtention = (fileName) => {
    const EXTENTIONS = ['txt', 'html', 'css', 'js', 'json']

    const extention = fileName.slice(fileName.lastIndexOf('.') + 1)

    const result = EXTENTIONS.some((value, index, array) => {
        return value === extention
    })
    return { result, extention }

}

module.exports = checkExtention