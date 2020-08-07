import * as _ from 'lodash';
import { Utility } from './utility';

document.getElementById('agreeTerms')!.addEventListener('click', () => {
  let checkBox: HTMLInputElement = <HTMLInputElement>document.getElementById('agreeTerms')!;

  if (checkBox.checked) {
    document.getElementById('registerUser')!.removeAttribute('disabled');
  }
  else {
    document.getElementById('registerUser')!.setAttribute('disabled', 'true');
  }
});

document.getElementById('registerUser')?.addEventListener('click', () => {
  registerUser();
});

function registerUser(): void {
  let user = {
    forenames: Utility.getInputValue('forenames'),
    surname: Utility.getInputValue('surname'),
    nickname: Utility.getInputValue('nickname'),
    emailAddress: Utility.getInputValue('emailAddress'),
    password: Utility.getInputValue('password'),
    confirmPassword: Utility.getInputValue('confirmPassword')
  }
  
  let str: string = user.surname;
  
  if (Utility.isEmptyOrSpaces(str)) {
    console.error("empty");
  }
  else {
    if(str.charAt(0) === ' ') {
      str = Utility.getStringWithoutSpaces(str);
    }
    
    str = Utility.titleCaseWord(str);
    console.log(`User surname: ${str}`);
  }
}