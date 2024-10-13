class HashMap{
    // static hashmap_size = 16
    // static load_factor = 0.75
    constructor(){
        this.hashmap_size = 16
        this.load_factor = 0.75
        this.hashmap = new Array(this.hashmap_size)
        .fill('')
        .map(()=>{
            return []
        })
        
    }
    // static hashmap = new Array(this.hashmap_size)
    // .fill('')
    // .map(()=>{
    //     return []
    // })
    hash(key) {
        let hash_key = 0
        let random_c = 15165165165
        
        for (let char_i = 0; char_i < key.length; char_i++) {
            
            hash_key += key.charCodeAt(char_i) * random_c 
            
            
        }
        return hash_key   
    }
    set(key, value){
        this.grow_hashmap_size()
        let hashed_key = this.hash(key)%this.hashmap_size   
        
        let current_bucket = this.hashmap[hashed_key]     
        
        if(current_bucket.length == 0){
            current_bucket.push({key: key, value: value})
        }
        
        else if(current_bucket.length > 0){
            let found = false
            current_bucket.forEach(pair => {
               if(pair.key == key){
                   pair.value = value
                   found = true
               }
            });
            if(!found){
                current_bucket.push({key: key, value: value})
            }

            
        }
        else{
            return false
        }
        
        
        
    }
    get(key){
        let found = false
        let found_data = ''

        let hashed_key = this.hash(key)%16

        
        this.hashmap[hashed_key].forEach((pair)=>{
            if(pair.key == key){
                found = true
                found_data = pair.value
                return
            }
        })
        if(found) return found_data
        else return null
    }
    has(key){
        let found = false

        let hashed_key = this.hash(key)%16

        
        this.hashmap[hashed_key].forEach((pair)=>{
            if(pair.key == key){
                found = true
                return
            }
        })
        return found
    }
    remove(key){
        if(this.has(key)){
            
            let current_bucket = this.hashmap[this.hash(key)%16] 
            let value = this.get(key)
            
            HashMap.hashmap[this.hash(key)%16] = current_bucket.filter((pair)=>{
                return pair.key != key && pair.value != value
            })

            
        }
        else{
            return false
        }
    }
    length(){
        let counter = 0
        this.hashmap.forEach((bucket)=>{
            bucket.forEach((pair)=>{
                counter += 1
            })
        })
        return counter
    }
    clear(){
        this.hashmap = this.hashmap.map(()=>[])
    }
    keys(){

        let all_keys = []
        this.hashmap.map((bucket)=>{
            bucket.map((pair)=>{
                all_keys.push(pair.key)
            })
        })
        return all_keys
    }
    values(){

        let all_values = []
        this.hashmap.map((bucket)=>{
            bucket.map((pair)=>{
                all_values.push(pair.value)
            })
        })
        return all_values
    }
    optimal_entries(){
        return this.hashmap_size * this.load_factor
    }
    total_entries(){
        let total_capacity = 0
        this.hashmap.forEach((bucket)=>{
            bucket.forEach(()=>{
                total_capacity += 1
            })
        })
        return total_capacity
    }
    grow_hashmap_size(){        
        if(this.total_entries() >= this.optimal_entries()){
            this.hashmap.push([])
            this.hashmap_size *= 2

            let old_hashmap = this.hashmap
            this.hashmap = new Array(this.hashmap_size)
            .fill('')
            .map(()=>{
                return []
            })

            old_hashmap.map((bucket)=>{
                bucket.map((pair)=>{
                    this.set(pair.key, pair.value)
                })
            })

        }
    }

}

// let hash_code = new HashMap()
// // hash_code.hash('elwafi')

// console.log(1424720551%16);

// HashMap.set('elwafi', 'as')
// // HashMap.set('xa', '2')
// HashMap.set('elwafi', '32')
// HashMap.set('xa', '3')
// HashMap.set('as43sadx', '213as')
// HashMap.set('xas231h', 'xxasd')
// HashMap.set('lkjhjghgf', '3')
// HashMap.set('sda2123', '3')
// HashMap.set('fasfd', '3')
// HashMap.set(' csxsd', '3')
// HashMap.set('kjljkl', '3')
// HashMap.set('mmn65', '3')
// HashMap.set('axxza1123', '3')
// HashMap.set('axsdzad', '3')
// HashMap.set(' a', '3')
// HashMap.set('cxvgfh3', '3')
// HashMap.set(',m,.as asd', '3')

// HashMap.remove('xas231h')
// console.log(HashMap.hashmap);
// HashMap.clear()
// console.log(HashMap.hashmap);
// console.log(HashMap.keys());
// console.log(HashMap.values());
// console.log(HashMap.length())
// console.log(HashMap.get('elwafi'))
// console.log(HashMap.has('elwaffdi'))

// HashMap.hashmap
// HashMap.hashmap[0] = ['a']
// HashMap.hashmap[0].push('a')
// console.log(HashMap.hashmap, HashMap.hashmap.length)
// console.log('total',HashMap.total_entries())
// console.log('optimal', HashMap.optimal_entries())

// let g = new LinkedList()
// console.log(g);
// let f = new Array(11).fill([])
// console.log(1441414%16);

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


// overwrite test
// test.set('kite', 'new kite')
// test.set('lion', 'sxaxsx')
// console.log(test.get('kite'))

// test expanding bucktes
test.set('moon', 'silver')

// test overwriting after expanding
console.log(test.keys());
test.set('moon', 'elwafi')
console.log(test.keys());

// test other methods : 
console.log(test.get('moon'));
test.clear();


// console.log(test.hashmap_size)

console.log(test.total_entries());
console.log(test.optimal_entries());

// test.grow_hashmap_size();
// console.log(test);

