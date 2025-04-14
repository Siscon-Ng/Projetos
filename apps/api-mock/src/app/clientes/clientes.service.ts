import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientesService {
  private clientes = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(11) 99999-9999',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Paulista, 1000',
          bairro: 'Bela Vista',
          cidade: 'São Paulo',
          estado: 'SP',
        },
        {
          logradouro: 'Rua Augusta, 500',
          bairro: 'Consolação',
          cidade: 'São Paulo',
          estado: 'SP',
        },
      ],
    },
    {
      id: 2,
      nome: 'Maria Souza',
      email: 'maria.souza@email.com',
      telefone: '(21) 98888-8888',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Rua Copacabana, 500',
          bairro: 'Copacabana',
          cidade: 'Rio de Janeiro',
          estado: 'RJ',
        },
      ],
    },
    {
      id: 3,
      nome: 'Carlos Oliveira',
      email: 'carlos.oliveira@email.com',
      telefone: '(31) 97777-7777',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Afonso Pena, 1500',
          bairro: 'Centro',
          cidade: 'Belo Horizonte',
          estado: 'MG',
        },
        {
          logradouro: 'Rua Savassi, 200',
          bairro: 'Savassi',
          cidade: 'Belo Horizonte',
          estado: 'MG',
        },
      ],
    },
    {
      id: 4,
      nome: 'Ana Santos',
      email: 'ana.santos@email.com',
      telefone: '(41) 96666-6666',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Rua XV de Novembro, 700',
          bairro: 'Centro',
          cidade: 'Curitiba',
          estado: 'PR',
        },
      ],
    },
    {
      id: 5,
      nome: 'Pedro Costa',
      email: 'pedro.costa@email.com',
      telefone: '(51) 95555-5555',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Av. Ipiranga, 200',
          bairro: 'Centro',
          cidade: 'Porto Alegre',
          estado: 'RS',
        },
        {
          logradouro: 'Rua Padre Chagas, 50',
          bairro: 'Moinhos de Vento',
          cidade: 'Porto Alegre',
          estado: 'RS',
        },
      ],
    },
    {
      id: 6,
      nome: 'Fernanda Lima',
      email: 'fernanda.lima@email.com',
      telefone: '(61) 94444-4444',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'SQN 304, Bloco A',
          bairro: 'Asa Norte',
          cidade: 'Brasília',
          estado: 'DF',
        },
      ],
    },
    {
      id: 7,
      nome: 'Ricardo Alves',
      email: 'ricardo.alves@email.com',
      telefone: '(71) 93333-3333',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Oceânica, 1200',
          bairro: 'Barra',
          cidade: 'Salvador',
          estado: 'BA',
        },
      ],
    },
    {
      id: 8,
      nome: 'Patrícia Mendes',
      email: 'patricia.mendes@email.com',
      telefone: '(81) 92222-2222',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Av. Boa Viagem, 3000',
          bairro: 'Boa Viagem',
          cidade: 'Recife',
          estado: 'PE',
        },
        {
          logradouro: 'Rua da Aurora, 1000',
          bairro: 'Santo Amaro',
          cidade: 'Recife',
          estado: 'PE',
        },
      ],
    },
    {
      id: 9,
      nome: 'Marcos Pereira',
      email: 'marcos.pereira@email.com',
      telefone: '(91) 91111-1111',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Rua dos Mundurucus, 1800',
          bairro: 'Jurunas',
          cidade: 'Belém',
          estado: 'PA',
        },
      ],
    },
    {
      id: 10,
      nome: 'Camila Castro',
      email: 'camila.castro@email.com',
      telefone: '(85) 90000-0000',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Beira Mar, 500',
          bairro: 'Meireles',
          cidade: 'Fortaleza',
          estado: 'CE',
        },
      ],
    },
    {
      id: 11,
      nome: 'Bruno Carvalho',
      email: 'bruno.carvalho@email.com',
      telefone: '(48) 99876-5432',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Av. Beira Mar Norte, 1500',
          bairro: 'Centro',
          cidade: 'Florianópolis',
          estado: 'SC',
        },
        {
          logradouro: 'Rua Bocaiúva, 2000',
          bairro: 'Centro',
          cidade: 'Florianópolis',
          estado: 'SC',
        },
      ],
    },
    {
      id: 12,
      nome: 'Luciana Martins',
      email: 'luciana.martins@email.com',
      telefone: '(84) 98765-4321',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Roberto Freire, 1000',
          bairro: 'Ponta Negra',
          cidade: 'Natal',
          estado: 'RN',
        },
      ],
    },
    {
      id: 13,
      nome: 'Rodrigo Barbosa',
      email: 'rodrigo.barbosa@email.com',
      telefone: '(65) 97654-3210',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Historiador Rubens de Mendonça, 1500',
          bairro: 'Araés',
          cidade: 'Cuiabá',
          estado: 'MT',
        },
      ],
    },
    {
      id: 14,
      nome: 'Amanda Fernandes',
      email: 'amanda.fernandes@email.com',
      telefone: '(98) 96543-2109',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Av. Jerônimo de Albuquerque, 1001',
          bairro: 'Cohama',
          cidade: 'São Luís',
          estado: 'MA',
        },
        {
          logradouro: 'Rua Grande, 500',
          bairro: 'Centro',
          cidade: 'São Luís',
          estado: 'MA',
        },
      ],
    },
    {
      id: 15,
      nome: 'Daniel Gonçalves',
      email: 'daniel.goncalves@email.com',
      telefone: '(95) 95432-1098',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Ville Roy, 1300',
          bairro: 'Caçari',
          cidade: 'Boa Vista',
          estado: 'RR',
        },
      ],
    },
    {
      id: 16,
      nome: 'Juliana Ribeiro',
      email: 'juliana.ribeiro@email.com',
      telefone: '(27) 94321-0987',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Nossa Senhora dos Navegantes, 839',
          bairro: 'Enseada do Suá',
          cidade: 'Vitória',
          estado: 'ES',
        },
      ],
    },
    {
      id: 17,
      nome: 'Roberto Lopes',
      email: 'roberto.lopes@email.com',
      telefone: '(63) 93210-9876',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Quadra 103 Sul, Rua SO-1',
          bairro: 'Plano Diretor Sul',
          cidade: 'Palmas',
          estado: 'TO',
        },
        {
          logradouro: 'Quadra 104 Norte, Rua NO-2',
          bairro: 'Plano Diretor Norte',
          cidade: 'Palmas',
          estado: 'TO',
        },
      ],
    },
    {
      id: 18,
      nome: 'Cláudia Ferreira',
      email: 'claudia.ferreira@email.com',
      telefone: '(68) 92109-8765',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Rua Rui Barbosa, 450',
          bairro: 'Centro',
          cidade: 'Rio Branco',
          estado: 'AC',
        },
      ],
    },
    {
      id: 19,
      nome: 'Rafael Nunes',
      email: 'rafael.nunes@email.com',
      telefone: '(86) 91098-7654',
      status: 'Ativo',
      enderecos: [
        {
          logradouro: 'Av. Frei Serafim, 2100',
          bairro: 'Centro',
          cidade: 'Teresina',
          estado: 'PI',
        },
      ],
    },
    {
      id: 20,
      nome: 'Beatriz Santos',
      email: 'beatriz.santos@email.com',
      telefone: '(82) 90987-6543',
      status: 'Inativo',
      enderecos: [
        {
          logradouro: 'Av. da Paz, 1000',
          bairro: 'Jaraguá',
          cidade: 'Maceió',
          estado: 'AL',
        },
        {
          logradouro: 'Rua Sá e Albuquerque, 500',
          bairro: 'Jatiúca',
          cidade: 'Maceió',
          estado: 'AL',
        },
      ],
    },
  ];

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    return this.clientes.find((c) => c.id === id);
  }

  create(dto: any) {
    const novo = { ...dto, id: this.clientes.length + 1 };
    this.clientes.push(novo);
    return novo;
  }

  update(id: number, dto: any) {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException();
    this.clientes[index] = { ...this.clientes[index], ...dto };
    return this.clientes[index];
  }

  remove(id: number) {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException();
    this.clientes.splice(index, 1);
    return { success: true };
  }
}
