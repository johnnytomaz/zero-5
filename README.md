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
```



