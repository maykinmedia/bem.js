/**
 * This module provides BEM (Block Element Modifier) related methods
 * These methods can be used as an abstraction to talk to the DOM
 * BEM is a CSS methodology separating blocks (block) from elements (__element) and modifiers (--modifier)
 * BEM examples: alert, alert--warning, form__button, form__button--disabled
 * @see https://en.bem.info/methodology/key-concepts/
 * @module
 */


/**
 * BEM class
 * Contains static methods with BEM abstraction to DOM manipulation
 * @class
 */
class BEM {
    /**
     * Get a node by BEM (Block Element Modifier) description
     * @param {String} block The outer block or component
     * @param {String} [element] An optional element within the outer block
     * @param {String} [modifier] An optional modifier or (e.g. state or theme) for a block/element
     * @returns {HTMLElement}
     */
    static getBEMNode(block, element, modifier) {
        let selector = `.${BEM.getBEMClassName(block, element, modifier)}`;
        return document.querySelector(selector);
    }

    /**
     * Get multiple nodes by BEM (Block Element Modifier) description
     * @param {String} block The outer block or component
     * @param {String} [element] An optional element within the outer block
     * @param {String} [modifier] An optional modifier or (e.g. state or theme) for a block/element
     * @returns {NodeList}
     */
    static getBEMNodes(block, element, modifier) {
        let selector = `.${BEM.getBEMClassName(block, element, modifier)}`;
        return document.querySelectorAll(selector);
    }

    /**
     * Get a child node by BEM (Block Element Modifier) description
     * @param {HTMLElement} node The parent node
     * @param {String} block The outer block or component
     * @param {String} [element] An optional element within the outer block
     * @param {String} [modifier] An optional modifier or (e.g. state or theme) for a block/element
     * @returns {HTMLElement}
     */
    static getChildBEMNode(node, block, element, modifier) {
        let selector = `.${BEM.getBEMClassName(block, element, modifier)}`;
        return node.querySelector(selector);
    }

    /**
     * Get a child node by BEM (Block Element Modifier) description
     * @param {HTMLElement} node The parent node
     * @param {String} block The outer block or component
     * @param {String} [element] An optional element within the outer block
     * @param {String} [modifier] An optional modifier or (e.g. state or theme) for a block/element
     * @returns {HTMLElement}
     */
    static getChildBEMNodes(node, block, element, modifier) {
        let selector = `.${BEM.getBEMClassName(block, element, modifier)}`;
        return node.querySelectorAll(selector);
    }

    /**
     * Get a BEM (Block Element Modifier) class name
     * @param {String} block The outer block or component
     * @param {String} [element] An optional element within the outer block
     * @param {String} [modifier] An optional modifier or (e.g. state or theme) for a block/element
     * @returns {String}
     */
    static getBEMClassName(block, element, modifier) {
        let className = block;

        if (element) {
            className += `__${element}`;
        }

        if (modifier) {
            className += `--${modifier}`;
        }

        return className;
    }


    /**
     * Add an additional class name with a specific modifier (--modifier) to a BEM (Block Element Modifier) element
     * A modifier class is created for each of the existing class names
     * Class names containing "--" (modifier pattern) are discarded
     * Double class names are prevented
     * @param {HTMLElement} node The block/element to append the class name to (block, block__element)
     * @param {String} modifier The name of the modifier (--name)
     */
    static addModifier(node, modifier) {
        let classNames = node.className.split(' '),
            modifierClassNames = '';

        for (let i in classNames) {
            if (!classNames.hasOwnProperty(i)) {
                continue;
            }

            let className = classNames[i];
            let modifierClassName = `${className}--${modifier}`;

            // Discard class names containing "--" (modifier pattern)
            if (className.match('--')) {
                continue;
            }

            // Prevent double class names
            if (node.className.match(modifierClassName)) {
                continue;
            }

            modifierClassNames += `${className}--${modifier} `;
        }

        node.className = `${node.className.trim()} ${modifierClassNames}`.trim();
    }


    /**
     * Remove all class names with a specific modifier (--modifier) from a BEM (Block Element Modifier) element
     * @param {HTMLElement} node The block/element to remove the class names from (block, block__element)
     * @param {String} modifier The name of the modifier (--name)
     */
    static removeModifier(node, modifier) {
        let regex = new RegExp(`[^^\\s]+?--${modifier}\\s?`, 'g');  // Regex matching all class names containing "--" + modifier
        node.className = node.className.replace(regex, '').trim();
    }


    /**
     * Toggles between addModifier() and removeModifier() based on the presence of modifier (--modifier)
     * Block/element names are NOT taken into account while matching
     * @param {HTMLElement} node The block/element to remove the class names from (block, block__element)
     * @param {String} modifier The name of the modifier (--name)
     */
    static toggleModifier(node, modifier) {
        if (BEM.hasModifier(node, modifier)) {
            BEM.removeModifier(node, modifier);
            return;
        }
        BEM.addModifier(node, modifier);
    }


    /**
     * Returns whether node has modifier (--modifier)
     * Block/element names are NOT taken into account while matching
     * @param {HTMLElement} node The block/element to check
     * @param {String} modifier The name of the modifier (--name)
     * @returns {Boolean}
     */
    static hasModifier(node, modifier) {
        let regex = new RegExp(`--${modifier}(?=\\s|$)`, 'g');  // Regex matching specific modifier
        return node.className.match(regex);
    }
}


export default BEM;
export { BEM };
