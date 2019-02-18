import Button from '../../src/component/Button'
import React from 'react'

describe('Button', () => {
  it('clicks', () => {
    const clicked = cy.spy().as('clicked')
    cy.mount(<Button name='Test Button' clickHandler={clicked} />)
    cy.get('.component-button button').click()
    cy.get('@clicked').should('have.been.calledOnce')
  })

  it('has a label', () => {
    cy.mount(<Button name='My Button' />)
    cy.contains('My Button')
  })

  it('can be orange', () => {
    cy.mount(<Button name='Orange' orange />)
    cy.get('.component-button').should('have.class', 'orange')
  })

  it('can be wide', () => {
    cy.mount(<Button name='wide' wide />)
    cy.get('.component-button').should('have.class', 'wide')
  })
})
