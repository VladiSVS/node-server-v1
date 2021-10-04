console.log('Web server')

const http = require('http')
const fs = require('fs')
const path = require('path')
// Create web server:  send some text
// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.statusCode = 200
//     res.setHeader('Content-type', 'text/plain')
//     res.end('some text')
// })


// Web  server: send some files
// const server = http.createServer((req, res) => {
//     console.log('new request')
//     console.log(req.url)
//     if (req.url == '/') {
//         fs.readFile('./public/index.html', (err, data) => {
//             if (err) throw (err)
//             res.statusCode = 200
//             res.setHeader('Content-type', 'text/html')
//             res.end(data)
//         })
//     } else if (req.url === '/favicon.ico') {
//         fs.readFile('./public/favicon.ico', (err, data) => {
//             if (err) throw err
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'image/x-icon')
//             res.end(data)
//         })
//     } else if (req.url === '/picture1.jpeg') {
//         fs.readFile('./public/picture1.jpeg', (err, data) => {
//             if (err) throw err
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'image/jpeg')
//             res.end(data)
//         })
//     } else if (req.url === '/style.css') {
//         fs.readFile('./public/assets/css/style.css', (err, data) => {
//             if (err) console.log(err)
//             res.writeHead(200, { 'Content-Type': 'text/css' })
//             res.end(data)
//         })
//     } else if (req.url === '/main.js') {
//         fs.readFile('./public/assets/js/main.js', function (err, data) {
//             if (err) {
//                 console.log(err)
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/javascript'
//             }).end(data)
//             // res.writeHead(200, {
//             //     'Content-Type': 'text/javascript'
//             // })
//             // res.end(data)
//         })
//     }

// })

// Create web server: Dynamic routing

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url
    // console.log('filepath',filePath)
    console.log(req.url)
    let ext = path.extname(req.url)
    console.log(ext)
    let contentType = 'text/html'
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.ico':
            contentType = 'image/x-icon'
            break;
    }
    console.log(contentType)
    //console.log(req.url)
    // http://127.0.0.1:3000/style.css
    // req.url= /style.css
    // filePath= /style.css
    // fs.readFile('./public/style.css', ...)

    // http://127.0.0.1:3000/picture.jpeg
    // req.url=/picture.jpeg
    // filePath=/picture.jpeg
    // fs.readFile('./public/picture.jpeg',...)

    fs.readFile(`./public${filePath}`, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log('listening at 127:0:0:1:3000')
})