function intersection(a, b) {
   const map = new Map();
   const result = new Set();
   for (let e of a) {
       map.set(e, e);
   }
   for (let e of b) {
       if (map.has(e)) {
           result.add(e)
       }
   }
   return Array.from(result);
}

module.exports = intersection;
