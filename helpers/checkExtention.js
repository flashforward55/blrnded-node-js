const checkExtention = (fileName) => {
    const EXTENTIONS = ['txt', 'html', 'css', 'js', 'json']
    //data.html
    const extention = fileName.slice(fileName.lastIndexOf('.') + 1)
    console.log(extention);
    const result = EXTENTIONS.some((value, index, array) => {
        return value === extention
    })
    return { result, extention }

}

module.exports = checkExtention