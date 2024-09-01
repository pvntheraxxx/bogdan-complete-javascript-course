/* moduleTwo.mjs */

import { sum, mult as multNumbers } from './moduleOne.mjs';

// mult as multNumbers переименовывает 
// импортируемую переменную mult в multNumbers
console.log(sum(10,2)); // 12
console.log(multNumbers(10,2)); // 20