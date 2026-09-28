// ! Server Yaratish

// import http from "http"
// const PORT = 3000

// const server = http.createServer((req, res) => {
//     if (req.url === "/about") {
//         res.end("About Page ga request qildingiz")
//     } else {
//         res.end("Brat unaqa yol yoq")
//     }
// })


// server.listen(PORT, (err) => {
//     console.log("Sizning serveringiz lohalhost:" + PORT + " da ishlayapt");

// })
// req = request = sorash
// res = response = javob node 

// ! Promise bilan ishlash


// const myPromise = new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//         resolve('Operation was successful!');
//     } else {
//         reject('Something went wrong.');
//     }
// });
// const p = new Promise((resolve, reject) => {
//     if (1 + 1 === 2) {
//         resolve("Da rostam 1 + 1 = 2")
//     } else {
//         reject("Qanday Daxo insonsiz")
//     }
// })

// ! Eventlar bilan ishlash
import EventEmitter from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');