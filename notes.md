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