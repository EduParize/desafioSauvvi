// Caminho: src/04-features/auth/model/auth-utils.test.ts

import { validateEmail } from './auth-utils';

describe('Auth Feature - validateEmail', () => {
  it('deve retornar true para um email válido', () => {
    expect(validateEmail('paciente@sauvvitech.com')).toBe(true);
  });

  it('deve retornar false para um email inválido', () => {
    expect(validateEmail('pacientesauvvitech.com')).toBe(false);
  });
});