const step1 = {
  // pull in the elements that are needed. The form plus the inputs.
  // add listener on the form on submit
  // it checks to see if the input is empty and depending on this call showError or showSuccess.
  // showError takes in the input and the message. It changes the class to errorof the parent element. There's a native javascript property called parentElement. Set the class on bad input. Also need to set the text of the error label.
  // showSucees takes in the input. It sets the success class to the input
  // Copy of each of the inputs the check for it's input
  // add further check when checking the email that calls a function called isValidEmail that takes in the email value. Place regex check inside the function
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
};

const step2 = {
  // Remove all if statements from the event Listener from step 1
  // Make a function called checkRequired, pass in an array of all the inputs.
  // use a forEach to loop ovre inputs. Add a check to see if equal to ''. call showError function and pass a message using the input id. Make a separate function called getFieldName to capitalize the first letter
  // Make a checkLength function for username and password. Pass in the input and get the min and max value. Do a check for length inside the function, and show error if too short or too long.
  // Change the isValidEmail function name to checkEmail. Pass in input , use the same regex expression, but remove the return statement. Do an if/else instead.
  // do a check on the input using .test . show success or error and set the message if the email is not valid.
  // Create a new function for password match check called checkPasswordsMatch
  // it takes both the passwords as input. Need to do a check if they are equal to each other. Show an error on input 2. And show a message that passwords do no match.
  //
};
