const path = require('path')
const express = require('express')

let app = express()

let delayMiddleware = (req, res, next) => {
    let pattern = /delay-(\d+)\.(?:css|js|jpg)/
    if ((result = pattern.exec(req.url)) !== null) {
        let delayed = Number(result[1])  * 100
        setTimeout(() => {
            next()
        }, delayed)
    } else {
        next()
    }
}
console.log(path.join(__dirname, 'static'))
app.use(delayMiddleware)
app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    console.warn(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(8888)