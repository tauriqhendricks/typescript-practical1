import * as _ from 'lodash';
import { Utility } from './utility';

// addind a click event listener to the agreeterms checkbox
document.getElementById('agreeTerms')!.addEventListener('click', () => {
  let checkBox: HTMLInputElement = <HTMLInputElement>document.getElementById('agreeTerms')!;
  
  if (checkBox.checked) {
    // if checkbox is checked then enable the register button
    document.getElementById('registerUser')!.removeAttribute('disabled');
  }
  else {
    // if checkbox is unchecked then disable the register button
    document.getElementById('registerUser')!.setAttribute('disabled', 'true');
  }
});

// addind a click event listener to the register button
document.getElementById('registerUser')?.addEventListener('click', () => {
  registerUser();
});

function registerUser(): void {

  // creating the user object
  let user = {
    forenames: Utility.getInputValue('forenames'),
    surname: Utility.getInputValue('surname'),
    nickname: Utility.getInputValue('nickname'),
    emailAddress: Utility.getInputValue('emailAddress'),
    password: Utility.getInputValue('password'),
    confirmPassword: Utility.getInputValue('confirmPassword')
  }
  
  // adding the user input into a map to make it easier to validate
  let userMap = new Map<string, string[]>([
    ["Forenames", [user.forenames, '1']],
    ["Surname", [user.surname, '2']],
    ["Nickname", [user.nickname, '0']],
    ["Email Address", [user.emailAddress, '4']],
    ["Password", [user.password, '4']],
    ["Confirm Password", [user.confirmPassword, '0']]
  ]);

  // created a error array to check and display any errors in the input
  let errorList: string[] = [];

  // getting all values in the map
  for (let [key, value] of userMap) {
    // if the input control is required
    if (Number(value[1]) > 0){
      // checking if the input string is either empty or only has spaces
      if (Utility.isEmptyOrSpaces(value[0])) {
        // adding the error to the errorList
        errorList.push(`${key} is empty!`);
      }
      else {
        // checking if the input string starts with a space
        if (value[0].charAt(0) === ' ') {
          value[0] = Utility.getStringWithoutSpaces(value[0]); 
        }
        // checking if the input string meets the required length
        if (value[0].length < Number(value[1])) {
          // adding the error to the errorList
          errorList.push(`${key} needs a minimum length of ${value[1]}!`);
        }

        if (key == 'Email Address') {
          // check if email has @ symbol
          if (Utility.isEmailAddress(value[0]) == false){
            errorList.push(`${key} does not have @ symbol!`);
          }
          // check if email has whitespaces
          if (Utility.containWhiteSpaces(value[0])) {
            errorList.push(`${key} has white spaces!`);
          }
        }
      }
    }

    if (key.search('name')  != -1) {
      // making the first letter of the input a capital letter, only for forenames, nickname, surname
      value[0] = Utility.titleCaseWord(value[0]);
    }

    if (key.search('password')  != -1) {
      // making the first letter of the input a capital letter, only for forenames, nickname, surname
      
    }
  }
  
  // checking if the password feild matches the confirm password field
  if (!_.isEqual(user.password, user.confirmPassword)) {
    errorList.push('passwords dont match');
  }

  if (errorList.length > 0) {
    // display any errors in the validation
    for (let err of errorList) {
      console.error(err)
    }
  }
  else {
    console.log('Validation complete');
  }

  /*for (let [key, value] of userMap) {
    console.log(key);
    console.log(value[0]);
    console.log('\n');
  }*/
}