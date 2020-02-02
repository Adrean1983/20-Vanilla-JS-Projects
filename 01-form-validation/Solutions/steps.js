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
