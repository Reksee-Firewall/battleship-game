class Tile {
  static id = 0;

  constructor() {
    this.id++;
    this.gotHit = false;
  }

  isSunk() {
    return this.gotHit;
  }

  foundMe() {
    this.gotHit = true;
  }
}

export { Tile };
