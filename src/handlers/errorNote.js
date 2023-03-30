//this is to catch errors thrown by asynchronous functions in nodejs. Literally for everything else fails to catch the error. It will be caught by one of these below

setTimeout(() => {
    throw new Error('oops')
}, 300)

process.on('uncaughtException', () => {

})

process.on('unhandledRejection', () => {

})