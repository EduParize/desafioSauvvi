export interface Paciente {
  id: string;
  nome: string;
  idade: number;
  riscoAtendimento: 'baixo' | 'medio' | 'alto';
  statusPlano: 'ativo' | 'inativo';
}