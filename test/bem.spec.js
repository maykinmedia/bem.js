import BEM, { BEM as BEM2 } from '../src/bem.js';



const BLOCK_NAME = 'block';

const ELEMENT_NAME = 'element';

const MODIFIER_NAME = 'modifier';

const CHILD_BLOCK_NAME = 'child-block';

const CHILD_ELEMENT_NAME = 'child-element';

const CHILD_MODIFIER_NAME = 'child-modifier';


const FIXTURE_BLOCK = `
    <article class="${BLOCK_NAME}"></article>
`;

const FIXTURE_BLOCK_MODIFIED = `
    <article class="${BLOCK_NAME} ${BLOCK_NAME}--${MODIFIER_NAME}"></article>
`;

const FIXTURE_BLOCK_ELEMENT = `
    <article class="${BLOCK_NAME}">
        <h1 class="${BLOCK_NAME}__${ELEMENT_NAME}"></h1>
    </article>
`;

const FIXTURE_BLOCK_ELEMENT_MODIFIED = `
    <article class="${BLOCK_NAME}">
        <h1 class="${BLOCK_NAME}__${ELEMENT_NAME} ${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}"></h1>
    </article>
`;

const FIXTURE_CHILD_BLOCK = `
    <article class="${BLOCK_NAME}">
        <section class="${BLOCK_NAME}"></section>
        <img class="${CHILD_BLOCK_NAME}" />
    </article>
`;

const FIXTURE_CHILD_BLOCK_MODIFIED = `
    <article class="${BLOCK_NAME}">
        <section class="${BLOCK_NAME}--${MODIFIER_NAME}"></section>
        <img class="${CHILD_BLOCK_NAME}--${MODIFIER_NAME}" />
    </article>
`;

const FIXTURE_CHILD_BLOCK_ELEMENT = `
    <article class="${BLOCK_NAME}">
        <section class="${BLOCK_NAME}--${MODIFIER_NAME}">
            <span class="${BLOCK_NAME}__${CHILD_ELEMENT_NAME}"></span>
        </section>

        <figure class="${CHILD_BLOCK_NAME}">
            <span class="${CHILD_BLOCK_NAME}__${ELEMENT_NAME}"></span>
            <img class="${CHILD_BLOCK_NAME}__${CHILD_ELEMENT_NAME}" />
        </figure>
    </article>
`;

const FIXTURE_CHILD_BLOCK_ELEMENT_MODIFIED = `
    <article class="${BLOCK_NAME}">
        <section class="${BLOCK_NAME}--${MODIFIER_NAME}">
            <span class="${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}"></span>
            <span class="${CHILD_BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}"></span>
            <span class="${CHILD_BLOCK_NAME}__${CHILD_ELEMENT_NAME}--${MODIFIER_NAME}"></span>

        </section>

        <figure class="${CHILD_BLOCK_NAME}">
            <img class="${CHILD_BLOCK_NAME}__${CHILD_ELEMENT_NAME}--${CHILD_MODIFIER_NAME}" />
        </figure>
    </article>
`;

const FIXTURE_BROKEN_WHITESPACE_BLOCK = `
    <article class="${BLOCK_NAME} "></article>
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
            expect(BEM.getBEMNode(BLOCK_NAME).constructor.toString()).toContain('HTMLElement');
        });

        it('should be able to select a modified block', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, false, MODIFIER_NAME).constructor.toString()).toContain('HTMLElement');
        });

        it('should be able to select a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME).constructor.toString()).toContain('HTMLHeadingElement');
        });

        it('should be able to select a modified block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            expect(BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME).constructor.toString()).toContain('HTMLHeadingElement');
        });
    });


    describe('.getBEMNodes()', () => {
        it('should be able to select blocks', () => {
            setFixtures(FIXTURE_BLOCK);
            expect(BEM.getBEMNodes(BLOCK_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME)[0].constructor.toString()).toContain('HTMLElement');
        });

        it('should be able to select a modified block', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMNodes(BLOCK_NAME, false, MODIFIER_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, false, MODIFIER_NAME)[0].constructor.toString()).toContain('HTMLElement');
        });

        it('should be able to select a block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME)[0].constructor.toString()).toContain('HTMLHeadingElement');
        });

        it('should be able to select a modified block element', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getBEMNodes(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME)[0].constructor.toString()).toContain('HTMLHeadingElement');
        });
    });


    describe('.getChildBEMNode()', () => {
        it('should be able to select a child block', () => {
            setFixtures(FIXTURE_CHILD_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNode(node, CHILD_BLOCK_NAME).constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a modified child block', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNode(node, CHILD_BLOCK_NAME, false, MODIFIER_NAME).constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a child block element', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_ELEMENT);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNode(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME).constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a modified child block element', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_ELEMENT_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNode(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME, CHILD_MODIFIER_NAME).constructor.toString()).toContain('HTMLImageElement');
        });
    });


    describe('.getChildBEMNodes()', () => {
        it('should be able to select a child block', () => {
            setFixtures(FIXTURE_CHILD_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME)[0].constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a modified child block', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, false, MODIFIER_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, false, MODIFIER_NAME)[0].constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a child block element', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_ELEMENT);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME)[0].constructor.toString()).toContain('HTMLImageElement');
        });

        it('should be able to select a modified child block element', () => {
            setFixtures(FIXTURE_CHILD_BLOCK_ELEMENT_MODIFIED);
            let node = BEM.getBEMNode(BLOCK_NAME);
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME, CHILD_MODIFIER_NAME).constructor.toString()).toContain('NodeList');
            expect(BEM.getChildBEMNodes(node, CHILD_BLOCK_NAME, CHILD_ELEMENT_NAME, CHILD_MODIFIER_NAME)[0].constructor.toString()).toContain('HTMLImageElement');
        });
    });


    describe('.getBEMSelector()', () => {
        it('should be able to get a block selector', () => {
            setFixtures(FIXTURE_BLOCK);
            expect(BEM.getBEMSelector(BLOCK_NAME)).toBe('.' + BLOCK_NAME);
            expect(document.querySelector(BEM.getBEMSelector(BLOCK_NAME)).constructor.toString()).toContain('HTMLElement');
        });

        it('should be able to get a modified block selector', () => {
            setFixtures(FIXTURE_BLOCK_MODIFIED);
            expect(BEM.getBEMSelector(BLOCK_NAME, false, MODIFIER_NAME)).toBe(`.${BLOCK_NAME}.${BLOCK_NAME}--${MODIFIER_NAME}`);
            expect(document.querySelector(BEM.getBEMSelector(BLOCK_NAME, false, MODIFIER_NAME)).constructor.toString()).toContain('HTMLElement');

        });

        it('should be able to get a block element selector', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            expect(BEM.getBEMSelector(BLOCK_NAME, ELEMENT_NAME)).toBe(`.${BLOCK_NAME}__${ELEMENT_NAME}`);
            expect(document.querySelector(BEM.getBEMSelector(BLOCK_NAME, ELEMENT_NAME)).constructor.toString()).toContain('HTMLHeadingElement');
        });

        it('should be able to get a modified block element selector', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT_MODIFIED);
            let className = BEM.getBEMSelector(BLOCK_NAME, ELEMENT_NAME, MODIFIER_NAME);
            expect(className).toBe(`.${BLOCK_NAME}__${ELEMENT_NAME}.${BLOCK_NAME}__${ELEMENT_NAME}--${MODIFIER_NAME}`);
            expect(document.querySelector(className).constructor.toString()).toContain('HTMLHeadingElement');
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
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--${MODIFIER_NAME}`);
        });

        it('should ignore trailig whitespace block (issue #4)', () => {
            setFixtures(FIXTURE_BROKEN_WHITESPACE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, MODIFIER_NAME);
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--${MODIFIER_NAME}`);
        });

        it('should allow decision making based on exp (issue #9)', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, MODIFIER_NAME, false);
            expect(node.className).not.toContain(MODIFIER_NAME);
            BEM.addModifier(node, MODIFIER_NAME, true);
            expect(node.className).toContain(MODIFIER_NAME);
        });
    });


    describe('.removeModifier()', () => {
        it('should be able to remove multiple modifiers', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, 'foo');
            BEM.addModifier(node, 'bar');
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--foo ${BLOCK_NAME}--bar`);
            BEM.removeModifier(node, 'foo');
            expect(node.className).toBe(`${BLOCK_NAME} ${BLOCK_NAME}--bar`);
            BEM.removeModifier(node, 'bar');
            expect(node.className).toBe(`${BLOCK_NAME}`);
        });

        it('should do nothing if no modifier is present', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME),
                className = node.className;

            BEM.removeModifier(node, MODIFIER_NAME);
            expect(node.className).toBe(className);
        });

        it('should allow decision making based on exp (issue #9)', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            BEM.addModifier(node, MODIFIER_NAME);
            expect(node.className).toContain(MODIFIER_NAME);
            BEM.removeModifier(node, MODIFIER_NAME, false);
            expect(node.className).toContain(MODIFIER_NAME);
            BEM.removeModifier(node, MODIFIER_NAME, true);
            expect(node.className).not.toContain(MODIFIER_NAME);
        });

        it('should not remove partially matching modifier', () => {
            setFixtures(FIXTURE_BLOCK);
            let node = BEM.getBEMNode(BLOCK_NAME);
            let modifier2 = MODIFIER_NAME + '2';
            BEM.addModifier(node, modifier2);
            BEM.addModifier(node, MODIFIER_NAME);
            BEM.removeModifier(node, MODIFIER_NAME);
            expect(BEM.hasModifier(node, MODIFIER_NAME)).toBeFalsy();
            expect(BEM.hasModifier(node, modifier2)).toBeTruthy();
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

            expect(node.constructor.toString()).toContain('HTMLHeadingElement');

            BEM.toggleModifier(node, MODIFIER_NAME);
            expect(BEM.removeModifier).toHaveBeenCalled();
            node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);
            expect(node.constructor.toString()).toContain('HTMLHeadingElement');
        });

        it('should allow decision making based on exp (issue #9)', () => {
            setFixtures(FIXTURE_BLOCK_ELEMENT);
            spyOn(BEM, 'addModifier').and.callThrough();
            spyOn(BEM, 'removeModifier').and.callThrough();
            let node = BEM.getBEMNode(BLOCK_NAME, ELEMENT_NAME);

            BEM.toggleModifier(node, MODIFIER_NAME, false);
            expect(BEM.removeModifier).toHaveBeenCalled();
            expect(node.className).not.toContain(MODIFIER_NAME);

            BEM.toggleModifier(node, MODIFIER_NAME, true);
            expect(BEM.addModifier).toHaveBeenCalled();
            expect(node.className).toContain(MODIFIER_NAME);
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
