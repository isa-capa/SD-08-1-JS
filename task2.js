import { Players } from "./task1.js";

export class Player extends Players {

  level;

  constructor(name,level){
    super(name)
    this.level = level;
  }
  
}
  //dividir task:
  console.log(`----Task 2----`)

  const jugador = new Player("Isa123", 8);
  //console.log(jugador);

  //nivel actual
  console.log(jugador.level);

  console.log(`The player's name is: ${jugador.name}, and it's at the level: ${jugador.level}`);