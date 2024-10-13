class HashMap{
    static hashmap_size = 16
    static load_factor = 0.75

    static hashmap = new Array(this.hashmap_size)
    .fill('')
    .map(()=>{
        return []
    })
    static hash(key) {
        let hash_key = 0
        let random_c = 15165165165
        
        for (let char_i = 0; char_i < key.length; char_i++) {
            
            hash_key += key.charCodeAt(char_i) * random_c 
            
            
        }
        return hash_key   
    }
    static set(key, value){
        this.grow_hashmap_size()
        let hashed_key = this.hash(key)%16   
        
        let current_bucket = HashMap.hashmap[hashed_key]     
        
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
    static get(key){
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
    static has(key){
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
    static optimal_entries(){
        return this.hashmap_size * this.load_factor
    }
    static total_entries(){
        let total_capacity = 0
        this.hashmap.forEach((bucket)=>{
            bucket.forEach(()=>{
                total_capacity += 1
            })
        })
        return total_capacity
        // return this.hashmap_size * this.load_factor
    }
    static grow_hashmap_size(){        
        if(this.total_entries() >= this.optimal_entries()){
            this.hashmap.push([])
            this.hashmap_size += 4
        }
    }

}

// let hash_code = new HashMap()
// // hash_code.hash('elwafi')

// console.log(1424720551%16);

HashMap.set('elwafi', '1')
// HashMap.set('xa', '2')
HashMap.set('elwafi', '3')
HashMap.set('xa', '3')
HashMap.set('as43sadx', '3')
HashMap.set('xas231h', '3')
HashMap.set('lkjhjghgf', '3')
HashMap.set('sda2123', '3')
HashMap.set('fasfd', '3')
HashMap.set(' csxsd', '3')
HashMap.set('kjljkl', '3')
HashMap.set('mmn65', '3')
HashMap.set('axxza1123', '3')
HashMap.set('axsdzad', '3')
HashMap.set(' a', '3')
HashMap.set('cxvgfh3', '3')
HashMap.set(',m,.as asd', '3')

console.log(HashMap.get('elwafi'))
console.log(HashMap.has('elwaffdi'))

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

