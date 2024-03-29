import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  cols = [
    { field: 'pessoa', header: 'Pessoa' },
    { field: 'descricao', header: 'Descricao' },
    { field: 'dataVencimento', header: 'Vencimento' },
    { field: 'dataPagamento', header: 'Pagamento' },
    { field: 'valor', header: 'Valor' }
  ];

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 5, 30),
      dataPagamento: new Date(2019, 5, 30), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2019, 5, 10),
      dataPagamento: new Date(2019, 5, 9), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2019, 6, 20),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2019, 5, 5),
      dataPagamento: new Date(2019, 4, 30), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2019, 7, 18),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2019, 6, 10),
      dataPagamento: new Date(2019, 6, 9), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2019, 7, 13),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];

  getHeaderColumnClasses(col: any) {
    if (col.header === 'Vencimento' || col.header === 'Pagamento') {
      return 'col-data-header';
    }
    if (col.header === 'Valor') {
      return 'col-valor-header';
    }
  }

}
