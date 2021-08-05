const sqlite3 = require('sqlite3').verbose();

module.exports.connector = function(){
    let db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the test db database.');
    }
    });
    db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
        console.log('Close the database connection.');
    });        
};
module.exports.console = function (){
    console.log(`###console 1234`);
}
