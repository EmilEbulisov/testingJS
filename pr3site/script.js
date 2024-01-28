// Получаем ссылки на кнопки и поле для вывода результата
const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

// Цикл для присвоения действий к кнопкам
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      output.value += ` ${button.textContent} `;
    } else if (button.textContent === 'C') {
      output.value = '';
    } else if (button.textContent === '=') {
      try {
        output.value = eval(output.value);
      } catch {
        output.value = 'Error';
      }
    } else {
      output.value += button.textContent;
    }
  });
});
