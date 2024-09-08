class Ship {
  static id = 0;

  constructor(name, shipClass, tilesArray) {
    this.id++;
    this.name = name;
    this.class = shipClass;
    this.tilesArray = tilesArray;
    this.isAfloat = true;
  }

  isShipAfloat() {
    return this.isAfloat;
  }

  sink() {
    this.tilesArray.forEach((tile) => tile.foundMe());
    this.isAfloat = false;
    console.log(`${this.name} sank!`);
  }
}

export { Ship };
