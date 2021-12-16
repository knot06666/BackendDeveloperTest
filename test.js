

async function mainA(strint) {
    try {
        clearStringinText = strint.replace(/[^0-9\.]+/g,'')
        return parseInt(clearStringinText)
    } catch (error) {
        console.error(error)
    }
}

async function mainB(strint) {
    try {
        clearStringinText = strint.replace(/[^0-9\.]+/g,'')
        return parseInt(clearStringinText)
    } catch (error) {
        console.error(error)
    }
}
