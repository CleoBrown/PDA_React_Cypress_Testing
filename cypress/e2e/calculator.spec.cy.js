describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the number buttons update the display of the running total?

  it("Updates the display of the running total", () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '122')
  })

  // Do the arithmetical operations update the display with the result of the operation?
  it("Updates the display of the arithmetical operations", () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
  // Can multiple operations be chained together?
  it("Updates the display of operations be chained together", () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

  it('should have working positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '235')
  })

  it('should have working negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should have working decimal point', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '1.5')
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.75')
  })

  it('should display large number as expected', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8999991')
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should return "Not a number" if divided by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a number')
  })
})