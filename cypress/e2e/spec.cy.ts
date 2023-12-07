describe('template spec', () => {
  it('load first page', () => {
    cy.visit('http://localhost:5173/')
  })
  it('load second page', () => {
    cy.visit('http://localhost:5173/provedores')
  })
})