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
document.getElementById('registerUser')!.addEventListener('click', () => {
  registerUser();
});

// addind a click event listener to the runArrayMethods button
document.getElementById('runArrayMethods')!.addEventListener('click', () => {
  runArrayMethods();
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
}

function runArrayMethods(): void {

  let result: any;
  /*1. Create a typescript numbers array with the following numbers, 89,5,56,102,7. Use
  the filter method on the array to return all numbers greater than 50. Log the resulting array to the
  console.*/
  let array1: number[] = [89, 5, 56, 107, 7];
  result = array1.filter(element => {
    return element > 50
  })
  console.log(result);

  /*2. Create a typescript string array with the following strings, "John", "Sarah", "Beth", "Adam",
  "Peter". Use the splice method on the array to replace "Beth" and "Adam" with "Cindy" and "Zoe".
  Log the resulting array to the console.*/
  let array2: string[] = [ 'John', 'Sarah', 'Beth', 'Adam', 'Peter'];
  result = array2.splice(2, 2, 'Cindy', 'Zoe');
  console.log(array2);
  
  /*3. Create a typescript string array with the following strings, "John", "Sarah", "Beth", "Adam",
  "Peter". Use the splice method on the array to remove "Adam" from the array. Log the resulting
  array to the console.*/
  let array3: string[] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
  array3.splice(3, 1);
  console.log(array3);

  /*4. Create a typescript numbers array with the following numbers, 89,5,56,102,7. Use
  the pop method to remove the last number from the array and log the resulting array to the
  console.*/
  let array4: number[] = [89, 5, 56, 102, 7];
  array4.pop();
  console.log(array4);
  
  /*5. Create a typescript numbers array with the following numbers, 89,5,56,102,7. Use
  the push method to add 78 to the end of the array. Log the resulting array to the console.*/
  let array5: number[] = [89, 5, 56, 102, 7];
  array5.push(78);
  console.log(array5);
  
  /*6. Create a typescript numbers array with the following numbers, 89,5,56,102,7. Use
  the indexOf method to get the index of the number 5 in the array. Log the result to the console.*/
  let array6: number[] = [89, 5, 56, 102, 7];
  result = array6.indexOf(5);
  console.log(result);
  
  /*7. Create a typescript numbers array with the following strings, "John", "Sarah", "Beth", "Adam",
  "Peter". Use the slice method to create a new array with "Sarah", "Beth" and "Adam" in the array.
  Log the new array to the console.*/
  let array7: string[] = ['John', 'Sarah', 'Beth', 'Adam', 'Peter'];
  result = array7.slice(1, 4);
  console.log(result);
  
  /*8. Create a typescript numbers array with the following numbers, 89,5,56,102,7. Use
  the unshift method to add 14 and 67 to the beginning of the array. Log the resulting array to the
  console.*/
  let array8: number[] = [89, 5, 56, 102, 7];
  array8.unshift(14, 67);
  console.log(array8);
  
  /*9. Create two TypeScript arrays, one number array, 1,2,3, and one string array, "a", "b", "c". Use the
  concat method to combine the two arrays and log the resulting array to the console.*/
  let array9: number[] = [1, 2, 3];
  let array10: string[] = ['a', 'b', 'c'];
  let array11: any[] = [];
  result = array11.concat(array9,array10);
  console.log(result);
}