import BEM, { BEM as BEM2 } from 'BEM';


const BLOCK_NAME = 'article';

const ELEMENT_NAME = 'title';

const MODIFIER_NAME = 'active';

const FIXTURE_BLOCK = `<article class="${BLOCK_NAME}">`;

const FIXTURE_BLOCK_MODIFIED = `<article class="${BLOCK_NAME}--${MODIFIER_NAME}">`;

const FIXTURE_BLOCK_ELEMENT = `<article class="${BLOCK_NAME}"><h1 class="${BLOCK_NAME}__${ELEMENT_NAME}"></h1></article>`;

const FIXTURE_BLOCK_ELEMENT_MODIFIED = `<article class="${BLOCK_NAME}"><h1 class="${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}"></h1></article>`;


describe('module', function() {
    it('should export a default', () => {
        expect(BEM).toBeTruthy();
    })

    it('should export a name', () => {
        expect(BEM2).toBeTruthy();
    })
});



describe('BEM', function() {
    describe('.getBEMNode()', () => {
        it('should be able to select a block', () => {
            setFixtures(FIXTURE_BLOCK);
            expect(BEM.getBEMNode(BLOCK_NAME).constructor.name).toBe('HTMLElement');
        })

        it('should be able to select a modified block', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, false, MODIFIER_NAME).constructor.name).toBe('HTMLElement');
        })

        it('should be able to select a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME).constructor.name).toBe('HTMLHeadingElement');
        })

        it('should be able to select a modified block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME).constructor.name).toBe('HTMLHeadingElement');
        })
    });


    describe('.getBEMClassName()', () => {
        it('should be able to get a block class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME)).toBe(BLOCK_NAME);
        })

        it('should be able to get a modified block class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME, false, MODIFIER_NAME)).toBe(`${BLOCK_NAME}--${MODIFIER_NAME}`);
        })

        it('should be able to get a block element class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME, ELEMENT_NAME)).toBe(`${BLOCK_NAME}__${ELEMENT_NAME}`);
        })

        it('should be able to get a modified block element class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME)).toBe(`${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}`);
        })
    });
});
