
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})

describe('template spec', () => {
  it('passes', function () {
    cy.visit('https://www.amazon.com.br/')
  })
})

describe('All true', () => {
  it('Pass', function () {
    expect('Olá imbecil').to.equal('Olá imbecil')
  })
})