/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    calls = 0;

    return function(...arr){
        if(calls == 0){
            calls = 1;
            return fn(...arr)
        }
        else{
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */