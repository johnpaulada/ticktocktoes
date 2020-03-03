function randomItemFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function concatListToStr(list, delimiter="|") {
    return list.map(x => `${x}`).join(delimiter)
}

module.exports = {
    concatListToStr,
    randomItemFrom
}