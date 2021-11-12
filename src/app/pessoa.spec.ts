import { Pessoa } from './pessoa';

describe('Pessoa', () => {
  it('should create an instance', () => {
    expect(new Pessoa(1, 'Teste', 20)).toBeTruthy();
  });
});
