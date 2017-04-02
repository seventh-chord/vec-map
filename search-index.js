var searchIndex = {};
searchIndex["vec_map"] = {"doc":"A simple map based on a vector for small integer keys. Space requirements are O(highest integer key).","items":[[3,"VecMap","vec_map","A map optimized for small integer keys.",null,null],[3,"VacantEntry","","A vacant Entry.",null,null],[3,"OccupiedEntry","","An occupied Entry.",null,null],[3,"Iter","","An iterator over the key-value pairs of a map.",null,null],[3,"IterMut","","An iterator over the key-value pairs of a map, with the values being mutable.",null,null],[3,"Keys","","An iterator over the keys of a map.",null,null],[3,"Values","","An iterator over the values of a map.",null,null],[3,"IntoIter","","A consuming iterator over the key-value pairs of a map.",null,null],[3,"Drain","","A draining iterator over the key-value pairs of a map.",null,null],[4,"Entry","","A view into a single entry in a map, which may either be vacant or occupied.",null,null],[13,"Vacant","","A vacant Entry",0,null],[13,"Occupied","","An occupied Entry",0,null],[11,"default","","",1,{"inputs":[],"output":{"name":"self"}}],[11,"hash","","",1,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"new","","Creates an empty `VecMap`.",1,{"inputs":[],"output":{"name":"self"}}],[11,"with_capacity","","Creates an empty `VecMap` with space for at least `capacity` elements before resizing.",1,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"capacity","","Returns the number of elements the `VecMap` can hold without reallocating.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"reserve_len","","Reserves capacity for the given `VecMap` to contain `len` distinct keys. In the case of `VecMap` this means reallocations will not occur as long as all inserted keys are less than `len`.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"reserve_len_exact","","Reserves the minimum capacity for the given `VecMap` to contain `len` distinct keys. In the case of `VecMap` this means reallocations will not occur as long as all inserted keys are less than `len`.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"keys","","Returns an iterator visiting all keys in ascending order of the keys. The iterator's element type is `usize`.",1,{"inputs":[{"name":"self"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator visiting all values in ascending order of the keys. The iterator's element type is `&'r V`.",1,{"inputs":[{"name":"self"}],"output":{"name":"values"}}],[11,"iter","","Returns an iterator visiting all key-value pairs in ascending order of the keys. The iterator's element type is `(usize, &'r V)`.",1,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"iter_mut","","Returns an iterator visiting all key-value pairs in ascending order of the keys, with mutable references to the values. The iterator's element type is `(usize, &'r mut V)`.",1,{"inputs":[{"name":"self"}],"output":{"name":"itermut"}}],[11,"append","","Moves all elements from `other` into the map while overwriting existing keys.",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"split_off","","Splits the collection into two at the given key.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"drain","","Returns an iterator visiting all key-value pairs in ascending order of the keys, emptying (but not consuming) the original `VecMap`. The iterator's element type is `(usize, &'r V)`. Keeps the allocated memory for reuse.",1,{"inputs":[{"name":"self"}],"output":{"name":"drain"}}],[11,"len","","Returns the number of elements in the map.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the map contains no elements.",1,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"clear","","Clears the map, removing all key-value pairs.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"get","","Returns a reference to the value corresponding to the key.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"contains_key","","Returns true if the map contains a value for the specified key.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"get_mut","","Returns a mutable reference to the value corresponding to the key.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"insert","","Inserts a key-value pair into the map. If the key already had a value present in the map, that value is returned. Otherwise, `None` is returned.",1,{"inputs":[{"name":"self"},{"name":"usize"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Removes a key from the map, returning the value at the key if the key was previously in the map.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"entry","","Gets the given key's corresponding entry in the map for in-place manipulation.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"entry"}}],[11,"or_insert","","Ensures a value is in the entry by inserting the default if empty, and returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of the default function if empty, and returns a mutable reference to the value in the entry.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"v"}}],[11,"insert","","Sets the value of the entry with the VacantEntry's key, and returns a mutable reference to it.",2,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}],[11,"get","","Gets a reference to the value in the entry.",3,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"get_mut","","Gets a mutable reference to the value in the entry.",3,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"into_mut","","Converts the entry into a mutable reference to its value.",3,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"insert","","Sets the value of the entry with the OccupiedEntry's key, and returns the entry's old value.",3,{"inputs":[{"name":"self"},{"name":"v"}],"output":{"name":"v"}}],[11,"remove","","Takes the value of the entry out of the map, and returns it.",3,{"inputs":[{"name":"self"}],"output":{"name":"v"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"clone_from","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"into_iter","","Returns an iterator visiting all key-value pairs in ascending order of the keys, consuming the original `VecMap`. The iterator's element type is `(usize, &'r V)`.",1,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"i"}],"output":null}],[11,"index","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"v"}}],[11,"index","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"v"}}],[11,"index_mut","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"v"}}],[11,"index_mut","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"v"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"next","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next_back","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"keys"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"values"}}],[11,"next","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"next_back","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next","","",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"next_back","","",7,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"next","","",9,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"next_back","","",9,{"inputs":[{"name":"self"}],"output":{"name":"option"}}]],"paths":[[4,"Entry"],[3,"VecMap"],[3,"VacantEntry"],[3,"OccupiedEntry"],[3,"Iter"],[3,"IterMut"],[3,"Keys"],[3,"Values"],[3,"Drain"],[3,"IntoIter"]]};
initSearch(searchIndex);
