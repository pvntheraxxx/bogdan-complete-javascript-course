/* Пример с async await */

const timerPromise = () => 
    new Promise((resolve, reject) => 
    setTimeout(() => resolve(),2000))

const asyncFn = async() => {
    console.log('Timer starts')
    await timerPromise()
    console.log('Timer ended')
}
asyncFn()
