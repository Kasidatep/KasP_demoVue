import db from '../../data/db.json'

function getMails(){
    return db.mails
}

export {getMails}