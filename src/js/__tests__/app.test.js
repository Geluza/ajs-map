import ErrorRepository from '../app';

test('проверка метода translate', () => {
  const errors = new ErrorRepository();
  const received = errors.translate('1');
  expect(received).toBe('Имя игрока должно быть на латинице');
});

test('проверка метода translate на выброс ошибки', () => {
  const errors = new ErrorRepository();
  const received = errors.translate('3');
  expect(received).toBe('Unknown error');
});
