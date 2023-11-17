# zero-5
Site utilizando API Rest e utilizando a tecnologia Javascript

# Backend do Projeto

Este guia irá ajudá-lo a configurar o ambiente de desenvolvimento.

## Requisitos Prévios

- Node.js e npm instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- MySQL: A configuração é local, mas pode ser facilmente reconfigurada no arquivo backend/config/config.json
    - [mySQL download](https://dev.mysql.com/downloads/installer/)
    - [Interface Workbench](https://dev.mysql.com/downloads/workbench/)

    ## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento do backend.

### 1. Clone o Repositório


```bash
git clone git@github.com:johnnytomaz/zero-5.git
```

### 2.1 Configure o Backend NODE + EXPRESS
```powershell

cd zero-5/backend

npm install 
```

### 2.2 Configure as views
Aqui estão as views necessárias para o projeto
```sql

create view endereco_cliente as 
select ec.id, ec.fk_Cliente_ID, c.nome, c.email, c.telefone, c.apelido, c.senha, ec.fk_Endereco_ID, e.cep, e.ruaOuAvenida, e.numero, e.complemento from enderecoclientes as ec 
inner join clientes as c on c.id = ec.fk_Cliente_ID
inner join enderecos as e on e.id = ec.fk_Endereco_ID;

create view produto_do_cliente as 
select pc.id, ca.fk_Cliente_ID, c.email, c.telefone, c.apelido, c.senha, pc.fk_Produto_ID, p.nome, p.descricao, p.preco, p.tamanho, p.imagens, p.origem, pc.fk_Carrinho_ID, ca.quantidade, ca.valorTotal from produtosdoclientes as pc
inner join carrinhos as ca on ca.id = pc.fk_Carrinho_ID
inner join clientes as c on c.id = ca.fk_Cliente_ID
inner join produtos as p on p.id = pc.fk_Produto_ID;
```




