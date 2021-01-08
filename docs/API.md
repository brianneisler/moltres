# API

*NOTES*
* These docs are still being written. In some cases there are several methods
  that exist that are not documented.


<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [config.util](#configutil)
  * [**private** function evaluate()](#private-function-evaluate)
  * [**private** function matchVariable()](#private-function-matchvariable)
- [fs](#fs)
  * [function checkParentPaths()](#function-checkparentpaths)
- [lang](#lang)
  * [function all()](#function-all)
  * [function allWith()](#function-allwith)
  * [function assoc()](#function-assoc)
  * [function compact()](#function-compact)
  * [function compose()](#function-compose)
  * [function defn()](#function-defn)
  * [function dispatchable()](#function-dispatchable)
  * [function dissocPath()](#function-dissocpath)
  * [function externalPromise()](#function-externalpromise)
  * [function find()](#function-find)
  * [function findAtIndex()](#function-findatindex)
  * [function get()](#function-get)
  * [function getParent()](#function-getparent)
  * [function getParentPath()](#function-getparentpath)
  * [function getPath()](#function-getpath)
  * [function hasPath()](#function-haspath)
  * [function init()](#function-init)
  * [function isPlainFunction()](#function-isplainfunction)
  * [function isSymbol()](#function-issymbol)
  * [function nArySpread()](#function-naryspread)
  * [function nArySpread()](#function-naryspread-1)
  * [function nth()](#function-nth)
  * [function op()](#function-op)
  * [function pipe()](#function-pipe)
  * [function reduceRight()](#function-reduceright)
  * [function resolve()](#function-resolve)
  * [function resolveToGenerator()](#function-resolvetogenerator)
  * [function resolveWith()](#function-resolvewith)
  * [function shallowEquals()](#function-shallowequals)
  * [function walk()](#function-walk)
  * [function walkReduceDepthFirst()](#function-walkreducedepthfirst)
  * [function walkReducePath()](#function-walkreducepath)
  * [function where()](#function-where)
  * [function whereEquals()](#function-whereequals)
- [lang.classes](#langclasses)
  * [**private** function _Array()](#private-function-_array)
  * [class _Boolean](#class-_boolean)
  * [class _Function](#class-_function)
  * [class ImmutableList](#class-immutablelist)
  * [class ImmutableMap](#class-immutablemap)
  * [class ImmutableOrderedMap](#class-immutableorderedmap)
  * [class ImmutableOrderedSet](#class-immutableorderedset)
  * [class ImmutableSet](#class-immutableset)
  * [class ImmutableStack](#class-immutablestack)
  * [class Key](#class-key)
  * [class Op](#class-op)
  * [class Path](#class-path)
  * [class Seq](#class-seq)
- [lang.util](#langutil)
  * [**private** function anyIsArguments()](#private-function-anyisarguments)
  * [**private** function anyIsArray()](#private-function-anyisarray)
  * [**private** function anyIsArrayBuffer()](#private-function-anyisarraybuffer)
  * [**private** function anyIsArrayLike()](#private-function-anyisarraylike)
  * [**private** function anyIsBoolean()](#private-function-anyisboolean)
  * [**private** function anyIsBuffer()](#private-function-anyisbuffer)
  * [**private** function anyIsDate()](#private-function-anyisdate)
  * [**private** function anyIsError()](#private-function-anyiserror)
  * [**private** function anyIsFunction()](#private-function-anyisfunction)
  * [**private** function anyIsGenerator()](#private-function-anyisgenerator)
  * [**private** function anyIsGeneratorFunction()](#private-function-anyisgeneratorfunction)
  * [**private** function anyIsImmutableCollection()](#private-function-anyisimmutablecollection)
  * [**private** function anyIsImmutableList()](#private-function-anyisimmutablelist)
  * [**private** function anyIsImmutableMap()](#private-function-anyisimmutablemap)
  * [**private** function anyIsImmutableOrderedMap()](#private-function-anyisimmutableorderedmap)
  * [**private** function anyIsImmutableOrderedSet()](#private-function-anyisimmutableorderedset)
  * [**private** function anyIsImmutableSet()](#private-function-anyisimmutableset)
  * [**private** function anyIsImmutableStack()](#private-function-anyisimmutablestack)
  * [**private** function anyIsIndex()](#private-function-anyisindex)
  * [**private** function anyIsIndexedIterator()](#private-function-anyisindexediterator)
  * [**private** function anyIsInfinity()](#private-function-anyisinfinity)
  * [**private** function anyIsInteger()](#private-function-anyisinteger)
  * [**private** function anyIsIterable()](#private-function-anyisiterable)
  * [**private** function anyIsIterator()](#private-function-anyisiterator)
  * [**private** function anyIsKey()](#private-function-anyiskey)
  * [**private** function anyIsKeyedIterator()](#private-function-anyiskeyediterator)
  * [**private** function anyIsLength()](#private-function-anyislength)
  * [**private** function anyIsMap()](#private-function-anyismap)
  * [**private** function anyIsNaN()](#private-function-anyisnan)
  * [**private** function anyIsNil()](#private-function-anyisnil)
  * [**private** function anyIsNull()](#private-function-anyisnull)
  * [**private** function anyIsNumber()](#private-function-anyisnumber)
  * [**private** function anyIsObject()](#private-function-anyisobject)
  * [**private** function anyIsObjectLike()](#private-function-anyisobjectlike)
  * [**private** function anyIsObserver()](#private-function-anyisobserver)
  * [**private** function anyIsOp()](#private-function-anyisop)
  * [**private** function anyIsPath()](#private-function-anyispath)
  * [**private** function anyIsPlainFunction()](#private-function-anyisplainfunction)
  * [**private** function anyIsPlainObject()](#private-function-anyisplainobject)
  * [**private** function anyIsPromise()](#private-function-anyispromise)
  * [**private** function anyIsProperty()](#private-function-anyisproperty)
  * [**private** function anyIsRegExp()](#private-function-anyisregexp)
  * [**private** function anyIsResolved()](#private-function-anyisresolved)
  * [**private** function anyIsSeq()](#private-function-anyisseq)
  * [**private** function anyIsSet()](#private-function-anyisset)
  * [**private** function anyIsString()](#private-function-anyisstring)
  * [**private** function anyIsSymbol()](#private-function-anyissymbol)
  * [**private** function anyIsUndefined()](#private-function-anyisundefined)
  * [**private** function isWeakMap()](#private-function-isweakmap)
  * [**private** function anyIsWeakSet()](#private-function-anyisweakset)
  * [**private** function anyIterate()](#private-function-anyiterate)
  * [**private** function anyIterateRight()](#private-function-anyiterateright)
  * [**private** function anyResolve()](#private-function-anyresolve)
  * [**private** function anyResolveToGenerator()](#private-function-anyresolvetogenerator)
  * [**private** function anyResolveToGeneratorWith()](#private-function-anyresolvetogeneratorwith)
  * [**private** function anyResolveWith()](#private-function-anyresolvewith)
  * [**private** function anyToFinite()](#private-function-anytofinite)
  * [**private** function anyToInteger()](#private-function-anytointeger)
  * [**private** function anyToIterator()](#private-function-anytoiterator)
  * [**private** function anyToNumber()](#private-function-anytonumber)
  * [**private** function anyToPath()](#private-function-anytopath)
  * [**private** function anyToStringTag()](#private-function-anytostringtag)
  * [**private** function arrayClone()](#private-function-arrayclone)
  * [**private** function arrayConcat()](#private-function-arrayconcat)
  * [**private** function arrayDifference()](#private-function-arraydifference)
  * [**private** function arrayFilter()](#private-function-arrayfilter)
  * [**private** function arrayFlatten()](#private-function-arrayflatten)
  * [**private** function arrayForEach()](#private-function-arrayforeach)
  * [**private** function arrayGetIndex()](#private-function-arraygetindex)
  * [**private** function arrayKeys()](#private-function-arraykeys)
  * [**private** function arrayLikeReduce()](#private-function-arraylikereduce)
  * [**private** function arrayLikeSlice()](#private-function-arraylikeslice)
  * [**private** function arrayLikeToIterator()](#private-function-arrayliketoiterator)
  * [**private** function cacheChain()](#private-function-cachechain)
  * [**private** function functionDefineLength()](#private-function-functiondefinelength)
  * [**private** function functionMemoize()](#private-function-functionmemoize)
  * [**private** function functionMemoizeWith()](#private-function-functionmemoizewith)
  * [**private** function functionToString()](#private-function-functiontostring)
  * [**private** function generatorResolveToGeneratorWith()](#private-function-generatorresolvetogeneratorwith)
  * [**private** function indexEndOffset()](#private-function-indexendoffset)
  * [**private** function iteratorResolver()](#private-function-iteratorresolver)
  * [**private** function iteratorToArray()](#private-function-iteratortoarray)
  * [**private** function mapDeleteKey()](#private-function-mapdeletekey)
  * [**private** function mapGetKey()](#private-function-mapgetkey)
  * [**private** function mapHasKey()](#private-function-maphaskey)
  * [**private** function mapSetKey()](#private-function-mapsetkey)
  * [**private** function objectAssign()](#private-function-objectassign)
  * [**private** function objectClone()](#private-function-objectclone)
  * [**private** function objectDefineProperty()](#private-function-objectdefineproperty)
  * [**private** function objectDeleteProperty()](#private-function-objectdeleteproperty)
  * [**private** function objectGetOwnPropertyDescriptor()](#private-function-objectgetownpropertydescriptor)
  * [**private** function objectGetOwnPropertySymbols()](#private-function-objectgetownpropertysymbols)
  * [**private** function objectGetProperty()](#private-function-objectgetproperty)
  * [**private** function objectHasOwnProperty()](#private-function-objecthasownproperty)
  * [**private** function objectKeys()](#private-function-objectkeys)
  * [**private** function objectMutateDeleteProperty()](#private-function-objectmutatedeleteproperty)
  * [**private** function objectMutateSetProperty()](#private-function-objectmutatesetproperty)
  * [**private** function objectMutateUpdateProperty()](#private-function-objectmutateupdateproperty)
  * [**private** function objectSetProperty()](#private-function-objectsetproperty)
  * [**private** function objectToIterator()](#private-function-objecttoiterator)
  * [**private** function objectToString()](#private-function-objecttostring)
  * [**private** function reflectOwnKeys()](#private-function-reflectownkeys)
  * [**private** function stringSubstring()](#private-function-stringsubstring)
  * [**private** function unresolvedResolveToGenerator()](#private-function-unresolvedresolvetogenerator)
  * [**private** function unresolvedResolveWith()](#private-function-unresolvedresolvewith)
- [path](#path)
  * [function isPathSubdir()](#function-ispathsubdir)
- [request](#request)
  * [function fetch()](#function-fetch)
- [url](#url)
  * [function formatURL()](#function-formaturl)
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (METHODS) -->
## config.util

### **private** function evaluate()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/config/util/evaluate.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Evaluates a value.</p>
<p>Dispatches to the <code>evaluate</code> method if it exists. If an evaluate method returns<br />
a value that is also evaluate, this method will evaluate that value as<br />
well.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to evaluate.</p>

**Returns**
<br /><p><code>&ast;</code> - The evaluated value.</p>

**Example**
```js
evaluate('foo')
// => 'foo'

evaluate({
 evaluate: () => 'bar'
})
//=> bar

evaluate({
  evaluate: () => ({
    evaluate: () => 'bar'
  })
})
//=> bar
```
<br /><br />

### **private** function matchVariable()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/config/util/matchVariable.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Accepts a string and attempts to find a variable string match</p>

**Params**
<p><code>string</code>: <code>string</code> - The string to match</p>

**Returns**
<br /><p><code>{<br />
  expression: string, // the matching variable expression<br />
  exact: boolean // whether or not this match was exact<br />
}</code> - </p>

<br /><br />

## fs

### function checkParentPaths()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/fs/checkParentPaths.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.5.0
<p>recursively check if dest parent is a subdirectory of src.<br />
It works for all file types including symlinks since it<br />
checks the src and dest inodes. It starts from the deepest<br />
parent and stops once it reaches the src parent or the root path.</p>

**Params**
<p><code>src</code>: <code>string</code> - The src path</p>
<p><code>dest</code>: <code>string</code> - The dest path</p>

**Returns**
<br /><p><code>undefined</code> - </p>

<br /><br />

## lang

### function all()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/all.js#L9)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.6
<p>Resolves all async values in an array or object</p>
<p>Auto curried for placeholder support.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The array or object whose values should be resolved. If value is not an object or array, the value is simply resolved to itself</p>

**Returns**
<br /><p><code>&ast;</code> - The array or object with its values resolved</p>

**Example**
```js
const nums = [
  1,
  Promise.resolve(2),
  (async () => 3)()
]
await all(nums) //=> [ 1, 2, 3 ]

const keyed = {
  a: 1,
  b: Promise.resolve(2),
  c: (async () => 3)()
}
await all(keyed) //=> { a: 1, b: 2, c: 3 }

await all('abc') //=> 'abc'
await all(123) //=> 123
```
<br /><br />

### function allWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/allWith.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.13
<p>Resolves all async values in an array or object and executes the given with the result</p>
<p>Auto curried for placeholder support.</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The function to execute at the end of the resolution</p>
<p><code>value</code>: <code>&ast;</code> - The array or object whose values should be resolved. If value is not an object or array, the value is simply resolved to itself</p>

**Returns**
<br /><p><code>&ast;</code> - The array or object with its values resolved</p>

**Example**
```js
const nums = [
  1,
  Promise.resolve(2),
  (async () => 3)()
]
await allWith(
  (resolvedNums) => 'foo', // [ 1, 2, 3 ]
  nums
) // => 'foo'

const keyed = {
  a: 1,
  b: Promise.resolve(2),
  c: (async () => 3)()
}

await allWith(
  (resolvedNums) => 'foo', // { a: 1, b: 2, c: 3 }
  keyed
) // => 'foo'

allWith(
  (resolvedNums) => 'foo', // [ 1, 2, 3 ]
  [ 1, 2, 3 ]
) // => 'foo'
```
<br /><br />

### function assoc()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/assoc.js#L26)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.</p>
<p>Supports path based property selectors 'foo.bar' and functional selectors which performs an over on the entire collection and sets each matching selector to the given value.</p>

**Params**
<p><code>selector</code>: <code>Array | String | Function</code> - The property path to set or functional selector</p>
<p><code>value</code>: <code>Any</code> - The new value</p>
<p><code>collection</code>: <code>Any</code> - The collection to clone and assign the new value</p>

**Returns**
<br /><p><code>Any</code> - A new collection equivalent to the original except for the changed selector path.</p>

**Example**
```js
assoc('c', 3, {a: 1, b: 2})          //=> {a: 1, b: 2, c: 3}
assoc('c.d', 3, {a: 1, b: 2})        //=> {a: 1, b: 2, c: { d: 3 }}
assoc([ 'c', 'd' ], 3, {a: 1, b: 2}) //=> {a: 1, b: 2, c: { d: 3 }}
```
<br /><br />

### function compact()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/compact.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.10
<p>Creates an array with all nil values removed.</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array to compact.</p>

**Returns**
<br /><p><code>Array</code> - Returns the new array of filtered values.</p>

**Example**
```js
compact([0, 1, false, 2, null, '', 3, undefined])
// => [0, 1, false, 2, null, '', 3]
```
<br /><br />

### function compose()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/compose.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.</p>
<p><strong>Note:</strong> The result of compose is not automatically curried.</p>

**Params**
<p><code>functions</code>: <code>...Function</code> - The functions to compose</p>

**Returns**
<br /><p><code>Function</code> - </p>

**Example**
```js
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
const yellGreeting = compose(toUpper, classyGreeting)
yellGreeting('James', 'Bond')
//=> "THE NAME'S BOND, JAMES BOND"

compose(Math.abs, add(1), multiply(2))(-4) //=> 7
```
<br /><br />

### function defn()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/defn.js#L7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.3
<p>Defines a function with a few predefined behaviours. Functions defined with this method will...</p>
<ul>
<li><a href="#curry">curry</a></li>
<li><a href="#dispatchable">dispatch</a></li>
<li><a href="#resolveAll">resolve all args</a></li>
</ul>

**Params**
<p><code>name</code>: <code>string</code> - The name of the method to call if it exists</p>
<p><code>fn</code>: <code>Function</code> - The default function to execute if the named one does not exist on the last arg</p>

**Returns**
<br /><p><code>Function</code> - The wrapped function</p>

**Example**
```js
const get = defn('get', (prop, value) => value[prop])
get('a', { a: 'foo' }) //=> 'foo'

const obj = {
  props: {
    a: 'bar'
  }
  get: (prop) => obj.props[prop]
}
get('a', obj) //=> 'bar'
```
<br /><br />

### function dispatchable()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/dispatchable.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.6
<p>Returns a function that dispatches with different strategies based on the object in list position (last argument). If it is an array, executes [fn].</p>
<p>Otherwise, it will default to executing [fn].</p>

**Params**
<p><code>name</code>: <code>string</code> - The name of the method to call if it exists</p>
<p><code>fn</code>: <code>Function</code> - The default function to execute if the named one does not exist on the last arg</p>

**Returns**
<br /><p><code>Function</code> - A function that dispatches on object in list position</p>

**Example**
```js
const get = dispatchable('get', (prop, value) => value[prop])
get('a', { a: 'foo' }) //=> 'foo'

const obj = {
  props: {
    a: 'bar'
  }
  get: (prop) => obj.props[prop]
}
get('a', obj) //=> 'bar'
```
<br /><br />

### function dissocPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/dissocPath.js#L11)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Makes a shallow clone of an object, removing the specified property. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.</p>
<p>Supports path based property selectors 'foo.bar'.</p>

**Params**
<p><code>selector</code>: <code>Array | String</code> - The property path to delete</p>
<p><code>collection</code>: <code>Any</code> - The collection to clone and remove the given property from</p>

**Returns**
<br /><p><code>Any</code> - A new collection equivalent to the original except for the property removed</p>

**Example**
```js
dissocPath(['a'], {a: 1, b: 2})
//=> { b: 2 }

dissocPath('c.d', {a: 1, b: 2, c: { d: 3 }})
//=> {a: 1, b: 2}

dissocPath([ 'c', 'd' ],{a: 1, b: 2, c: { d: 3 }})
//=> {a: 1, b: 2}
```
<br /><br />

### function externalPromise()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/externalPromise.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Creates a promise with the resolve and reject methods exposed as properties<br />
on the promise.</p>

**Params**
None

**Returns**
<br /><p><code>Promise</code> - The promise with exposed methods</p>

**Example**
```js
const promise = externalPromise()
// ... do something async then eventually resolve the promise
promise.resolve(someValue)
```
<br /><br />

### function find()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/find.js#L7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns the first element of the collection which matches the predicate, or<br />
<code>undefined</code> if no element matches.</p>
<p>Dispatches to the <code>find</code> method of the collection argument, if present.</p>
<p>Supports async predicates. If a predicate returns a Promise than the entire<br />
method will upgrade to async and return a Promise.</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The predicate function used to determine if the element is the<br />
       desired one.</p>
<p><code>collection</code>: <code>&ast;</code> - The collection to consider.</p>

**Returns**
<br /><p><code>Object</code> - The element found, or `undefined`.</p>

**Example**
```js
const xs = [{a: 1}, {a: 2}, {a: 3}]
find(propEq('a', 2))(xs)
//=> {a: 2}

find(propEq('a', 4))(xs)
//=> undefined
```
<br /><br />

### function findAtIndex()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/findAtIndex.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns the first element of the list which matches the predicate, or <code>undefined</code> if no element matches starting at the given index.</p>
<p>Dispatches to the <code>findAtIndex</code> method of the last argument, if present.</p>
<p>Supports async predicates. If a predicate returns a Promise than the entire method will upgrade to async and return a Promise.</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The predicate function used to determine if the element is the<br />
       desired one.</p>
<p><code>index</code>: <code>Integer</code> - The index to start at.</p>
<p><code>list</code>: <code>Array</code> - The array to consider.</p>

**Returns**
<br /><p><code>&ast;|Promise</code> - The element found, or `undefined`.</p>

**Example**
```js
const xs = [{a: 1}, {a: 2}, {a: 3}];
findAtIndex(propEq('a'), 0)(xs) //=> {a: 2}
findAtIndex(propEq('a', 2), 2)(xs) //=> undefined
```
<br /><br />

### function get()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/get.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.3
<p>Retrieve the value at a given path.</p>
<p>Paths can be defined by a string an array. The path parameter also accepts a function that will be used as a selector against the data.</p>

**Params**
<p><code>path</code>: <code>Array|string|number|Function</code> - The path to use.</p>
<p><code>value</code>: <code>Object</code> - The value to retrieve the nested property from.</p>

**Returns**
<br /><p><code>&ast;</code> - The data at `path`.</p>

**Example**
```js
get(['a', 'b'], {a: {b: 2}})
//=> 2

get(['a', 'b'], {c: {b: 2}})
//=> undefined

get('a', {a: {b: 2}})
//=> { b: 2 }

get('a.b', {a: {b: 2}})
//=> 2

get('a[0]', {a: [ 1, 2 ]})
//=> 1

get('[0]', [ 1, 2 ])
//=> 1
```
<br /><br />

### function getParent()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/getParent.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Retrieve the parent value from a given path. The parent value is the value immediately before the last path part.</p>
<p>Paths can be defined by a string an array. The path parameter also accepts a function that will be used as a selector against the data.</p>

**Params**
<p><code>path</code>: <code>Array|String|Number|Function</code> - The path to use.</p>
<p><code>value</code>: <code>Object</code> - The value to retrieve the parent property value from.</p>

**Returns**
<br /><p><code>Any</code> - The data at `path`.</p>

**Example**
```js
getParent(['a', 'b'], {a: {b: 2}})
//=> {b: 2}

getParent(['a', 'b'], {c: {b: 2}})
//=> undefined

getParent('a', {a: {b: 2}})
//=> {a: {b: 2}}

getParent('a.b', {a: {b: 2}})
//=> {b: 2}

getParent('a[0]', {a: [ 1, 2 ]})
//=> [ 1, 2 ]
```
<br /><br />

### function getParentPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/getParentPath.js#L7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Retrieve the parent value from a given path. The parent value is the value immediately before the last path part.</p>

**Params**
<p><code>path</code>: <code>Array</code> - The path to use.</p>
<p><code>value</code>: <code>&ast;</code> - The value to retrieve the nested property from.</p>

**Returns**
<br /><p><code>&ast;</code> - The data at `path`.</p>

**Example**
```js
getParentPath(['a', 'b'], {a: {b: 2}}); //=> {b: 2}
getParentPath(['a', 'b'], {c: {b: 2}}); //=> undefined
```
<br /><br />

### function getPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/getPath.js#L9)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.4.3
<p>Retrieve the value at a given selector</p>

**Params**
<p><code>path</code>: <code>Array|ImmutableList|String</code> - The path to use.</p>
<p><code>object</code>: <code>Object</code> - The object to get the path in.</p>

**Returns**
<br /><p><code>Any</code> - The value that exists at the path or undefined.</p>

**Example**
```js
get(['a', 'b'], { a: { b: 2 } })
// => 2

get(['a', 'b'], { c: { b: 2 } })
// => undefined

get('a', { a: { b: 2 } })
// => { b: 2 }

get('a.b', { a: { b: 2 } })
// => 2

get('a[0]', { a: [1, 2] })
// => 1

get('[0]', [1, 2])
// => 1
```
<br /><br />

### function hasPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/hasPath.js#L11)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.4.3
<p>Returns whether or not a path exists in an object. Only the object's<br />
own properties are checked.</p>

**Params**
<p><code>path</code>: <code>Array|ImmutableList|String</code> - The path to use.</p>
<p><code>object</code>: <code>Object</code> - The object to check the path in.</p>

**Returns**
<br /><p><code>Boolean</code> - Whether the path exists.</p>

**Example**
```js
hasPath(['a', 'b'], {a: {b: 2}})         // => true
     hasPath(['a', 'b'], {a: {b: undefined}}) // => true
     hasPath(['a', 'b'], {a: {c: 2}})         // => false
     hasPath(['a', 'b'], {})                  // => false
```
<br /><br />

### function init()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/init.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.5
<p>Returns all but the last element of the given list or string.</p>

**Params**
<p><code>list</code>: <code>&ast;</code> - The list to select from</p>

**Returns**
<br /><p><code>&ast;</code> - A new array or string of all but the last element in the list</p>

**Example**
```js
init([1, 2, 3])  //=> [1, 2]
init([1, 2])     //=> [1]
init([1])        //=> []
init([]);         //=> []

init('abc')  //=> 'ab'
init('ab')   //=> 'a'
init('a')    //=> ''
init('')     //=> ''
```
<br /><br />

### function isPlainFunction()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/isPlainFunction.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Checks if <code>any</code> is plain function. A plain function is not an AsyncFunction and not a GeneratorFunction</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a plain function, else `false`.</p>

**Example**
```js
isPlainFunction(() => {})
// => true

isPlainFunction(function() {})
// => true

isPlainFunction(async function() {})
// => false

isPlainFunction(function* () {})
// => false
```
<br /><br />

### function isSymbol()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/isSymbol.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is classified as a <code>Symbol</code> primitive or object.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a symbol, else `false`.</p>

**Example**
```js
isSymbol(Symbol.iterator)
// => true

isSymbol(Symbol('abc'))
// => true

isSymbol(Symbol.for('abc'))
// => true

isSymbol('abc')
// => false
```
<br /><br />

### function nArySpread()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/nArySpread.chrome-extension.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.4
<p>Wraps a function of any arity (including nullary) in a function that accepts exactly <code>n</code> parameters. Any extraneous parameters are spread and then reapplied on execution. This is useful when you want to ensure a function's paramter length is exactly <code>n</code> but still passes all arguments through.</p>

**Params**
<p><code>n</code>: <code>Number</code> - The desired arity of the new function.</p>
<p><code>fn</code>: <code>Function</code> - The function to wrap.</p>

**Returns**
<br /><p><code>Function</code> - A new function wrapping `fn`. The new function is guaranteed to be of parameter length `n`.</p>

**Example**
```js
const takesNArgs = (...args) => [ ...args ]

takesNArgs.length //=> 0
takesNArgs(1, 2) //=> [1, 2]

const takesTwoArgs = nArySpread(2, takesNArgs)
takesTwoArgs.length //=> 2
// All arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3) //=> [1, 2, 3]

const curriedTakesTwoArgs = curry(takesTwoArgs)
// auto currying works as expected
const takesAtLeastOneMoreArg = curriedTakesTwoArgs(3)
takesAtLeastOneMoreArg(1, 2) // => [3, 1, 2]
```
<br /><br />

### function nArySpread()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/nArySpread.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.4
<p>Wraps a function of any arity (including nullary) in a function that accepts exactly <code>n</code> parameters. Any extraneous parameters are spread and then reapplied on execution. This is useful when you want to ensure a function's paramter length is exactly <code>n</code> but still passes all arguments through.</p>

**Params**
<p><code>n</code>: <code>Number</code> - The desired arity of the new function.</p>
<p><code>fn</code>: <code>Function</code> - The function to wrap.</p>

**Returns**
<br /><p><code>Function</code> - A new function wrapping `fn`. The new function is guaranteed to be of parameter length `n`.</p>

**Example**
```js
const takesNArgs = (...args) => [ ...args ]

takesNArgs.length //=> 0
takesNArgs(1, 2) //=> [1, 2]

const takesTwoArgs = nArySpread(2, takesNArgs)
takesTwoArgs.length //=> 2
// All arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3) //=> [1, 2, 3]

const curriedTakesTwoArgs = curry(takesTwoArgs)
// auto currying works as expected
const takesAtLeastOneMoreArg = curriedTakesTwoArgs(3)
takesAtLeastOneMoreArg(1, 2) // => [3, 1, 2]
```
<br /><br />

### function nth()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/nth.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns the nth element of the given list or string. If n is negative the<br />
element at index length + n is returned.</p>

**Params**
<p><code>offset</code>: <code>Number</code> - The offset from the 0 index to select from. If negative it will be subtracted from length</p>
<p><code>collection</code>: <code>Indexed</code> - The collection to select from</p>

**Returns**
<br /><p><code>Any</code> - The value at the nth index</p>

**Example**
```js
const list = ['foo', 'bar', 'baz', 'quux']
nth(1, list) //=> 'bar'
nth(-1, list) //=> 'quux'
nth(-99, list) //=> undefined

nth(2, 'abc') //=> 'c'
nth(3, 'abc') //=> ''
```
<br /><br />

### function op()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/op.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Creates an op object that can be yielded by a generator and intercepted/executed by any generator middleware</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The function to execute when the op is executed</p>

**Returns**
<br /><p><code>Object</code> - The op object</p>

<br /><br />

### function pipe()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/pipe.js#L7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Performs left-to-right function composition. The leftmost function may have<br />
any arity; the remaining functions must be unary.</p>
<p>In some libraries this function is named <code>sequence</code>.</p>
<p><strong>Note:</strong> The result of pipe is not automatically curried.</p>

**Params**
<p><code>functions</code>: <code>...Function</code> - </p>

**Returns**
<br /><p><code>Function</code> - </p>

**Example**
```js
const f = pipe(Math.pow, negate, inc)

f(3, 4) // -(3^4) + 1
```
<br /><br />

### function reduceRight()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/reduceRight.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a single item by iterating through the collection, successively calling the iterator function and passing it an accumulator value,  the current value and the index or key from the collection, and then passing the result to the next call.</p>
<p>Similar to <a href="#reduce"><code>reduce</code></a>, except moves through the input list from the right to the left.</p>
<p>The iterator function receives three values: <em>(acc, value, kdx)</em>.</p>
<p>Supports async reducers. This method will automatically upgrade to async if given an async reducer.</p>
<p>Dispatches to the <code>reduce</code> method of the third argument, if present.</p>
<p>Note: <code>reduceRight</code> does not skip deleted or unassigned indices (sparse arrays), unlike the native <code>Array.prototype.reduceRight</code> method. For more details on this behavior, see:<br />
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The iterator function. Receives three values, the accumulator, the current value from the collection and the key or index.</p>
<p><code>accumulator</code>: <code>&ast;</code> - The accumulator value.</p>
<p><code>collection</code>: <code>Array|string|Object|Promise</code> - The collection to iterate over.</p>

**Returns**
<br /><p><code>&ast;</code> - The final, accumulated value.</p>

**Example**
```js
reduceRight(subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
//    -               -2
//   / \              / \
//  1   -            1   3
//     / \              / \
//    2   -     ==>    2  -1
//       / \              / \
//      3   -            3   4
//         / \              / \
//        4   0            4   0
```
<br /><br />

### function resolve()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/resolve.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.9
<p>Resolves a value to its valueOf.</p>
<p>Dispatches to the <code>resolve</code> method if it exists. If a resolve method returns a value that is also resolvable, this method will resolve that value as well.</p>

**Params**
<p><code>values</code>: <code>...String</code> - The values to check.</p>

**Returns**
<br /><p><code>String</code> - The first value found that is a path.</p>

**Example**
```js
resolve('foo') // => 'foo'

resolve({
 valueOf: () => 'bar'
}) //=> bar

resolve({
 resolve: () => 'bar'
}) //=> bar

resolve({
  resolve: () => ({
    valueOf: () => 'bar'
  })
}) //=> bar

resolve({
  resolve: () => ({
    resolve: () => 'bar'
  })
}) //=> bar
```
<br /><br />

### function resolveToGenerator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/resolveToGenerator.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.16
<p>Resolves a value to a generator using the generator to yield values.</p>

**Params**
<p><code>value</code>: <code>Any</code> - The value to resolve with the generator</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
const generator = resolveToGenerator('foo')
generator.next() //=> { value: 'foo', done: true }
```
<br /><br />

### function resolveWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/resolveWith.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Resolves a value to the given method.</p>
<p>If the value to be resolved is a promise then this method will return a promise. The fn method will be triggered once the promise resolves.</p>
<p>If the value to be resolved is a generator, this method will return a generator.</p>

**Params**
<p><code>fn</code>: <code>Function</code> - The function to execute at the end of the resolution</p>
<p><code>value</code>: <code>&ast;</code> - The value to resolve with the generator</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
await resolveWith(
  (resolvedValue) => 'bar' // resolvedValue == 'foo'
  Promise.resolve('foo')
) //=> 'bar'

resolveWith(
  (resolvedValue) => 'bar' // resolvedValue == 'foo'
  'foo'
) //=> 'bar'
```
<br /><br />

### function shallowEquals()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/shallowEquals.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments. Returns true when the values of all keys are strictly equal.</p>

**Params**
<p><code>selector</code>: <code>Array | String | Function</code> - The property path to set or functional selector</p>
<p><code>objA</code>: <code>object</code> - The object to compare to B</p>
<p><code>objB</code>: <code>object</code> - The object to compare to A</p>

**Returns**
<br /><p><code>boolean</code> - Whether or not the two objects are shallowly equal</p>

**Example**
```js
shallowEquals({ a: 1, b: 2, c: undefined }, { a: 1, b: 2, c: undefined }) //=> true
shallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }) //=> false
```
<br /><br />

### function walk()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/walk.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.4
<p>Walk using the given walkee and iteratee functions.</p>

**Params**
<p><code>walkee</code>: <code>Function</code> - The function responsible for returning the next value in the walk</p>
<p><code>iteratee</code>: <code>Function</code> - The iterator function.</p>

**Returns**
<br /><p><code>&ast;</code> - The final value returned by the walk</p>

**Example**
```js
const depthFirstWalkee = (value, iteratee, recur) => {
  if (isObject(value)) {
    forEachObjIndexed((child) => {
      recur(child, iteratee)
    }, value)
  }
  iteratee(value, data)
}
let result = []
walk(
  depthFirstWalkee,
  (value) => result.push(value),
  {
    a: {
      b: 'b'
    }
  }
)
console.log(result)
//=> [
  'b',
  { b: 'b' },
  { a: { b: 'b' } }
]
```
<br /><br />

### function walkReduceDepthFirst()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/walkReduceDepthFirst.js#L33)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.4
<p>Walk depth first and reduce using the given reducer function</p>
<p>NOTE: This method will resolve values during the walk before iterating and walking them.</p>

**Params**
<p><code>iteratee</code>: <code>Function</code> - The iterator function. Receives three values, the accumulator and the current element from the walk and the current set of keys from the entire depth of the walk.</p>
<p><code>accum</code>: <code>&ast;</code> - The accumulator value.</p>
<p><code>collection</code>: <code>&ast;</code> - The collection to walk.</p>

**Returns**
<br /><p><code>&ast;</code> - The final, accumulated value.</p>

**Example**
```js
walkReduceDepthFirst(
  (accum, value, keys) => {
    accum.push(keys)
    return accum
  },
  [],
  {
    a: {
      b: {
        c: 'c'
      },
      d: 'd',
    },
    e: [ 'e', 'f' ]
  }
)
//=> [
  [ 'a', 'b', 'c' ],
  [ 'a', 'b' ],
  [ 'a', 'd' ],
  [ 'a' ],
  [ 'e', 0 ],
  [ 'e', 1 ],
  [ 'e' ],
  []
]
```
<br /><br />

### function walkReducePath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/walkReducePath.js#L32)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.0.6
<p>Walk reduce the specific path using the given reducer function</p>
<p>NOTE: This method will resolve values during the walk before walking them. However, the unresolved value will be delivered to the iteratee.</p>

**Params**
<p><code>path</code>: <code>&ast;</code> - The specific path to walk</p>
<p><code>fn</code>: <code>Function</code> - The iterator function. Receives three values, the accumulator and the current element from the walk and the current set of keys from the entire depth of the walk.</p>
<p><code>accum</code>: <code>&ast;</code> - The accumulator value.</p>
<p><code>collection</code>: <code>&ast;</code> - The collection to walk.</p>

**Returns**
<br /><p><code>&ast;</code> - The final, accumulated value.</p>

**Example**
```js
walkReducePath(
  (accum, value, keys) => {
    return accum.push(keys)
  },
  'a.c.d'
  [],
  {
    a: {
      b: 'b',
      c: {
        d: 'd'
      }
    },
    e: [ 'e', 'f' ]
  }
)
//=> [
//   [],
//   ['a'],
//   ['a', 'c'],
//   ['a', 'c', 'd']
// ]
```
<br /><br />

### function where()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/where.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.4.3
<p>Takes a spec object and a test object; returns true if the test satisfies<br />
the spec. Each of the spec's own properties must be a predicate function.<br />
Each predicate is applied to the value of the corresponding property of the<br />
test object. <code>where</code> returns true if all the predicates return true, false<br />
otherwise.</p>
<p><code>where</code> is well suited to declaratively expressing constraints for other<br />
functions such as <a href="#filter"><code>filter</code></a> and <a href="#find"><code>find</code></a>.</p>

**Params**
<p><code>spec</code>: <code>Object</code> - </p>
<p><code>value</code>: <code>Any</code> - </p>

**Returns**
<br /><p><code>Boolean</code> - </p>

**Example**
```js
// pred :: Object -> Boolean
     const pred = where({
       a: equals('foo'),
       b: complement(equals('bar')),
       x: gt(__, 10),
       y: lt(__, 20)
     });

     pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
     pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
     pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
     pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
     pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
```
<br /><br />

### function whereEquals()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/whereEquals.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.4.3
<p>Takes a spec object and a test object; returns true if the test satisfies<br />
the spec, false otherwise. An object satisfies the spec if, for each of the<br />
spec's own properties, accessing that property of the object gives the same<br />
value (in <a href="#equals"><code>equals</code></a> terms) as accessing that property of the<br />
spec.</p>

**Params**
<p><code>spec</code>: <code>Object</code> - </p>
<p><code>value</code>: <code>Any</code> - </p>

**Returns**
<br /><p><code>Boolean</code> - </p>

**Example**
```js
// pred :: Object -> Boolean
     const pred = R.whereEq({a: 1, b: 2});

     pred({a: 1});              //=> false
     pred({a: 1, b: 2});        //=> true
     pred({a: 1, b: 2, c: 3});  //=> true
     pred({a: 1, b: 1});        //=> false
```
<br /><br />

## lang.classes

### **private** function _Array()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Array.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.</p>

**Params**
<p><code>arrayLength</code>: <code>Number | ...Any</code> - If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number (Note: this implies an array of arrayLength empty slots, not slots with actual undefined values). If the argument is any other number, a RangeError exception is thrown.</p>

**Returns**
<br /><p><code>Array</code> - A new array</p>

**Example**
```js

```
<br /><br />

### class _Boolean

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Boolean.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>The Boolean object is an object wrapper for a boolean value.</p>

**Class**: `_Boolean`

**Example**
```js
Boolean(false)
//=> false
```
<br /><br />

### class _Function

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Function.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues to eval. However, unlike eval, the Function constructor creates functions which execute in the global scope only.</p>

**Class**: `_Function`

**Example**
```js

```
<br /><br />

### class ImmutableList

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableList.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableList`

**Example**
```js

```
<br /><br />

### class ImmutableMap

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableMap.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableMap`

**Example**
```js

```
<br /><br />

### class ImmutableOrderedMap

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableOrderedMap.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableOrderedMap`

**Example**
```js

```
<br /><br />

### class ImmutableOrderedSet

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableOrderedSet.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableOrderedSet`

**Example**
```js

```
<br /><br />

### class ImmutableSet

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableSet.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableSet`

**Example**
```js

```
<br /><br />

### class ImmutableStack

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/ImmutableStack.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `ImmutableStack`

**Example**
```js

```
<br /><br />

### class Key

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Key.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0


**Class**: `Key`

**Example**
```js

```
<br /><br />

### class Op

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Op.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Note: This class is <strong>immutable</strong></p>
<p>This class represents an Op which can be yielded and executed by Generator middleware</p>

**Class**: `Op`

<br /><br />

### class Path

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Path.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Note: This class is <strong>immutable</strong></p>
<p>This class represents a Path of one or more Propeties, Keys and Indexes</p>

**Class**: `Path`

<br /><br />

### class Seq

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/classes/Seq.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Seq describes a lazy operation, allowing them to efficiently chain use of all the higher-order collection methods (such as map and filter) by not creating intermediate collections.</p>
<pre><code>type Seq&lt;K, V&gt; extends Collection&lt;K, V&gt;
</code></pre>
<p>Seq is immutable — Once a Seq is created, it cannot be changed, appended to, rearranged or otherwise modified. Instead, any mutative method called on a Seq will return a new Seq.</p>
<p>Seq is lazy — Seq does as little work as necessary to respond to any method call. Values are often created during iteration, including implicit iteration when reducing or converting to a concrete data structure such as a List or JavaScript Array.</p>
<p>For example, the following performs no work, because the resulting Seq's values are never iterated:</p>
<pre><code>const { Seq } = require('immutable')
const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x =&gt; x % 2 !== 0)
  .map(x =&gt; x * x)
</code></pre>
<p>Once the Seq is used, it performs only the work necessary. In this example, no intermediate arrays are ever created, filter is called three times, and map is only called once:</p>
<pre><code>oddSquares.get(1)
//=&gt; 9
</code></pre>
<p>Any collection can be converted to a lazy Seq with Seq().</p>
<pre><code>const { Map } = require('immutable')
const map = Map({ a: 1, b: 2, c: 3 }
const lazySeq = Seq(map)
</code></pre>
<p>Seq allows for the efficient chaining of operations, allowing for the expression of logic that can otherwise be very tedious:</p>
<pre><code>lazySeq
  .flip()
  .map(key =&gt; key.toUpperCase())
  .flip()
//=&gt; Seq { A: 1, B: 1, C: 1 }
</code></pre>
<p>As well as expressing logic that would otherwise seem memory or time limited, for example Range is a special kind of Lazy sequence.</p>
<pre><code>const { Range } = require('immutable')
Range(1, Infinity)
  .skip(1000)
  .map(n =&gt; -n)
  .filter(n =&gt; n % 2 === 0)
  .take(2)
  .reduce((r, n) =&gt; r * n, 1)
//=&gt; 1006008
</code></pre>
<p>Seq is often used to provide a rich collection API to JavaScript Object.</p>
<pre><code>Seq({ x: 0, y: 1, z: 2 }).map(v =&gt; v * 2).toObject();
//=&gt; { x: 0, y: 2, z: 4 }
</code></pre>

**Class**: `Seq`

**Example**
```js

```
<br /><br />

## lang.util

### **private** function anyIsArguments()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsArguments.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is likely an <code>arguments</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `arguments` object, else `false`.</p>

**Example**
```js
anyIsArguments(function() { return arguments }())
// => true

anyIsArguments([1, 2, 3])
// => false
```
<br /><br />

### **private** function anyIsArray()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsArray.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as an <code>Array</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an array, else `false`.</p>

**Example**
```js
anyIsArray([1, 2, 3])
//=> true

anyIsArray(document.body.children)
//=> false

anyIsArray('abc')
//=> false

anyIsArray(noop)
//=> false
```
<br /><br />

### **private** function anyIsArrayBuffer()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsArrayBuffer.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as an <code>ArrayBuffer</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an array buffer, else `false`.</p>

**Example**
```js
anyIsArrayBuffer(new ArrayBuffer(2))
// => true

anyIsArrayBuffer(new Array(2))
// => false
```
<br /><br />

### **private** function anyIsArrayLike()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsArrayLike.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is array-like. A value is considered array-like if it's not a function and has a <code>value.length</code> that's an integer greater than or equal to <code>0</code> and less than or equal to <code>Number.MAX_SAFE_INTEGER</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is array-like, else `false`.</p>

**Example**
```js
anyIsArrayLike([1, 2, 3])
// => true

anyIsArrayLike(document.body.children)
// => true

anyIsArrayLike('abc')
// => true

anyIsArrayLike(Function)
// => false
```
<br /><br />

### **private** function anyIsBoolean()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsBoolean.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is classified as a boolean primitive or object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a boolean, else `false`.</p>

**Example**
```js
anyIsBoolean(false)
// => true

anyIsBoolean(null)
// => false
```
<br /><br />

### **private** function anyIsBuffer()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsBuffer.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is a buffer.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a buffer, else `false`.</p>

**Example**
```js
anyIsBuffer(new Buffer(2))
// => true

anyIsBuffer(new Uint8Array(2))
// => false
```
<br /><br />

### **private** function anyIsDate()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsDate.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>Date</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a date object, else `false`.</p>

**Example**
```js
anyIsDate(new Date)
//=> true

anyIsDate('Mon April 23 2012')
//=> false
```
<br /><br />

### **private** function anyIsError()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsError.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is an <code>Error</code>, <code>EvalError</code>, <code>RangeError</code>, <code>ReferenceError</code>, <code>SyntaxError</code>, <code>TypeError</code>, or <code>URIError</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `Error` object, else `false`.</p>

**Example**
```js
anyIsError(new Error)
// => true

anyIsError(Error)
// => false
```
<br /><br />

### **private** function anyIsFunction()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsFunction.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>Function</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a function, else `false`.</p>

**Example**
```js
anyIsFunction(function() {})
// => true

anyIsFunction(/abc/)
// => false
```
<br /><br />

### **private** function anyIsGenerator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsGenerator.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks whether the given value is a generator.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a generator, else `false`.</p>

**Example**
```js
anyIsGenerator((function*() {})())  //=> true

anyIsGenerator((function() {})())   //=> false

anyIsGenerator({
  next: () => {},
  throw: () => {}
})  //=> true
```
<br /><br />

### **private** function anyIsGeneratorFunction()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsGeneratorFunction.js#L17)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks whether a function is generator function.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The any to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a generator function, else `false`.</p>

**Example**
```js
anyIsGeneratorFunction(function*() {})
//=> true

anyIsGeneratorFunction(function() {})
//=> false
```
<br /><br />

### **private** function anyIsImmutableCollection()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableCollection.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableCollection</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableCollection`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableCollection([])
//=> false

anyIsImmutableCollection({})
//=> false

anyIsImmutableCollection(ImmutableMap())
//=> true

anyIsImmutableCollection(ImmutableList())
//=> true

anyIsImmutableCollection(ImmutableStack())
//=> true
```
<br /><br />

### **private** function anyIsImmutableList()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableList.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableList</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableList`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableList([])
//=> false

anyIsImmutableList({})
//=> false

anyIsImmutableList(ImmutableMap())
//=> false

anyIsImmutableList(ImmutableList())
//=> true

anyIsImmutableList(ImmutableStack())
//=> false
```
<br /><br />

### **private** function anyIsImmutableMap()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableMap.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableMap</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableMap`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableMap([])
//=> false

anyIsImmutableMap({})
//=> false

anyIsImmutableMap(ImmutableMap())
//=> true

anyIsImmutableMap(ImmutableList())
//=> false

anyIsImmutableMap(ImmutableStack())
//=> false
```
<br /><br />

### **private** function anyIsImmutableOrderedMap()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableOrderedMap.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableOrderedMap</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableOrderedMap`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableOrderedMap([])
//=> false

anyIsImmutableOrderedMap({})
//=> false

anyIsImmutableOrderedMap(new Map())
//=> false

anyIsImmutableOrderedMap(ImmutableMap())
//=> false

anyIsImmutableOrderedMap(ImmutableStack())
//=> false

anyIsImmutableOrderedMap(ImmutableOrderedMap())
//=> true
```
<br /><br />

### **private** function anyIsImmutableOrderedSet()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableOrderedSet.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableOrderedSet</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableOrderedSet`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableOrderedSet([])
//=> false

anyIsImmutableOrderedSet({})
//=> false

anyIsImmutableOrderedSet(new Set())
//=> false

anyIsImmutableOrderedSet(ImmutableMap())
//=> false

anyIsImmutableOrderedSet(ImmutableStack())
//=> false

anyIsImmutableOrderedSet(ImmutableSet())
//=> false

anyIsImmutableOrderedSet(ImmutableOrderedSet())
//=> true
```
<br /><br />

### **private** function anyIsImmutableSet()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableSet.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableSet</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableSet`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableSet([])
//=> false

anyIsImmutableSet({})
//=> false

anyIsImmutableSet(ImmutableMap())
//=> false

anyIsImmutableSet(ImmutableSet())
//=> true

anyIsImmutableSet(ImmutableStack())
//=> false
```
<br /><br />

### **private** function anyIsImmutableStack()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsImmutableStack.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is an <code>ImmutableStack</code>, or any of its subclasses.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is an `ImmutableStack`, or any of its subclasses.</p>

**Example**
```js
anyIsImmutableStack([])
//=> false

anyIsImmutableStack({})
//=> false

anyIsImmutableStack(ImmutableMap())
//=> false

anyIsImmutableStack(ImmutableSet())
//=> false

anyIsImmutableStack(ImmutableStack())
//=> true
```
<br /><br />

### **private** function anyIsIndex()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsIndex.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is a valid array-like index.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a valid index, else `false`.</p>

**Example**
```js
anyIsIndex(0)
//=> true

anyIsIndex(1)
//=> true

anyIsIndex(-1)
//=> false
```
<br /><br />

### **private** function anyIsIndexedIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsIndexedIterator.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is an IndexedIterator. An IndexedIterator is classified as having a property named <code>next</code> that is a plain function and a property named <code>getIndex</code> that is a plain function.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is an IndexedIterator</p>

**Example**
```js
anyIsIndexedIterator({
  next: () => {}
})
//=> true

const array = []
anyIsIndexedIterator(array[Symbol.iterator])
//=> false
```
<br /><br />

### **private** function anyIsInfinity()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsInfinity.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is <code>Infinity</code> or <code>-Infinity</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is `Infinity` or `-Infinity`, else `false`.</p>

**Example**
```js
anyIsInfinity(Infinity)
// => true

anyIsInfinity(-Infinity)
// => true

anyIsInfinity(new Number(Infinity))
// => true

anyIsInfinity(undefined)
// => false

anyIsInfinity(123)
// => false
```
<br /><br />

### **private** function anyIsInteger()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsInteger.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Determine if the given value is an integer.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>Boolean</code> - Returns `true` if `any` is an integer, else `false`.</p>

**Example**
```js
anyIsInteger(3)
// => true

anyIsInteger(new Number(3))
// => true

anyIsInteger(3.2)
// => false

anyIsInteger(Number.MIN_VALUE)
// => false

anyIsInteger(Infinity)
// => false

anyIsInteger(NaN)
// => false

anyIsInteger('3')
// => false
```
<br /><br />

### **private** function anyIsIterable()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsIterable.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> implements the iterator symbol or is iterable</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is iterable, else `false`.</p>

**Example**
```js
anyIsIterable('abc')
//=> true

anyIsIterable(new Map())
//=> true

anyIsIterable({})
//=> false

anyIsIterable([])
//=> true
```
<br /><br />

### **private** function anyIsIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsIterator.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is an <code>Iterator</code>. An <code>Iterator</code> is classified as having a property named <code>next</code> that is a function.</p>
<p>Note, this method returns <code>true</code> for async Iterators.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is an Iterator</p>

**Example**
```js
const array = []
anyIsIterator(array[Symbol.iterator])
//=> true
:
anyIsIterator({
  next: () => {}
})
//=> true
```
<br /><br />

### **private** function anyIsKey()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsKey.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is a key.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>
<p><code>keyed</code>: <code>Keyed</code> - The keyed value to query keys on.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a key</p>

**Example**
```js
anyIsKey('foo')
//=> true

anyIsKey(123)
//=> true

anyIsKey(true)
//=> true

anyIsKey(null)
//=> true

anyIsKey(undefined)
//=> true

anyIsKey(Symbol('abc'))
//=> true

anyIsKey(Symbol.for('foo'))
//=> true

anyIsKey([])
//=> true

anyIsKey({})
//=> true
```
<br /><br />

### **private** function anyIsKeyedIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsKeyedIterator.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is a KeyedIterator. A KeyedIterator is classified as having a<br />
property named <code>next</code> that is a plain function and a property named <code>getKey</code><br />
that returns the current key.</p>

**Params**
<p><code>any</code>: <code>Any</code> - The value to check.</p>

**Returns**
<br /><p><code>Boolean</code> - Returns `true` if `value` is a KeyedIterator</p>

**Example**
```js
const object = {}
anyIsKeyedIterator(objectToIterator(object))
//=> true

const array = []
anyIsKeyedIterator(arrayLikeToIterator(array))
//=> false

anyIsKeyedIterator({
  next: () => {},
  getKey: () => {}
})
//=> true
```
<br /><br />

### **private** function anyIsLength()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsLength.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is an integer that can be a lngth for an array like value</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` can be a length.</p>

**Example**
```js
anyIsLength(123)
//=> true

anyIsLength(0)
//=> true

anyIsLength(MAX_SAFE_INTEGER)
//=> true

anyIsLength(-1)
// => false

anyIsLength(1.23)
// => false

anyIsLength(MAX_SAFE_INTEGER + 1)
//=> false
```
<br /><br />

### **private** function anyIsMap()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsMap.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is classified as a <code>Map</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a map, else `false`.</p>

**Example**
```js
anyIsMap(new Map) // => true

anyIsMap(new WeakMap) // => false
```
<br /><br />

### **private** function anyIsNaN()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsNaN.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is <code>NaN</code>.</p>
<p><strong>Note:</strong> This method is based on <a href="https://mdn.io/Number/isNaN"><code>Number.isNaN</code></a> and is not the same as global <a href="https://mdn.io/isNaN"><code>isNaN</code></a> which returns <code>true</code> for <code>undefined</code> and other non-number values.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is `NaN`, else `false`.</p>

**Example**
```js
anyIsNaN(NaN)
// => true

anyIsNaN(new Number(NaN))
// => true

anyIsNaN(undefined)
// => false
```
<br /><br />

### **private** function anyIsNil()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsNil.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is <code>null</code> or <code>undefined</code>.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is nullish, else `false`.</p>

**Example**
```js
anyIsNil(null)
// => true

anyIsNil(void 0)
// => true

anyIsNil(NaN)
// => false
```
<br /><br />

### **private** function anyIsNull()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsNull.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is <code>null</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is `null`, else `false`.</p>

**Example**
```js
anyIsNull(null)
// => true

anyIsNull(void 0)
// => false
```
<br /><br />

### **private** function anyIsNumber()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsNumber.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is classified as a <code>Number</code> primitive or object.</p>
<p><strong>Note:</strong> To exclude <code>Infinity</code>, <code>-Infinity</code>, and <code>NaN</code>, which are<br />
classified as numbers, use the <code>Number.isFinite</code> method.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a number, else `false`.</p>

**Example**
```js
anyIsNumber(3)
// => true

anyIsNumber(Number.MIN_VALUE)
// => true

anyIsNumber(Infinity)
// => true

anyIsNumber('3')
// => false
```
<br /><br />

### **private** function anyIsObject()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsObject.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is the<br />
<a href="http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types">language type</a><br />
of <code>Object</code>. (e.g. arrays, functions, objects, regexes, <code>new Number(0)</code>, and <code>new String('')</code>)</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is an object, else `false`.</p>

**Example**
```js
anyIsObject({})
// => true

anyIsObject([1, 2, 3])
// => true

anyIsObject(function () {})
// => true

anyIsObject(null)
// => false
```
<br /><br />

### **private** function anyIsObjectLike()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsObjectLike.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is object-like. A value is object-like if it's not <code>null</code> and has a <code>typeof</code> result of &quot;object&quot;.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is object-like, else `false`.</p>

**Example**
```js
anyIsObjectLike({})
// => true

anyIsObjectLike([1, 2, 3])
// => true

anyIsObjectLike(Function)
// => false

anyIsObjectLike(null)
// => false
```
<br /><br />

### **private** function anyIsObserver()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsObserver.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.2.0
<p>Checks whether the given value is an Observer.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is an `Observer`, else `false`.</p>

**Example**
```js
anyIsObserver({
  next: () => {},
  error: () => {},
  complete: () => {}
}))
//=> true

anyIsObserver({})
//=> false
```
<br /><br />

### **private** function anyIsOp()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsOp.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Determines if <code>any</code> is an Op.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check</p>

**Returns**
<br /><p><code>boolean</code> - </p>

**Example**
```js
anyIsOp(new Op(fn))
//=> true

anyIsOp({
  ['@@redux-saga/IO']: 'op'
})
//=> true
```
<br /><br />

### **private** function anyIsPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsPath.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is a Path.</p>

**Params**
<p><code>any</code>: <code>Any</code> - The value to check.</p>

**Returns**
<br /><p><code>Boolean</code> - Returns `true` if `any` is a property name, else `false`.</p>

**Example**
```js
anyIsPath([])
//=> true

anyIsPath(['foo'])
//=> true

anyIsPath(['foo', 'bar'])
//=> true

anyIsPath([Symbol('abc')])
//=> true

anyIsPath([123, undefined, null])
//=> true

anyIsPath([ {}, [], new Map()])
//=> true

anyIsPath(new String('foo'))
//=> false

anyIsPath(123)
//=> false

anyIsPath(true)
//=> false

anyIsPath(null)
//=> false

anyIsPath(undefined)
//=> false

anyIsPath({})
//=> false
```
<br /><br />

### **private** function anyIsPlainFunction()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsPlainFunction.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Checks if <code>any</code> is plain function. A plain function is not an AsyncFunction and not a GeneratorFunction</p>

**Params**
<p><code>any</code>: <code>Any</code> - The value to check.</p>

**Returns**
<br /><p><code>Boolean</code> - Returns `true` if `any` is a plain function, else `false`.</p>

**Example**
```js
anyIsPlainFunction(() => {})
// => true

anyIsPlainFunction(function() {})
// => true

anyIsPlainFunction(async function() {})
// => false

anyIsPlainFunction(function* () {})
// => false
```
<br /><br />

### **private** function anyIsPlainObject()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsPlainObject.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>value</code> is a plain object, that is, an object created by the<br />
<code>Object</code> constructor or one with a <code>[[Prototype]]</code> of <code>null</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a plain object, else `false`.</p>

**Example**
```js
function Foo() {
  this.a = 1
}

anyIsPlainObject(new Foo)
//=> false

anyIsPlainObject([1, 2, 3])
//=> false

anyIsPlainObject({ 'x': 0, 'y': 0 })
//=> true

anyIsPlainObject(Object.create(null))
//=> true
```
<br /><br />

### **private** function anyIsPromise()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsPromise.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks whether the given value is a Promise.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a Promise, else `false`.</p>

**Example**
```js
anyIsPromise(new Promise(() => {})) //=> true

anyIsPromise({}) //=> false

anyIsPromise({ then: () => {} }) //=> true
```
<br /><br />

### **private** function anyIsProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsProperty.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is a Property</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a Property, else `false`.</p>

**Example**
```js
anyIsProperty('foo')
//=> true

anyIsProperty('foo.bar')
//=> true

anyIsProperty(Symbol('abc'))
//=> true

anyIsProperty(Symbol.for('foo'))
//=> true

anyIsProperty(new String('foo'))
//=> true

anyIsProperty(123)
//=> false

anyIsProperty(true)
//=> false

anyIsProperty(null)
//=> false

anyIsProperty(undefined)
//=> false

anyIsProperty([])
//=> false

anyIsProperty({})
//=> false
```
<br /><br />

### **private** function anyIsRegExp()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsRegExp.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>RegExp</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a regexp, else `false`.</p>

**Example**
```js
anyIsRegExp(/abc/)
//=> true

anyIsRegExp('/abc/')
//=> false
```
<br /><br />

### **private** function anyIsResolved()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsResolved.js#L7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Determines if <code>any</code> is a resolvable value.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - </p>

**Returns**
<br /><p><code>boolean</code> - </p>

**Example**
```js
anyIsResolved({
  ['@@redux-saga/IO']: 'op'
})
//=> false

anyIsResolved((function* () {})())
//=> false

anyIsResolved(new Promise(() => {})))
//=> false

anyIsResolved({ resolve: () => 'foo' })
//=> false

anyIsResolved(null)
//=> true

anyIsResolved(undefined)
//=> true

anyIsResolved('abc')
//=> true
```
<br /><br />

### **private** function anyIsSeq()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsSeq.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns <code>true</code> if <code>any</code> is a <code>Seq</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a `Seq`.</p>

**Example**
```js
anyIsSeq([])
//=> false

anyIsSeq({})
//=> false

anyIsSeq(ImmutableMap())
//=> false

anyIsSeq(Seq())
//=> true
```
<br /><br />

### **private** function anyIsSet()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsSet.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>Set</code> object.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `value` is a set, else `false`.</p>

**Example**
```js
anyIsSet(new Set())
// => true

anyIsSet(new WeakSet())
// => false
```
<br /><br />

### **private** function anyIsString()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsString.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>String</code> primitive or object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a string, else `false`.</p>

**Example**
```js
anyIsString('abc')
// => true

anyIsString(new String('abc'))
// => true

anyIsString(1)
// => false
```
<br /><br />

### **private** function anyIsSymbol()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsSymbol.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>Symbol</code> primitive or object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a symbol, else `false`.</p>

**Example**
```js
anyIsSymbol(Symbol.iterator)
// => true

anyIsSymbol(Symbol('abc'))
// => true

anyIsSymbol(Symbol.for('abc'))
// => true

anyIsSymbol('abc')
// => false
```
<br /><br />

### **private** function anyIsUndefined()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsUndefined.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is <code>undefined</code>.</p>

**Params**
<p><code>any</code>: <code>Any</code> - The value to check.</p>

**Returns**
<br /><p><code>Boolean</code> - Returns `true` if `any` is `undefined`, else `false`.</p>

**Example**
```js
anyIsUndefined(void 0)
// => true

anyIsUndefined(null)
// => false
```
<br /><br />

### **private** function isWeakMap()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsWeakMap.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>WeakMap</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a weak map, else `false`.</p>

**Example**
```js
isWeakMap(new WeakMap())
// => true

isWeakMap(new Map())
// => false
```
<br /><br />

### **private** function anyIsWeakSet()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIsWeakSet.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Checks if <code>any</code> is classified as a <code>WeakSet</code> object.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to check.</p>

**Returns**
<br /><p><code>boolean</code> - Returns `true` if `any` is a weak set, else `false`.</p>

**Example**
```js
anyIsWeakSet(new WeakSet())
// => true

anyIsWeakSet(new Set())
// => false
```
<br /><br />

### **private** function anyIterate()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIterate.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method iterates over the given collection or iterator in <strong>series</strong>. If the <code>iteratee</code> method returns <code>{ done: true }</code> then the iteration will complete.</p>
<p>This method automatically upgrades to async. If the <code>iteratee</code> returns a Promise or a generator, this method will return a Promise or a generator. Values are iterated in order and if the iteratee returns a resolvable value the iteration will wait until that value resolves before continuing with the iteration.</p>
<p>This method also supports async iterators. If an unresolved value is received from the iterator instead of an object with <code>value</code> and <code>done</code> properties, the iteration will wait for the value to resolve before continuing to the next iteration. This will also cause the method to upgrade to async and return a Promise.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The collection or iterator to iterate over</p>
<p><code>func</code>: <code>Function</code> - The iteratee Function</p>

**Returns**
<br /><p><code>&ast;</code> - The final value returned when the iteratee returns done or `undefined`</p>

**Example**
```js
anyIterate(['a', 'b', 'c'], (value, kdx) => {
  if (value === 'b') {
    return { done: true, value: kdx }
  }
  return { done: false }
})
//=> 1

anyIterate(['a', 'b', 'c'], async (value, kdx) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (value === 'b') {
      return resolve({ done: true, value: kdx })
    }
    return resolve({ done: false })
  }, 0)
}))
//=> 1
```
<br /><br />

### **private** function anyIterateRight()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyIterateRight.js#L40)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method iterates over the given collection or iterator in <strong>series</strong>. If the <code>iteratee</code> method returns <code>{ done: true }</code> then the iteration will complete.</p>
<p>This method automatically upgrades to async. If the <code>iteratee</code> returns a Promise or a generator, this method will return a Promise or a generator. Values are iterated in order and if the iteratee returns a resolvable value the iteration will wait until that value resolves before continuing with the iteration.</p>
<p>This method also supports async iterators. If an unresolved value is received from the iterator instead of an object with <code>value</code> and <code>done</code> properties, the iteration will wait for the value to resolve before continuing to the next iteration. This will also cause the method to upgrade to async and return a Promise.</p>

**Params**
<p><code>iteratee</code>: <code>Function</code> - The iteratee Function</p>
<p><code>collection</code>: <code>&ast;</code> - The collection or iterator to iterate over</p>

**Returns**
<br /><p><code>&ast;</code> - The final value returned when the iteratee returns done or `undefined`</p>

**Example**
```js
anyIterateRight((value, kdx) => {
  if (value === 'b') {
    return { done: true, value: kdx }
  }
  return { done: false }
}, ['a', 'b', 'c'])
//=> 1

anyIterateRight(async (value, kdx) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (value === 'b') {
      return resolve({ done: true, value: kdx })
    }
    return resolve({ done: false })
  }, 0)
}), ['a', 'b', 'c'])
//=> 1
```
<br /><br />

### **private** function anyResolve()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyResolve.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves a value.</p>
<p>If the value is a <code>Promise</code>, this will return a Promise that will then resolve<br />
the returned value.</p>
<p>Dispatches to the <code>resolve</code> method if it exists. If a resolve method returns<br />
a value that is also resolvable, this method will resolve that value as<br />
well.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve.</p>

**Returns**
<br /><p><code>&ast;</code> - The resolved value.</p>

**Example**
```js
anyResolve('foo')
// => 'foo'

anyResolve({
 resolve: () => 'bar'
})
//=> bar

anyResolve({
  resolve: () => ({
    resolve: () => 'bar'
  })
})
//=> bar
```
<br /><br />

### **private** function anyResolveToGenerator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyResolveToGenerator.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves a value to a generator using the generator to yield values.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve with the generator</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
const generator = anyResolveToGenerator('foo')
generator.next()
//=> { value: 'foo', done: true }
```
<br /><br />

### **private** function anyResolveToGeneratorWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyResolveToGeneratorWith.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves a value to a generator using the generator to yield values. When the<br />
generator is complete the fn method is executed with the final result.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve with the generator</p>
<p><code>func</code>: <code>Function</code> - The function to execute at the end of the generator&#39;s resolution</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
const generator = anyResolveToGeneratorWith(
  (resolvedValue) => {
    //=> 'foo'
  },
  'foo'
)
generator.next()
//=> { done: true } triggers the fn method
```
<br /><br />

### **private** function anyResolveWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyResolveWith.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves a value to the given method.</p>
<p>If the value to be resolved is a promise then this method will return a promise. The fn method will be triggered once the promise resolves.</p>
<p>If the value to be resolved is a generator, this method will return a generator.</p>

**Params**
<p><code>any</code>: <code>Any</code> - The value to resolve with the generator</p>
<p><code>func</code>: <code>Function</code> - The function to execute at the end of the resolution</p>

**Returns**
<br /><p><code>Generator|Promise|Any</code> - </p>

**Example**
```js
await anyResolveWith(
  Promise.resolve('foo'),
  (resolvedValue) => 'bar' // resolvedValue == 'foo'
)
//=> 'bar'

anyResolveWith(
  'foo',
  (resolvedValue) => 'bar' // resolvedValue == 'foo'
)
//=> 'bar'
```
<br /><br />

### **private** function anyToFinite()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToFinite.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Converts <code>any</code> to a finite number.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to convert.</p>

**Returns**
<br /><p><code>number</code> - Returns the converted number.</p>

**Example**
```js
anyToFinite(3.2)
//=> 3.2

anyToFinite(Number.MIN_VALUE)
//=> 5e-324

anyToFinite(Infinity)
//=> 1.7976931348623157e+308

anyToFinite('3.2')
//=> 3.2
```
<br /><br />

### **private** function anyToInteger()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToInteger.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Converts <code>any</code> to an Integer.</p>
<p><strong>Note:</strong> This method is loosely based on<br />
<a href="http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger"><code>ToInteger</code></a>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to convert.</p>

**Returns**
<br /><p><code>number</code> - Returns the converted integer.</p>

**Example**
```js
anyToInteger(3.2)
// => 3

anyToInteger(Number.MIN_VALUE)
// => 0

anyToInteger(Infinity)
// => 1.7976931348623157e+308

anyToInteger('3.2')
// => 3
```
<br /><br />

### **private** function anyToIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToIterator.js#L14)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method generates an iterator for the given value</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The collection or iterator to iterate over</p>
<p><code>start</code>: <code>string</code> - The position to start at for iteration</p>

**Returns**
<br /><p><code>Iterator</code> - The Iterator for the given value</p>

**Example**
```js
anyToIterator(['a', 'b', 'c'])
//=> { next: () => { value: string, index: number, kdx: umber, done: boolean }}

anyToIterator('abc')
//=> { next: () => { value: string, index: number, kdx: umber, done: boolean }}

anyToIterator({ a: 1, b: 2, c: 3 })
//=> { next: () => { value: number, key: string, kdx: string, done: boolean }}
```
<br /><br />

### **private** function anyToNumber()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToNumber.js#L22)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Converts <code>any</code> to a <code>Number</code>.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to process.</p>

**Returns**
<br /><p><code>number</code> - Returns the number.</p>

**Example**
```js
anyToNumber(3.2)
// => 3.2

anyToNumber(Number.MIN_VALUE)
// => 5e-324

anyToNumber(Infinity)
// => Infinity

anyToNumber('3.2')
// => 3.2
```
<br /><br />

### **private** function anyToPath()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToPath.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.3.0
<p>Casts a value to an array path.</p>

**Params**
<p><code>value</code>: <code>string</code> - The value to cast to an array path</p>

**Returns**
<br /><p><code>Array&lt;string&gt;</code> - The path</p>

**Example**
```js
anyToPath('a.b.c')
//=> ['a', 'b', 'c']
```
<br /><br />

### **private** function anyToStringTag()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/anyToStringTag.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Gives a single-word string description of the (native) type of a value,<br />
returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not<br />
attempt to distinguish user Object types any further, reporting them all as<br />
'Object'.</p>

**Params**
<p><code>value</code>: <code>&ast;</code> - The value to test</p>

**Returns**
<br /><p><code>string</code> - </p>

**Example**
```js
anyToStringTag({})
//=> 'Object'

anyToStringTag(1)
//=> 'Number'

anyToStringTag(false)
//=> 'Boolean'

anyToStringTag('s')
//=> 'String'

anyToStringTag(null)
//=> 'Null'

anyToStringTag([])
//=> 'Array'

toType(/[A-z]/)
//=> 'RegExp'

anyToStringTag(() => {})
//=> 'Function'

anyToStringTag(undefined)
//=> 'Undefined'
```
<br /><br />

### **private** function arrayClone()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayClone.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Clones the given <code>array</code></p>

**Params**
<p><code>array</code>: <code>Array</code> - The array to clone.</p>

**Returns**
<br /><p><code>Array</code> - Returns a clone of `array`.</p>

<br /><br />

### **private** function arrayConcat()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayConcat.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Concat an <code>Array</code> with one or more <code>Array</code>s.</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array concat with the given values</p>
<p><code>values</code>: <code>...&ast;</code> - The values to concat to the array</p>

**Returns**
<br /><p><code>Array</code> - A new array with the values concatenated</p>

**Example**
```js
arrayConcat(['a', 'b', 'c'], [1, 2, 3])
//=> ['a', 'b', 'c', 1, 2, 3]

arrayConcat([1, 2, 3], [4, 5, 6], [7, 8, 9])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

arrayConcat(['a', 'b', 'c'], 1, [2, 3])
//=> ['a', 'b', 'c', 1, 2, 3]
```
<br /><br />

### **private** function arrayDifference()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayDifference.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns an <code>Array</code> of all elements in the first <code>Array</code> not contained in the<br />
second <code>Array</code>.</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array concat with the given values</p>
<p><code>values</code>: <code>...&ast;</code> - The values to concat to the array</p>

**Returns**
<br /><p><code>Array</code> - A new array with the values concatenated</p>

**Example**
```js
arrayConcat(['a', 'b', 'c'], [1, 2, 3])
//=> ['a', 'b', 'c', 1, 2, 3]

arrayConcat([1, 2, 3], [4, 5, 6], [7, 8, 9])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

arrayConcat(['a', 'b', 'c'], 1, [2, 3])
//=> ['a', 'b', 'c', 1, 2, 3]
```
<br /><br />

### **private** function arrayFilter()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayFilter.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.2.0
<p>This method creates a new <code>Array</code> with all elements that pass the test implemented by the provided function.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.prototype.filter()</a> for more information</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array to iterate over.</p>
<p><code>predicate</code>: <code>Function</code> - The function to execute for each element</p>

**Returns**
<br /><p><code>Array</code> - A new Array with the values that passed the given predicate test</p>

**Example**
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = arrayFilter(words, (word) => word.length > 6)

console.log(result)
// => expected output: Array ["exuberant", "destruction", "present"]
```
<br /><br />

### **private** function arrayFlatten()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayFlatten.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a new array by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array to consider.</p>

**Returns**
<br /><p><code>Array</code> - The flattened list.</p>

**Example**
```js
arrayFlatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
<br /><br />

### **private** function arrayForEach()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayForEach.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method executes a provided function once for each array element.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">Array.prototype.forEach()</a> for more information</p>

**Params**
<p><code>array</code>: <code>T[]</code> - The array to iterate over.</p>
<p><code>func</code>: <code>Function</code> - The function to execute for each element</p>

**Returns**
<br /><p><code>T[]</code> - The original array</p>

**Example**
```js
const items = ['item1', 'item2', 'item3']
const copy = []

for (let i=0; i<items.length; i++) {
  copy.push(items[i])
}
//=> ['item1', 'item2', 'item3']
```
<br /><br />

### **private** function arrayGetIndex()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayGetIndex.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a value from the Array stored at the specified Index.</p>

**Params**
<p><code>array</code>: <code>Array</code> - The Array on which to get the Index.</p>
<p><code>index</code>: <code>Index</code> - The Index to get.</p>

**Returns**
<br /><p><code>Any</code> - The value at the specified Index on the Array. Undefined if the Array does not have the Index.</p>

**Example**
```js
const array = ['foo']

arrayGetIndex(array, 0)
//=> 'foo'

arrayGetIndex(array, 1)
//=> undefined
```
<br /><br />

### **private** function arrayKeys()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayKeys.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method returns a new Array Iterator object that contains the keys for each index in the array.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys">Array.prototype.keys()</a> for more information</p>

**Params**
<p><code>array</code>: <code>Array</code> - The array whose indexes to iterate over.</p>

**Returns**
<br /><p><code>Iterator&lt;Index&gt;</code> - Iterator of the Array&#39;s Indexes</p>

**Example**
```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key)
}
// => expected output: 0
// => expected output: 1
// => expected output: 2
```
<br /><br />

### **private** function arrayLikeReduce()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayLikeReduce.js#L45)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Reduces over an <code>ArrayLike</code> value</p>

**Params**
<p><code>arrayLike</code>: <code>ArrayLike</code> - The array like value to iterate over.</p>
<p><code>iteratee</code>: <code>Function</code> - The iterator function. Receives three values, the accumulator, the current value from the collection and the key or index.</p>
<p><code>accum</code>: <code>&ast;</code> - The accumulator value.</p>
<p><code>index</code>: <code>number</code> - The index to start from</p>

**Returns**
<br /><p><code>&ast;</code> - The final, accumulated value.</p>

<br /><br />

### **private** function arrayLikeSlice()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayLikeSlice.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a shallow copy of a portion of an array into a new array object<br />
selected from begin to end (end not included). The original array will not<br />
be modified.</p>

**Params**
<p><code>arrayLike</code>: <code>Array</code> - The array like value to slice values from</p>
<p><code>start</code>: <code>number</code> - [=0] Zero-based index at which to begin extraction. A negative index will be treated as an offset from the end.</p>
<p><code>end</code>: <code>number</code> - [=array.length] Zero-based index before which to end extraction. `arrayLikeSlice` extracts up to but not including end.</p>

**Returns**
<br /><p><code>Array</code> - A new array with the extraced values</p>

**Example**
```js
arrayLikeSlice(['a', 'b', 'c'], 0, 2)
//=> ['a', 'b']
```
<br /><br />

### **private** function arrayLikeToIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/arrayLikeToIterator.js#L30)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns iterator for an array like value.</p>

**Params**
<p><code>arrayLike</code>: <code>&ast;</code> - The array like value to create an iterator for.</p>
<p><code>index</code>: <code>&ast;</code> - The index to start at.</p>

**Returns**
<br /><p><code>IndexedIterator</code> - A new iterator for the given array like value</p>

**Example**
```js
arrayLikeToIterator(['write', 'more'])
//=> {
//   next: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   }),
//   previous: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   })
// }
arrayLikeToIterator('tests')
//=> {
//   next: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   })
//   previous: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   })
// }
```
<br /><br />

### **private** function cacheChain()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/cacheChain.js#L46)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method generates a specific object instance for use in a WeakMap cache.<br />
The object instance is unique based upon the parameters that are passed to<br />
the this method.</p>
<p>The main use of this method is for generating cache keys for memoization and<br />
automatically clearing the cache when a value no longer exists in memory.</p>
<p>When a non immutable object is passed as an argument it will be stored into a<br />
WeakMap as part of a chain. If that object is ever removed from memory all<br />
cache chains connected to the object will automatically be removed from the cache.</p>

**Params**
<p><code>args</code>: <code>...&ast;</code> - The arguments to generate a cache key for</p>

**Returns**
<br /><p><code>Object</code> - The cache key</p>

**Example**
```js

```
<br /><br />

### **private** function functionDefineLength()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/functionDefineLength.js#L58)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Defines <code>length</code> for the given <code>func</code></p>
<p>Note: This mutates <code>func</code></p>

**Params**
<p><code>func</code>: <code>Function</code> - The function to define the length of.</p>
<p><code>length</code>: <code>Number</code> - The length of the function parameters.</p>

**Returns**
<br /><p><code>Function</code> - The `func` function.</p>

**Example**
```js
const result = functionDefineLength(function(abc) {}, 2)
result.length
//=> 2
```
<br /><br />

### **private** function functionMemoize()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/functionMemoize.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Creates a new function that, when invoked, caches the result of calling<br />
<code>func</code> for a given argument set and returns the result. Subsequent calls to<br />
the memoized <code>func</code> with the same argument set will not result in an additional<br />
call to <code>func</code>; instead, the cached result for that set of arguments will be<br />
returned.</p>

**Params**
<p><code>func</code>: <code>Function</code> - The function to memoize.</p>

**Returns**
<br /><p><code>Function</code> - Memoized version of `func`.</p>

**Example**
```js
let count = 0
const factorial = memoize(n => {
  count += 1
  return product(range(1, n + 1))
})
factorial(5)
//=> 120

factorial(5)
//=> 120

factorial(5)
//=> 120

count
//=> 1
```
<br /><br />

### **private** function functionMemoizeWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/functionMemoizeWith.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>A customisable version of <a href="#functionMemoize"><code>functionMemoize</code></a>.<br />
<code>functionMemoizeWith</code> takes an additional function that will be applied to a<br />
given argument set and used to create the cache key under which the results<br />
of the function to be memoized will be stored. Care must be taken when<br />
implementing key generation to avoid clashes that may overwrite previous<br />
entries erroneously.</p>

**Params**
<p><code>func</code>: <code>Function</code> - The function to memoize.</p>
<p><code>cacheFunc</code>: <code>Function</code> - The function to generate the cache key.</p>

**Returns**
<br /><p><code>Function</code> - Memoized version of `func`.</p>

**Example**
```js
let count = 0
const factorial = functionMemoizeWith(n => {
  count += 1
  return product(range(1, n + 1))
}, identity)

factorial(5)
//=> 120

factorial(5)
//=> 120

factorial(5)
//=> 120

count
//=> 1
```
<br /><br />

### **private** function functionToString()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/functionToString.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a string representing the function.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString">Function.prototype.toString()</a> for more information</p>

**Params**
<p><code>func</code>: <code>Function</code> - The function to convert to a string</p>

**Returns**
<br /><p><code>string} A string representing the object.<br />
<br />
functionToString(function () {})<br />
//=&gt; &#39;function () {</code> - &#39;</p>

<br /><br />

### **private** function generatorResolveToGeneratorWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/generatorResolveToGeneratorWith.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves a Generator to a Generator yielding all values of the Generator to<br />
the new one.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve with the generator</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
const generator = anyResolveToGenerator('foo')
generator.next()
//=> { value: 'foo', done: true }
```
<br /><br />

### **private** function indexEndOffset()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/indexEndOffset.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Generate a start index with an offset where if the start is less than 0 it will return an offset from the length of <code>length + start</code></p>

**Params**
<p><code>start</code>: <code>number</code> - The start index</p>
<p><code>length</code>: <code>number</code> - The length of the list</p>

**Returns**
<br /><p><code>number</code> - A starting index</p>

**Example**
```js
indexEndOffset(0, 2)
// => 0

indexEndOffset(3, 2)
// => 2

indexEndOffset(-1, 3)
// => 2
```
<br /><br />

### **private** function iteratorResolver()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/iteratorResolver.js#L108)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns iterator capable of resolving iterators that might be async, wrapping it in additional functionality.</p>

**Params**
<p><code>iterator</code>: <code>Iterator</code> - The iterator to wrap</p>
<p><code>start</code>: <code>string</code> - The positin to start at.</p>

**Returns**
<br /><p><code>Iterator</code> - A new iterator for the given iterator</p>

**Example**
```js
iteratorResolver(
 (['write', 'more'])[Symbol.iterator]()
)
//=> {
//   next: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   }),
//   previous: () => ({
//     value: *,
//     done: boolean,
//     kdx: integer,
//     index: integer
//   })
// }
```
<br /><br />

### **private** function iteratorToArray()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/iteratorToArray.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method converts an <code>Iterator</code> into an <code>Array</code></p>

**Params**
<p><code>iterator</code>: <code>Iterator</code> - The Iterator to convert to an Array</p>

**Returns**
<br /><p><code>Array</code> - An `Array` of all the values from the `Iterator`</p>

**Example**
```js

```
<br /><br />

### **private** function mapDeleteKey()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/mapDeleteKey.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Deletes a <code>Key</code> from a <code>Map</code>. Returns a new copy of the <code>Map</code> with the <code>Key</code><br />
removed.</p>

**Params**
<p><code>map</code>: <code>Map</code> - </p>
<p><code>key</code>: <code>Key</code> - </p>

**Returns**
<br /><p><code>Map</code> - </p>

<br /><br />

### **private** function mapGetKey()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/mapGetKey.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method returns an element from a Map object stored at the given Key.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has">Map.prototype.has()</a> for more information</p>

**Params**
<p><code>map</code>: <code>Map</code> - The map to iterate over</p>
<p><code>key</code>: <code>Key</code> - </p>

**Returns**
<br /><p><code>Any</code> - Returns the element stored at the given Key if the Map contains the Key, undefined otherwise.</p>

**Example**
```js
const map = new Map([['foo', 'bar']])

mapGetKey(map, 'foo')
//=> 'bar'

mapGetKey(map, 'baz')
//=> undefined
```
<br /><br />

### **private** function mapHasKey()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/mapHasKey.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method returns a boolean indicating whether an element with the specified key exists or not.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has">Map.prototype.has()</a> for more information</p>

**Params**
<p><code>map</code>: <code>Map</code> - The map to iterate over</p>
<p><code>key</code>: <code>Key</code> - </p>

**Returns**
<br /><p><code>Boolean</code> - Returns true if the Map contains the Key, false otherwise.</p>

**Example**
```js
const map = new Map([['foo', 'bar']])

mapHasKey(map, 'foo')
//=> true
```
<br /><br />

### **private** function mapSetKey()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/mapSetKey.js#L6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Deletes a <code>Key</code> from a <code>Map</code>. Returns a new copy of the <code>Map</code> with the <code>Key</code><br />
removed.</p>

**Params**
<p><code>map</code>: <code>Map</code> - </p>
<p><code>key</code>: <code>Key</code> - </p>
<p><code>value</code>: <code>Any</code> - </p>

**Returns**
<br /><p><code>Map</code> - </p>

<br /><br />

### **private** function objectAssign()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectAssign.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign</a> for more information</p>

**Params**
<p><code>target</code>: <code>Object</code> - The target object.</p>
<p><code>sources</code>: <code>...Object</code> - The source object(s).</p>

**Returns**
<br /><p><code>Object</code> - The target object with all the sources propeties assigned to the target.</p>

**Example**
```js
const object1 = {
  a: 1,
  b: 2,
  c: 3
}

objectAssign(object1, {c: 4, d: 5})
//=> {
  a: 1,
  b: 2,
  c: 4,
  d: 5
}
```
<br /><br />

### **private** function objectClone()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectClone.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>This method is used to copy the values of all enumerable own properties from<br />
one object to a new object.</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object to copy.</p>

**Returns**
<br /><p><code>Object</code> - The new copy of the object.</p>

**Example**
```js
const object = {
  a: 1,
  b: 2,
  c: 3
}

const objectCopy = objectClone(object)
//=> {
  a: 1,
  b: 2,
  c: 3
}

objectCopy === object
//=> false
```
<br /><br />

### **private** function objectDefineProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectDefineProperty.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a> for more information</p>

**Params**
<p><code>object</code>: <code>object</code> - The object on which to define the property.</p>
<p><code>prop</code>: <code>string</code> - The name or Symbol of the property to be defined or modified.</p>
<p><code>descriptor</code>: <code>object</code> - The descriptor for the property being defined or modified.</p>

**Returns**
<br /><p><code>object</code> - The object that was passed to the function.</p>

**Example**
```js
const object1 = {}

objectDefineProperty(object1, 'property1', {
  value: 42,
  writable: false
})

object1.property1 = 77
// throws an error in strict mode

object1.property1
//=> 42
```
<br /><br />

### **private** function objectDeleteProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectDeleteProperty.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Removes a property from an Object. Returns a copy of the object with the<br />
Property removed.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a> for more information</p>

**Params**
<p><code>object</code>: <code>Object</code> - The Object on which to remove the property.</p>
<p><code>prop</code>: <code>String</code> - The name or Symbol of the property to be deleted.</p>

**Returns**
<br /><p><code>Object</code> - A copy of the Object that was passed to the function.</p>

**Example**
```js
const object = {
  foo: 1,
  bar: 2
}

const result = objectDeleteProperty(object, 'foo')

result.foo
//=> undefined
object.foo
//=> 1
```
<br /><br />

### **private** function objectGetOwnPropertyDescriptor()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectGetOwnPropertyDescriptor.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a property descriptor for an own property</p>

**Params**
<p><code>object</code>: <code>object</code> - The object to get the property from</p>
<p><code>prop</code>: <code>string</code> - The prop to get from the object</p>

**Returns**
<br /><p><code>{<br />
  configurable: boolean,<br />
  enumerable: boolean,<br />
  value: &ast;,<br />
  writeable: boolean,<br />
  get: () =&gt; &ast;,<br />
  set: (value) =&gt; undefined<br />
}</code> - The property descriptor</p>

**Example**
```js
const object = { get foo() { return 17 } }
objectGetOwnPropertyDescriptor(object, 'foo')
//=> {
//   configurable: true,
//   enumerable: true,
//   get: foo() { ... },
//   set: undefined
// }
```
<br /><br />

### **private** function objectGetOwnPropertySymbols()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectGetOwnPropertySymbols.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns an array of all symbol properties found directly upon a given object.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">Object.getOwnPropertySymbols()</a> for more information</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object whose symbol properties are to be returned.</p>

**Returns**
<br /><p><code>Array</code> - An array of all symbol properties found directly upon the given object.</p>

**Example**
```js
const object1 = {}
const a = Symbol('a')
const b = Symbol.for('b')

object1[a] = 'localSymbol'
object1[b] = 'globalSymbol'

const objectSymbols = objectGetOwnPropertySymbols(object1)

console.log(objectSymbols.length)
//=>  2
```
<br /><br />

### **private** function objectGetProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectGetProperty.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a value from the Object stored at the specified Property.</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object on which to get the property.</p>
<p><code>property</code>: <code>Property</code> - The Property to get.</p>

**Returns**
<br /><p><code>Any</code> - The value at the specified property. Undefined if the Object does not have the property.</p>

**Example**
```js
const object = { foo: 42 }

objectGetProperty(object, 'foo')
//=> 42

objectGetProperty(object, 'bar')
//=> undefined
```
<br /><br />

### **private** function objectHasOwnProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectHasOwnProperty.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">Object.hasOwnProperty()</a> for more information</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object on which to check for the property.</p>
<p><code>property</code>: <code>Property</code> - The String name or symbol of the property to test.</p>

**Returns**
<br /><p><code>Boolean</code> - A boolean indicating whether or not the object has the specified property as own property.</p>

**Example**
```js
const object = new Object()
object.property1 = 42

objectHasOwnProperty(object, 'property1')
//=> true

objectHasOwnProperty(object, 'toString')
//=> false

objectHasOwnProperty(object, 'hasOwnProperty')
//=> false
```
<br /><br />

### **private** function objectKeys()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectKeys.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a list containing the names of all the enumerable own properties of the supplied object.<br />
Note that the order of the output array is not guaranteed to be consistent across different JS platforms.</p>
<p>Note: known bugs with the Object.keys method are addressed using the core-js polyfill provided by babel</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object to extract properties from</p>

**Returns**
<br /><p><code>Array</code> - An array of the object&#39;s own properties.</p>

**Example**
```js
objectKeys({a: 1, b: 2, c: 3})
//=> ['a', 'b', 'c']
```
<br /><br />

### **private** function objectMutateDeleteProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectMutateDeleteProperty.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.2.0
<p>Mutably removes a property from an Object.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete operator</a> for more information</p>

**Params**
<p><code>object</code>: <code>Object</code> - The Object on which to remove the property.</p>
<p><code>prop</code>: <code>String</code> - The name or Symbol of the property to be deleted.</p>

**Returns**
<br /><p><code>Object</code> - The original Object that was passed to the function.</p>

**Example**
```js
const object = {
  foo: 1,
  bar: 2
}

const result = objectMutateDeleteProperty(object, 'foo')

result.foo
//=> undefined
object.foo
//=> 1
```
<br /><br />

### **private** function objectMutateSetProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectMutateSetProperty.js#L1)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.2.0
<p>Mutably sets a <code>Property</code> on an <code>Object</code></p>

**Params**
<p><code>object</code>: <code>Object</code> - The Object on which to set the property.</p>
<p><code>property</code>: <code>Property</code> - The name or Symbol of the property to update.</p>
<p><code>value</code>: <code>Any</code> - The value to set the Property to</p>

**Returns**
<br /><p><code>Object} The original Object with the property set to the given value<br />
<br />
const object = {<br />
  foo: 1,<br />
  bar: 2</code> - const result = objectSetProperty(object, &#39;foo&#39;, 3)<br />
<br />
result.foo<br />
//=&gt; 3<br />
<br />
object.foo<br />
//=&gt; 3</p>

<br /><br />

### **private** function objectMutateUpdateProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectMutateUpdateProperty.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.2.0
<p>Updates a <code>Property</code> on an <code>Object</code></p>

**Params**
<p><code>object</code>: <code>Object</code> - The Object on which to update the property.</p>
<p><code>property</code>: <code>Property</code> - The name or Symbol of the property to update.</p>
<p><code>func</code>: <code>Function</code> - The updater Function</p>

**Returns**
<br /><p><code>Object} The original Object with the Property updated with the<br />
result of the updater function<br />
<br />
const object = {<br />
  foo: 1,<br />
  bar: 2</code> - const result = objectMutateUpdateProperty(object, &#39;foo&#39;, (value) =&gt; value + 1)<br />
<br />
result.foo<br />
//=&gt; 2<br />
<br />
object.foo<br />
//=&gt; 2</p>

<br /><br />

### **private** function objectSetProperty()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectSetProperty.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Sets a <code>Property</code> on an <code>Object</code> and returns a copy of the <code>Object</code> with the<br />
<code>Property</code> set. If the property's value is set to the same value, then the<br />
same instance of Object will be returned with no changes.</p>

**Params**
<p><code>object</code>: <code>Object</code> - The Object on which to set the property.</p>
<p><code>property</code>: <code>Property</code> - The name or Symbol of the property to update.</p>
<p><code>value</code>: <code>Any</code> - The value to set the Property to</p>

**Returns**
<br /><p><code>Object} A copy of the Object with the Property set to the new value<br />
<br />
const object = {<br />
  foo: 1,<br />
  bar: 2</code> - const result = objectSetProperty(object, &#39;foo&#39;, 3)<br />
<br />
result.foo<br />
//=&gt; 3<br />
<br />
object.foo<br />
//=&gt; 1</p>

<br /><br />

### **private** function objectToIterator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectToIterator.js#L32)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns iterator for an object's keys and values.</p>
<p>Note, iterates over object's own keys and symbols</p>

**Params**
<p><code>object</code>: <code>&ast;</code> - The array object to create an iterator for.</p>

**Returns**
<br /><p><code>Iterator</code> - A new iterator for the given object&#39;s keys and values</p>

**Example**
```js
const iter = objectToIterator({
  write: 'more',
  tests: 'asap',
  [Symbol('like')]: 'now'
})
//=> {
//   next: () => ({
//     value: *,
//     done: boolean,
//     kdx: string,
//     key: string
//   })
// }

iter.next()
//=> { value: 'more', key: 'write', kdx: 'write', done: false }

iter.next()
//=> { value: 'asap', key: 'tests', kdx: 'tests', done: false }

iter.next()
//=> { value: 'now', key: Symbol('like'), kdx: Symbol('like'), done: false }

iter.next()
//=> { done: true }
```
<br /><br />

### **private** function objectToString()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/objectToString.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns a string representing the object.</p>
<p>See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString">Object.prototype.toString()</a> for more information</p>

**Params**
<p><code>object</code>: <code>Object</code> - The object to convert to a string</p>

**Returns**
<br /><p><code>Object} A string representing the object.<br />
<br />
objectToString({</code> - )<br />
//=&gt; &#39;[object Object]&#39;</p>

<br /><br />

### **private** function reflectOwnKeys()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/reflectOwnKeys.js#L3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns an array of the target object's own property keys. Its return value is equivalent to <code>Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))</code>.</p>
<p>Note: known bugs with the Reflect.ownKeys method or lack of support are addressed using the core-js polyfill provided by babel</p>

**Params**
<p><code>target</code>: <code>Object</code> - The target object from which to get the own keys.</p>

**Returns**
<br /><p><code>Array</code> - An Array of the target object&#39;s own property keys.</p>

**Example**
```js
reflectOwnKeys({z: 3, y: 2, x: 1}) // [ "z", "y", "x" ]
reflectOwnKeys([]) // ["length"]
```
<br /><br />

### **private** function stringSubstring()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/stringSubstring.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Returns the part of the string between the start and end indexes, or to the end of the string.</p>
<p>Note: known bugs with the <code>String.prototype.substring</code> method or lack of support are addressed using the core-js polyfill provided by babel</p>

**Params**
<p><code>string</code>: <code>string</code> - The string to get a substring of</p>
<p><code>indexStart</code>: <code>number</code> - The index of the first character to include in the returned substring.</p>
<p><code>indexEnd</code>: <code>number</code> - The index of the first character to exclude from the returned substring.</p>

**Returns**
<br /><p><code>string</code> - A new string containing the specified part of the given string.</p>

**Example**
```js
stringSubstring('abc', 0, 1)
//=> 'a'

stringSubstring('abc', 1)
//=> 'bc'
```
<br /><br />

### **private** function unresolvedResolveToGenerator()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/unresolvedResolveToGenerator.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves an unresolved value to a generator using the generator to yield values.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve with the generator</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
const generator = unresolvedResolveToGenerator('foo')
generator.next()
//=> { value: 'foo', done: true }
```
<br /><br />

### **private** function unresolvedResolveWith()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/lang/util/unresolvedResolveWith.js#L8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Resolves an unresolved value to the given method.</p>
<p>If the value to be resolved is a promise then this method will return a promise. The fn method will be triggered once the promise resolves.</p>
<p>If the value to be resolved is a generator, this method will return a generator.</p>

**Params**
<p><code>any</code>: <code>&ast;</code> - The value to resolve with the generator</p>
<p><code>func</code>: <code>Function</code> - The function to execute at the end of the resolution</p>

**Returns**
<br /><p><code>Generator</code> - </p>

**Example**
```js
await unresolvedResolveWith(
  Promise.resolve('foo'),
  (resolvedValue) => 'bar' // resolvedValue == 'foo'
)
//=> 'bar'
```
<br /><br />

## path

### function isPathSubdir()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/path/isPathSubdir.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.5.0
<p>return true if <code>dest</code> is a subdir of <code>path</code>, otherwise false.<br />
NOTE: It only checks the path strings.</p>

**Params**
<p><code>path</code>: <code>String</code> - The path to check</p>
<p><code>dest</code>: <code>String</code> - The destination path to compare against</p>

**Returns**
<br /><p><code>Boolean</code> - returns true if `dest` is a subdir of `path`</p>

<br /><br />

## request

### function fetch()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/request/fetch.js#L4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.1.0
<p>Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your own responses programmatically.</p>
<p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a> API docs for more information.</p>
<p>Auto curried with placeholder support</p>

**Params**
<p><code>url</code>: <code>Url</code> - </p>

**Returns**
<br /><p><code>Promise&lt;Response&gt;</code> - the web request response</p>

**Example**
```js
const response = await fetch('http://example.com/movies.json')
const data = await response.json()
```
<br /><br />

## url

### function formatURL()

[source](https://github.com/brianneisler/moltres/tree/v0.5.4/src/url/formatURL.js#L5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; since v0.4.0
<ol>
<li>Initially, an empty string (‘’ say result) is created and then following parameters are looked for in order.</li>
<li>urlObject.protocol: string<br />
If urlObject.protocol is a string it is appended to the result else if not undefined and not a string then Error is thrown.<br />
If urlObject.protocol do not end with ASCII colon ( : ) then, the literal ‘:’ is appended to the result.</li>
<li>urlObject.slashes: boolean<br />
If either of the following property is true, then literals ‘//’ are appended to the result:<br />
urlObject.slashes is true.<br />
urlObject.protocol is http, https, ftp, gopher, or file, then slashes will be automatically true even if slashes is false.</li>
<li>urlObject.auth: string<br />
If the urlObject.auth is not undefined and urlObject.host or urlObject.hostname is also not undefined then auth is appended to the result with literal ‘@’ irrespective of whether the literal ‘@’ present or not at the end.</li>
<li>urlObject.host: string<br />
If urlObject.host is a string it is appended to the result else if not undefined and not a string then Error is thrown.<br />
If it is undefined then urlObject.hostname is considered.</li>
<li>urlObject.hostname: string<br />
If urlObject.hostname is a string it is appended to the result else if not undefined and not a string then Error is thrown.<br />
If both host and hostname are defined then host will be given considered.</li>
<li>urlObject.port: (number | string)<br />
If hostname is considered and urlObject.port is defined then literal ‘:’ will be appended to the result along with urlObject.port.</li>
<li>urlObject.pathname: string} value<br />
If urlObject.pathname is a string but not empty string and not starting with literal ‘/’, then literal ‘/’ is appended to the result.<br />
urlObject.pathname is appended to the result.<br />
Else UrlObject.pathname is not a string then Error is thrown.</li>
<li>urlObject.search: string<br />
If urlObject.search is a string but not empty string and not starting with literal ‘?’, then literal ‘?’ is appended to the result.<br />
urlObject.search is appended to the result.<br />
If urlObject.search is not a string then Error is thrown.</li>
<li>urlObject.query: Object<br />
If urlObject.query is an Object then literal ‘?’ is appended to the result along with output of calling the querystring module’s stringify() method passing the value of urlObject.query.<br />
If both urlObject.search and urlObject.query are defined then urlObject.search will only be considered.</li>
<li>urlObject.hash: string<br />
If urlObject.hash is a string but not empty string and not starting with literal ‘#’, then literal ‘#’ is appended to the result.<br />
urlObject.hash is appended to the result.<br />
Else urlObject.hash is not a string and is not undefined then Error is thrown.</li>
<li>Finally, the result is returned.</li>
</ol>

**Params**
<p><code>value</code>: <code>Object|Function</code> - </p>

**Returns**
<br /><p><code>String</code> - A formatted URL string</p>

<br /><br />


<!-- AUTO-GENERATED-CONTENT:END -->
