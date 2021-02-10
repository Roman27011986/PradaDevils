// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// // console.dir(Hero)
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');
// console.dir(Warrior)








// const players = [
//   {id:'player - 1',name: 'Mango',timePlayed: 310,points: 54,online: false},
//   {id:'player - 2',name: 'Poly',timePlayed: 210,points: 94,online: true},
//   {id:'player - 3',name: 'Ajax',timePlayed: 110,points: 43,online: false},
//   {id:'player - 4',name: 'Kiwi',timePlayed: 510,points: 15,online: true}
// ]


// ******* Из массива обьектов вернули НОВЫЙ массив обьектов и изменили свойство points ************


// const updatePlayers = players.map(player => {

//   return {
//     ...player,
//      points: player.points + player.points 
//   };
// });

// ********Обновили свойство одного конкретного обьекта и вернули массив всех обьектов*************

// const updatePlayers = players.map(player => {
//   if (player.id === 'player - 2')
//   return {
//     ...player,
//      points:  player.points + 50
//     };
//   return player
// });

// ********Палиндром*******

// function qwe(str) {
//  str = str.toLowerCase()
//  let str1 = str.split('').reverse().join('')
//   return str1 === str
// }


// console.log(qwe('AbbA'))

// function pow(x, n) {

  // debugger
  // console.log(n)
  // console.log('x',  x)
//   if (n == 1) {
    
//     return x;
//   } else {
       
//     // console.log('pow',  pow(x, n - 1))
    
//      console.log(pow(x, n - 1))
//     return x * pow(x, n - 1);
    
//   }
  
// }

// pow(2, 3)




 


 




