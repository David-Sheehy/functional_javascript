function getShortMessages(message) {
    return message.map(function (m) {
        return m.message
    }).filter(function (m) {
        return m.length < 50
    })
}

module.exports = getShortMessages
