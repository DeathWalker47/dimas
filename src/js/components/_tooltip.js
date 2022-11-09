// Подключение плагина для позиционирования тултипов
import { createPopper, right} from '@popperjs/core';

const elOne = document.querySelector('.tooltip__btn--1');
const tooltipOne = document.querySelector('.tooltip__txt--1');
createPopper(elOne, tooltipOne, {
  placement: 'right'
});

const elTwo = document.querySelector('.tooltip__btn--2');
const tooltipTwo = document.querySelector('.tooltip__txt--2');
createPopper(elTwo, tooltipTwo, {
  placement: 'right'
});

const elThree = document.querySelector('.tooltip__btn--3');
const tooltipThree = document.querySelector('.tooltip__txt--3');
createPopper(elThree, tooltipThree, {
  placement: 'right'
});
