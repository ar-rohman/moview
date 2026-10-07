/// <reference types="cypress" />

describe('Carousel Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should mount the component', () => {
        const carousel = cy.get('[data-test=carousel]');
        carousel.should('be.visible');
        carousel.find('img').should('be.visible');
        const navigationPrev = cy.get('[data-test=carousel-navigation-prev]');
        const navigationNext = cy.get('[data-test=carousel-navigation-next]');
        navigationPrev.should('be.visible');
        navigationNext.should('be.visible');
    });
    it('should go to next/previous slide', async () => {
        const navigationNext = cy.get('[data-test=carousel-navigation-next]');
        const navigationPrev = cy.get('[data-test=carousel-navigation-prev]');
        await navigationNext.click();
        cy.get('[data-test=carousel-pagination]>button').eq(1).should('have.class', 'opacity-100');
        await navigationPrev.click();
        await navigationPrev.click();
        cy.get('[data-test=carousel-pagination]>button').eq(4).should('have.class', 'opacity-100');
    });
    it('should go to detail page', () => {
        cy.get('[data-test=carousel-slide]').first().click();
        cy.url().should('include', '/movie/detail/');
    });
});
