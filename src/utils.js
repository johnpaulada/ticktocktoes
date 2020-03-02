function randomItemFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}

module.exports = {
    randomItemFrom
}