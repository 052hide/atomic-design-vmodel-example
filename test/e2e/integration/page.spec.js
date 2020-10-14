describe('page open', () => {
  const title = 'Atomic Design v-model Example'

  it('Visits index page', () => {
    cy.visit('/')
  })

  it('check links', () => {
    const linkCount = 10
    for (let i = 0; i < linkCount; i++) {
      cy.get('.menu__link').eq(i).click()
      cy.get('.nuxt-link-active').click()
    }
  })
})
