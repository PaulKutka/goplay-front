export class Game {
  id: number;
  title: string;
  description: string;

  constructor(game: Game) {
    this.id = game.id;
    this.title = game.title;
    this.description = game.description;
  }
}