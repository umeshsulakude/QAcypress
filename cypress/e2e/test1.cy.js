describe('Sign In spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
    it('cy.window() - get the global window object', () => {
      cy.visit('https://cosmocode.io/automation-practice-webtable/')
      //npx cycy.get('[type="Search"]').type('anu')
      cy.get('tbody > tr') // Get all the rows in the table body
      .contains('India') // Find the row containing 'India'
      .parent() // Navigate to the parent row
      .within(() => {
        // Within the parent row, find and verify the currency column value
        cy.get('td:nth-child(4)') // Get the 4th column (currency column)
          //.should('contain.text', 'INR'); // Verify that the currency is 'INR'
      });
    })
})