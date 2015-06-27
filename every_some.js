function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (su) {
            return goodUsers.some(function (gu) {
                return su === gu
            })
        })
    };
}

module.exports = checkUsersValid
