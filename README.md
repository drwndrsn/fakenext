# next-stub
```javascript
const next = require('next-stub')
const assert = require('assert')

let req = {body: {}}
    res = {locals: {}}

let middleware = function (req, res, next) {
    req.body.user = "bob"
    res.locals.user = req.body.user.toUpperCase()
    next()
}

middleware(req,res,next( function (err, req, res) {
    assert(res.locals.user === 'BOB')
},req,res)) // < < < < 
```
