context('Window', () => {

  it('cy.title() - get the title', () => {
    cy.visit('/')
    cy.title().should('include', 'Inicio')
  })

  it("Check menus", () => {
     cy.get(':nth-child(1) > .rd-nav-link').contains("Inicio")
     cy.get(':nth-child(2) > .rd-nav-link').contains("Sobre Nosotros")
     cy.get(':nth-child(3) > .rd-nav-link').contains("Excursiones")
     cy.get(':nth-child(4) > .rd-nav-link').contains("Contáctanos")
  })

  it("Check page content", () => {
      cy.get(':nth-child(1) > .rd-nav-link').click()
      cy.contains("Nuestros Servicios")
      cy.get(':nth-child(2) > .rd-nav-link').click()
      cy.contains("Confía en nuestra experiencia")
      cy.get(':nth-child(3) > .rd-nav-link').click()
      cy.contains("Nuestros Servicios")
      cy.get(':nth-child(4) > .rd-nav-link').click()
      cy.contains("Matriz")
      cy.screenshot()
  })
})
