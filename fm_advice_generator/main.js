const randomizer = document.querySelector('.randomizer');
const adviceNumber = document.querySelector('.adviceNumber');
const adviceArea = document.querySelector('.adviceArea');
randomizer.addEventListener('click', getFetch);

function getFetch() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      adviceNumber.innerText = data.slip.id;
      adviceArea.innerText = data.slip.advice;
    });
}

getFetch();
