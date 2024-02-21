/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  if (a1.length !== a2.length) return false; // Quick length check

    const map1 = new Map();
    const map2 = new Map();

    // Fill map1 with counts from a1
    for (const item of a1) {
        map1.set(item, (map1.get(item) || 0) + 1);
    }

    // Fill map2 with counts from a2
    for (const item of a2) {
        map2.set(item, (map2.get(item) || 0) + 1);
    }

    // Check if map1 and map2 have the same counts for all items
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }

    return true;
}

module.exports = isEqual;
