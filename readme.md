- Projeto desenvolvido em JavaScript, com o intuito de praticar o consumo e tratamento de dados de APIs. Esse projeto é o VidFlow, uma plataforma de compartilhamento de vídos. A missão é transformar o layout em uma aplicação funcional, os vídos serão consumidos através da API, poderemos pesquisar, filtrar videos por categorias. 

- Estamos utilizando o Json server no projeto, na versao: npm install -g json-server@0.17.4 

- O arquivo JSON videos.json, que está dentro da pasta backend do projeto, servirá como a fonte de dados para o JSON Server. 

- Comando para iniciar o JSON Server e usá-lo com o arquivo videos.json: json-server --watch backend/videos.json , ao executar esse comando, O JSON Server será iniciado e começará a servir uma API REST com base nos dados do arquivo videos.json, o que vai nos permitir o consumo dos dados para o VidFlow.