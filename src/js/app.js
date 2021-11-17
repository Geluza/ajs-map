// TODO: write your code here
export default class ErrorRepository {
  constructor() {
    this.mapErrors = new Map([
      ['1', 'Имя игрока должно быть на латинице'],
      ['2', 'Имя игрока не должно начинаться с маленькой буквы'],
    ]);
  }

  translate(code) {
    if (this.mapErrors.has(code)) {
      return this.mapErrors.get(code);
    }
    return 'Unknown error';
  }
}
