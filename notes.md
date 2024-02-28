#### 24/02/2024

Curso de Angular: componentização e design com Angular Material

```
npm i @angular/cli
npm i -g @angular/cli
ng new jornada-milhas
ng new jornada-milhas --no-standalone --routing --ssr=false
ng serve --open
ng g c header
ng g c banner
ng g c footer
ng g c card
```

@01-Iniciando a Jornada da Componentização

@@01
Apresentação

Nayanne: Olá! Boas-vindas ao curso de Angular: Componentização. Eu sou a Nay e serei sua instrutora.
Nayanne Batista é uma pessoa de pele morena. Tem olhos castanhos escuros e cabelos lisos também castanhos escuros. Usa óculos de grau com armação quadrada e está com uma camiseta laranja. Ao fundo, uma estante com livros e iluminação na cor azul.
Vinícios: Olá! Sou o Vini Neves. Nesse curso, vamos explorar e trabalhar todo o universo do Angular.

Vinicios Neves é um homem de pele clara com rosto oval. Tem olhos castanhos escuros, sobrancelhas grossas, nariz comprido e boca larga. Usa barba cheia, bigode preto e óculos de grau com armação quadrada preta. Está com uma boina preta, camiseta preta e sentado em uma cadeira cinza. Atrás dele, uma parede lisa é iluminada em tons gradientes de azul e roxo.
Nayanne: Você já teve dúvidas sobre como componentizar uma aplicação Angular?

Vinícios: Isso acontece sempre, não é mesmo? Uma das atividades da pessoa desenvolvedora de front-end é pegar um projeto do figma e transformar em um código que funcione.

Sendo assim, entender o componente, seu tamanho e responsabilidades é muito importante.

Nayanne: É exatamente por isso que esse curso é tão relevante!

Aqui você aprenderá:

As etapas para a criação de componentes eficientes no Angular;
Identificar as partes da aplicação que podem ser componentizadas e como isso pode trazer benefícios ao desenvolvimento;
Como desenvolver uma aplicação de forma organizada, fácil de ler e escalável. Trabalharemos a proporção entre componentização e reaproveitamento de código;
Para criar um visual atraente e consistente, conheceremos a biblioteca de componentes Angular Material.
Vinícios: Essa biblioteca vai nos proporcionar vários componentes visuais prontos para montar nossa página.

Assim, vamos nos preocupar na disposição dos componentes. Porém, não precisaremos nos atentar a detalhes menores, como a criação de um botão ou uma lista select.

Nayanne: O Angular Material é uma ótima opção para agilizar o desenvolvimento e auxiliar na criação de interfaces profissionais e elegantes.

Para esse curso, é importante que você tenha familiaridade com Angular, HTML, SASS e o Type Script.

No início do curso focaremos na parte visual da aplicação, sem a adição de funcionalidades.

Assim, você poderá se concentrar na componentização e utilização do Angular Material.

Vinícios: Construiremos os alicerces da nossa aplicação para podermos escalá-la para os demais cursos dessa formação.

Nayanne: Isso ai! Prepare-se para essa nova jornada com Angular!

@@02
Preparando o ambiente: versão 17

A versão do Angular utilizada neste treinamento é a versão 16. Para evitar incompatibilidades no código e ter o mesmo comportamento visto em vídeo, recomendamos sempre que acompanhe o curso na mesma versão que a pessoa instrutora. Caso você ainda não tenha instalado o Angular CLI ou já esteja utilizando a versão 16 (confira a versão digitando ng version no terminal), você pode ignorar os passos a seguir.
Caso você já tenha instalado o Angular CLI e esteja utilizando a versão 17, que apresenta algumas diferenças na estrutura dos arquivos criados, pode seguir uma das duas estratégias abaixo para que seus arquivos se mantenham na mesma estrutura do curso:

1. Voltando para a versão 16 através do downgrade de versão:
Utilize o comando a seguir para desinstalar globalmente o Angular CLI:

npm uninstall -g @angular/cli
COPIAR CÓDIGO
Em seguida, visite a atividade a seguir, Preparando o ambiente e siga o passo a passo de instalação da versão 16.

2. Continuando o curso com a versão 17 do Angular:
Observe que seguir com a versão 17 pode acabar gerando mais quebras no código que você precisará corrigir posteriormente, mas caso queira seguir com essa opção, é possível estabelecer a mesma estrutura de arquivos utilizando o seguinte comando no momento de criação do projeto:

ng new jornada-milhas --no-standalone --routing --ssr=false
COPIAR CÓDIGO
Agora que nos alinhamos quanto a versão, podemos continuar com tranquilidade :)

https://cursos.alura.com.br/course/angular-componentizacao-design-angular-material/task/133200

@@03
Preparando o ambiente: adicionando elementos

Olá, dev!
Boas vindas ao curso de Componentização com Angular!

Para começarmos essa jornada, é muito importante que você esteja usando a versão 16 do Angular, que é a mesma utilizada durante o curso, para evitar imprevistos por incompatibilidade. Para verificar a versão que está em uso, você pode digitar no terminal o comando 'ng version'.

Caso você ainda não tenha o angular instalado na sua máquina ou esteja com uma versão diferente, pode abrir o seu terminal e digitar o comando:

 npm install -g @angular/cli@16.0.0.
COPIAR CÓDIGO
Além disso, ao longo dessa formação iremos trabalhar com um design pronto, que vamos transformar em código. Você pode acessar esse layout clicando aqui. Você também vai precisar da pasta com as imagens que irão compor o design do nosso projeto, que você pode acessar clicando aqui.

Se você tiver alguma dúvida ao longo deste curso, sinta-se à vontade para criar um tópico no fórum ou interagir conosco por meio do Discord da Alura. Lá você pode encontrar a instrutora Nayanne Batista pesquisando pelo perfil Nayanne Batista#6862, o instrutor Vinny Neves no perfil Vinny Neves#2004 e a Scuba responsável pelas atividades Rafa Silvério no perfil Rafa Silvério#5867. E mesmo que você não tenha dúvidas, sua contribuição é valiosa! Compartilhe seus conhecimentos e projetos, pois vai ser incrível acompanhar o seu progresso.
Vamos mergulhar nesse conhecimento? =)

https://www.figma.com/file/SI696t31Q9zlsXKttCoqKP/Angular-%7C-Jornada-Milhas?type=design&node-id=0%3A1&t=KL26mB52s2BKBqzH-1

https://caelum-online-public.s3.amazonaws.com/3150-angular-componentizacao-design-angular-material/assets.rar

https://discord.gg/QeBdgAjXnn

@@04
Abordagem de componentes no Angular

Nayanne: Que bom ter a sua companhia nessa nova jornada de aprendizado!
Estamos muito animados para te apresentar tudo o que desenvolveremos ao longo desse primeiro curso da formação.

Vinícios: Também estou muito animado, Nay! Teremos muitos componentes para serem criados e muito código para desenvolver. Mas, por onde vamos começar?

Nayanne: Considere que você estava em busca de uma nova oportunidade profissional e conseguiu o emprego desejado. Você irá trabalhar em uma startup como pessoa desenvolvedora front-end.

Essa empresa está criando uma nova aplicação web chamada Jornada Milhas, uma plataforma de venda de passagens aéreas.

Nesse projeto, sua responsabilidade será desenvolver essa aplicação utilizando o Angular.

Porém, para isso existem alguns pré-requisitos. Essa aplicação precisa ser pensada desde o início com escalabilidade em Menti, assim será possível adicionar novos recursos, além do cadastro de pessoas ao longo do tempo.

Vinícios: Nesse cenário, precisamos analisar melhor quais são os próximos passos. A partir disso podemos planejar o que deve ser feito e só depois criar o código.

Nayanne: Exatamente isso, Vini! A equipe de design forneceu todos os protótipos no Figma, começamos abrindo essa aplicação para fazermos uma análise.

Repare que existem diversas telas a serem criadas, como a inicial, de pesquisa, login e cadastro. Porém, nesse primeiro momento foi solicitado o desenvolvimento da home page.

Nessa etapa, não implementaremos funcionalidades. Começaremos criando a estrutura da página inicial, pois o back-end está sendo desenvolvido paralelamente por outra equipe.

Vinícios: Primeiro montaremos toda a estrutura visual e os componentes. Depois podemos plugar esses dados no back-end, transformando-os de estáticos em dinâmicos.

Nayanne: Sim, Vini! Para esse desafio, começaremos criando uma aplicação Angular.

Criando uma aplicação Angular
Nayanne: Abrimos o terminal e digitamos o comando cd Desktop seguido de "Enter" para abrir essa pasta.

cd Desktop
COPIAR CÓDIGO
Para criar a nova aplicação usaremos o comando ng new seguido do nome do projeto jornada-milhas.

ng new jornada-milhas
COPIAR CÓDIGO
Ao apertar "Enter" temos como retorno uma pergunta se queremos ou não adicionar rotas. Isso é interessante, já que vamos lidar com várias páginas diferentes nessa aplicação. Então, digitamos "y" seguido de "Enter" para confirmar.

A segunda pergunta se refere ao formato de estilo que usaremos. Qual será, Vini?

Vinícios: Podemos usar o scss que é uma extensão do css. Que tal?

Nayanne: Ótimo! Selecionamos essa opção e apertamos "Enter". Feito isso a aplicação é criada.

Quando essa etapa for concluída, escrevemos o comando cd jornada-milhas seguido de "Enter".

cd jornada-milhas
COPIAR CÓDIGO
Depois passamos code . para abrir no VS Code.

code .

Feito isso, o VS Code abre. Na lateral esquerda, no Explorer, encontramos a estrutura de pasta de uma aplicação Angular.

Apertamos "Ctrl + J" para abrir o terminal. Escrevemos ng serve --open e apertamos "Enter".

ng serve --open
COPIAR CÓDIGO
Feito isso, abre uma tela do navegador com a aplicação Angular ainda sem modificações.

A aplicação foi criada, mas como criaremos o projeto do Figma utilizando código, Vini?

Vinícios: Podemos começar analisando quais são os componentes que serão reutilizados. Assim, podemos criá-los em uma camada compartilhável. Já os específicos podemos tratar dentro da página. O que você acha?

Nayanne: Acho um ótimo critério para identificar quando devemos ou não transformar uma parte do Figma em componente.

Analisando o Figma, percebemos que o header, o footer e alguns outros elementos se repetem nas telas.

Sendo assim, na lateral esquerda clicamos em "src > app". Clicamos com o botão direito em "app" e depois em "New folder". Nomeamos a pasta de "shared".

Dentro dela podemos criar nossos componentes. Então, abrimos o terminal novamente e para parar a aplicação passamos o comando Ctrl + C.

Vinícios: Podemos começar criando o header. Que tal?

Nayanne: Para isso, no terminal, passamos o comando ng g c seguido de shared, para ficar salvo nessa pasta. Adicionamos barra e o nome do componente header.

ng g c shared/header
COPIAR CÓDIGO
Após apertar "Enter" os quatro arquivos são criados e notamos uma modificação no app.module.ts.

Vinícios: Agora podemos analisar o Figma novamente para verificarmos quais são os outros componentes que criaremos.

Nayanne: Como tem imagens que se repetem em várias telas, podemos criar um componente de banner. Também temos um formulário, cards de promoções e depoimentos, além de um rodapé.

Vinícios: Podemos criar o componente banner e do footer que temos certeza que poderemos compartilhá-los e depois testá-los.

Nayanne: Abrimos novamente o VS Code. No terminal, ao apertamos a tecla "Seta para cima", a ferramenta autopreenche o último comando. Apagamos o header e passamos footer, seguido de "Enter".

ng g c shared/footer
COPIAR CÓDIGO
Assim o componente de rodapé é criado. Para criar o componente de banner fazemos o mesmo, substituindo o footer por banner.

ng g c shared/banner
COPIAR CÓDIGO
Por fim, criamos o componente card passando a mesma estrutura de comando, seguido de "Enter".

ng g c shared/card
COPIAR CÓDIGO
Essa etapa de pensarmos como encaixar esses componentes para formar a tela inicial me lembra a construção de um quebra-cabeça.

Vinícios: Nay, explique melhor essa comparação.

Nayanne: Cada componente pode ser comparado como uma peça de um quebra-cabeça que vamos encaixando até formar a tela inicial. Além disso, existem quebra-cabeças com peças maiores e menores.

Essa reflexão é valida para começarmos a pensar no nível de granularidade da componentização. Devemos decidir se criaremos componentes com escopo mais limitado e funções específicas ou mais abrangentes e funções amplas.

Vinícios: Esse é um dos nossos maiores desafios como pessoas desenvolvedoras de front-end.

Precisamos ter um equilíbrio, afinal, se quisermos reaproveitar tudo teremos uma base de código extensa. Já se não aproveitarmos nada o mesmo acontece.

Nayanne: Um dos critérios mais importantes é identificar se um componente será reutilizado em outras partes da aplicação, isso já nos orienta a extrairmos o código e transformá-lo em componente.

Mas, isso significa que se não formos reutilizar não podemos transformar um trecho de código em componente?

Na verdade, não. É possível que componentes menores estejam dentro de outros componentes. Nosso formulário de busca, por exemplo, é formado por diferentes estruturas.

Quando pensamos em manutenção de código, dependendo da lógica utilizada, pode ser interessante transformar trechos de código em componentes.

Isso significa que cada caso deve ser analisado e fazer um balanço para haver equilíbrio.

Vinícios: Isso significa separar as responsabilidades, né, Nay?

Nayanne: Exatamente!

Vinícios: Qual nosso próximo passo agora?

Criamos a aplicação e alguns componentes iniciais. Em seguida começaremos a montar esse quebra-cabeça.

Te esperamos no próximo vídeo!

@@05
Para saber mais: explorando o projeto no Figma

Figma no desenvolvimento de um projeto
O Figma é uma ferramenta de design colaborativo amplamente utilizada por profissionais da área. No contexto do desenvolvimento front-end, o Figma desempenha um papel crucial ao permitir que as pessoas desenvolvedoras visualizem o projeto de design de um site de forma interativa.

Ao ter acesso ao layout, cores, tipografia e elementos visuais definidos no Figma, as pessoas desenvolvedoras podem entender a visão do designer e implementar a interface de forma fiel ao que foi concebido. Além disso, o Figma facilita a comunicação entre designers e devs, permitindo que ambos trabalhem em conjunto para garantir a consistência visual e a qualidade da experiência do usuário.

Como o Front-End utiliza o Figma?
Se você busca saber mais sobre como uma pessoa dev utiliza o Figma, recomendamos o vídeo "Como o Front-End Utiliza o Figma", que você pode assistir clicando aqui. Este vídeo aborda os conceitos básicos e práticos do uso do Figma, fornecendo uma introdução valiosa para quem deseja explorar essa poderosa ferramenta de design.

https://cursos.alura.com.br/extra/alura-mais/como-front-end-utiliza-o-figma-c858

@@06
Componentização com Angular

A componentização é uma abordagem fundamental no desenvolvimento com Angular. Ao dividir uma aplicação em componentes reutilizáveis e independentes, é possível obter benefícios significativos.
Agora que você conheceu a componentização e a aplicou no desenvolvimento da interface da aplicação "Jornada Milhas" através do Angular, assinale a alternativa correta sobre essa técnica:

A componentização é uma prática frequente no desenvolvimento com Angular, mas costuma ser pouco adotada a outras estruturas de desenvolvimento front-end.
 
Alternativa correta
A componentização permite reutilizar código e agilizar o desenvolvimento, facilitando a adição de novas funcionalidades e melhorando a manutenção.
 
A componentização permite a reutilização de código, o que agiliza o desenvolvimento, melhora a manutenção e facilita a adição de novas funcionalidades.
Alternativa correta
A componentização é recomendada para projetos de pequeno porte, pois é menos eficiente para projetos maiores.
 
Alternativa correta
A componentização facilita a colaboração em equipe, permitindo que diferentes pessoas desenvolvedoras trabalhem em paralelo em componentes diferentes sem interferências.
 
Com a componentização, as pessoas devs podem trabalhar em componentes diferentes de forma independente, o que facilita a colaboração e o desenvolvimento paralelo, aumentando a eficiência e minimizando conflitos no código.

@@07
Conhecendo o Angular Material

Nayanne: No vídeo anterior conversamos sobre o processo de componentização e criamos uma estrutura inicial de componentes.
Agora, vamos codar esses componentes. Para isso, abrimos o Figma nas especificações.

Vinícios: Nay, nós construiremos esses componentes do zero ou utilizaremos alguma biblioteca para auxiliar nesse processo mais visual?

Nayanne: Vamos conferir isso, Vini. Analisando o Figma, encontramos um link para documentação. Ao clicar nele, somos encaminhados para o site do Material Design.

Isso significa que foi especificado nessa aplicação que devemos utilizar uma biblioteca de componentes. Então, não criaremos tudo do zero.

Conhecendo o Material Design
Vinícios: Nay, você pode explicar um pouco mais sobre o Material Design?

Nayanne: Claro, mas farei isso usando uma analogia. Suponha que você dará uma festa com o tema futurismo. Você pode fazer manualmente cada item de decoração ou então comprar um kit de festa completo e pronto.

Trazendo esse exemplo para o projeto, o Material Design é como se fosse o kit completo. A biblioteca fornece vários componentes e diretivas que podem ser utilizados no projeto para criar um visual consistente.

O Material Design é tão recomendado que o Angular criou uma implementação própria do Material Design chamada Angular Material.

Se acessarmos a aplicação no navegador e clicarmos no link "Angular Material", no centro direito da tela, somos encaminhados para a documentação.

Na barra de menu superior, clicamos no botão "Components". Feito isso, abre uma aba com todos os componentes que podem ser personalizados e utilizados na aplicação. Para isso, bastar importar o módulo.

Como essa ferramenta já está integrada no Angular, conseguimos utilizar os componentes e otimizar tempo.

Vinícios: Isso vai nos ajudar muito na utilização de componentes menores! Vamos começar, Nay?

Nayanne: Primeiro, precisamos instalar o Angular Material. Na tela inicial da aplicação, na seção "Next Steps", clicamos em "Angular Material".

Feito isso, é disponibilizado o comando de instalação da biblioteca. Copiamos e abrimos o terminal do VS Code.

A instalação pode ser feita via npm install, porém, como essa é uma biblioteca integrada podemos utilizar a própria CLI do angular.

Sendo assim, colamos o comando ng add @angular/material e rodamos.

Enquanto a instalação é feita aparece uma pergunta se desejamos prosseguir. Digitamos "y" seguido de "Enter" para confirmar.

Depois, aparece outra pergunta na qual devemos escolher um tema. Para entendermos melhor, abrimos a documentação do Angular Material.

No lado superior direito, clicamos no ícone identificado por uma lada de tinta. Abre opções de temas pré-definidos oferecidos pela biblioteca, sendo:

Deep purple & Amber / Roxo escuro e âmbar;
Indigo & Pink / Indigo e rosa;
Pink & Blue-grey / Rosa e azul acizentado;
Purple & Gren / Roxo e verde.
Se abrirmos nosso projeto no Figma, percebemos que ele está na cor roxo e vermelho. Sendo assim, selecionamos a primeira opção.

Agora, voltamos ao VS Code. No terminal a opção "Deep purple & Amber" é a segunda, então, a selecionamos e apertamos "Enter".

Vinícios: Nay, esse tema é como se fosse um preset das cores que o Material fornecerá nos componentes?

Nayanne: Exatamente! A biblioteca sugere essas cores para serem aplicadas em botões e outros elementos.

Se voltarmos ao terminal, nos deparamos com outra pergunta referente a tipografia. Como queremos adicioná-la, digitamos "y" seguido de "Enter".

Por fim, uma pergunta se queremos incluir as animações do Angular. Novamente digitamos "y" seguido de "Enter". Feito isso instalamos tudo o que a biblioteca pode oferecer.

Na lateral superior direita, clicamos no Explorer e acessamos o arquivo package.json. Na linha 19 encontramos o Angular Material adicionado.

Vinícios: Agora sim. Pronto para ser utilizado! Estou muito animado e curioso para descobrir se o Angular não quebrou com essa adição.

Nayanne: No próximo vídeo faremos o teste codando o header. Até lá!

@@08
Para saber mais: vantagens do uso do Angular Material

Angular Material para interfaces no Angular
O Angular Material é uma biblioteca de componentes de interface do usuário projetada especificamente para ser usada com o Angular. Isso significa que ela foi desenvolvida com algumas especificidades para o Angular em mente:

A biblioteca é compatível com a estrutura de módulos do Angular, o que significa que os componentes podem ser importados em módulos específicos e usados apenas onde necessário.
Todos os componentes foram projetados para trabalhar com o gerenciamento de estado do Angular, permitindo que as pessoas desenvolvedoras controlem o estado do componente de forma eficiente.
Os componentes fornecidos pelo Angular Material são altamente personalizáveis, permitindo ajustes de cores, tamanhos e outros atributos dos componentes de acordo com as necessidades do projeto.
Por que usar o Angular Material?
O Angular Material oferece uma grande variedade de componentes pré-construídos que implementam o Material Design, facilitando a criação de interfaces consistentes e intuitivas em aplicativos Angular. O uso de componentes padrão também pode acelerar o desenvolvimento e diminuir a complexidade do projeto, além de melhorar a manutenção e escalabilidade do código. Você pode acessar a documentação (em Inglês) do Material Design clicando aqui.

Exemplos de projetos que usam Angular Material
Vários projetos renomados utilizam o Angular Material, como o Google Analytics, o Google Drive e o Google Docs, além de projetos open source como o Material Dashboard e o Material Design Lite.

Para entender com mais profundidade os componentes do Angular Material, você pode acessar sua documentação (em Inglês) clicando aqui.

https://material.angular.io/

@@09
Primeiro componente

Nayanne: Já instalamos o Angular Material, agora temos um kit de ferramentas completo para começar a codar.
Vinícios: Vamos começar a utilizar essas ferramentas?

Nayanne: Bora lá!

Criando o componente Toolbar
Nayanne: Analisando o Figma, percebemos que o header é uma barra de ferramentas, também chamada de toolbar.

O que precisamos fazer é acessar a documentação do Angular Material e procurar um componente desse tipo.

Para isso, no menu superior, clicamos em "Components" e abre uma lista de componentes na lateral esquerda. Procuramos por "toolbar" e clicamos.

Feito isso, no centro da tela encontramos informações sobre esse componente, como a tag e exemplos visuais. Na parte superior também encontramos outras abas.

Se clicarmos em "API", encontramos o módulo que vamos precisar importar para utilizar o componente. Na aba "Examples" encontramos outros modelos do toolbar.

Vinícios: Embora pareça um pouco repetitivo lembrarmos de importar o módulo quando utilizarmos o componente é algo essencial e que proporciona ganho de performance.

Isso porque quando o Angular constrói a aplicação, quando fazemos o build, os únicos componentes do Material que entram nesse pacote são os que foram importados. Precisamos lembrar disso para evitar erros no código.

Nayanne: Isso mesmo, Vini! Então, para não termos esses erros, na aba "API", copiamos o código de import.

Em seguida abrimos o VS Code e acessamos o arquivo app.module.ts. No fim do código de import, na linha 11, colamos e adicionamos um espaço entre as chaves.

import { MatToolbarModule } from '@angular/material/toolbar';
COPIAR CÓDIGO
Em seguida, copiamos o nome do módulo e colamos dentro do array de imports, na linha 25 e salvamos. Da seguinte forma:

//Trecho omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],

//Trecho omitido
COPIAR CÓDIGO
Feito isso, já podemos utilizar o componente.

Agora, voltamos na documentação para analisar quais são as opções de toolbar. Há modelos com uma linha, outros com múltiplas linhas e cores diferentes.

Conforme analisamos no Figma, nossa toolbar possui uma linha única. Sendo assim, a que mais parece se encaixar é a "Basic toolbar", que está na aba "Examples".

Na lateral direita, clicamos no botão indicado pelo símbolo "<>" para termos acesso ao código em HTML, TS e CSS.

Copiamos o código de HTML. Depois, no VS Code, acessamos a pasta "shared > header" e abrimos os componentes header.component.html e header.component.scss.

header.component.html
Apagamos o parágrafo do componente HTMLl e colamos o código.

<mat-toolbar>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
COPIAR CÓDIGO
Feito isso, voltamos na documentação, acessamos a aba "CSS" e copiamos o código.

header.component.scss
Abrimos o componente header.component.scss e colamos.

.example-spacer {
  flex: 1 1 auto;
}
COPIAR CÓDIGO
Vinícios: Agora, faremos esse código se moldar a forma do Jornada Milhas fazendo as configurações necessárias. Certo, Nay?

Nayanne: Exatamente! No componente header.component.html apagaremos algumas coisas que não temos na nossa aplicação.

Como não temos botões com ícones, apagamos todo o trecho da linha 2 até a 4 e da linha 5 até a linha 10.

Também apagamos o My App, pois o que temos é o logo da aplicação. Feito isso, o código fica da seguinte forma:

<mat-toolbar>
<span class="example-spacer"></span>

</mat-toolbar>
COPIAR CÓDIGO
Se acessarmos o Figma, notamos que na header temos um logo e quatro botões. Criaremos essa configuração, começando pela imagem.

Criando a imagem
Para isso, na lateral esquerda do VS Code, acessamos a pasta "assets". Nela vamos inserir a pasta de imagens que usaremos na aplicação e que está no nosso computador. Para fazer isso arrastamos uma para dentro a outra.

Feito isso, na linha abaixo de <mat-toolbar> escrevemos <img src=""> e dentro das aspas simples passamos o caminho da imagem assets/imagens/logo.png. Após passamos o alt="Logo da aplicação Jornada".

Agora, precisamos inserir os quatro botões, para isso utilizaremos outro componente do Angular Material.

Criando os Botões
Nayanne: Acessamos a documentação do Material Angular e clicamos em "Components". Na lateral esquerda, procuramos por "Button" e clicamos nele.

Feito isso, temos informações e exemplos referentes a esse componente. Descendo a tela, encontramos uma tabela com classes que podem ser utilizadas com o elemento nativo button.

Existem vários tipos de botões, como com e sem elevação, botões com ícone, entre outros.

Para que você possa conhecer um pouco mais sobre todas essas opções, disponibilizamos um material complementar que você pode acessar na aba "Para Saber Mais" na lateral esquerda da plataforma.
Os botões que utilizaremos são simples e sem destaque. Sendo assim, utilizaremos o atributo mat-button que é um botão retangular sem elevação.

Para isso, no centro da tela, acessamos a aba "API". Para importar o módulo, copiamos o código. Depois, abrimos o arquivo app.module.ts e colamos na linha 12, adicionando espaço entre as chaves.

import { MatButtonModule } from '@angular/material/button';
COPIAR CÓDIGO
Copiamos o nome do módulo e colamos no array de imports na linha 27.

//Trecho omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
    
//Trecho omitido
COPIAR CÓDIGO
Salvamos e fechamos o arquivo.

Agora, na documentação, acessamos a aba "Examples". Na seção "Basic buttons", clicamos no ícone identificado pelo símbolo "<>" para acessarmos o código HTML, TS e CSS.

No HTML notamos que é utilizado o <button mat-button>Basic</button>, então, copiamos esse trecho.

Vinícios: Dessa vez não usaremos o componente e sim uma diretiva do botão que aplica todos os estilos na nossa aplicação. Certo?

Nayanne: Sim, Vini! Usaremos o elemento nativo do HTML button. Então, abrimos o header.component.html e colamos na linha abaixo de <span class>.

Apagamos o Basic e escrevemos Vender milhas, o nome do botão. Com o cursor no fim dessa linha de código, apertamos "Alt + Shift + Seta para baixo" para duplicar a linha.

Nessa nova linha, mudamos o texto para Sobre.

  <mat-toolbar>
    <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
    <span class="example-spacer"></span>
    <button mat-button>Vender milhas</button>
    <button mat-button>Sobre</button>

  </mat-toolbar>
COPIAR CÓDIGO
app.component.html
Feito isso, acessamos o app.component.html. Apertamos "Ctrl + A" para selecionar tudo seguido de "Delete".

Para renderizar o componente escrevemos <app-header></app-header>.

`<app-header></app-header>`
COPIAR CÓDIGO
Apertamos "Ctrl + J" para abrir o terminal e passamos o comando ng serve.

ng serve
COPIAR CÓDIGO
Foi compilado. Em seguida, no navegador, recarregamos a página do "localhost:4200". Feito isso, o logo e os dois botões aparecem.

Agora, precisamos configurar a estilização para que a toolbar fique com o background preto e as letras brancas.

header.component.scss
Para isso, acessamos o header.component.scss. No fim do código, escrevemos .mat-toolbar adicionamos chaves e dentro delas passamos backgroung-color:black seguido de color: white.

//Trecho omitido

.mat-toolbar {
    background-color: black;
    color: white;
  }
COPIAR CÓDIGO
Salvamos e abrimo o navegador. Repare que aos poucos a configuração de cores vai ficando como queremos.

Agora, precisamos adicionar os outros dois botões que são um pouco diferentes. Um tem uma cor em destaque e o outro um outlined.

Na documentação, na seção "Button", clicamos na aba "Overview" e descemos a tela até a tabela de botões.

Utilizaremos o mat-raised-button que tem uma elevação, então copiamos esse nome. Depois, abrimos o arquivo header.component.html.

Com o cursor na última linha button, apertamos "Alt + Shift + Seta para baixo" para duplicá-la. Feito isso, apagamos o mat-button e colamos o trecho de código. Em seguida, mudamos o nome para CADASTRE-SE.

//Trecho omitido

<button mat-raised-button>CADASTRE-SE</button>
COPIAR CÓDIGO
Atualizamos o navegador e notamos que deu certo. Porém, o botão está na cor branca e queremos roxo. Para isso, acessamos a documentação novamente.

Na seção "Basic buttons", encontramos uma explicação sobre o que deve ser feito para definir cores diferentes. Para analisarmos o código, no lado direito da tela, clicamos no ícone identificado pelo símbolo de "<>".

Copiamos o trecho de código color="primary" e colamos loco após o mat-raised-button.

//Trecho omitido

<button mat-raised-button color="primary">CADASTRE-SE</button>
COPIAR CÓDIGO
Vinícios: Isso significa que para adicionar a cor usamos algo semelhante a um atributo.

Nayanne: Isso mesmo! Ao atualizarmos a página o botão fica roxo, deu certo!

Agora, criaremos o último botão outlined. Acessamos a documentação para analisar as opções. Nesse caso, utilizaremos o mat-stroked-button, então o copiamos.

No componente, duplicamos a última linha de código. Apagamos o mat-raised-button e colamos o código. Também apagamos o color="primary" e depois, mudamos o nome do botão para LOGIN.

//Trecho omitido

    <button mat-stroked-button>LOGIN</button>
COPIAR CÓDIGO
Ao atualizarmos o navegador temos o botão, porém ele não está com a borda branca.

Vinícios: Precisamos fazer esse ajuste. O bacana é que o Angular Material permite essa customização.

Nayanne: Sim, Vini! Faremos essa alteração no próximo vídeo.

Vinícios: Estaremos te esperando lá!

@@10
Para saber mais: tipos de botão do Angular Material

Os botões são elementos essenciais para fornecer interatividade e aprimorar a experiência do usuário em uma aplicação. O Angular Material oferece uma variedade de estilos de botões, cada um com suas características específicas.
A tabela a seguir apresenta os atributos e descrições dos diversos tipos de botões do Angular Material:

Atributo	Descrição
mat-button	Botão de texto retangular sem elevação
mat-raised-button	Botão contido retangular com elevação
mat-flat-button	Botão contido retangular sem elevação
mat-stroked-button	Botão delineado retangular sem elevação
mat-icon-button	Botão circular com um fundo transparente, destinado a conter um ícone
mat-fab	Botão circular com elevação, padrão para a cor “accent” do tema
mat-mini-fab	O mesmo que o mat-fab, mas menor
No gif abaixo, você pode observar o comportamento de cada um dos botões descritos acima:

Gif animado da tabela “basic buttons” da documentação de botões do Angular Material, que mostra o exemplo de aparência de cada um dos botões disponíveis no Angular Material, apresentando no cabeçalho esquerdo vertical da tabela as opções de botões que são Basic, Raised, Stroked, Flat, Icon, FAB e Mini FAB e mostrando suas variações Basic, Primary, Accent, Warn, Disabled e Link, em que o cursor do mouse percorre todos os botões da primeira coluna

Ao utilizar os botões do Angular Material, você pode criar interfaces consistentes e intuitivas em suas aplicações. Essa diversidade de estilos permite escolher a melhor opção para atender às necessidades de design e interação de seu projeto.

Caso você queira obter mais informações sobre os botões no Angular Material ou explorar outros componentes e recursos disponíveis, recomendamos consultar a documentação oficial aqui: link da documentação.

Divirta-se explorando e experimentando os diferentes tipos de botões do Angular Material em suas aplicações!

https://material.angular.io/components/button/overview

@@11
Entendendo o SCSS

Nayanne: No vídeo passado criamos o logo e os botões do header. Porém, o último botão não ficou com a borda que precisamos.
Vinícios: Nay, para entender o que está acontecendo, podemos inspecionar a página.

Entendendo o SCSS
Nayanne: Para isso, clicamos com o botão direito na tela e depois em "Inspecionar". Abre uma aba com o código do site. Procuramos pelo botão e clicamos nele.

Encontramos uma classe do Material que está aplicando a propriedade border-color. Clicamos na caixa, localizada na lateral esquerda, para desselecionar. Feito isso, repare que aparece uma borda no botão.

Vinícios: Então, podemos dizer que a cor da borda será sempre branca. Pode ser uma boa estratégia.

Nayanne: Vamos testar. Para isso, selecionamos a caixa e escrevemos white. Realmente funcionou.

Então, copiamos esse trecho de código e colamos no fim do código do header.component.scss.

.mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
}
COPIAR CÓDIGO
Vinícios: Agora, vamos fazer uma análise desse trecho de código. Temos uma classe chamada .mat-mdc-outlined-button, ou seja, é feito uma seleção dos botões que possuem essa classe.

Assim temos os pseudo seletores. Então, além do elemento HTML ter essa classe não pode estar desabilitado para botões que tenham essa classe.

Então, para botões que possuem essa classe e não estão desabilitados alteramos a cor da borda para branco.

Nayanne: Isso mesmo, Vini! Agora, voltamos ao navegador e recarregamos a página. Feito isso, deu certo! Só precisamos agora mudar a estilização.

Mas, antes disso, no header.component.html, vamos envolver a toolbar em uma tag header. Para isso, na primeira linha do código escrevemos <header> e no fim </header>.

Em seguida, na primeira linha, passamos uma classe chamada app-header. Depois, na linha 4, mudamos o nome da classe do span para "spacer" e salvamos.

<header class="app-header">
  <mat-toolbar>
    <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
    <span class="spacer"></span>
    <button mat-button>Vender milhas</button>
    <button mat-button>Sobre</button>
    <button mat-raised-button color="primary">CADASTRE-SE</button>
    <button mat-stroked-button>LOGIN</button>
  </mat-toolbar>
</header>
COPIAR CÓDIGO
Agora, vamos fazer as alterações necessárias no SCSS. Começaremos criando um espaçamento entre os botões. Para isso, no header.component.scss, na primeira linha, escrevemos button {}.

Nas chaves adicionaremos uma margem, então passamos margin: 0 16px. Abrimos o navegador para chegar e notamos que deu certo.

Vinícios: Ajustamos o espaço. Mas, pelo que estou vendo o seletor será aplicado em qualquer botão dentro do HTML. Mas, o que precisamos fazer é aplicar essa classe para os botões da classe header.

Isso significa que queremos aumentar a especificidade desse seletor, ou seja, ser mais específicos.

Ao invés de fazermos o seletor SCSS da forma convencional, podemos utilizar a sintaxe do SCSS que permite a criação de seletores e aplicar estilos a eles de forma alinhada.

Podemos então, passar o .app-header, para selecionar os elementos que tem essa classe, e dentro de chaves colocamos o restante do código SCSS.

.app-header {

  button {
    margin: 0 16px;
  }

  .spacer {
    flex: 1 1 auto;
  }

  .mat-toolbar {
    background-color: black;
    color: white;
  }

  .mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
  }
}
COPIAR CÓDIGO
Ao fazer isso, dizemos que todos os seletores estão relacionados. Assim, não precisamos utilizar o .app-header antes de cada seletor.

O SCSS é um pré-processador de CSS, inclusive, muitas novidades foram inspiradas dele. A partir dele é possível expandir as funcionalidades do CSS, assim como os seletores alinhados.

Se isso for novidade pra você, não se preocupe. Sempre que formos utilizá-lo, vamos mencionar o que está sendo feito.
Além disso, também deixaremos uma atividade na qual recomendamos um curso que explica tudo sobre esses pré-processadores de CSS.

Nayanne: Isso facilita muito, Vini! Agora, nossa aplicação está quase pronta. Analisando o Figma, percebemos que a logo e os botões estão organizados próximos ao centro da tela.

Vinícios: Isso é muito importante para não deixar os elementos colados e deixar visualmente mais confortável.

Nayanne: Para fazermos isso, no fim do .mat-toolbar, escrevemos padding: 0 64px.

  .mat-toolbar {
    background-color: black;
    color: white;
    padding: 0 64px;
  }
COPIAR CÓDIGO
Abrimos o navegador para checar e percebemos que ainda não está com o espaçamento do Figma. Para definirmos um espaço maior, mudamos o valor para 256px.

.app-header {

  button {
    margin: 0 16px;
  }

  .spacer {
    flex: 1 1 auto;
  }

  .mat-toolbar {
    background-color: black;
    color: white;
    padding: 0 256px;
  }

  .mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
  }
}
COPIAR CÓDIGO
Vinícios: Agora sim temos os espaçamentos ideais nas laterais da tela, seguido pela logo e os botões. Visualmente está tudo mais organizado na tela.

Nayanne: Então, podemos considerar o header pronto!

Vinícios: Na aula seguinte vamos incluir o componente banner. Até lá!

@@12
Incorporando o SCSS ao projeto

Imagine que você é uma pessoa desenvolvedora Angular e precisa convencer sua liderança a utilizar o SCSS (Sassy CSS) para estilizar os elementos HTML em um novo projeto. Seu objetivo é apresentar o argumento mais forte para o uso dessa ferramenta.
Qual é o principal benefício ao utilizar o SCSS na estilização de um projeto Angular?


Alternativa correta
O SCSS permite escrever estilos de forma mais organizada e flexível, facilitando a manutenção e reutilização de código.
 
O argumento mais forte para utilizar o SCSS na estilização de um projeto Angular é a sua capacidade de escrever estilos de forma organizada e flexível. O SCSS oferece recursos como variáveis, mixins e aninhamento de seletores, que facilitam a manutenção do código e a reutilização de estilos em diferentes partes do projeto.
Alternativa correta
O SCSS oferece recursos avançados de design gráfico, permitindo criar elementos visuais sofisticados e atraentes para a aplicação Angular.
 
O SCSS não é uma ferramenta de design gráfico, mas sim uma extensão do CSS utilizada para estilizar elementos HTML em projetos Angular. Seu foco está na estilização e não na criação de elementos visuais complexos.
Alternativa correta
O SCSS ajuda a melhorar o desempenho da aplicação Angular, reduzindo o tempo de carregamento dos estilos e tornando-a mais rápida.
 
Embora o SCSS possa otimizar o código CSS resultante, seu principal objetivo não está relacionado ao desempenho da aplicação Angular em termos de carregamento de estilos.
Alternativa correta
O SCSS fornece uma ampla biblioteca de componentes do Angular com estilos pré-definidos, agilizando o desenvolvimento da interface do usuário.
 
O SCSS não fornece uma biblioteca de componentes do Angular com estilos pré-definidos. Ele é uma extensão do CSS que oferece recursos adicionais para estilização, mas não inclui uma biblioteca de componentes prontos para uso.

@@13
Para saber mais: quais são as diferenças entre SASS e SCSS?

O que é SASS?
O SASS (Syntactically Awesome Style Sheets ou Folhas de Estilo Sintaticamente Espetaculares) é um pré-processador de CSS, o que significa que ele é processado antes de ser convertido em CSS puro. Ele oferece recursos adicionais para facilitar a escrita de estilos em projetos web e uma sintaxe mais avançada em relação ao CSS tradicional, como variáveis, aninhamento de seletores, mixins e funções.

Ao ser compilado para CSS, o SASS produz um código otimizado e compatível com todos os navegadores. Assim, é amplamente utilizado para aumentar a produtividade e a flexibilidade no desenvolvimento front-end.

Mas e onde entra o SCSS nessa história?
O SASS tem duas sintaxes e uma delas é o SCSS! A sintaxe SCSS usada no curso, na qual adicionamos ao arquivo a extensão .scss, é usada com mais frequência. É um superconjunto de CSS, o que significa que todo CSS válido também é válido em SCSS.

Já a sintaxe SASS, na qual adicionamos ao arquivo a extensão .sass, é mais incomum: ela usa recuo em vez de chaves para aninhar instruções e novas linhas em vez de ponto e vírgula para separá-las. Você consegue observar essa diferença de sintaxes na documentação (em inglês) do SASS, clicando aqui.

Para aprender sobre SASS
Caso você tenha sentido curiosidade em saber mais sobre como o SASS funciona e como utilizar a sintaxe SCSS em seus projetos para otimizar a estilização, recomendamos o curso SASS: CSS sintaticamente espetacular, do instrutor Guilherme Lima, que aborda o uso do SASS desde os primeiros passos.

https://sass-lang.com/guide#:~:text=With%20that%20in%20mind%2C%20here%27s%20an%20example%20of%20some%20typical%20styles%20for%20a%C2%A0site%27s%20navigation%3A

https://cursos.alura.com.br/course/sass-css-sintaticamente-espetacular

@@14
O que aprendemos?

Nessa aula, você aprendeu como:
Organizar a componentização do projeto;
Instalar e importar o Angular Material;
Criar o header da aplicação;
Utilizar SCSS na estilização do header.

#### 26/02/2024

@02-Criando componentes reutilizáveis

@@01
Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para baixá-lo clique neste link ou veja nosso repositório do Github.

https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-1.zip

https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-1

@@02
Banner

Nayanne: Olá! Na aula anterior começamos o processo de componentização e já codamos o cabeçalho. E o Vinny já trouxe um spoiler do que faremos nesta aula.
Vinícios: Isso aí. Estamos seguindo a lógica do Figma. Começamos a desenvolver do header, que está lá em cima. Seguindo essa lógica, o próximo componente será o banner.

Nayanne: Isso mesmo! Vamos acessar o VS Code e abrir os arquivos banner.component.scss e banner.component.html que estão na pasta "app > shared > banner".

No banner.component.html, vamos apagar o parágrafo da linha 1 e criar uma div na qual passaremos a imagem do banner.

<div>
  <img src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</div>
COPIAR CÓDIGO
Vinícios: Já pedimos os assets, as imagens estáticas que usaremos no nosso projeto. E o banner que será utilizado na aplicação, ficou um pouco diferente da versão que foi aprovada no layout. Então, essa troca de assets, essas imagens diferentes entre o que temos na aplicação e o que tem no Figma é uma coisa muito comum que pode acontecer no nosso dia a dia.

Nayanne: Verdade. Já adicionamos o caminho da imagem. Agora, para conseguirmos ver o banner na tela, acessaremos o arquivo app.component.html e, abaixo do header, vamos inserir o seletor do banner.

<app-header></app-header>
<app-banner></app-banner>
COPIAR CÓDIGO
Pronto! Podemos acessar a aplicação e checar o resultado no navegador. O banner está aparecendo na tela.

Vinícios: E ele funciona para todas as resoluções? Se diminuirmos a largura da nossa tela, como será o comportamento do banner?

Nayanne: Estou diminuindo a tela, mas a imagem do banner não está acompanhando, ela está fixa.

Vinícios: Vamos resolver isso?

Nayanne: Vamos lá. Para resolver isso, vamos voltar para o banner.component.html e adicionar uma classe chamada "banner".

<div class="banner">
  <img 
    src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</div>
COPIAR CÓDIGO
Vinícios: Estamos usando uma div, que é a nossa "caixa" ou contêiner que segura uma imagem dentro dele.

Se quisermos dar um pouco mais de semântica e usar o poder do HTML 5 e das novas tags, poderíamos trocar essa div por uma tag chamada <figure>, que é responsável por guardar uma imagem dentro dela.

Nayanne: Ótima dica Vini! Vamos fazer isso para ficar mais semântico.

<figure class="banner">
  <img 
    src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</figure>
COPIAR CÓDIGO
Vamos estilizar essa figure no banner.component.scss. Passaremos uma imagem e adicionaremos uma largura máxima de 100% para deixar responsivo.

figure {
  img {
      max-width: 100%;
    }
}
COPIAR CÓDIGO
Vinícios: Agora, vamos analisar a imagem no navegador. Ficou responsiva, mas agora essa imagem tem uma margem lateral um pouco maior e uma margem superior um pouco menor. Acho que podemos tirar todas as margens dessa tag <figure>. É uma boa ideia?

Nayanne: Sim. No CSS vamos passar margem 0.

figure {
  margin: 0;
  img {
      max-width: 100%;
    }
}
COPIAR CÓDIGO
De volta à aplicação no navegador, ficou bem melhor e está funcionando como queremos ao diminuir a largura.

Vinícios: Maravilha. Está tudo funcionando e agora temos um pouco mais de semântica.

Nayanne: Vini, de volta ao código HTML do banner, nós passamos a imagem de forma fixa. Mas a ideia de criarmos os componentes é justamente conseguirmos reutilizar. Como podemos reutilizar essa imagem? Na verdade, queremos que esse caminho e esse alt sejam recebidos de fora. Precisamos fazer uma mudança no src e no alt.

Vinícios: Sim! Seria interessante se quem está consumindo esse componente de banner pudesse indicar qual é o caminho para a imagem. Assim mantemos o comportamento, porém ele fica dinâmico o suficiente para poder trocar o banner.

Nayanne: Para termos esse comportamento, vamos apagar o src e alt fixos e utilizaremos a interpolação do Angular, com a sintaxe das chaves duplas. Essas propriedades serão recebidas de um componente que vai utilizar o banner.

Lembrando que é uma boa prática na interpolação deixar um espaço antes e depois para facilitar a legibilidade.

<figure class="banner">
  <img 
    src="{{ src }}"
    alt="{{ alt }}">
</figure>
COPIAR CÓDIGO
Estamos recebendo um erro no src e no alt porque ainda não temos essas propriedades criadas no componente. Vamos criá-las no banner.component.ts. As duas serão como string e iniciaremos com strings vazias.

export class BannerComponent {
  src: string = '';
  alt: string = '';
}
COPIAR CÓDIGO
Nayanne: Será que isso já é o suficiente?

Vinícios: Não. Nós ainda precisamos indicar para o Angular que esses valores serão recebidos via atributo.

Nayanne: Isso mesmo. E o jeito que o Angular faz isso é utilizando um decorator chamado @Input(). Isso vai sinalizar para o Angular que essa é uma propriedade de entrada, que esses valores serão recebidos e injetados nesse componente.

export class BannerComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
COPIAR CÓDIGO
Vinícios: Note que o VS Code importou automaticamente o Input do pacote @angular/core.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
COPIAR CÓDIGO
Nayanne: Pronto! Dessa forma conseguiremos receber essas propriedades de fora.

Agora, ao acessar o navegador não teremos mais a imagem do banner, porque tiramos o caminho fixo dela do componente.

Esse é um bom momento para começarmos a pensar em como montar a nossa página inicial. Porque, quando criamos a primeira estrutura de componentes, não criamos uma pasta para conter nossas páginas.

Vinícios: Sim! Podemos começar pela página inicial mesmo. Como vamos fazer essa estrutura de pastas? Onde vai ficar o componente que representa uma página?

Nayanne: Dentro da pasta "app", podemos criar uma nova pasta chamada "pages" e dentro desta criar a pasta "home". O que você acha?

Vinícios: Acho que dessa forma fica bem explícito para outras pessoas que forem desenvolver esse projeto que temos uma pasta só para as nossas páginas e o nome da página estará relacionado com a rota da aplicação.

Nayanne: Isso mesmo. Posteriormente, dentro da pasta "pages", vamos inserir as páginas de busca, de cadastro e login. Mas isso é mais adiante.

Vinícios: Isso mesmo. Agora estamos prontos para preparar a página inicial. Continuaremos no próximo vídeo.

@@03
Criando um componente flexível

Imagine que você faz parte da equipe de desenvolvimento da aplicação "Jornada Milhas" e está desenvolvendo um novo componente de card que será reutilizado em diferentes páginas e esse card precisa estar preparado para exibir imagens específicas de cada destino.
Esse card precisa receber dinamicamente a URL da imagem e um texto alternativo para cada destino exibido. Precisamos criar o componente "CardDeDestino" de forma que ele seja flexível para receber esses dados do componente pai em cada situação. Para resolver isso, você cria o componente "CardDeDestino" e adiciona as variáveis de fonteImagem e textoAlternativo, onde utiliza o decorador @Input() para definir que elas serão preenchidas pelo componente pai, escrevendo o seguinte código no arquivo .ts:

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-de-destino',
  templateUrl: './card-de-destino.component.html',
  styleUrls: ['./card-de-destino.component.css']
})

export class CardDeDestino {
  @Input() fonteImagem: string = '';
  @Input() textoAlternativo: string = '';
}
COPIAR CÓDIGO
Para que essa estratégia funcionasse, você implementou no template do componente pai o seguinte código, que deveria criar um novo card de destino com a imagem e texto alternativo passados para ele:

<app-card-de-destino fonteImagem="assets/imagem.png" textoAlternativo="texto alternativo"><app-card-de-destino>
COPIAR CÓDIGO
No entanto, essa implementação falhou, pois ainda faltava um passo: criar o código do template do componente “CardDeDestino”, para que ele consiga exibir o endereço da imagem e o texto alternativo que foram recebidos do componente pai.

Avalie as alternativas e identifique quais implementações do código do template do "CardDeDestino" cumprem essa função corretamente:

    <div>
      <img src="{{ src }}" alt="{{ alt }}">
    </div>
 
Alternativa correta
<div>
  <img [src]="fonteImagem" [alt]="textoAlternativo">
</div>
 
Essa é uma implementação correta utilizando property binding. Ao utilizar a sintaxe [ ], estamos atribuindo dinamicamente os valores das propriedades fonteImagem e textoAlternativo do component às propriedades src e alt da tag <img>.
Alternativa correta
<div>
  <img src="fonteImagem" alt="textoAlternativo">
</div>
 
Alternativa correta
    <div>
      <img src="{{ fonteImagem }}" alt="{{ textoAlternativo }}">
    </div>
 
Utilizando a sintaxe {{ }}, fazemos a interpolação das propriedades fonteImagem e textoAlternativo nos atributos src e alt da tag <img>, respectivamente. Dessa forma, os valores definidos no componente pai serão exibidos dinamicamente no card de destino, garantindo que a imagem e o texto alternativo sejam renderizados corretamente.

@@04
Preparando o ambiente

Na próxima aula, vamos construir um novo componente e utilizaremos o código à seguir para a estilização:
:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
COPIAR CÓDIGO
Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

@@05
Criando um container

Nayanne: Daremos continuidade ao desenvolvimento dos componentes. Nosso próximo requisito é a aplicação de um contêiner flexível que consiga envolver diversos tipos de conteúdo.
Vinícios: No Figma, podemos ver que na página inicial temos uma contenção. O miolo da nossa página está contido, não pega 100% da nossa tela. Então, nosso objetivo agora é criar essa contenção com um contêiner.

Nayanne: Exatamente. O problema, quando vamos criar um contêiner, é que não sabemos previamente qual será o conteúdo inserido nele. Mas o Angular tem uma solução para isso.

No VS Code, vamos criar esse componente dentro da pasta "shared". Podemos parar a aplicação abrindo o terminal e executando o comando "Ctrl + C". EM seguida, criaremos a pasta com o seguinte comando:

ng g c shared/container
COPIAR CÓDIGO
Após executar esse comando, podemos executar a aplicação novamente com o comando:

ng server
COPIAR CÓDIGO
Podemos acessar o HTML do container, container.component.html.

Usaremos a diretiva ng-content, que permite a criação de pontos de inserção de conteúdo dinâmico em diversos tipos de componentes.

Podemos explicar isso de outra forma. Vinny, você costuma acumular potes de plástico na sua casa?

Vinícios: Claro. Inclusive, guardo os de sorvete para compartilhar com as visitas. Porque quando emprestamos um pote de plástico, ele nunca é devolvido.

Nayanne: Podemos fazer um paralelo que o ng-content é como um pote. Porque todos os elementos que colocamos dentro de um pote adquirem o formato do recipiente. Da mesma forma, o conteúdo que inserirmos dentro do ng-content, no nosso caso, do contêiner, esse componentes vão adquirir as propriedades visuais e o estilo desse componente contêiner. Para isso, precisaremos estilizar o contêiner.

Estilizando o Contêiner
Vamos acessar o container.component.scss e colocaremos o estilo com o seletor host. Esse seletor vai aplicar esse estilo no componente de fora e não nos elementos internos.

:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
COPIAR CÓDIGO
Vinícios: Exatamente. Estamos fazendo um seletor que vai selecionar o hospedeiro, vai pegar a parte de fora desse componente. Definimos o display: block, a margem 0 auto vai centralizar ele no meio da tela, horizontalmente. Ele vai ter um tamanho de no máximo 1048 pixels, pegamos esse número do Figma. E a largura dele será de 90%.

Então, quando a tela for maior que 1048px, ele vai ficar contido ali no centro. E se a tela for menor, terá 5% de cada lado, que é justamente a margem 0 auto centralizando ele na tela.

Nayanne: Para testar isso, poderíamos inserir o seletor do contêiner no app.component.html. Mas como estamos ficando com vários componentes dentro do HTML, podemos começar a montar a nossa homepage.

Vinícios: Seria uma boa trazermos a estrutura e o roteamento dessa página para a nossa aplicação.

Nayanne: Isso mesmo. Nós já temos uma pasta chamada "pages" e, dentro dela, a "home". Vamos criar nessa pasta o componente home. No terminal, podemos parar a aplicação e executar o comando:

ng c g pages/home
COPIAR CÓDIGO
Pronto. Nosso componente home foi criado. Podemos voltar a executar a aplicação com o comando ng serve.

Dentro da home.component.html, colocaremos o seletor do banner.

No app.component.html, podemos deixar o seletor do cabeçalho fixo porque ele deve aparecer em todas as telas da aplicação.

Quando codamos o componente de banner precisamos passar duas informações sobre a imagem, passaremos aqui também. O código de home.component.html ficará assim:

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
COPIAR CÓDIGO
Vamos salvar e verificar como está a página no navegador.

Ainda está aparecendo apenas o cabeçalho.

Vinícios: Faltou indicarmos para o roteador que queremos que essa página que acabamos de criar seja renderizada na rota inicial da aplicação.

Nayanne: Isso mesmo! Precisamos informar ao Angular como ele vai fazer isso.

No app.component.html, adicionaremos uma diretiva chamada router-outlet. Essa diretiva é um espaço reservado no qual o Angular vai carregar dinamicamente os componentes de acordo com as configurações de rota que passarmos.

<app-header></app-header>
<router-outlet></router-outlet>
COPIAR CÓDIGO
Essas configurações de rota ficarão no arquivo app-routing.module.ts.

Esse arquivo possui, por padrão, a constante de rotas, const routes. Vamos passar para ela os objetos com todas as rotas da nossa aplicação.

Para configurar a rota, precisamos passar duas propriedades: path (caminho) e component.

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
COPIAR CÓDIGO
No nosso caso o path será uma string vazia, porque quando alguém acessar o localhost:4200 queremos que essa pessoa acesse a página inicial. O componente será HomeComponent.

Agora, se acessarmos a aplicação no navegador, está aparecendo o cabeçalho e o banner.

Daqui em diante, à medida que incrementarmos a nossa página inicial, será renderizado na nossa página.

Vinícios: Nós podemos trazer o app container para dentro da página inicial e tentar testar para verificar se está funcionando?

Nayanne: Boa. Vamos fazer isso. na linha 5 do home.component.html vamos inserir o seletor do app-container e colocar dentro dele uma tag H1 para testar.

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <h1>HOME</h1>
    </app-container> 
COPIAR CÓDIGO
De volta à aplicação, apareceu na página o título H1 de "HOME". Já estamos formando a nossa homepage!

Vinícios: Neste vídeo conseguimos juntar todas as peças que já criamos. Nosso "quebra-cabeça" está começando a mostrar alguma imagem. Estamos prontos para os próximos passos.

Desafio: criar o componente de rodapé (footer)
Nayanne: Agora, que já criamos o app-container, está na hora de passar um desafio aos estudantes.

Que tal você colocar em prática os conhecimentos que estamos passando e criar o componente de rodapé (footer)?

Vinícios: Agora é a hora de você praticar para ajudar a fixar todo esse conhecimento que absorvemos até agora!

Você pode reaproveitar algumas coisas que já fizemos. É a sua missão deixar o footer pronto para nossa aplicação ficar bonitona!

@@05
Criando um container

Nayanne: Daremos continuidade ao desenvolvimento dos componentes. Nosso próximo requisito é a aplicação de um contêiner flexível que consiga envolver diversos tipos de conteúdo.
Vinícios: No Figma, podemos ver que na página inicial temos uma contenção. O miolo da nossa página está contido, não pega 100% da nossa tela. Então, nosso objetivo agora é criar essa contenção com um contêiner.

Nayanne: Exatamente. O problema, quando vamos criar um contêiner, é que não sabemos previamente qual será o conteúdo inserido nele. Mas o Angular tem uma solução para isso.

No VS Code, vamos criar esse componente dentro da pasta "shared". Podemos parar a aplicação abrindo o terminal e executando o comando "Ctrl + C". EM seguida, criaremos a pasta com o seguinte comando:

ng g c shared/container
COPIAR CÓDIGO
Após executar esse comando, podemos executar a aplicação novamente com o comando:

ng server
COPIAR CÓDIGO
Podemos acessar o HTML do container, container.component.html.

Usaremos a diretiva ng-content, que permite a criação de pontos de inserção de conteúdo dinâmico em diversos tipos de componentes.

Podemos explicar isso de outra forma. Vinny, você costuma acumular potes de plástico na sua casa?

Vinícios: Claro. Inclusive, guardo os de sorvete para compartilhar com as visitas. Porque quando emprestamos um pote de plástico, ele nunca é devolvido.

Nayanne: Podemos fazer um paralelo que o ng-content é como um pote. Porque todos os elementos que colocamos dentro de um pote adquirem o formato do recipiente. Da mesma forma, o conteúdo que inserirmos dentro do ng-content, no nosso caso, do contêiner, esse componentes vão adquirir as propriedades visuais e o estilo desse componente contêiner. Para isso, precisaremos estilizar o contêiner.

Estilizando o Contêiner
Vamos acessar o container.component.scss e colocaremos o estilo com o seletor host. Esse seletor vai aplicar esse estilo no componente de fora e não nos elementos internos.

:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
COPIAR CÓDIGO
Vinícios: Exatamente. Estamos fazendo um seletor que vai selecionar o hospedeiro, vai pegar a parte de fora desse componente. Definimos o display: block, a margem 0 auto vai centralizar ele no meio da tela, horizontalmente. Ele vai ter um tamanho de no máximo 1048 pixels, pegamos esse número do Figma. E a largura dele será de 90%.

Então, quando a tela for maior que 1048px, ele vai ficar contido ali no centro. E se a tela for menor, terá 5% de cada lado, que é justamente a margem 0 auto centralizando ele na tela.

Nayanne: Para testar isso, poderíamos inserir o seletor do contêiner no app.component.html. Mas como estamos ficando com vários componentes dentro do HTML, podemos começar a montar a nossa homepage.

Vinícios: Seria uma boa trazermos a estrutura e o roteamento dessa página para a nossa aplicação.

Nayanne: Isso mesmo. Nós já temos uma pasta chamada "pages" e, dentro dela, a "home". Vamos criar nessa pasta o componente home. No terminal, podemos parar a aplicação e executar o comando:

ng c g pages/home
COPIAR CÓDIGO
Pronto. Nosso componente home foi criado. Podemos voltar a executar a aplicação com o comando ng serve.

Dentro da home.component.html, colocaremos o seletor do banner.

No app.component.html, podemos deixar o seletor do cabeçalho fixo porque ele deve aparecer em todas as telas da aplicação.

Quando codamos o componente de banner precisamos passar duas informações sobre a imagem, passaremos aqui também. O código de home.component.html ficará assim:

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
COPIAR CÓDIGO
Vamos salvar e verificar como está a página no navegador.

Ainda está aparecendo apenas o cabeçalho.

Vinícios: Faltou indicarmos para o roteador que queremos que essa página que acabamos de criar seja renderizada na rota inicial da aplicação.

Nayanne: Isso mesmo! Precisamos informar ao Angular como ele vai fazer isso.

No app.component.html, adicionaremos uma diretiva chamada router-outlet. Essa diretiva é um espaço reservado no qual o Angular vai carregar dinamicamente os componentes de acordo com as configurações de rota que passarmos.

<app-header></app-header>
<router-outlet></router-outlet>
COPIAR CÓDIGO
Essas configurações de rota ficarão no arquivo app-routing.module.ts.

Esse arquivo possui, por padrão, a constante de rotas, const routes. Vamos passar para ela os objetos com todas as rotas da nossa aplicação.

Para configurar a rota, precisamos passar duas propriedades: path (caminho) e component.

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
COPIAR CÓDIGO
No nosso caso o path será uma string vazia, porque quando alguém acessar o localhost:4200 queremos que essa pessoa acesse a página inicial. O componente será HomeComponent.

Agora, se acessarmos a aplicação no navegador, está aparecendo o cabeçalho e o banner.

Daqui em diante, à medida que incrementarmos a nossa página inicial, será renderizado na nossa página.

Vinícios: Nós podemos trazer o app container para dentro da página inicial e tentar testar para verificar se está funcionando?

Nayanne: Boa. Vamos fazer isso. na linha 5 do home.component.html vamos inserir o seletor do app-container e colocar dentro dele uma tag H1 para testar.

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <h1>HOME</h1>
    </app-container> 
COPIAR CÓDIGO
De volta à aplicação, apareceu na página o título H1 de "HOME". Já estamos formando a nossa homepage!

Vinícios: Neste vídeo conseguimos juntar todas as peças que já criamos. Nosso "quebra-cabeça" está começando a mostrar alguma imagem. Estamos prontos para os próximos passos.

Desafio: criar o componente de rodapé (footer)
Nayanne: Agora, que já criamos o app-container, está na hora de passar um desafio aos estudantes.

Que tal você colocar em prática os conhecimentos que estamos passando e criar o componente de rodapé (footer)?

Vinícios: Agora é a hora de você praticar para ajudar a fixar todo esse conhecimento que absorvemos até agora!

Você pode reaproveitar algumas coisas que já fizemos. É a sua missão deixar o footer pronto para nossa aplicação ficar bonitona!

@@06
Componente container

Você está trabalhando como dev e a equipe decidiu criar um container flexível que possa envolver e aplicar um estilo específico em todos os componentes da aplicação, visando garantir consistência visual e facilitar a manutenção do código.
Para resolver esse desafio, você criou o componente "Container" que terá a responsabilidade de envolver os outros componentes da aplicação e aplicar o estilo desejado. No arquivo "container.component.html", você adicionou a diretiva ng-content, com o seguinte resultado:

<ng-content></ng-content>
COPIAR CÓDIGO
No arquivo CSS, adicionou o estilo que deve ser aplicado a todos os componentes da aplicação que forem envolvidos pelo container:

:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
COPIAR CÓDIGO
Agora, solicitaram que você adicionasse esse container ao componente header(cabeçalho), para que o seu estilo se tornasse padronizado de acordo com o estilo do container.

Considerando os códigos doheader:

HTML

<header class="app-header">
  <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
  </mat-toolbar>
</header>
COPIAR CÓDIGO
CSS

.app-header {
  background-color: black;
  button {
    margin: 0 16px;
  }

  .spacer {
    flex: 1 1 auto;
  }

  .mat-toolbar {
    background-color: black;
    color: white;
  }

  .mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
  }
}
COPIAR CÓDIGO
Assinale a alternativa que apresenta a implementação correta do container no header para que ele consiga herdar os estilos padrão:

<ng-content>
  <header class="app-header">
    <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
    </mat-toolbar>
  </header>
</ng-content>
 
Alternativa correta
<header class="app-header">
  <app-container>
  <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
  </mat-toolbar>
</app-container>
</header>
 
O conteúdo do header foi envolvido pelo componente app-container que está utilizando a diretiva ng-content. Dessa forma, o estilo definido no :host do componente container será aplicado corretamente aos elementos do header.
Alternativa correta
<header class="app-header">
  <app-container>
    <ng-content></ng-content>
  </app-container>
</header>

@@07
Para saber mais: uso do ng-content para mais de um conteúdo

O <ng-content>
O ng-content é uma diretiva do Angular que permite a criação de componentes flexíveis e reutilizáveis, capazes de receber e exibir conteúdo dinâmico. É uma ferramenta poderosa para criar componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo.

Uso do <ng-content> para múltiplas injeções de conteúdo
Ao criar componentes reutilizáveis, muitas vezes é necessário injetar diferentes tipos de conteúdo em posições específicas. Por exemplo, em um componente de layout, você pode ter a necessidade de inserir um cabeçalho, um corpo e um rodapé. O desafio é como permitir que esses conteúdos sejam inseridos de forma flexível, sem a necessidade de criar múltiplas propriedades de entrada.

Controlando o conteúdo injetado com o select
O seletor select é usado em conjunto com o ng-content para especificar quais elementos serão inseridos em cada ponto de inserção. Ele permite filtrar os elementos que serão injetados em um determinado ponto de inserção, fornecendo maior controle sobre a estrutura e o estilo do componente.

Exemplo:

Suponha que você está criando um componente chamado <app-home> que possui dois pontos de inserção de conteúdo: título e conteúdo. Você pode utilizar o select para especificar quais elementos serão inseridos em cada ponto de inserção. Veja o exemplo abaixo:

<app-home>
    <div class=”titulo”>
      <h1>Título </h1>
    </div>
    <div class=”conteudo”>
      <p>Conteúdo…</p>
    </div>
</app-home>
COPIAR CÓDIGO
Acima, criamos o template de <app-home> com o título e conteúdo que devem ser padronizados.

Em seguida, passamos no template do container o ng-content com o select para injetar o conteúdo nos pontos de inserção conforme desejarmos:

<ng-content select=".titulo"></ng-content>
<div class="content-body">
  <ng-content select=".conteudo"></ng-content>
</div>
COPIAR CÓDIGO
Nesse exemplo, o conteúdo dentro do elemento com a classe titulo será injetado no primeiro ponto de inserção <ng-content select=".titulo"></ng-content>, enquanto o conteúdo dentro do elemento com a classe conteudo será injetado no segundo ponto de inserção <ng-content select=".conteudo"></ng-content>. Dessa forma, você tem controle total sobre quais elementos são injetados em cada ponto específico do componente.

Fechamento uso ng-content
O ng-content é uma ferramenta poderosa no desenvolvimento de componentes reutilizáveis e flexíveis. Ele permite que você crie componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo, proporcionando maior controle sobre a estrutura e o estilo. Ao usar o ng-content em conjunto com o select, você pode criar componentes altamente customizáveis, capazes de receber e exibir múltiplos tipos de conteúdo de forma dinâmica.

@@08
Desafio: crie o footer da aplicação

Agora que você aprendeu a criar componentes reutilizáveis e um container que recebe conteúdo dinamicamente através da diretiva ng-content, está na hora de colocar esses conhecimentos em prática!
O seu desafio será criar o rodapé da aplicação Jornada Milhas, observando a estilização e os cuidados para que esse componente fique otimizado e fiel ao design do Figma.

Para criar o footer da aplicação, acessamos o arquivo footer.component.html, que foi criado na pasta shared e adicionamos o seguinte código:
<footer class="app-footer">
  <app-container>
    <div class="inner">
      <ul>
        <li>
          <img src="assets/imagens/logo-com-tagline.png" alt="">
        </li>
        <li>
          Horário de atendimento: 08h - 20h (Segunda a Sábado)
        </li>
        <li>
          Desenvolvido por Alura. Projeto fictício sem fins comerciais
        </li>
      </ul>
      <ul class="socials">
        <li>Acesse nossas redes:</li>
        <li>
          <button mat-icon-button>
            <img src="assets/icones/whatsapp.png" alt="Ícone do whatsapp">
          </button>
          <button mat-icon-button>
            <img src="assets/icones/instagram.png" alt="Ícone do instagram">
          </button>
          <button mat-icon-button>
            <img src="assets/icones/twitter.png" alt="Ícone do twitter">
          </button>
        </li>
      </ul>
    </div>
  </app-container>
</footer>
COPIAR CÓDIGO
Observe que envolvemos o componente de rodapé com o elemento <app-container> que foi criado anteriormente.

Lembrando que para que os ícones do código acima apareçam corretamente, é importante que você tenha baixado a pasta de assets que foi disponibilizada na atividade “Preparando o ambiente”, da aula 1 e adicionado ao seu projeto. Caso não tenha feito isso, pode fazer o download da pasta de assets clicando aqui.

No arquivo footer.component.scss, criamos o código a seguir:

.app-footer {
  background-color: black;
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 40px;
    }
    ul {
      padding: 0;
      list-style: none;
      &.socials {
        li {
          text-align: center;
        }
      }
    }
  }
}
COPIAR CÓDIGO
E o componente de rodapé está pronto!

@@09
Criando um card reaproveitável

Nayanne: Vamos continuar codando, porque temos prazo para entregar.
Conferindo no Figma, o que falta na nossa homepage é o formulário de busca e os cards, tanto os de promoções quanto os de depoimentos.

Como o formulário de busca é um pouco mais complexo, acho uma boa ideia começarmos pelo card. Até porque já temos o componente na pasta "shared".

Analisando o Figma podemos perceber que existem cards com tamanhos e colorações diferentes, alguns cards possuem background cinza e outros têm background lilás. Precisamos criar um card reutilizável que possa ter essas diferentes variações.

No VS Code, vamos abrir os arquivos card.component.scss e card.component.html.

No HTML criaremos uma div classe card. Para conseguirmos passar diferentes variações, utilizaremos a diretiva ngClass, que será responsável por fazer a estilização condicional. Associaremos essa diretiva a uma variável que chamaremos de variant.

O conteúdo passado para dentro desse card será dinâmico, então usaremos a diretiva ng-content.

<div class="card" [ngClass]="variant">
  <ng-content></ng-content>
</div>
COPIAR CÓDIGO
Agora, vamos criar a variável variant no card.component.ts. Ela será uma propriedade de entrada, então vamos adicionar o decorator @Input().

Por enquanto, temos duas variações dos cards, podemos passar essas duas possibilidades como valor para variant. Passaremos entre aspas simples primary, adicionar uma barra vertical (pipe) e passar a variação secondary.

O caractere da barra vertical (pipe) faz parte de um recurso do TypeScript chamado Union Types, com ela vamos indicar que a variante terá um valor ou outro valor. Além disso, podemos passar um valor inicial padrão, que será o primary.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary'
}
COPIAR CÓDIGO
Em seguida, acessaremos o CSS para cordar os estilos. No card.component.scss passaremos um padding de 24px e estilizaremos as diferentes classes do ngClass. Para isso, usaremos & seguido de ponto e passaremos o nome da classe, &.primary.

Isso significa que os estilos que colocarmos dentro desse bloco serão aplicados aos elementos que possuem a classe card e também a classe primary.

.card {
  padding: 24px;
  &.primary {
    
  }
}
COPIAR CÓDIGO
Vamos verificar quais são as especificações dos estilos de card no Figma. Em seguida, faremos o mesmo para a classe secondary, que terá o estilo do formulário de busca com fundo cinza. Nosso código ficará assim:

.card {
  padding: 24px;
  &.primary {
    background: #FEF7FF;
    border: 1px solid #CAC4D0;
    border-radius: 12px;
  }
  &.secondary {
    background: #F5F5F5;
    border-radius: 16px;
  }
}
COPIAR CÓDIGO
Vinícios: Recapitulando, nós reutilizamos o ng-content para renderizar tudo que estiver dentro do card. E combinamos várias coisas diferentes.

Nós tipamos o input variant, dizendo que o card deve ser primário ou secundário.

Nayanne: Isso mesmo! E mais adiante, se tivermos outros cards podemos adicionar mais variações. Isso ajuda na reutilização desse componente.

Neste vídeo, nós criamos um card reutilizável e no próximo vídeo continuaremos a criação de componentes!

@@10
Card de busca

Nayanne: Neste vídeo, criaremos o card de busca, que tem uma imagem, o local, preço da passagem e um botão "Ver detalhes".
Para isso, no VS Code, criaremos um novo componente dentro da pasta "shared". Vamos abrir o terminal e parar a aplicação com "Ctrl + C". Em seguida executaremos o comando:

ng gc shared/card-busca
COPIAR CÓDIGO
Após criar o componente, podemos executar a aplicação novamente com ng serve.

Agora, vamos acessar o Angular Material e analisar a seção do componente card.

Nos exemplos do Angular Material, no "Card with multiple sections", podemos ver um componente bem parecido com o da nossa aplicação. O card do exemplo tem uma imagem, descrição e alguns botões de ação.

Na aba "API" do Angular Material, vamos copiar o import do módulo.

import {MatCardModule} from '@angular/material/card';
COPIAR CÓDIGO
Vamos inserir essa linha na lista de imports do app.module.ts do nosso projeto. Além disso, vamos adicionar MatCardModule no array de imports.

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
COPIAR CÓDIGO
Agora já podemos utilizar.

De volta à aba de exemplo do Angular Material, vamos copiar o código HTML do card exemplo para usarmos de base para a construção do nosso card.

<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
COPIAR CÓDIGO
Vamos colar esse código no card-busca.component.html e fazer algumas modificações.

No card do exemplo, tem um cabeçalho com o nome. Não precisaremos desse trecho, podemos apagar o bloco da tag mat-card-heard.

Também vamos mudar o caminho da imagem e o alt da imagem. Depois, vamos apagar o parágrafo do exemplo e adicionar uma lista <ul> com duas <li>: Veneza e 500.

Na tag mat-card-actions , deixaremos apenas um botão de ação chamado "VER DETALHES". Mudaremos também o tipo do botão para mat-flat-button e passaremos a cor primary para ficar com a cor roxa.

<mat-card class="card-busca">
  <img mat-card-image
    src="assets/imagens/Veneza.png" alt="Imagem de Veneza">
  <mat-card-content>
    <ul>
      <li>Veneza</li>
      <li>R$ 500</li>
    </ul>
  </mat-card-content>
  <mat-card-actions>
    <button mat-flat-button color="primary">VER DETALHES</button>
  </mat-card-actions>
</mat-card>
COPIAR CÓDIGO
Agora, precisamos estilizar no SCSS. O card-busca.component.scss terá o seguinte código:

.card-busca {
  max-width: 320px;
  background-color: #FEF7FF;
  border-radius: 12px;
  button {
    width: 100%;
    margin: 0 16px 48px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 12px;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #1D1B20;
      text-align: center;
    }
  }
}
COPIAR CÓDIGO
Para testar, vamos acessar o home.component.html e inserir o seletor do app-card-busca.

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
    </app-container> 
COPIAR CÓDIGO
Vamos verificar como está na aplicação.

Os cards estão aparecendo na tela, mas ainda não estão do jeito que queremos.

Vinícios: Nós precisamos organizar os cards para que eles fiquem lado a lado. Precisaremos de algum contêiner, algum display: flex para deixá-los alinhados como está no Figma.

Nayanne: Vamos resolver isso no próximo vídeo!

@@11
Alinhando os cards

Nayanne: No vídeo anterior, criamos o card de busca usando como base o um código exemplo do Angular Material.
Mas os cards estão listados um abaixo do outro, precisamos resolver isso.

No arquivo home.component.html, adicionaremos uma div com a classe card-wrapper para envolver esses cards de busca.

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <div class="card-wrapper">
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
    </div>
    </app-container> 
COPIAR CÓDIGO
E no CSS home.component.scss, vamos colar os estilos.

.homepage {
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    margin-bottom: 40px;
  }
}
COPIAR CÓDIGO
Podemos voltar para a aplicação no navegador. Agora, sim! Os cards estão um ao lado do outro em fileiras de três.

Para ficar mais parecido com o Figma, vamos adicionar o título "Promoções". Vamos adicionar também o título dos cards de depoimentos.

  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <h2>Promoções</h2>
    <div class="card-wrapper">
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
    </div>
    <h2>Depoimentos</h2>
    </app-container> 
COPIAR CÓDIGO
Desafio: crie o card de depoimento
Vinícios: Então, o próximo passo é desenvolver o card de depoimentos.

Nayanne: Exatamente. Você, que está assistindo a esta aula, pode nos ajudar nessa. Vai ficar como desafio para você colocar em prática tudo o que você está aprendendo e codar o componente do card de depoimento.

Vinícios: Essa parte de olhar o Figma e transformar isso em um componente do Angular é o que fazemos no dia a dia enquanto pessoas desenvolvedoras de front-end. Então, ficaremos muito contentes se você desenvolver esse desafio aí na sua máquina!

@@12
Desafio: crie o card de depoimento

Você aprendeu a criar cards reaproveitáveis e entendeu como aplicar estilos e personalização, então já é hora de colocar seus conhecimentos em prática! Seu próximo desafio será criar os cards de depoimento para a aplicação Jornada Milhas, levando em consideração a estilização e os requisitos de design fornecidos no Figma.
Mãos à obra e aproveite esse desafio para aprimorar suas habilidades e melhorar ainda mais o layout da aplicação Jornada Milhas!

Para solucionar esse desafio, começamos parando a aplicação e no terminal vamos criar o componente card-depoimento, dentro da pasta shared:
ng g c shared/card-depoimento
COPIAR CÓDIGO
Em seguida, no card-depoimento.component.ts, criamos o código a seguir:

import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
COPIAR CÓDIGO
Nesse arquivo, criamos as variáveis depoimento e autoria, do tipo string, com um texto padrão que queremos que seja exibido nos cards.

Depois, vamos construir o template do nosso card, aplicando o seguinte código em card-depoimento.component.html:

<mat-card class="depoimento">
  <mat-card-content>
    <img src="assets/imagens/avatar3.png" alt="Avatar da pessoa autora do depoimento">
    <ul>
      <li>{{ depoimento }}</li>
      <li>
        <strong>{{ autoria }}</strong>
      </li>
    </ul>
  </mat-card-content>
</mat-card>
COPIAR CÓDIGO
Aqui criamos o código do card de depoimento utilizando o componente MatCard do Angular Material. O card será estilizado com a classe "depoimento" e contém o conteúdo do depoimento de uma pessoa.

Dentro do card, temos uma imagem da pessoa que foi autora do depoimento e o conteúdo do depoimento que é exibido dentro de uma lista não ordenada (ul). O depoimento é exibido em um item de lista (li) através da interpolação do valor da variável "depoimento" usando a sintaxe {{ depoimento }}.

Além disso, o card também exibe a autoria do depoimento em um item de lista separado. O nome da autoria é exibido em negrito (strong) através da interpolação da variável "autoria" usando a sintaxe {{ autoria }}.

Dessa maneira, assim como fizemos no banner, é possível reaproveitar o card várias vezes.

E no projeto, já conseguimos visualizar os cards:

Tela da aplicação Jornada Milhas com fundo branco. O título “Depoimentos” na cor preta aparece no canto superior esquerdo, seguido de três cards retangulares iguais alinhados verticalmente, um embaixo do outro. Dentro de cada card há no canto superior direito a foto do rosto de uma mulher. Abaixo da foto há dois tópicos: o primeiro exibe o texto “Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem“ e o segundo tópico está destacado em negrito e tem o texto “Mariana Faustino”.

Por fim, construímos o estilo do card de depoimento, manipulando o código em card-depoimento.component.scss:

.depoimento {
  max-width: 320px;
  background-color: #FEF7FF;
  border: none;
  img {
    max-width: 56px;
    max-height: 56px;
    margin-top: 16px;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  mat-card-content {
    display: flex;
    align-items: start;
    gap: 16px;
  }
}
COPIAR CÓDIGO
E já temos os cards de depoimento funcionando e estilizados no nosso projeto!

Tela da aplicação Jornada Milhas com fundo branco. O título “Depoimentos” na cor preta aparece no canto superior esquerdo, seguido de três cards quadrados iguais alinhados horizontalmente, um ao lado do outro. Dentro de cada card há no canto superior direito a foto do rosto de uma mulher. Ao lado da foto há dois tópicos: o primeiro exibe o texto “Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem“ e o segundo tópico está destacado em negrito e tem o texto “Mariana Faustino”. A cor de fundo dos cards é um lilás claro.

@@13
O que aprendemos?

Nessa aula, você aprendeu como criar:
Os componentes de banner e título com conteúdo flexível;
Um container flexível com a diretiva ng-content;
Cards reaproveitáveis com variação de estilos;
Card de busca utilizando o mat-card do Angular Material.

#### 28/02/2024

@03-Criando o formulário de busca

@@01
Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para baixá-lo clique neste link ou veja nosso repositório do Github.

https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-2.zip

https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-2

@@02
Preparando o ambiente

Na próxima aula, vamos construir o novo componente form-busca e utilizaremos o código à seguir para sua estilização:
.form-busca {
  margin: 40px 0;
  display: block;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
  }
  .input-container {
    margin-bottom: -1.25em;
  }
  .mat-button-toggle-checked {
    background-color: #F7F2FA;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
}
COPIAR CÓDIGO
Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

@@03
Botões e chips do Material

Repositório da aula 3 no GitHub
Nayanne: Na aula anterior, desenvolvemos diversos componentes para construir a tela inicial da aplicação Jornada Milhas. Além disso, propusemos como desafio a codificação do componente de card de depoimento e sua inclusão no projeto.

localhost:4200
COPIAR CÓDIGO
Ao acessarmos a aplicação pelo endereço fornecido acima, encontramos o cabeçalho (header), o banner, os cards com as promoções de viagens e, no final da página, os cards de depoimentos.

Figma da aplicação Jornada Milhas
Ao analisarmos no Figma, percebemos que o que falta para concluirmos a página inicial (homer page) é a inclusão do formulário de busca. Isso para que as pessoas usuárias possam encontrar passagens de forma fácil e intuitiva.

Incluindo o formulário de busca
Vinícios: Iremos finalizar o design da página inicial, deixando todas as questões de comportamento para uma etapa futura. Nosso objetivo principal é tornar nossa aplicação idêntica ao que temos no Figma.

Nayanne: Isso mesmo, Vinícios.

Para facilitar a organização, iremos dividir o formulário de busca em vários elementos distintos.

Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".

Vamos iniciar pela implementação dos botões "Ida e volta", "Somente ida" e dos elementos de chips no formulário de busca.

No terminal integrado ao VS Code, criaremos um componente que irá representar o formulário com o seguinte comando:

ng g c shared/form-busca
COPIAR CÓDIGO
Estamos criando dentro da pasta shared um componente chamado form-busca. Ao finalizar a execução do comando acima de criação do componente, rodamos o seguinte comando para iniciar um servidor de desenvolvimento local:

ng serve 
COPIAR CÓDIGO
Vamos deixar a aplicação em execução e fechar o terminal.

À esquerda do VS Code, agora temos uma pasta chamada shared com um subdiretório denominado form-busca. Dentro desse subdiretório, encontram-se quatro arquivos. Clicamos em form-busca.component.html e form-busca.component.scss.

Para implementar o formulário no arquivo form-busca.component.html, podemos aproveitar o componente de card reutilizável que foi criado anteriormente, sendo o <app-card> </app-card> passando a variant="secundary" para adicionar o background cinza. Na sequência, para facilitar a estilização adicionamos uma classe com class="form-busca".

O componente app-card é responsável por fornecer um contêiner visual para o formulário.

form-busca.component.html
<app-card variant="secundary" class="form-busca">

</app-card>
COPIAR CÓDIGO
Dentro do card, adicionamos a tag <form> para envolver os elementos do formulário. Em seguida, criamos uma <div> com a classe flex container. É nessa div que teremos os botões e os chips.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
        
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Angular Material
No site do Angular Material, faremos uma busca pelos elementos que se assemelham ao grupo de botões que temos no formulário de busca. Ao analisar no Figma, identificamos que os botões "Ida e volta" e "Somente ida" são um conjunto de dois botões, nos quais a pessoa usuária pode selecionar apenas um deles.

No menu lateral esquerdo do site, clicamos em "Button toggle" (Botão de alternância). Esse tipo de botão permite que a pessoa usuária selecione uma ou várias opções dentre diversas possibilidades, como podemos observar na seção "Exclusive selection vs. multiple selection" (Seleção exclusiva vs. seleção múltipla), como no exemplo a seguir retirado do próprio site:

Button toggle selection mode
Na parte superior, clicamos na aba "API" e copiamos a linha de código de "API reference for Angular Material button-toggle":

import {MatButtonToggleModule} from '@angular/material/button-toggle';
COPIAR CÓDIGO
Logo após voltamos ao VS Code, e colamos na linha 19 do arquivo app-module.ts, copiamos o nome do módulo e incluímos em imports.

app-module.ts
// código omitido

import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
  ],

// código omitido
COPIAR CÓDIGO
Ao retornarmos ao site, clicamos na aba "Overview" na parte superior para buscarmos um exemplo. Na documentação, é mencionado o uso do mat-button-toggle, que podemos utilizar como botões independentes, mas geralmente são agrupados dentro da tag mat-button-toggle-group que é um grupo de botões.

O mat-button-toggle é um componente do Angular Material que oferece um botão de alternância para selecionar uma ou mais opções de um conjunto de opções. Esse componente indica visualmente o estado selecionado ou não selecionado das opções.
Para visualizarmos o exemplo do Basic button-toggles , clicamos em "Bold" e depois no botão "< >" localizado na parte superior direita, na aba "HTML".

Copiamos o seguinte trecho de código retirado da documentação:

<mat-button-toggle-group name="fontStyle" aria-label="Font Style">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
  <mat-button-toggle value="underline">Underline</mat-button-toggle>
</mat-button-toggle-group>
COPIAR CÓDIGO
Voltamos ao arquivo form-busca.component.html no VS Code, e colamos dentro da div:

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
            <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
            <mat-button-toggle value="bold">Bold</mat-button-toggle>
            <mat-button-toggle value="italic">Italic</mat-button-toggle>
            <mat-button-toggle value="underline">Underline</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Podemos remover os elementos que não iremos utilizar, como o atributo name, e alterar o rótulo para "Tipo de passagem". Considerando que o exemplo original possuía três botões e em nossa aplicação temos apenas dois, podemos remover a última linha antes do fechamento da tag mat-button-toggle-group.

Substituímos o Bold por "IDA E VOLTA" e o Italic por "SOMENTE IDA". Logo após removemos os atributos value="bold" e o value="italic", e quebramos a linha para facilitar a leitura e para adicionar um ícone de check. E podemos remover o <p>form-busca works!</p> na primeira linha.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>ligature</mat-icon>
            IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Adicionando o ícone no botão
Para isso, usamos <mat-icon>ligature</mat-icon> e para adicionar o nome desse ícone vamos analisar na documentação.

Do lado esquerdo, clicamos em "Icon" e depois na aba "API" para importarmos o módulo de ícones com a linha de código da seção "API reference for Angular Material icon" (Referência de API para o ícone Angular Material):

import {MatIconModule} from '@angular/material/icon';
COPIAR CÓDIGO
Voltamos ao VS Code no arquivo app-module.ts e colamos no topo do arquivo e em imports:

app-module.ts
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule
  ],

// código omitido
COPIAR CÓDIGO
Voltando à documentação, para adicionar esses ícones vamos em "Overview" na seção "Font icons with ligatures" e clicamos em "Material icons font". Seremos redirecionados para um Guia dos ícones do Material Design e vamos clicar em Biblioteca de ícones do Material Design .

Há várias maneiras de adicionar um ícone na aplicação.

O ícone que precisamos está nomeado como "Check" e possui o ícone "✓". Ao selecionarmos ele, temos uma aba do lado direito da tela com alguns trechos de código. Para adicionar este ícone, usamos a tag MatIcon e passar o nome do ícone dentro da tag.

Voltamos ao VS Code e removemos o ligature e substituímos por check. Abaixo da tag form, adicionamos o título usando a tag h2.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>check</mat-icon>
            IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Para verificarmos como está ficando, vamos ao arquivo home.component.html e abaixo de "Promoções" adicionamos o seletor do componente, sendo o app-form-busca.

home.component.html
< !-- código omitido -- >

<h2>Promoções</h2>
<app-form-busca></app-form-busca>

< !-- código omitido -- >
COPIAR CÓDIGO
Como usamos algumas classes no form-busca.component.html vamos colar no form-busca.component.scss o CSS desse componente.

form-busca.component.scss
.form-busca {
  margin: 40px 0;
  display: block;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
  }
  .input-container {
    margin-bottom: -1.25em;
  }
  .mat-button-toggle-checked {
    background-color: #F7F2FA;
 }
}
COPIAR CÓDIGO
Após colarmos os estilos da aplicação, abrimos o terminal integrado do VS Code para verificar se a aplicação está sendo executada.

Depois de conferir, acessamos e recarregamos a página da aplicação em localhost:4200. Por enquanto, temos:

Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida".

Temos o card do formulário e os dois botões.

Adicionando os chips
Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".

Agora vamos adicionar os chips ao formulário. Com base na análise feita no Figma, os chips são semelhantes a tags, etiquetas ou filtros.

Para isso, voltamos à documentação do Angular Material e do lado esquerdo clicamos em "Chips" que nos informa que permitem que as pessoas usuárias visualizem informações, façam seleções, filtrem conteúdo e insiram dados.

E são sempre utilizados dentro de um recipiente. Para criar os chips, começamos com um elemento <mat-chip-set>. Em seguida, aninhamos os elementos <mat-chip> dentro do <mat-chip-set>.

Clicando em "API" copiamos a linha de código da seção "API reference for Angular Material chips".

import {MatChipsModule} from '@angular/material/chips';
COPIAR CÓDIGO
E adicionamos no arquivo app-module.ts, conforme feito anteriormente.

app-module.ts
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule
  ],

// código omitido
COPIAR CÓDIGO
Voltando à documentação, vamos buscar por um exemplo na aba "Overview" para colarmos o código na aplicação. No exemplo Basic chips clicamos no botão "< >" e copiamos o trecho de código em HTML:

<mat-chip-listbox aria-label="Fish selection">
  <mat-chip-option>One fish</mat-chip-option>
  <mat-chip-option>Two fish</mat-chip-option>
  <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
  <mat-chip-option color="warn">Warn fish</mat-chip-option>
</mat-chip-listbox>
COPIAR CÓDIGO
É semelhante ao grupo de botões, onde temos várias opções que ficam dentro de uma lista. Para isso, utilizamos a tag mat-chip-listbox, em que cada opção é representada por um mat-chip-option.

Colamos esse trecho de código no arquivo form-busca.component.html após o fechamento da tag mat-button-toggle-group.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>check</mat-icon>
                 IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        <mat-chip-listbox aria-label="Fish selection">
            <mat-chip-option>One fish</mat-chip-option>
            <mat-chip-option>Two fish</mat-chip-option>
            <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
            <mat-chip-option color="warn">Warn fish</mat-chip-option>
        </mat-chip-listbox>
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Substituímos o Fish selection por Seleção de passagens e removemos as seguintes linhas de código:

<mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
<mat-chip-option color="warn">Warn fish</mat-chip-option>
COPIAR CÓDIGO
Vamos deixar as opções fixas, por enquanto. Para isso, substituímos o One fish por 1 adulto e Two fish por Econômica. Podemos deixar a primeira opção selecionada por padrão, adicionando o selected.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle>
                 <mat-icon>check</mat-icon>
                 IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        <mat-chip-listbox aria-label="Seleção de passagens">
            <mat-chip-option selected>1 Adulto</mat-chip-option>
            <mat-chip-option>Econômica</mat-chip-option>
        </mat-chip-listbox>
        </div>
    </form>
</app-card>
COPIAR CÓDIGO
Testando na aplicação
Acessando a aplicação, temos:

Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica".

Temos agora o grupo de botões e de chips.

Conclusão
No próximo vídeo, continuaremos a adicionar os elementos restantes do formulário.

Até lá!

@@04
Para saber mais: agrupamentos no Angular Material

O componente mat-button-toggle
Um dos elementos fornecidos pelo Angular Material é o mat-button-toggle, que permite às pessoas desenvolvedoras criar botões que podem ser alternados entre estados ativos e inativos.

Benefícios do uso do mat-button-toggle-group
Embora o "button toggle" possa ser utilizado individualmente, é comum utilizá-lo em conjunto com o elemento "mat-button-toggle-group". Esse recurso de agrupamento proporciona diversos benefícios, como a possibilidade de definir uma aparência específica para os botões através do atributo appearance e a opção de seleção de múltiplos botões ao adicionar o atributo multiple, como você pode observar no exemplo a seguir:

      <h3>Exemplo seleção múltipla e atributo appearance</h3>
      <mat-button-toggle-group appearance="legacy" name="ingredientes" aria-label="Ingredientes" multiple>
        <mat-button-toggle value="farinha">Farinha</mat-button-toggle>
        <mat-button-toggle value="ovos">Ovos</mat-button-toggle>
        <mat-button-toggle value="acucar">Açucar</mat-button-toggle>
      </mat-button-toggle-group>
COPIAR CÓDIGO
Aumente o potencial dos componentes com as melhores práticas do Angular Material
Ao utilizar o mat-button-toggle ou outros componentes, é importante seguir as práticas recomendadas pela documentação do Angular Material. Essas práticas garantem o uso correto dos componentes e proporcionam uma melhor organização do código. Além disso, muitos componentes do Angular Material possuem comportamentos de dependência ou necessitam ser agrupados com outras tags para fornecer recursos adicionais, como é o caso do mat-chip, mat-radio-button, entre outros.

Portanto, ao utilizar o Angular Material, é fundamental estar atento às diretrizes e melhores práticas fornecidas pela documentação, a fim de aproveitar ao máximo os recursos oferecidos pelos componentes e garantir um código bem estruturado e de fácil manutenção.

@@05
Campos do formulário

Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".
Vinícios: Iniciamos o formulário de busca de passagens, onde temos um título indicando o propósito do formulário. Também incluímos dois botões para selecionar se é uma busca apenas de ida ou de ida e volta. Além disso, adicionamos indicadores para a quantidade de pessoas e o tipo de passagem.

Para aprimorar a experiência da pessoa usuária ao definir a origem e o destino, iremos utilizar os ícones do Material Design, garantindo uma experiência visualmente agradável e intuitiva. Observem que essas opções de campos podem ser trocadas.

Vamos dar início ao desenvolvimento dessa estrutura visual, não é mesmo, Nay?

Nayanne: Isso mesmo, começaremos a desenvolver os campos do formulário de busca.

Criando os campos do formulário
Angular Material
Nayanne: Na documentação do Angular Material, do lado esquerdo clicamos em Form field . Nesta seção temos os campos do formulário que precisamos, onde temos alguns exemplos:

Simple form field ("Campo de formulário simples")
Form field appearance variants ("Variantes de aparência do campo de formulário")
Temos o modelo simples e também algumas variantes de aparência. Ao analisarmos no Figma, podemos utilizar a segunda opção de variantes de aparência do Form field.

Mas antes clicamos na aba "API" e copiamos a linha da importação:

API reference for Angular Material form-field
import {MatFormFieldModule} from '@angular/material/form-field';
COPIAR CÓDIGO
No VS Code, colamos no arquivo app-module.ts e adicionamos aos imports:

app-module.ts
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule,
        MatFormFieldModule
  ],

// código omitido
COPIAR CÓDIGO
Voltando à documentação, clicamos no botão "< >", e temos:

<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
COPIAR CÓDIGO
Mas iremos copiar somente o seguinte trecho:

<mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
</mat-form-field>
COPIAR CÓDIGO
Após copiar o código voltamos ao arquivo form-busca.component.html e após o fechamento a tag </div> criamos outra div para representar a linha seguinte dos campos. Na sequência, colamos o trecho de código que copiamos da documentação.

form-busca.component.html
<app-card variant="secundary" class="form-busca">
    <form>
            <h2>Passagens</h2>
            <div class="flex-container">
                    <mat-button-toggle-group aria-label="Tipo de passagem">
                        <mat-button-toggle>
                             <mat-icon>check</mat-icon>
                             IDA E VOLTA 
                        </mat-button-toggle>
                    <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
            </mat-button-toggle-group>
            <mat-chip-listbox aria-label="Seleção de passagens">
                    <mat-chip-option selected>1 Adulto</mat-chip-option>
                    <mat-chip-option>Econômica</mat-chip-option>
            </mat-chip-listbox>
            </div>
            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Outline form field</mat-label>
                    <input matInput placeholder="Placeholder">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                    <mat-hint>Hint</mat-hint>
                </mat-form-field>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Substituímos "Outline form field" por "Origem" e adicionamos esse campo ao placeholder. Removemos a tag <mat-hint>, pois não é necessária, uma vez que é uma dica que fica abaixo do campo e não temos isso no projeto.

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Agora precisamos dos ícones, mas antes vamos verificar a aplicação.

Ao voltarmos para analisar a aplicação, observamos que os campos que montamos na aula anterior estão quebrados.

Vinícios: Acredito que tenhamos esquecido de importar o componente de input. Importamos o field, mas não me lembro de termos importado o input.

Nayanne: É verdade.

Vamos clicar com o botão direito na aplicação e depois em "Inspecionar", para verificarmos o erro no console.

O erro abaixo foi parcialmente transcrito.
ERROR Error: mat-form-field core.mjs:10132 must contain a MatFormFieldControl.
at getMatFormFieldMissingControlError (form-field.mjs:360:12)

at MatFormField._assertFormFieldControl (form-field.mjs:628:19)

at MatFormField.ngAfterContentInit (form-field.mjs:529:14) at callHookInternal (core.mjs:3806:14)

…

Informa que o mat-form-field precisa ter um MatFormFieldControl. Esse campo requer um controle associado a ele.

Na documentação, em "Form field", descemos a página até o final para verificar os erros que podem ocorrer, onde temos "Error: mat-form-field must contain a MatFormFieldControl".

Nessa seção do erro, é explicado que precisamos adicionar um controle. Isso ocorre porque o Angular Material está integrado ao Angular, e como não estamos lidando com a parte de controle de formulário, é necessário aplicar uma solução temporária.

Texto traduzido e retirado da documentação Angular Material:
Este erro ocorre quando você não adicionou um controle de campo de formulário ao seu campo de formulário. Se o seu campo de formulário contiver um elemento <input> ou <textarea> nativo, certifique-se de ter adicionado a diretiva matInput a ele e de ter importado MatInputModule. Outros componentes que podem atuar como um controle de campo de formulário incluem <mat-select>, <mat-chip-list> e qualquer controle de campo de formulário personalizado que você criou.
Vamos importar o MatInputModule.

Importando o MatInputModule
Input
Do lado esquerdo clicamos em "Input", e na aba "API" copiamos a linha de código com a importação:

API reference for Angular Material input
import {MatInputModule} from '@angular/material/input';
COPIAR CÓDIGO
E importamos no arquivo app-module.ts:

app-module.ts
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule
  ],

// código omitido
COPIAR CÓDIGO
Acessando a aplicação, temos:

Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, há um campo de preenchimento chamado "Origem".

Agora está funcionando.

Adicionando os ícones
Para alterar os ícones dos campos, vamos ao arquivo form-busca.component.html.

É interessante que o Angular Material nos traz uma forma de inserirmos os ícones onde desejarmos através do atributo matSuffix. Este atributo adiciona o ícone no final do campo, e para adicionar no começo usamos o matPrefix.

Portanto, copiamos a linha com o matSuffix e colamos abaixo do campo "Origem", alterando para matPrefix. Em seguida, alteramos os nomes dos ícones, onde a lupa é o search.

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix></mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Vamos consultar a documentação para verificar o ícone correspondente ao avião decolando.

Google Fonts
Buscamos por "plane" que significa avião em inglês e observamos que já aparecem as opções "Flight Takeoff" (decolando) e "Flight Land" (pousando). Para verificar o nome dos ícones, clicamos neles e na janela do lado direito copiamos o que consta na seção "Inserting the icon", sendo:

<span class="material-symbols-outlined">
flight_takeoff
</span>
COPIAR CÓDIGO
Copiamos somente o nome flight_takeoff e colamos na tag matPrefix

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Ao acessar a aplicação, agora temos o ícone do avião decolando à esquerda do botão "Origem" e à direita temos o ícone da lupa.

Analisando no Figma, temos um botão de mudança entre os campos "Origem" e "Destino".

Vinícios: Vale a pena comentar que, apesar de ter um ícone, ele representa uma ação da pessoa usuária e estará dentro de um botão.

Nayanne: Isso mesmo.

Pesquisando por "Sync" na documentação, obtemos que o nome do botão é "Sync alt".

sync_alt
COPIAR CÓDIGO
No VS Code, adicionamos na linha 26 digitando <button mat-icon-button> </button>. entro colocamos <mat-icon>sync_alt</mat-icon>.

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Analisando na aplicação, observamos que o botão está presente, mas falta uma classe. Para corrigir isso, na linha 18, onde temos o mat-form-field, adicionamos class="input-container".

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field class="input-container" appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Agora está alinhado com o campo "Origem".

Para fazermos o outro campo copiamos da linha 18 até a 25 do código e colamos após o fechamento da tag </button>:

Trecho para ser copiado:
<mat-form-field class="input-container" appearance="outline">
    <mat-label>Origem</mat-label>
    <mat-icon matPrefix>
        flight_takeoff
    </mat-icon>
    <input matInput placeholder="Origem">
    <mat-icon matSuffix>search</mat-icon>
</mat-form-field>
COPIAR CÓDIGO
Vamos ajustar com o nome do outro ícone e botão:

form-busca.component.html
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field class="input-container" appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Destino</mat-label>
        <mat-icon matPrefix>
          flight_land
        </mat-icon>
        <input matInput placeholder="Destino">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
            </div>
    </form>
</app-card>
COPIAR CÓDIGO
Na aplicação, obtemos:

Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, há dois campos de preenchimento chamados "Origem" e "Destino" com um botão de mudança entre eles. Ambos estão com os respectivos ícones.

Arquivo form-busca.component.html no repositório do GitHub
Conclusão
Nayanne: No próximo vídeo, continuaremos a montar o formulário de busca, incluindo os campos para a seleção de dados.

Até mais!

@@06
Criando campos de formulário

Imagine que você está trabalhando como dev em um projeto Angular e implementou um campo de formulário utilizando a propriedade matInput do Angular Material, como você pode ver no código a seguir:
<form>
    <mat-label>Campo 1</mat-label>
    <input matInput appearance="outline" value="1">
</form>
COPIAR CÓDIGO
No entanto, ao testar o código, você percebeu que o campo não está funcionando corretamente e o layout do input está quebrado. A propriedade de appearance que foi definida como outline também não está sendo aplicada.

Observe as alternativas a seguir e assinale o código que apresenta a solução para esse problema:

<form>
      <mat-label>Textarea</mat-label>
      <textarea matInput value="1"></textarea>
</form>
 
Alternativa correta
<form>
    <mat-form-field appearance="outline">
      <mat-label>Campo 1</mat-label>
      <input matInput placeholder="Informe valor 1" value="1">
   </mat-form-field>
</form>
 
Quando criamos componentes de formulário como input, textarea, select, entre outros com o Angular Material, precisamos envolver esse campo com o <mat-form-field>. Esse componente é o que permite que esses campos recebam os estilos como a propriedade appearance ou a mensagem de dica sobre o campo(mat-hint).
Alternativa correta
<form>
    <mat-form-field>
        <mat-label>Campo 1</mat-label>
        <mat-input placeholder="Informe valor 1" value="1"></mat-input>
    </mat-form-field>
</form>
 
Alternativa correta
<form>
    <mat-label>Campo 1</mat-label>
    <mat-form-field appearance="outline" placeholder="Informe valor 1" value="1">
</form>

@@07
Para saber mais: ícones do Material Design

Os ícones do Material Design são um conjunto de ícones desenvolvidos pelo Google. Eles fornecem uma vasta coleção de símbolos que podem ser usados para melhorar a aparência e a usabilidade de interfaces de usuário.
Para importar os ícones do Material Design em seu projeto, você pode seguir os seguintes passos:

Acesse a biblioteca de ícones do Material Design clicando aqui;
Na biblioteca, você encontrará uma lista de todos os ícones disponíveis. Clique no ícone desejado para ver mais detalhes, como o nome do ícone e a classe CSS correspondente;
Para usar os ícones em seu projeto, você pode selecioná-lo e obter o código HTML ou a classe CSS para incorporá-lo em seu projeto;
Ainda, se estiver usando o Angular Material, como fizemos na aula, basta importar o MatIconModule no app.module.ts e adicionar seu <mat-icon> com a propriedade fontIcon="" recebendo o nome do ícone desejado, como no exemplo abaixo:
<mat-icon fontIcon="home"></mat-icon>
COPIAR CÓDIGO
Também é possível adicionar um ícone diretamente entre as tags, como fizemos em aula:

<mat-icon>home</mat-icon>
COPIAR CÓDIGO
Ambas as implementações de código acima resultam na exibição do ícone home:

ícone “home” sendo exibido, com fundo cinza claro e o contorno de uma casinha na cor preta

Caso você queira explorar mais as possibilidades de uso dos ícones, você pode acessar o Guia dos ícones do Material Design clicando aqui.

https://developers.google.com/fonts/docs/material_icons?hl=pt-br

https://fonts.google.com/icons?hl=pt-br

@@08
Campos para data

Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".
Vinícios: Estamos nos aproximando da parte final do formulário de busca, faltando apenas os campos de "Data de Ida" e "Data de Volta", além do botão de ação com o texto "Buscar". No entanto, a aplicação será um pouco diferente, não é, Nay?

Nayanne: Isso mesmo.

Esses campos ficarão de desafio para você! Esses campos são semelhantes aos campos "Origem" e "Destino" que criamos, porém com algumas diferenças nos detalhes.

Iremos fornecer algumas dicas sobre como criá-los. Ao analisar a documentação, identificamos que o componente necessário para esse cenário é o Datepicker.

Datepicker
É necessário seguir o mesmo procedimento que fizemos anteriormente: importar o módulo na seção "API reference for Angular Material datepicker" da aba "API", inserir o módulo no array de imports e, em seguida, selecionar um exemplo na aba "Overview" da documentação que seja semelhante ao que estamos utilizando.

API reference for Angular Material datepicker
import {MatDatepickerModule} from '@angular/material/datepicker';
COPIAR CÓDIGO
Clicando no botão "< >" da documentação, temos:

<mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
COPIAR CÓDIGO
Basta copiar o trecho de código e colar no arquivo, adaptando-o conforme as necessidades do projeto.

Lembrando que, ao final da documentação, encontramos algumas soluções para possíveis problemas que possam surgir.
Vinícios: Caso encontre dificuldades, não se preocupe, pois iremos disponibilizar o gabarito para auxiliar no processo.

Nayanne: Além dos campos "Data de Ida" e "Data de Volta", não nos esqueceremos de adicionar o botão "Buscar" para submeter esses dados quando adicionarmos as funcionalidades.

Dessa forma, concluímos o formulário de busca.

Vinícios: Agora o desafio está sob sua responsabilidade!

@@09
Desafio: crie os campos para data

Nas aulas anteriores, aprendemos a construir nosso formulário de busca, adicionamos o button-toggle, os chips e também os campos de origem e destino. Agora é com você!
Seguindo o design do figma, para que o layout do formulário de busca fique completo, precisamos dos campos de Data de ida e Data de volta, além de um botão de buscar. Esse é o momento de colocar seu aprendizado em prática para construir esses componentes que faltaram.

Lembre-se que, se você se deparar com algum erro ao longo da criação desses componentes, na documentação do Angular Material, rolando até o final da página, você pode encontrar os erros mais comuns e suas soluções. Além disso, você também pode conferir o gabarito a seguir. É muito importante que você faça esse desafio e exercite sua capacidade de lidar com os bugs que podem surgir pelo caminho.

https://material.angular.io/components/datepicker/overview

Para criar os campos de data, começamos importando o módulo do datepicker no app.module.ts:
import { MatDatepickerModule } from '@angular/material/datepicker';
COPIAR CÓDIGO
Não se esqueça de adicionar o MatDatepickerModule ao array de imports, no mesmo arquivo.

Em seguida, copiamos o primeiro exemplo de datepicker da documentação do Angular Material e vamos colar no form-busca.component.html, após o input de Destino:

      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker">
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
COPIAR CÓDIGO
Como fizemos antes, vamos substituir as propriedades de acordo com o que precisamos:

<mat-form-field class="input-container" appearance="outline">
        <mat-label>Data de ida</mat-label>
        <input matInput [matDatepicker]="ida">
        <mat-datepicker-toggle matIconSuffix [for]="ida"></mat-datepicker-toggle>
        <mat-datepicker #ida></mat-datepicker>
 </mat-form-field>
COPIAR CÓDIGO
Adicionamos a classe input-container, que é o padrão de estilo dos campos que foi criado no SCSS, além da propriedade appearance="outline", que determina que o campo vai ter uma borda ao seu redor. Removemos o mat-hint que não está no figma e substituímos os seletores definidos como pickerpor ida. Vamos repetir o mesmo processo para o campo de volta:

<mat-form-field class="input-container" appearance="outline">
       <mat-label>Data da volta</mat-label>
       <input matInput [matDatepicker]="volta">
       <mat-datepicker-toggle matIconSuffix [for]="volta"></mat-datepicker-toggle>
       <mat-datepicker #volta></mat-datepicker>
</mat-form-field>
COPIAR CÓDIGO
Então, criamos o botão de BUSCAR:

      <button mat-flat-button color="primary">BUSCAR</button> 
COPIAR CÓDIGO
O código final do arquivo form-busca.component.html fica assim:

<app-card variant="secondary" class="form-busca">
  <form>
    <h2>Passagens</h2>
    <div class="flex-container">
      <mat-button-toggle-group aria-label="Tipo de passagem">
        <mat-button-toggle checked>
          <mat-icon>check</mat-icon>
          IDA E VOLTA
        </mat-button-toggle>
        <mat-button-toggle>SOMENTE IDA</mat-button-toggle>
      </mat-button-toggle-group>
      <mat-chip-listbox (click)="openDialog()" aria-label="Seleção de passagens">
        <mat-chip-option selected>1 adulto</mat-chip-option>
        <mat-chip-option>Econômica</mat-chip-option>
      </mat-chip-listbox>
    </div>
    <div class="flex-container">
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Origem</mat-label>
        <mat-icon matPrefix>
          flight_takeoff
        </mat-icon>
        <input matInput placeholder="Origem">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Destino</mat-label>
        <mat-icon matPrefix>
          flight_land
        </mat-icon>
        <input matInput placeholder="Destino">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Data de ida</mat-label>
        <input matInput [matDatepicker]="ida">
        <mat-datepicker-toggle matIconSuffix [for]="ida"></mat-datepicker-toggle>
        <mat-datepicker #ida></mat-datepicker>
      </mat-form-field>
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Data da volta</mat-label>
        <input matInput [matDatepicker]="volta">
        <mat-datepicker-toggle matIconSuffix [for]="volta"></mat-datepicker-toggle>
        <mat-datepicker #volta></mat-datepicker>
      </mat-form-field>
      <button mat-flat-button color="primary">BUSCAR</button>
    </div>
  </form>
</app-card>
COPIAR CÓDIGO
No entanto, ao abrir a aplicação, vamos nos deparar com o seguinte erro no console:

Tela do console da aplicação Jornada Milhas exibindo o log do erro “MatDatepicker: No provider found for DateAdapter” Consultamos a documentação do datepicker e rolamos até o final da página, onde é possível visualizar que a solução para esse erro é importar o MatNativeDateModule no app.module.ts:

import { MatNativeDateModule } from '@angular/material/core';
COPIAR CÓDIGO
Não se esqueça de adicionar o MatNativeDateModule no array de imports.

E pronto, o layout do formulário de busca está pronto!

Tela do componente form-busca da aplicação Jornada Milhas exibindo os campos de Data de ida e Data de volta bem como o botão “Buscar” já implementados

https://material.angular.io/components/datepicker/overview

@@10
O que aprendemos?

Nessa aula, você aprendeu como:
Utilizar os componentes de chips e button-toggle do Angular Material;
Criar os campos de origem e destino do Jornada Milhas;
Incluir ícones do Material Design na aplicação;
Construir campos de data com o datepicker do Angular Material.

#### 28/02/2024

@04-Criando o modal

@@01
Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para baixá-lo clique neste link ou veja nosso repositório do Github.

https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-3.zip

https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-3

@@02
Preparando o ambiente

Na próxima aula, vamos construir o novo componente modal e utilizaremos o código à seguir para sua estilização:
.modal {
  border: 1px solid #1D1B20;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    padding: 12px;
  }
  .selecao-idade {
    display: flex;
    justify-content: space-between;
    ul {
      list-style-type: none;
      margin: 0 0 0 -1em;
      padding: 0;
      li {
        margin-bottom: 10px;
        margin: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1D1B20;
        text-align: start;
        padding: 0;
        span {
          vertical-align: middle;
          padding: 0 12px;
        }
      }
    }
  }
  .selecao-categoria {
    margin-top: 32px;
    color: #1D1B20;
  }
  .modal-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button {
      margin: 0 8px;
      width: 100%;
    }
  }
}
COPIAR CÓDIGO
Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

@@03
Acessando o modal

Vinícios (Vinny): Estamos chegando agora na faze final da nossa entrega. O Jornada Milhas está quase pronto e, para fazemos os ajustes finais, construiremos uma Modal para incrementar o comportamento do formulário de busca.
Nayanne (Nay): Acessando a aplicação, percebemos que ela está bem completa, inclusive eu já adicionei o banner acima do rodapé. A única coisa que falta para nossa entrega é o modal, que será aberto quando clicarmos nos chips do formulário de busca.

Na seção Passagens, ao clicarmos em "Econômica", abrimos o modal "Viajante". Portanto, eu vim do "futuro" para mostrar como essa implementação do modal precisa ficar.

Nesse modal, temos o espaço para informar a quantidade de passageiros de acordo com a idade, também existem informações de categorias e, na parte inferior um botão escrito "Buscar". Clicando nele, fechamos a janela. Esse é o elemento que construiremos agora.

Acessaremos o VS Code e, no terminal, pressionaremos "Ctrl + C" para finalizarmos a aplicação. Abrindo a aba "Explorer" (Explorador), na lateral esquerda, observamos que ainda não criamos o componente modal, então voltaremos ao Terminal e escreveremos ng g c shared/modal para criarmos esse componente dentro da pasta "shared".

Após um breve carregamento, nosso componente é criado e, em seguida, escreveremos ng server para executarmos nossa aplicação. Enquanto a aplicação carrega, acessaremos o site do Angular Material para procurar um componente que nos ajudará nesta tarefa.

Para criar o modal, podemos usar o componente Dialog (Diálogo), que criará uma caixa de diálogo onde a pessoa poderá visualizar algumas informações, acrescentar dados, entre outras coisas. Abrindo a seção Dialog, encontramos alguns exemplos de caixas de diálogo.

Na seção "Dialog Overview" tem um campo interativo, que está perguntando meu nome. Vou escrever o nome "Vinny" e clicar no botão "Pick one", logo abaixo do campo. Fazendo isso, ele abre uma caixa de diálogo com uma mensagem de saudação e pergunta qual o meu animal favorito, com um campo para escrever a resposta.

Qual seu animal favorito, Vinny?

Vinny: São "catioros" (cachorros).

Nay: Então vou escrever "catioro" (cachorro) e clicar no botão "Ok", na parte inferior da caixa de diálogo. Com isso, a caixa de diálogo fecha e, abaixo do botão "Pick one", da tela anterior, apareceu a mensagem "*You chose: *catioro" (Você escolheu: catioro).

O nosso modal não terá tantas informações, então vamos procurar um modelo mais simples, que não precisaremos personalizar tanto. Antes disso, clicaremos na aba "API" e copiaremos o código e importação, seguiremos as etapas que já conhecemos.

import {MatDialogModule} from '@angular/material/dialog';
COPIAR CÓDIGO
No VS Code, abriremos o arquivo app.module.ts e, abaixo da importação do { ModalComponent }, colaremos a importação do {MatDialogModule}. Em seguida, copiaremos o nome do módulo e adicionaremos ao do array declarations.

Voltaremos para página do Angula Material e clicaremos na aba "Exemples" para procuramos outros exemplos. Anteriormente eu estava explorando essa página e encontrei o exemplo Dialog elements. Ao clicar no botão "Launch dialog", ele abre uma caixa de diálogo com elementos (Dialog with elements).

Esse é um pouco parecido com o modal que precisamos codar, então podemos usá-lo como exemplo. Então podemos clicar no ícone "<>" no canto superior direito do Dialog elements para visualizarmos o código.

Ao fazermos isso, notamos uma pequena diferença: temos o código HTML do modal e outro código HTML que precisaremos acrescentar no componente onde ficará a ação de abrir o modal, no caso do nosso projeto, nos chips. Podemos começar adicionando essa funcionalidade, o que acha?

Vinny: É um bom plano. Assim damos gatilho (trigger) de abertura do modal.

Nay: Então vamos lá. Esse código HTML usa o event binding com ação de clique e chamando a função openDialog().

<button mat-button (click)="openDialog()">Launch dialog</button>
COPIAR CÓDIGO
Temos também, na aba "TS", o código da classe. Neste curso estamos fazendo a parte de consonantização e layout visual, mas optamos por criar com vocês o comportamento de abertura de modal para aprenderem que o Material, também ajuda nas funcionalidades.

Assim vocês vão se acostumando a terem, em alguns componentes, a parte do HTML e a parte da classe do TypeScript. Nela, encontraremos alguns exemplos que nos ajudarão, como nesse caso do modal. Sendo assim, vamos copiar o trecho de código onde tem o construtor e a função:

constructor(public dialog: MatDialog) {}

openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
COPIAR CÓDIGO
Voltaremos para o VS Code e, na aba explorador, abriremos o componente onde adicionaremos esses códigos. No caso, acessaremos a "src > app > shared> form-busca" e abriremos os arquivos form-busca.component.html e form-busca.component.ts.

No form-busca.component.html, vamos procurar o <mat-chip-listbox> e adicionaremos a ele o evento de clique passando a função openDialog(). Assim ele será chamado quando clicarmos em qualquer um dos dois chips.

<!--código omitido-->
<mat-chip-listbox (click)="openDialog()" aria-label="Seleção de passagens">
    <mat-chip-option selected>1 adulto</mat-chip-option>
    <mat-chip-option>Econômica</mat-chip-option>
</mat-chip-listbox>
<!--código omitido-->
COPIAR CÓDIGO
Em seguida, no form-busca.components.ts, dentro da FormBuscaComponent, colaremos o código que copiamos do Material.

export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
COPIAR CÓDIGO
Esse código está injetando o serviço MetDialog no construtor, que já foi importado na linha 2, e está usando esse serviço na função openDialog(). Inclusive podemos apagar o .open(DialogElementsExempleDialog) e, ao escrevermos this.dialog., aparecerão várias sugestões de métodos que podem ser usados com o dialog.

Precisamos do método .open(), porque abriremos essa caixa de diálogo e, nessa função, precisamos passar qual componente queremos abrir. No caso, queremos abrir o ModalComponent.

export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
COPIAR CÓDIGO
Agora podemos começar a alterar o nosso modal.

https://material.angular.io/

https://material.angular.io/components/dialog/overview

@@04
Adicionando elementos

Nayanne (Nay): Estamos novamente no site do Angular Material e copiaremos o trecho HTML para criarmos o modal.
<h1 mat-dialog-title>Dialog with elements</h1>
<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>Close</button>
</div>
COPIAR CÓDIGO
Nela temos o mat-dialog-title, com o título do modal, o mat-dialog-content, com o conteúdo, e o mat-dialog-actions, que é uma seção para adicionarmos botões com ações. Após copiarmos esse código, voltaremos ao VS Code, onde acessaremos "modal > modal.component.html".

No arquivo modal.component.html, apagaremos o parágrafo da primeira linha e colaremos o código que copiamos. Nosso próximo passo é fazer algumas modificações.

A primeira delas é englobar todo o código dentro de uma tag <section> com a classe "modal". Em seguida, no <h1>, passaremos o título da modal, que é Viajante. Também apagaremos o conteúdo da <div mat-dialog-content>, porque nosso conteúdo será diferente.

<section class="modal">
    <h1 mat-dialog-title>Viajante</h1>
    <div mat-dialog-content>
        
    </div>
    <div mat-dialog-actions>
        <button mat-button mat-dialog-close>Close</button>
    </div>
</section>
COPIAR CÓDIGO
Enquanto fazemos essas modificações, podemos aproveitar para testar se nosso modal está abrindo. Sendo assim, voltaremos para aplicação da Jornada Viagens e, dentro da seção "Passagens", clicaremos em "Econômica". Ao fazermos isso, uma caixa de elementos abre no centro da tela com o título "Viajante" e um botão "Close" (Fechar) no canto inferior esquerdo.

O comportamento de abrir o modal já está funcionando. Ainda está distante do que queremos, mas resolveremos isso com estilização e inclusão do conteúdo. Podemos clicar em "Close" para fechar essa janela e voltarmos para o código.

Dentro do mat-dialog-content, criaremos uma <div> para englobar a parte onde temos os adultos, crianças e bebês, assim como os botões para aumentar ou diminuir a quantidade de passageiros. A classe dessa div será "selecao-idade".

Dentro dessa div, criaremos uma lista não ordenada (<ul>) com três itens (<li>). Conferindo no Figma, observamos que o primeiro item são os "Adultos", seguido de "(Acima de 12 anos)" e, no terceiro item, os botões e o span com o número. Portanto, codamos:

<!-- código omitido -->

<div mat-dialog-content>
    <div class="selecao-idade">
        <ul>
            <li><strong>Adultos</strong></li>
            <li>(Acima de 12 anos)</li>
            <li>
                <button mat-mini-fab>
                    <img
                        src="assets/icones/do_not_disturb_on.png"
                        alt="Operador de subtração">
                </button>
                <span>1</span>
                <button mat-mini-fab>
                    <img
                        src="assets/icones/add_circle.png"
                        alt="Operador de adição">
                </button>
            </li>
        </ul>
    </div>
</div>

<!-- código omitido -->
COPIAR CÓDIGO
Para o item de botões, usamos, por enquanto, apenas um botão arredondado do Material e, dentro dele, passamos o símbolo de menos, conforme o modelo do Figma. Para isso, usamos a tag <img> com a origem em "assets/icones/do_not_disturb_on.png" e um alt="Operador de subtração". Para facilitar a identificação, passamos para esse botão a classe "decremento".

Selecionando o código do primeiro botão e pressionando "Alt + Shift + ↓", duplicamos esse código para criarmos o segundo botão. Nele, mudamos o nome da classe, que passou a ser "incremento", o ícone, que é o /add_circle.png, e o alt, que é "Operador de adição".

Por fim, entre os botões, criamos um scan que, por enquanto, tem o número 1 fixo, para usarmos de exemplo. E antes de verificarmos como ficou o modal, acessaremos o arquivo modal.component.scss e adicionaremos as classes:

.modal {
  border: 1px solid #1D1B20;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    padding: 12px;
  }
  .selecao-idade {
    display: flex;
    justify-content: space-between;
    ul {
      list-style-type: none;
      margin: 0 0 0 -1em;
      padding: 0;
      li {
        margin-bottom: 10px;
        margin: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1D1B20;
        text-align: start;
        padding: 0;
        span {
          vertical-align: middle;
          padding: 0 12px;
        }
      }
    }
  }
  .selecao-categoria {
    margin-top: 32px;
    color: #1D1B20;
  }
  .modal-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button {
      margin: 0 8px;
      width: 100%;
    }
  }
}
COPIAR CÓDIGO
Ao acessarmos nossa aplicação novamente e clicar no botão "Econômica", a caixa de elementos abre mais uma vez no centro da tela. Dessa vez, além do título "Viajante" e do botão "Close", ela tem os itens de lista que adicionamos. Além disso, os textos e botões estão com a estilização da nossa aplicação.

Modal de caixa de elementos. Na parte superior direita está o título "Viajante". Abaixo dele está escrito, em forma de lista e em uma fonte bem menor, "Adultos", "(Acima de 12 anos)" e o número "1" entre dois botões redondos cinzas: o da esquerda tem o sinal de subtração dentro de um círculo e o da direita tem o sinal de adição dentro de um círculo. No canto inferior direito da janela está o botão "Close". Todos os elementos do modal estão com a estilização da aplicação.

Já temos o início do "sonho", ou seja, o resultado já está um pouco parecido com o que precisamos.

Vinícios (Vinny): Agora que estamos no final do curso, a última "milha" da nossa entrega, temos o último desafio para você, que nos acompanhou até o final.

Nay: Isso mesmo. Agora é com você!

Como mostra o nosso Figma, você precisará fazer mais duas listas: a de Crianças e a de Bebês, que ficará lado a lado da primeira lista. Abaixo delas, você precisará adicionar um conjunto de chips, que é bem parecido com o que fizemos no formulário de busca, e por fim, adicionar o botão "Buscar" na parte inferior do modal.

Essa responsabilidade ficará para você!

Vinny: Exatamente! Como estamos falando de coisas muito parecidas com o que já fizemos, é hora de exercitar e praticar o que aprenderam, que é uma das melhores formas de absorver conhecimento.

Estou contando com vocês para essa modal ficar incrível!

@@05
Para saber mais: personalizando modal com MatDialog

O componente Dialog do Angular Material
O componente Dialog do Angular Material é um recurso poderoso que permite a criação e abertura de modais na aplicação. O modal é uma janela flutuante que requer a atenção do usuário antes de continuar interagindo com o restante da aplicação.

Personalização do modal
Ao utilizar o método open do componente Dialog, é possível especificar diversas propriedades para personalizar o comportamento e a aparência do modal. No exemplo da aula, em form-busca.component.ts, onde configuramos a abertura do modal, utilizamos a propriedade width para definir a largura como 50%, que será passada por um objeto de configuração que será o segundo parâmetro do dialog.open, como você pode conferir abaixo:

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
COPIAR CÓDIGO
Explorando a documentação oficial
O width é apenas uma das propriedades disponíveis. Recomendamos a consulta da documentação oficial do Dialog do Angular Material para saber mais sobre as propriedades e seus respectivos valores para personalizar os modais de acordo com as necessidades do projeto e obter mais exemplos de uso. Confira a seguir algumas das propriedades que você pode consultar na documentação:

height: permite definir a altura do Dialog;
data: possibilita a passagem de dados para o Dialog, permitindo que informações sejam compartilhadas entre componentes;
disableClose: controla se o Dialog pode ser fechado pelo usuário clicando fora de sua área.
Em resumo, o componente Dialog do Angular Material permite a criação de modais flexíveis e interativos na aplicação, e as diversas propriedades disponíveis oferecem controle e personalização sobre o comportamento e a aparência desses modais.

@@06
Desafio: componentizando os botões de incremento e decremento

No código criado no arquivo modal.component.html, observamos que os botões estão sendo repetidos para cada seção (adultos, crianças e bebês), assim como a imagem e as propriedades src e alt dos botões.
Trecho de código do modal repetido nas seções Adultos, crianças e bebês:

modal.component.html

<!-- código omitido -->
<li>
    <button class="decremento" mat-mini-fab>
         <img
          src="assets/icones/do_not_disturb_on.png"
          alt="Operador de subtração">
     </button>
     <span>1</span>
     <button class="incremento" mat-mini-fab>
         <img
          src="assets/icones/add_circle.png"
          alt="Operador de adição">
      </button>
</li>
<!-- código omitido -->
COPIAR CÓDIGO
A repetição de código pode levar a problemas de manutenção, dificuldades na atualização e aumento da complexidade. Com isso em mente, como podemos tornar a aplicação mais modular e reutilizável?

Para isso, o seu desafio consiste em criar um componente reutilizável para os botões de incremento e decremento, a fim de evitar a repetição desnecessária. Assim, estaremos organizando nosso código de forma mais eficiente e promovendo a reutilização.

Para isso, utilize propriedades de entrada (@Input()) no componente para definir a operação desejada ("incrementar" ou "decrementar"), permitindo que o mesmo componente seja utilizado para ambos os casos.

Além disso, lembre-se de usar a diretiva ngClass para adicionar ou remover classes dinamicamente com base na operação selecionada, garantindo a estilização correta dos botões.

Dessa forma, ao final do desafio, você deve ter um componente para encapsular os botões de incremento e decremento, eliminar a repetição de código e promover uma abordagem mais modular e reutilizável em nossa aplicação Angular.

Como deverá ficar o código do modal após a componentização do botão:

modal.component.html

<!-- código omitido -->
<li>
  <app-botao-controle operacao="decrementar"></app-botao-controle>
  <span>1</span>
  <app-botao-controle operacao="incrementar"></app-botao-controle>
</li>
<!-- código omitido -->
COPIAR CÓDIGO
Vamos começar?

Passo 1: Criando o componente "BotaoControle"
Crie um novo componente chamado "BotaoControle" dentro da pasta shared com o comando ng g c shared/botao-controle. Esse componente será responsável por encapsular os botões de incremento e decremento.

Passo 2: Adicionando lógica ao componente "BotaoControle"

No arquivo botao-controle.component.html, insira as propriedades de entrada:

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
COPIAR CÓDIGO
No template, utilizaremos a propriedade operacao para definir a classe CSS a ser aplicada ao botão e a imagem correspondente.

botao-controle.component.html

<button mat-mini-fab [ngClass]="operacao">
  <img
    [src]="operacao === 'incrementar' ? 'assets/icones/add_circle.png' : 'assets/icones/do_not_disturb_on.png'"
    [alt]="operacao === 'incrementar' ? 'Ícone do operador de adição' : 'Ícone do operador de subtração'">
</button>
COPIAR CÓDIGO
Dessa forma, a classe CSS e a imagem serão definidas dinamicamente com base na operação passada para o componente.

Adicione as classes decrementar e incrementar no arquivo botao-controle.component.scss:

button {
  img {
    vertical-align: middle;
  }
}

.decrementar {
  background: #D9D9D9;
}
.incrementar {
  background: #E8DEF8;
}
COPIAR CÓDIGO
Passo 2: Reutilizando o componente nos trechos de código repetidos

Agora, ao invés de repetir os botões de incremento e decremento para cada seção, utilizaremos o componente "BotaoControle" nos trechos de código repetidos. Para isso, iremos passar a propriedade operacao para o componente, indicando se é uma operação de incremento ou decremento.

Por exemplo, para a seção "Adultos":

<ul>
  <li><strong>Adultos</strong></li>
  <li>(Acima de 12 anos)</li>
  <li>
       <app-botao-controle operacao="decrementar"></app-botao-controle>
       <span>1</span>
       <app-botao-controle operacao="incrementar"></app-botao-controle>
  </li>
</ul>
COPIAR CÓDIGO
Repita o mesmo processo para as seções "Crianças" e "Bebês".

Remova as classes incremento e decremento do modal.component.scss e também o estilo da imagem.

Com isso, concluímos o desafio com sucesso! Agora, os botões de incremento e decremento foram componentizados, eliminando a repetição de código e tornando nossa aplicação mais modular e reutilizável.

Caso tenha dúvidas, você pode acessar o commit da refatoração do modal e inclusão do botão controle neste link.

https://github.com/alura-cursos/3150-jornada-milhas/commit/7572a8615df6b75953c2190673ac250da4e61157

@@07
Projeto final

Caso queira revisar o código do projeto final do curso, você pode baixá-lo neste link ou acessar nosso repositório do Github.

https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-4.zip

https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-4

@@08
O que aprendemos?

Nessa aula, você aprendeu como:
Criar o componente modal com o MatDialog do Angular Material;
Configurar a abertura do modal;
Componentizar os botões de incremento e decremento do modal;
Controlar a repetição de código através da reutilização de componentes.

@@09
Conclusão

Nayanne (Nay): Parabéns pela conclusão de mais um curso! Aqui você aprendeu a:
Criar componentes no Angular;
Pensar nos critérios da componentização;
Utilizar o Angular Material para construir a página inicial da aplicação Jornada.
Agora é hora de compartilhar, engajar-se com a comunidade e utilizar todo esse conhecimento em outros projetos.

Vinícios (Vinny): Foi uma jornada e tanto! Estou muito feliz que chegaram até aqui, e agora é hora de compartilharem conosco o que você fez.

Acessem o Discord da Alura, mandem mensagem, postem o projeto nos canais, no LinkedIn, no Instagram ou qualquer rede social que preferirem. Eu terei o maior prazer de ver sua versão do Jornada Milhas.

Nay: É importante que vocês deixem o seu depoimento para conseguirmos entregar uma experiência de aprendizado cada vez melhor! Queremos te agradecer pela sua companhia durante este curso e desejamos muito sucesso na sua carreira.

Vinny: É isso! Eu agradeço à Nay, por ter me aceitado na construção deste projeto, e a você, que chegou até o final e construiu a sua Jornada Milhas.

Vejo vocês na próxima!

Nay: Um grande abraço e até a próxima!

https://discord.gg/SK9bj7hEYD