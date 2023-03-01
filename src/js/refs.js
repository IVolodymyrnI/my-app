const headerAuth = document.querySelector('.header__auth');
const logoutBtn = document.querySelector('.auth__logout-btn');
const loginBtn = document.querySelector('.auth__login-btn');
const registerBtn = document.querySelector('.auth__register-btn');

const modalLogin = document.querySelector('.modal__login');
const modalRegister = document.querySelector('.modal__register');
const modalCloseBtn = document.querySelectorAll('.modal__btn-close');
const emailReg = document.querySelector('.register__email');
const passwordReg = document.querySelector('.register__password');
const nameReg = document.querySelector('.register__name');
const emailLog = document.querySelector('.login__email');
const passwordLog = document.querySelector('.login__password');
const btnRegSub = document.querySelector('.register__btn-done');
const btnLogSub = document.querySelector('.login__btn-done');

export {
  headerAuth,
  logoutBtn,
  loginBtn,
  registerBtn,
  modalLogin,
  modalRegister,
  modalCloseBtn,
  emailReg,
  passwordReg,
  emailLog,
  passwordLog,
  btnRegSub,
  btnLogSub,
  nameReg,
};
