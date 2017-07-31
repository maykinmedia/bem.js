<a name="BEM"></a>

## BEM
BEM class
Contains static methods with BEM abstraction to DOM manipulation

**Kind**: global class  

* [BEM](#BEM)
    * [.getBEMNode(block, [element], [modifier])](#BEM.getBEMNode) ⇒ <code>HTMLElement</code>
    * [.getBEMNodes(block, [element], [modifier])](#BEM.getBEMNodes) ⇒ <code>NodeList</code>
    * [.getChildBEMNode(node, block, [element], [modifier])](#BEM.getChildBEMNode) ⇒ <code>HTMLElement</code>
    * [.getChildBEMNodes(node, block, [element], [modifier])](#BEM.getChildBEMNodes) ⇒ <code>HTMLElement</code>
    * [.getBEMSelector(block, [element], [modifier])](#BEM.getBEMSelector) ⇒ <code>string</code>
    * [.getBEMClassName(block, [element], [modifier])](#BEM.getBEMClassName) ⇒ <code>string</code>
    * [.addModifier(node, modifier, [exp])](#BEM.addModifier)
    * [.removeModifier(node, modifier, [exp])](#BEM.removeModifier)
    * [.toggleModifier(node, modifier, [exp])](#BEM.toggleModifier)
    * [.hasModifier(node, modifier)](#BEM.hasModifier) ⇒ <code>boolean</code>

<a name="BEM.getBEMNode"></a>

### BEM.getBEMNode(block, [element], [modifier]) ⇒ <code>HTMLElement</code>
Get a node by BEM (Block Element Modifier) description

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.getBEMNodes"></a>

### BEM.getBEMNodes(block, [element], [modifier]) ⇒ <code>NodeList</code>
Get multiple nodes by BEM (Block Element Modifier) description

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.getChildBEMNode"></a>

### BEM.getChildBEMNode(node, block, [element], [modifier]) ⇒ <code>HTMLElement</code>
Get a child node by BEM (Block Element Modifier) description

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>HTMLElement</code> | The parent node |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.getChildBEMNodes"></a>

### BEM.getChildBEMNodes(node, block, [element], [modifier]) ⇒ <code>HTMLElement</code>
Get a child node by BEM (Block Element Modifier) description

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>HTMLElement</code> | The parent node |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.getBEMSelector"></a>

### BEM.getBEMSelector(block, [element], [modifier]) ⇒ <code>string</code>
Get a BEM (Block Element Modifier) (CSS) selector

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.getBEMClassName"></a>

### BEM.getBEMClassName(block, [element], [modifier]) ⇒ <code>string</code>
Get a BEM (Block Element Modifier) class name

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| block | <code>string</code> | The outer block or component |
| [element] | <code>string</code> | An optional element within the outer block |
| [modifier] | <code>string</code> | An optional modifier or (e.g. state or theme) for a block/element |

<a name="BEM.addModifier"></a>

### BEM.addModifier(node, modifier, [exp])
Add an additional class name with a specific modifier (--modifier) to a BEM (Block Element Modifier) element
A modifier class is created for each of the existing class names
Class names containing "--" (modifier pattern) are discarded
Double class names are prevented

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>HTMLElement</code> |  | The block/element to append the class name to (block, block__element) |
| modifier | <code>string</code> |  | The name of the modifier (--name) |
| [exp] | <code>boolean</code> | <code>true</code> | Optional: If true: add the modifier |

<a name="BEM.removeModifier"></a>

### BEM.removeModifier(node, modifier, [exp])
Remove all class names with a specific modifier (--modifier) from a BEM (Block Element Modifier) element

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | <code>HTMLElement</code> |  | The block/element to remove the class names from (block, block__element) |
| modifier | <code>string</code> |  | The name of the modifier (--name) |
| [exp] | <code>boolean</code> | <code>true</code> | Optional: If true: remove the modifier |

<a name="BEM.toggleModifier"></a>

### BEM.toggleModifier(node, modifier, [exp])
Toggles between addModifier() and removeModifier() based on the presence of modifier (--modifier)
Block/element names are NOT taken into account while matching

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>HTMLElement</code> | The block/element to remove the class names from (block, block__element) |
| modifier | <code>string</code> | The name of the modifier (--name) |
| [exp] | <code>boolean</code> | Optional: If true: add the modifier, if false: remove the modifier |

<a name="BEM.hasModifier"></a>

### BEM.hasModifier(node, modifier) ⇒ <code>boolean</code>
Returns whether node has modifier (--modifier)
Block/element names are NOT taken into account while matching

**Kind**: static method of <code>[BEM](#BEM)</code>  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>HTMLElement</code> | The block/element to check |
| modifier | <code>string</code> | The name of the modifier (--name) |

