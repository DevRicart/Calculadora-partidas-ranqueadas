
function RankedPoints(win, lose) {
  var saldo = win - lose

  if (saldo <= 10) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Ferro**")
   } 
  else if (saldo > 10 && saldo <= 20) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Bronze**" )
   }
  else if(saldo > 20 && saldo <= 50) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Prata**" )
   }
  else if(saldo > 50 && saldo <= 80) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Ouro**" )
   }
  else if(saldo > 80 && saldo <= 90) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Diamante**" )
   }
  else if(saldo > 90 && saldo <= 100) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Lendário**" )
   }
  else if(saldo > 100) {
    console.log("O herói tem de saldo " + saldo + " e está no Rank **Imortal**" )
   }
}



RankedPoints(110, 1)
