function fakenext (middleware, request, response, callback) {

    var next = (function (cb, req, res) {
        return function (err) {
                (err) ? cb(err) : cb(null, req, res)
        }
    })(callback, request, response)

    middleware(request, response, next)
}

module.exports = fakenext

