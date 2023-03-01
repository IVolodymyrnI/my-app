import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { Notify } from 'notiflix';
import {
  logoutBtn,
  loginBtn,
  registerBtn,
  modalLogin,
  emailLog,
  passwordLog,
  btnLogSub,
} from '../refs';

btnLogSub.addEventListener('click', onClickBtnLog);

function onClickBtnLog(e) {
  e.preventDefault();
  const emailValue = emailLog.value;
  const passwordValue = passwordLog.value;
  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(userCredential => {
      const user = userCredential.user;
      Notify.success(`Welcome ${user.displayName}!`);
    })
    .catch(error => {
      const errorMessage = error.message;
      Notify.failure(`${errorMessage}`);
    });
}

(function () {
  onAuthStateChanged(auth, user => {
    if (user) {
      onSuccess();
    } else {
      setTimeout(() => {
        modalLogin.classList.add('is-shown');
      }, 2000);
    }
  });
})();

function onSuccess() {
  loginBtn.classList.add('is-hidden');
  registerBtn.classList.add('is-hidden');
  logoutBtn.classList.add('is-shown');
  modalLogin.classList.remove('is-shown');
}
