import BEM, { BEM as BEM2 } from 'bem';



const BLOCK_NAME = 'article';

const ELEMENT_NAME = 'title';

const MODIFIER_NAME = 'active';

const FIXTURE_BLOCK = `
    <article class="${BLOCK_NAME}"></article>
`;

const FIXTURE_BLOCK_MODIFIED = `
    <article class="${BLOCK_NAME}--${MODIFIER_NAME}"></article>
`;

const FIXTURE_BLOCK_ELEMENT = `
    <article class="${BLOCK_NAME}">
        <h1 class="${BLOCK_NAME}__${ELEMENT_NAME}"></h1>
    </article>
`;

const FIXTURE_BLOCK_ELEMENT_MODIFIED = `
    <article class="${BLOCK_NAME}">
        <h1 class="${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}"></h1>
    </article>
`;


describe('module', function() {
    it('should export a default', () => {
        expect(BEM).toBeTruthy();
    });

    it('should export a name', () => {
        expect(BEM2).toBeTruthy();
    });
});



describe('BEM', function() {
    describe('.getBEMNode()', () => {
        it('should be able to select a block', () => {
            setFixtures(FIXTURE_BLOCK);
            expect(BEM.getBEMNode(BLOCK_NAME).constructor.name).toBe('HTMLElement');
        });

        it('should be able to select a modified block', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, false, MODIFIER_NAME).constructor.name).toBe('HTMLElement');
        });

        it('should be able to select a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME).constructor.name).toBe('HTMLHeadingElement');
        });

        it('should be able to select a modified block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME).constructor.name).toBe('HTMLHeadingElement');
        });
    });


    describe('.getBEMNodes()', () => {
        it('should be able to select blocks', () => {
            setFixtures(FIXTURE_BLOCK);
            expect(BEM.getBEMNodes(BLOCK_NAME).constructor.name).toBe('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME)[0].constructor.name).toBe('HTMLElement');
        });

        it('should be able to select a modified block', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMNodes(BLOCK_NAME, false, MODIFIER_NAME).constructor.name).toBe('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, false, MODIFIER_NAME)[0].constructor.name).toBe('HTMLElement');
        });

        it('should be able to select a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME).constructor.name).toBe('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME)[0].constructor.name).toBe('HTMLHeadingElement');
        });

        it('should be able to select a modified block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME).constructor.name).toBe('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME)[0].constructor.name).toBe('HTMLHeadingElement');
        });
    });


    describe('.getBEMClassName()', () => {
        it('should be able to get a block class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME)).toBe(BLOCK_NAME);
        });

        it('should be able to get a modified block class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME, false, MODIFIER_NAME)).toBe(`${BLOCK_NAME}--${MODIFIER_NAME}`);
        });

        it('should be able to get a block element class name', () => {
            expect(BEM.getBEMClassName(BLOCK_NAME, ELEMENT_NAME)).toBe(`${BLOCK_NAME}__${ELEMENT_NAME}`);
        });

        it('should be able to get a modified block element class name', () => {
            let className = BEM.getBEMClassName(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME);
            expect(className).toBe(`${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}`);
        });
    });


    describe('.addModifier()', () => {
        it('should be able to add modifier to a block', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, MODIFIER_NAME);
            expect(node.className).toContain(MODIFIER_NAME);
        });

        it('should be able to add modifier to a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);
            BEM.addModifier(node, MODIFIER_NAME);
            expect(node.className).toContain(MODIFIER_NAME);
        });

        it('should be able to add multiple modifiers', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, 'foo');
            BEM.addModifier(node, 'bar');
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--foo ${BLOCK_NAME}--bar`);
        });

        it('should ignore class names containing a modifier', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);
            node.className='foo--bar';
            BEM.addModifier(node, 'baz');
            expect(node.className).not.toContain('baz');
        });

        it('should ignore double class names', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME, false, MODIFIER_NAME);
            BEM.addModifier(node, MODIFIER_NAME);
            expect(node.className).toBe(`${BLOCK_NAME}--${MODIFIER_NAME}`);
        });
    });


    describe('.removeModifier()', () => {
        it('should be able to add multiple modifiers', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, 'foo');
            BEM.addModifier(node, 'bar');
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--foo ${BLOCK_NAME}--bar`);
            BEM.removeModifier(node, 'foo');
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--bar`);
        });

        it('should do nothing if no modifier is present', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME),
                className = node.className;

            BEM.removeModifier(node, MODIFIER_NAME);
            expect(node.className).toBe(className);
        });
    });


    describe('.toggleModifier()', () => {
        it('should toggle between addModifier() and removeModifier()', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            spyOn(BEM, 'addModifier').and.callThrough();
            spyOn(BEM, 'removeModifier').and.callThrough();
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);

            BEM.toggleModifier(node, MODIFIER_NAME);
            expect(BEM.addModifier).toHaveBeenCalled();
            node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME);

            expect(node.constructor.name).toBe('HTMLHeadingElement');

            BEM.toggleModifier(node, MODIFIER_NAME);
            expect(BEM.removeModifier).toHaveBeenCalled();
            node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);
            expect(node.constructor.name).toBe('HTMLHeadingElement');
        });
    });


    describe('.hasModifier()', () => {
        it('should return true if a modifier is present', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME);
            expect(BEM.hasModifier(node, MODIFIER_NAME)).toBeTruthy();
        });

        it('should return false if a modifier is not present', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);
            expect(BEM.hasModifier(node, MODIFIER_NAME)).toBeFalsy();
        });
    });
});
