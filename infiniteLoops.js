//infinite loops cause browsers to crash and hence we need to be careful when creating loops
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }
  