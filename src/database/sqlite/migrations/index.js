const sqliteConnection = require("../../sqlite")
const creatUsers = require("./createUsers")

async function migrationsRun() {
    schemas = [
        creatUsers,
    ].join('')

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.log(error))
}

module.exports = migrationsRun