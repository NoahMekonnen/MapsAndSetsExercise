// new Set([1,1,2,2,3,4]) 
// returns {1,2,3,4}

// [...new Set("referee")].join("") 
// returns referee


// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// returns {[1,2,3]: true, [1,2,3]: false}

function hasDuplicate(arr){
    const finalSet = new Set(arr)
    return !(arr.length == finalSet.size)
}

function vowelCount(str){
    const finalMap = new Map()
    Array.from(str).forEach(function(char){
        if ("aeiou".includes(char)){
            if (!finalMap.has(char)){
                finalMap.set(char,1)
            }
            else{
                let temp = finalMap.get(char)
                finalMap.set(char,temp+1)
        }
    }
    })
    return finalMap
}