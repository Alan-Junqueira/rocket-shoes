const addRedLineToImage = () => {
  const listOfImages = document.querySelectorAll('.listOfImages li');
  const firstImage = listOfImages[0];
  const secondImage = listOfImages[1];
  const thirdImage = listOfImages[2];

  firstImage.addEventListener('click', () => {
    firstImage.classList.add('active');
    secondImage.classList.remove('active');
    thirdImage.classList.remove('active');
  });

  secondImage.addEventListener('click', () => {
    secondImage.classList.add('active');
    firstImage.classList.remove('active');
    thirdImage.classList.remove('active');
  });

  thirdImage.addEventListener('click', () => {
    thirdImage.classList.add('active');
    firstImage.classList.remove('active');
    secondImage.classList.remove('active');
  });
};

addRedLineToImage();

const switchShoes = () => {
  const shoesToSwitch = document.querySelectorAll('.productImages img');
  const firstBigShoe = shoesToSwitch[0];
  const secondBigShoe = shoesToSwitch[1];
  const thirdBigShoe = shoesToSwitch[2];
  const firstSmallShoe = shoesToSwitch[3];
  const secondSmallShoe = shoesToSwitch[4];
  const thirdSmallShoe = shoesToSwitch[5];

  firstBigShoe.classList.add('shoesHidden');
  thirdBigShoe.classList.add('shoesHidden');

  firstSmallShoe.addEventListener('click', () => {
    secondBigShoe.classList.add('shoesHidden');
    thirdBigShoe.classList.add('shoesHidden');

    firstBigShoe.classList.remove('shoesHidden');
  });

  secondSmallShoe.addEventListener('click', () => {
    firstBigShoe.classList.add('shoesHidden');
    thirdBigShoe.classList.add('shoesHidden');

    secondBigShoe.classList.remove('shoesHidden');
  });

  thirdSmallShoe.addEventListener('click', () => {
    firstBigShoe.classList.add('shoesHidden');
    secondBigShoe.classList.add('shoesHidden');

    thirdBigShoe.classList.remove('shoesHidden');
  });
};

switchShoes();
