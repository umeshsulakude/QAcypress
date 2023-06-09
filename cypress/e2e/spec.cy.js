describe('template spec', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
beforeEach(function () {
  cy.visit('https://testsheepnz.github.io/BasicCalculator');
  
});
  it('add Test case', () => {
    cy.wait(2000)
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const sum = num1 + num2;
    
    cy.get('#number1Field').type(num1)
    cy.get('#number2Field').type(num2)
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value',sum)
    
    //Verifying the clear function and adding with larger digits with hardcode values
    cy.get('#clearButton').click()
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000')
    cy.get('#number1Field').should('have.value','1000')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('100')
    cy.get('#number2Field').should('have.value','100')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value','1100')
    cy.get('[type="checkbox"]').check()

    //Verifying error message when we entered string and special charcters in numbers field
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000a@')
    cy.get('#number1Field').should('have.value','1000a@')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('god')
    cy.get('#number2Field').should('have.value','god')
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should('include.text','Number 1 is not a number')
  })

  it('substract Test case', () => {
    
    cy.wait(2000)
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const difference = num1 - num2;
    cy.get('#number1Field').type(num1)
    cy.get('#number2Field').type(num2)
    cy.wait(1000)
    cy.get('#selectOperationDropdown').select('Subtract')
    cy.wait(1000)
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value',difference)
    
    //Verifying the clear function and subtract with larger digits
    cy.get('#clearButton').click()
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000')
    cy.get('#number1Field').should('have.value','1000')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('500')
    cy.get('#number2Field').should('have.value','500')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value','500')
    cy.get('[type="checkbox"]').check()

    //Verifying error message when we entered string and special charcters in numbers field
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000a@')
    cy.get('#number1Field').should('have.value','1000a@')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('god')
    cy.get('#number2Field').should('have.value','god')
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should('include.text','Number 1 is not a number')
  })

  it('Divide Test case', () => {
    cy.wait(2000)
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const quotient = num1 / num2;
    cy.get('#number1Field').type(num1)
    cy.get('#number2Field').type(num2)
    cy.wait(1000)
    cy.get('#selectOperationDropdown').select('Divide')
    cy.wait(1000)
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value',quotient)
    cy.wait(1000)
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('11')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('2')
    cy.wait(1000)
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value','5.5')
    
    //Verifying the clear function and subtract with larger digits
    cy.get('#clearButton').click()
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000')
    cy.get('#number1Field').should('have.value','1000')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('500')
    cy.get('#number2Field').should('have.value','500')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value','2')
    cy.get('[type="checkbox"]').check()

    //Verifying error message when we entered string and special charcters in numbers field
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000a@')
    cy.get('#number1Field').should('have.value','1000a@')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('god')
    cy.get('#number2Field').should('have.value','god')
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should('include.text','Number 1 is not a number')
  })

  it('Multiply Test case', () => {
    cy.wait(2000)
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const product = num1 * num2;
    cy.get('#number1Field').type(num2)
    cy.get('#number2Field').type(num2)
    cy.wait(1000)
    cy.get('#selectOperationDropdown').select('Multiply')
    cy.wait(1000)
    cy.get('#calculateButton').click()
    cy.wait(1000)
    cy.get('#numberAnswerField').should('have.value',product)
    
    //Verifying the clear function and subtract with larger digits
    cy.get('#clearButton').click()
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000')
    cy.get('#number1Field').should('have.value','1000')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('500')
    cy.get('#number2Field').should('have.value','500')
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value','500000')
    cy.get('[type="checkbox"]').check()

    //Verifying error message when we entered string and special charcters in numbers field
    cy.get('#number1Field').clear()
    cy.get('#number1Field').type('1000a@')
    cy.get('#number1Field').should('have.value','1000a@')
    cy.get('#number2Field').clear()
    cy.get('#number2Field').type('god')
    cy.get('#number2Field').should('have.value','god')
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should('include.text','Number 1 is not a number')
  })
  
})