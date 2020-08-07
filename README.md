# pontential-crud
Potencial para um crud

# Instalação
> Via docker  

Execute em seu terminal de comando: `docker-compose up`

Isso vai:
 - baixar a imagem do postgres v12 e node v12
 - criar os bancos: `gazin`, `test`
 - Instalar as depedências do projeto
 - executar as migrations nos 2 bancos criados anteriormente
 - iniciar o servidor na porta `9999`

 > Manualmente

 Para preparar o ambiente de forma manual:
 
 - Instale as dependências: `yarn`
 - Crie os bancos `gazin`, `test`
 - No arquivo `ormconfig.ts` ajustes a configurações de conexão com seu postgres
 - Execute o comando: `yarn prepare-db-dev`
 - Execute o comando: `yarn prepare-db-test`
 - Rode o servidor: `yarn dev`

# Objetivo do teste
Desenvolver uma API JSON REST na *linguagem a sua escolha*, que utilize os métodos (​GET​, ​POST​, ​PUT​,
DELETE​).

# Especificação
Monte uma base de desenvolvedores com a seguinte estrutura:

```
nome: varchar
sexo: char
idade: integer
hobby: varchar
datanascimento: date
```

Utilize o ​banco de dados​ de sua preferência para armazenar os dados que a API irá
consumir.

# API endpoints

```
GET /developers
Codes 200
```
Retorna todos os desenvolvedores

```
GET /developers?
Codes 200 / 404
```
Retorna os desenvolvedores de acordo com o termo passado via querystring e
paginação

```
GET /developers/{id}
Codes 200 / 404
```
Retorna os dados de um desenvolvedor

```
POST /developers
Codes 201 / 400
```
Adiciona um novo desenvolvedor

```
PUT /developers/{id}
Codes 200 / 400
```
Atualiza os dados de um desenvolvedor

```
DELETE /developers/{id}
Codes 204 / 400
```
Apaga o registro de um desenvolvedor
