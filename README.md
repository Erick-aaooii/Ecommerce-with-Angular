<h1>Ecommerce com Angular</h1>

  <p>
    Este projeto tem como objetivo simular uma aplicação de e-commerce o mais próxima possível de um ambiente real de produção. Ele permite a geração de pedidos reais e pode, em alguns casos, ser utilizado como um site funcional para uma loja.
  </p>

  <p>
    <strong>Atenção:</strong> para uso em produção, é necessário configurar previamente toda a aplicação. Mais informações estão disponíveis na seção 
    <a href="#preparo">Preparo para rodar a aplicação</a>.
  </p>

  <p>
    As bibliotecas utilizadas no projeto podem ser encontradas <a href="#ferramentas">aqui</a>.
  </p>

  <p>
    Este projeto foi gerado utilizando o 
    <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> na versão 19.2.8.
  </p>

  <hr>

  <h2 id="ferramentas">🛠️ Ferramentas</h2>
  <ul>
    <li>Angular 19.2.8</li>
    <li>Firebase SDK</li>
    <li>Tailwind CSS</li>
  </ul>

  <hr>

  <h2 id="preparo">🔧 Preparo para rodar a aplicação</h2>

  <p>
    Antes de tudo, este projeto exige a criação de uma pasta <code>environments</code>, que deve estar no mesmo nível da pasta <code>app</code>, contendo as variáveis de ambiente para conexão com o Firebase SDK.
  </p>

  <p>
    Além disso, é necessário ter instalado:
  </p>
  <ul>
    <li>Node.js (versão 18 ou superior)</li>
    <li>Angular CLI</li>
    <li>Gerenciador de pacotes (npm ou yarn)</li>
  </ul>

  <p>Para instalar as dependências:</p>
  <pre><code>npm install</code></pre>
  <p>ou</p>
  <pre><code>yarn install</code></pre>

  <hr>

  <h2>▶️ Como rodar</h2>

  <p>Para iniciar o projeto em ambiente de desenvolvimento:</p>
  <pre><code>ng serve</code></pre>

  <p>Após isso, acesse a aplicação no navegador através do endereço:</p>
  <p><a href="http://localhost:4200" target="_blank">http://localhost:4200</a></p>

  <hr>

  <h2>📦 Especificações da aplicação</h2>

  <ul>
    <li>Estrutura modular com Angular</li>
    <li>Integração com Firebase para autenticação e base de dados</li>
    <li>Componentes reutilizáveis e desacoplados</li>
    <li>Design responsivo com Tailwind CSS</li>
    <li>Proteção de rotas e autenticação de usuário</li>
    <li>Suporte a múltiplas páginas (SPA)</li>
  </ul>