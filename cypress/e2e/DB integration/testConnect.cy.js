describe('Connection tests for sakila movie database', () => {
    it('Selects all rows from movie table', async () => {
        cy.task('queryDb', 
        `SELECT * FROM film`).then(films => {
            console.log(films);
        });
    })
})