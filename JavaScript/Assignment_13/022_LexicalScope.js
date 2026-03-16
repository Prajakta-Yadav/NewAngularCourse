let language = "JavaScript";
function outer() {
    function inner() {
        console.log(language);
    }
    inner();
}
outer();

//Lexical scope means scope is decided by where function is written, not where it is called.