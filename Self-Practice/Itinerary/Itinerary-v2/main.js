var card = {};

card.wrap = document.querySelector('.cards');
card.new = document.querySelector('.new-card');

card.wrap.addEventListener('click', function (e) {
  if (e.target.classList.contains('card__title')) {
    var parentCard = e.target.parentElement;
    var isActive = parentCard.classList.contains('is-active');
    var activedItem = card.wrap.querySelector('.card.is-active');

    if (!isActive && !!activedItem) {
      activedItem.classList.toggle('is-active');
    }
    parentCard.classList.toggle('is-active');
    card.wrap.classList.toggle('is-active', !isActive);
  }
});

card.new.addEventListener('click', function () {
  var lastCard = card.wrap.querySelector('.card:last-child');
  var lastNumber = +lastCard.className.match(/\d+/);
  var newCard = lastCard.cloneNode(true);
  newCard.className = newCard.className.replace(/\d+/, lastNumber + 1);
  newCard.classList.remove('is-active');

  lastCard.parentElement.insertBefore(newCard, lastCard.nextSibling);

  reCalcPos();
});

var reCalcPos = function reCalcPos() {
  var cards = [].slice.call(card.wrap.querySelectorAll('.card'));
  var count = cards.length;

  cards.forEach(function (card, i) {
    card.style.transform = 'translateY(calc(' + i / count + ' * (100% - 1.5rem)))';
  });
};
