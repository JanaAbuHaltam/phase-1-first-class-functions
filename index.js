function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    
    return function namedFunction() {
     
    };
  }
  function returnsAnAnonymousFunction() {
    
    return function() {
     
    };
  }
  const callbackFunction = () => {
    console.log("Callback function called");
  };
  
  receivesAFunction(callbackFunction);
  
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc.name); 
  
  const anonymousFunc = returnsAnAnonymousFunction();
  console.log(anonymousFunc.name); 
        