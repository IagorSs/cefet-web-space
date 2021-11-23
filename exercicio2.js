// Faça o exercício da GALERIA DE IMAGENS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/osiris';
const imagens = [
    {
      arquivo: '01-modelo-artistico-da-sonda.webp',
      descricao: 'Imagem em 3D mostrando a sonda tocando um asteróide. ' +
        'A sonda tem forma de caixa com dois painéis solares em suas ' +
        'laterais e, na parte de baixo, um pequeno braço sai e encosta ' +
        'no asteróide'
    },
    {
      arquivo: '02-lancamento-atlas-v-em-2017.webp',
      descricao: 'Foto de foguete na vertical no momento de seu ' +
        'lançamento. Ele possui bandeiras da NASA, dos EUA e da empresa ' +
        'ULA e está com o motor sendo ligado, saindo fogo e fumaça'
    },
    {
      arquivo: '03-distanciamento-da-sonda-da-terra.webp',
      descricao: 'Foto do espaço quase toda preta mostrando a Terra bem ' +
        'pequena no canto esquerdo e, no canto direito, a lua ainda menor'
    },
    {
      arquivo: '04-aproximacao-da-sonda-ao-bennu-em-2018.webp',
      descricao: 'Foto do espaço mostrando o asteróide Bennu que tem ' +
        'a forma de um paralelepípedo com base losangular aproximadamente ' +
        'e a superfície acinzentada'
    },
    {
      arquivo: '05-mapeamento-do-asteroide.webp',
      descricao: 'Animação de uma forma tridimensional um pouco ovalada ' +
        'representada usando diversas cores e girando em torno do eixo vertical ' +
        'representando a superfície do asteróide'
    },
    {
      arquivo: '06-local-de-pouso.webp',
      descricao: 'Foto do local de pouso da sonda Osiris-Rex no ' +
        'asteróide Bennu mostrando uma pequena clareira em um ' +
        'terreno bem acidentado, com muitas pedras. No centro há ' +
        'um desenho no formato da sonda'
    },
    {
      arquivo: '07-touch-and-go-e-detritos-suspensos-em-2020.webp',
      descricao: 'Foto do asteróide Bennu com vários regolitos (pedras) ' +
        'sendo suspensos após a sonda ter encostado para coletar amostras ' +
        'da sua superfície'
    },
    {
      arquivo: '08-sonda-distanciando-e-voltando-para-terra.webp',
      descricao: 'Foto do asteróide Bennu com ele retratado em ' +
        'menos da metade e com baixa iluminação, mostrando sua superfície ' +
        'acinzentada'
    }
  ];

let index = 0;

const slide = document.getElementById('slide');
const changeImage = (addIdx) => {
  const nextIdx = index + addIdx;

  const limit = imagens.length - 1;

  if(nextIdx < 0) index = limit;
  else if(nextIdx > limit) index = 0;
  else index = nextIdx;

  const newImage = imagens[index];

  slide.src = `${servidorDasImagens}/${newImage.arquivo}`;
  slide.alt = newImage.descricao;
}

const previous = document.getElementById('anterior');
previous.onclick = () => changeImage(-1);

const next = document.getElementById('proximo');
next.onclick = () => changeImage(1);
