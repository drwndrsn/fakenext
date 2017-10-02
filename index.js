function next (callback, req, res) {
    return function (err) {
            if (err) callback(err)
            else callback(null, req, res)
    }
}

module.exports = next

