const ALERT_SHOW_TIME = 5000;

const ESCAPE_CODE = 'Escape';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    const callFunc = () => func.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(callFunc, delay);
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomPositiveInteger = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const upper = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {showAlert, isEscapeKey, getRandomPositiveInteger, FILE_TYPES, debounce, ESCAPE_CODE};
