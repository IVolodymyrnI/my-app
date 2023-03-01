import { signOut } from 'firebase/auth';
import { auth } from './database/firebaseConfig';
import {
  modalLogin,
  modalRegister,
  headerAuth,
  modalCloseBtn,
  logoutBtn,
  loginBtn,
  registerBtn,
} from './refs';
import { Notify } from 'notiflix';

headerAuth.addEventListener('click', onClickOpenModal);
modalCloseBtn.forEach(btn => {
  btn.addEventListener('click', onClickCloseModal);
});

function onClickOpenModal(e) {
  const targetElemet = e.target;
  if (targetElemet.className.includes('auth__login-btn')) {
    modalLogin.classList.add('is-shown');
  } else if (targetElemet.className.includes('auth__register-btn')) {
    modalRegister.classList.add('is-shown');
  } else if (targetElemet.className.includes('auth__logout-btn')) {
    onClickLogoutBtn();
  }
}

function onClickCloseModal(e) {
  const targetElemet = e.target;
  const modal = targetElemet.closest('.is-shown');
  modal.classList.remove('is-shown');
}

const onClickLogoutBtn = async () => {
  await signOut(auth);
  loginBtn.classList.remove('is-hidden');
  registerBtn.classList.remove('is-hidden');
  logoutBtn.classList.remove('is-shown');
  Notify.info('We are sorry to see you go =(');
};
