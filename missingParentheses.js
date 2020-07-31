//This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);
  