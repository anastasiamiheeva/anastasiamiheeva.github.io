const navItems = document.querySelectorAll('.nav__item');
const btnStart = document.querySelector('.btn-start');
const startMenu = document.querySelector('.start-menu');
const gameContainer = document.querySelector('.container');

const gameField = document.createElement('div');

const stopGame = () => {
  gameContainer.appendChild(startMenu);
  gameField.remove();
  gameField.innerHTML = '';
}

const chooseLevel = () => {
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      if(!btn.classList.contains('checked')) {
        deactive();
        btn.classList.add('checked');
      } 
    })
  })
  const deactive = () => {
    navItems.forEach(btn => btn.classList.remove('checked'))
  }
};

const getCards = () => {
  const card = document.createElement('div');
  const cardBack = document.createElement('div');
  const cardFront = document.createElement('div');

  card.classList.add('flip-card');
  cardBack.classList.add('flip-card-back');
  cardFront.classList.add('flip-card-front');

  gameField.appendChild(card); 
  card.appendChild(cardFront);
  card.appendChild(cardBack);
};

const getGameField = (obj) => {
  gameContainer.appendChild(gameField)
  obj.numberOfCard && gameField.classList.add(obj.nameOfClass)

  for (let i = 0; i < obj.numberOfCard; i++) {
    getCards()
  }

  const flipCard = document.querySelectorAll('.flip-card');
  const randomCard = Math.floor(Math.random() * obj.numberOfCard);
  
  flipCard.forEach((card,i) => {  
    card.addEventListener('click', () => {
      card.classList.add('on-click');
      if(randomCard === i) {
        card.firstElementChild.classList.add('winner');
        flipCard.forEach((item) => {
          item.addEventListener('click', stopGame)
        })
      } else {
        flipCard.forEach((item) => {
          item.addEventListener('click', stopGame)
        })
      }
    })
  })
};

const btnStartOnClick = () => {
  startMenu.remove();
  const levels = {};

  navItems.forEach(btn => {
    if(btn.classList.contains('simple') && btn.classList.contains('checked')) {
      levels.nameOfClass = 'three-card';
      levels.numberOfCard = 3;
    }
    if(btn.classList.contains('medium') && btn.classList.contains('checked')) {
      levels.nameOfClass = 'six-card';
      levels.numberOfCard = 6;
    }
    if(btn.classList.contains('difficult') && btn.classList.contains('checked')) {
      levels.nameOfClass = 'ten-card';
      levels.numberOfCard = 10; 
    }
  })
  getGameField(levels)
};

btnStart.addEventListener('click', btnStartOnClick)





chooseLevel()