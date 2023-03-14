const waitFor = async (someone) => {
    return new Promise((resolve, reject) => {
        if (someone === undefined) reject('no one')
        else resolve(`waiting for ${someone}`)
    })
}


waitFor('Kasidate').then(res=>console.log(res)).catch(err=>console.log(`Error warning: ${err}`))
waitFor().then(res=>console.log(res)).catch(err=>console.log(`Error warning: ${err}`))

const test = async (someone)=>{
    try{
        const waiting = await waitFor(someone)
        console.log(waiting)
    }
    catch(err) {
        console.log(`[ERROR] ${err}`)
    }
}


test('Phlaiphueak')
test()