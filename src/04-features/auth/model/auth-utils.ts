// Caminho: src/04-features/auth/model/auth-utils.ts

export function validateEmail(email: string): boolean {
  if (!email) {
    return false;
  }
  return email.includes('@') && email.includes('.');
}