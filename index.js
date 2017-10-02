function next (callback, req, res) {
    return function (err) {
            (err) ? callback(err) : callback(null, req, res)
    }
}

module.exports = next

