$(document).ready(function () {
var playerHand = [];
var dealerHand =[];
var deck = newDeck();



dealCards(playerHand);
console.log(deck);
console.log(playerHand);
draw();

  function getCardImageUrl(inp){
    name = '';
    if(inp.point >=2 && inp.point <=10){
      name = inp.point;
    }
    else if (inp.point === 1) {
      name = 'ace';
    }
    else if (inp.point === 11) {
      name = 'jack';
    }
    else if (inp.point === 12) {
      name = 'queen';
    }
    else if (inp.point === 13) {
      name = 'king';
    }
    return('images/'+ name + '_of_' + inp.suit +'.png');
  }


  function calculatePoints(cards){
    var total = 0;
    var ace = 0;
    cards.forEach(function(e){
      if (e.point > 10 ) {
        e.point = 10;
      }
      else if (e.point === 1) {
        ace++;
        e.point = 11;
      }
      total += e.point;
    });
    for (var i = 0; i < ace; i++) {
      if (total > 21) {
        total -= 10;
      }
    }
    return total;
  }

  function newDeck(deck){
    var d = [];

    for(var num = 1; num<=13; num++){
      for(var s = 0; s<4; s++){
       var x = '';
        switch(s){
          case 0:
            x='spades';
            break;
          case 1:
            x='hearts';
            break;
          case 2:
            x='clubs';
            break;
          case 3:
            x='diamonds';
            break;
        }
        d.push({point: num, suit: x});
      }
    }
    return d;
  }

  function draw(){


    playerHand.forEach(function(e){
      var x = '';
      console.log(e);
       switch(e.suit){
         case 0:
           x='spades';
           break;
         case 1:
           x='hearts';
           break;
         case 2:
           x='clubs';
           break;
         case 3:
           x='diamonds';
           break;
      }
      console.log('<img src=./cards/' + e.point + '_' + x + '.png');
      $('#player-hand').append('<img src=./cards/' + e.point + '_' + x + '.png');
    });
  }
  // function draw(){
  //
  //
  //   for(var n=0; n < playerHand.length; n++){
  //     var x = '';
  //      switch(playerHand[n][1]){
  //        case 0:
  //          x='spades';
  //          break;
  //        case 1:
  //          x='hearts';
  //          break;
  //        case 2:
  //          x='clubs';
  //          break;
  //        case 3:
  //          x='diamonds';
  //          break;
  //     }
  //         console.log('<img src=./cards/' + playerHand[n][0] + '_' + x + '.png');
  //   }
  //
  //
  //     // $('#player-hand').append('<img src=./cards/' + e.point + '_' + x + '.png');
  //   }



  function initialDeal(){
    for (var i = 0; i<2; i++){
      dealCards(playerHand);
      dealCards(dealerHand);
    }
  }


  function dealCards(player){
    var r = (Math.floor(
   Math.random() * deck.length));

    player.push(deck.splice(r,1));
  }

});
