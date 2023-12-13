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

use zero5;

create view endereco_cliente as 
select ec.id, ec.fk_Cliente_ID, c.nomeCliente, c.email, c.telefone, c.apelido, c.senha, ec.fk_Endereco_ID, e.cep, e.ruaOuAvenida, e.numero, e.complemento from enderecoclientes as ec 
inner join clientes as c on c.id = ec.fk_Cliente_ID
inner join enderecos as e on e.id = ec.fk_Endereco_ID;

create view produto_do_cliente as 
select pc.id, ca.fk_Cliente_ID, c.nomeCliente, c.email, c.telefone, c.apelido, c.senha, pc.fk_Produto_ID, p.nomeProduto, p.descricaoProduto, p.preco, p.tamanhoProduto, p.imagensProduto, p.origem, pc.fk_Carrinho_ID, ca.quantidade, ca.valorTotal from produtosdoclientes as pc
inner join carrinhos as ca on ca.id = pc.fk_Carrinho_ID
inner join clientes as c on c.id = ca.fk_Cliente_ID
inner join produtos as p on p.id = pc.fk_Produto_ID;

create view categoria_produto as 
select cp.id, cp.fk_Produto_ID, p.nomeProduto, p.descricaoProduto, p.preco, p.tamanhoProduto, p.imagensProduto, p.origem, cp.fk_Categoria_ID, c.nomeCategoria, c.descricaoCategoria  from categoriadeprodutos as cp 
inner join categoria as c on c.id = cp.fk_Categoria_ID
inner join produtos as p on p.id = cp.fk_Produto_ID;

create view fragrancia_produto as 
select fp.id, fp.fk_Produto_ID, p.nomeProduto, p.descricaoProduto, p.preco, p.tamanhoProduto, p.imagensProduto, p.origem, fp.fk_NotasDeFragrancia_ID, n.nomeFragrancia, n.descricaoFragrancia from fragranciadoperfumes as fp 
inner join notasdefragrancia as n on n.id = fp.fk_NotasDeFragrancia_ID
inner join produtos as p on p.id = fp.fk_Produto_ID;
```

### 2.3 Configure as triggers
Aqui estão as views necessárias para o projeto
```sql

use zero5;

DROP TRIGGER Tgr_valorTotal_Insert;
DROP TRIGGER Tgr_valorTotal_Update;
DROP TRIGGER Tgr_valorTotal_Delete;
DELIMITER $
CREATE TRIGGER Tgr_valorTotal_Insert AFTER INSERT
ON produtosdoclientes
FOR EACH ROW
BEGIN
	UPDATE carrinhos as c, produtos as p, clientes as cl SET c.valorTotal = c.valorTotal + p.preco
    WHERE c.id = NEW.fk_Carrinho_ID and p.id = NEW.fk_Produto_ID and cl.id = c.fk_Cliente_ID;
	UPDATE carrinhos as c, produtos as p, clientes as cl SET c.quantidade = c.quantidade + 1
    WHERE c.id = NEW.fk_Carrinho_ID and p.id = NEW.fk_Produto_ID and cl.id = c.fk_Cliente_ID;
END$

CREATE TRIGGER Tgr_valorTotal_Update AFTER UPDATE
ON produtosdoclientes
FOR EACH ROW
BEGIN
	UPDATE carrinhos as c, produtos as p SET  c.valorTotal = c.valorTotal + NEW.p.preco - OLD.p.preco
WHERE c.id = OLD.fk_Carrinho_ID and p.id = NEW.fk_Produto_ID;
END$

CREATE TRIGGER Tgr_valorTotal_Delete AFTER DELETE
ON produtosdoclientes
FOR EACH ROW
BEGIN
	UPDATE carrinhos as c, produtos as p SET c.valorTotal = c.valorTotal - OLD.p.preco
WHERE c.id = OLD.fk_Carrinho_ID and p.id = OLD.fk_Produto_ID;
UPDATE carrinhos as c, produtos as p SET c.quantidade = c.quantidade - 1
WHERE c.id = OLD.fk_Carrinho_ID and p.id = OLD.fk_Produto_ID;
END$
DELIMITER ;
```


