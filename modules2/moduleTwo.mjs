/* moduleTwo.mjs */

import { 
    one as oneRenamed, // переименовываем переменную
    two
} from './moduleOne.mjs';

console.log(oneRenamed); // 1
console.log(two); // two