const mysql = require('mysql2');

function queryDB(query, config) {
    const connection = mysql.createConnection(config.env.db);
    connection.connect();
    // exec query + disconnect from db as Promise
    return new Promise((resolve, reject) => {
        connection.query(query,(error, results) => {
            if(error) reject(error);
            else {
                connection.end();
                // console log results
                return resolve(results);
            }
        });
    });
}

module.exports = (on, config) => {
    // usage cy.task('queryDb', query)
    on('task', {
        queryDb: query => {
            return queryDB(query, config);
        }
    });
};