# Pokedex pokemon API

Clique para acesso: https://copa-do-mundo-api.vercel.app/

<img src="./public/assets/img/pokedex-pokemon.png"/>

## Projeto

Desenvolvimento de uma plataforma web para listar, visualizar, buscar e favoritar pokemons. O projeto foi construído usando ReactJS. Todos os dados obtidos para construção da plataforma foram obtidos por meio de uma API REST chamada <a href="https://pokeapi.co/">PokéApi</a>

### Tecnologias
- React;
- JavaScript;
- HTML;
- CSS;
- <a href="https://react-bootstrap.github.io/">React Bootstrap</a>;
- <a href="https://www.npmjs.com/package/react-parallax-tilt">React Tilt</a>

### Funções

- Listar pokemons: Isso inclui os pokemons de todas as gerações, gerando requisições diferentes na API REST.
- Listagem em grupos: É mostrado para o usuário um número limitado de pokemons na tela para agilizar o processo de requição de informações.
- Renderização condicional: Requisitanto pequenos grupos de pokemons e a cada nova requisição a listagem anterior é somada a nova, aumentando o desempenho da plataforma.
- Buscador de pokemons: Filtragem de pokemons de acordo com o nome digitado.
- Efeito de carta para cada pokemon: Usando o component <a href="https://www.npmjs.com/package/react-parallax-tilt">React Tilt</a> para criar um efeito realista de inclinação ao passar o mouse em cima dos pokemons.
- Barra de progresso para atributos: Criação de uma Progress Bar para mostrar os dados de atributos de cada pokemon de forma iterativa, usando animação para preenchimento.
- Personalização do tipo: Visualização dos tipos de cada pokemon, adicionando cores únicas para cada.
- Árvore de evolução: Mostra todo o ciclo de evolução dos pokemons.



Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
