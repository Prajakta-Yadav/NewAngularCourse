function person() {
    let name = "Prajakta";
    return {
        getName: function() {
            return name;
        },

        setName: function(newName) {
        name = newName;
        }
    };
}

let p = person();
console.log(p.getName());

p.setName("Teju");
console.log(p.getName());


/**
 * Private variable cannot be accessed directly:
console.log(p.name); // undefined
Only methods can access it.
 */