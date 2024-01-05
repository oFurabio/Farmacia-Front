import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  descricao: string;
  nome: string;
  preco: number;
  categoria_id: Categoria | null;
}
