import defn from './defn'
import slice from './slice'

/**
 * Returns all but the last element of the given list or string.
 *
 * @function
 * @since v0.0.5
 * @category lang
 * @sig [a] -> [a]
 * @param {*} list The list to select from
 * @returns {*} A new array or string of all but the last element in the list
 * @example
 *
 * init([1, 2, 3])  //=> [1, 2]
 * init([1, 2])     //=> [1]
 * init([1])        //=> []
 * init([]);         //=> []
 *
 * init('abc')  //=> 'ab'
 * init('ab')   //=> 'a'
 * init('a')    //=> ''
 * init('')     //=> ''
 */
const init = defn('init', slice(0, -1))

export default init
