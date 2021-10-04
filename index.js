console.log('test')
const fs = require('fs')
let data = require('./data.json')
console.log(data)
fs.rmSync('test.txt')
data.forEach(elt => {
    let result = `
    ${elt.id} - ${elt.title}
    ${elt.description}
    `
    console.log(result)
    fs.appendFileSync('test.txt', result, 'utf-8')
})

// jedes Mal, wenn deine index.js Datei gespeichert wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
// Wenn er nicht existiert, soll er erstellt werden
// Falls er existiert, soll er gelöscht werden
// Jedes Mal, wenn die Datei gespeichert wird soll auch geschaut werden, ob es die Datei isThis.txt in einem Ordner namens “What” existiert
// Falls nicht, erstelle den Ordner und die Datei


// Synchronous
// if (fs.existsSync('./MyFunnyFolder')) {
//     // delete directory
//     fs.rmdirSync('./MyFunnyFolder', { recursive: true })
// } else {
//     //make directory
//     fs.mkdirSync('./MyFunnyFolder', { recursive: true })
// }

// if (fs.existsSync('./What')) {
//     // delete directory
//     fs.rmdirSync('./What', { recursive: true })
// } else {
//     //make directory
//     fs.mkdirSync('./What', { recursive: true })
//     fs.writeFileSync('./What/isThis.txt', ' ', 'utf-8')
// }


// promises: Asynchronous

// if (fs.existsSync('./MyFunnyFolder')) {
//     fs.promises.rmdir('./MyFunnyFolder', { recursive: true })
//         .then(() => console.log('deleted'))
//         .catch(err => console.log(err))
// } else {
//     fs.promises.mkdir('./MyFunnyFolder', { recursive: true })
//         .then(() => console.log('created'))
//         .catch(err => console.log(err))
// }


// Callback: Asynchronous

if (fs.existsSync('./MyFunnyFolder')) {
    // delete directory
    fs.rmdir('./MyFunnyFolder', { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('deleted')
        }

    })
} else {
    //make directory
    fs.mkdir('./MyFunnyFolder', { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Created')
        }
    })
}