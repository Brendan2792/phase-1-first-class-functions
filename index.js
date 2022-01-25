function receivesAFunction(callback){
   return callback()
}

function returnsANamedFunction(){
    return (function named() { return 2 + 2; })
}

function returnsAnAnonymousFunction(){
    return (function() {return 3 + 3})
}