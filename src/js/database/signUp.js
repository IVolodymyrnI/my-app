import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { Notify } from 'notiflix';
import {
  emailReg,
  passwordReg,
  btnRegSub,
  modalRegister,
  nameReg,
} from '../refs';

btnRegSub.addEventListener('click', onClickBtnSub);

function onClickBtnSub(e) {
  e.preventDefault();
  const emailValue = emailReg.value;
  const passwordValue = passwordReg.value;
  const nameValue = nameReg.value.trim();
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(result => {
      updateProfile(result.user, {
        displayName: nameValue,
      });
      onSuccess(nameValue);
    })
    .catch(error => {
      const errorMessage = error.message;
      Notify.failure(`${errorMessage}`);
    });
}

function onSuccess(name) {
  modalRegister.classList.remove('is-shown');
  Notify.success('Registation is done!');
  setTimeout(() => {
    Notify.success(`Welcome ${name}!`);
  }, 750);
}
