const peopleToThank = ["Piotr", "Gabby", "Louis"];

function writeCards(peopleToThank) {
  const thankYouCards = [];
  for (let i = 0; i < peopleToThank.length; i++) {
      thankYouCards.push(`Thank you, ${peopleToThank[i]}, for the wonderful surprise gift!`);
      debugger;
  }
  return thankYouCards;
}

writeCards(peopleToThank);

function countDown(count){
  while (count >= 0) {
    console.log(count--);
  }
}