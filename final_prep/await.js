// console.log("break fast")
// console.log("lunch")
// var prom = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("snakes")
//     },2000)
// })

// prom.then((m) => {
//     console.log(m)
// })
// console.log("dinner")



console.log("person : 1")
console.log("person : 2")

// let prom = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("ticket")
//     },3000)
// })

// let prom2 = prom.then((n) => {
//     console.log(`we got ticket`)
//     return new Promise((res,rej) => {
//         res(n)
//     })
// })

// let prom3 = prom2.then((n) => {
//     console.log('i need popcorn')
//     return new Promise((res,rej) => {
//         res(n)
//     })
// })

// prom3.then((n) => {
//     console.log("i bought popcorn")
//     console.log(`here is the ${n} popcorn`)
// })

let prom = async () => {
    let promTics = await new Promise((res,rej) => {
        setTimeout(() => {
            res("breakfast")
        },3000)
    })
    console.log(promTics)

    let promPop = await new Promise((res,rej) => {
        setTimeout(() => {
            res("lunch")
        }, 2000)
    })
    console.log(promPop)
    // console.log("i need popcorn")

    let bought = await new Promise((res,rej) => {
        setTimeout(() => {
            res("dinner")
        }, 1000)
    })
    console.log(bought)
    // console.log("thanks lets go in")

    // return promTics;

}
prom().then((n) => { console.log(n)})

console.log("person : 4")
console.log("person : 5")

