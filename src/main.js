import "./styles.css";
import { Tile } from "./Tile.js";
import { Ship } from "./Ship.js";

const MAP_SIZE = 10;

class InGameState {
  static shipClasses = [
    "Carrier",
    "Battleship",
    "Destroyer",
    "Submarine",
    "Patrol",
  ];
  static playerShipNames = [
    "pCarrier",
    "pBattleship",
    "pDestroyer",
    "pSubmarine",
    "pPatrol",
  ];
  static enemyShipNames = [
    "eCarrier",
    "eBattleship",
    "eDestroyer",
    "eSubmarine",
    "ePatrol",
  ];

  mapTiles = [];
  playerFleet = [];
  enemyFleet = [];

  constructor() {
    this.initializeMap();
    this.initializeShips();
  }

  getTileRepresentation(tile) {
    if (tile.isSunk()) {
      return "[X] ";
    } else if (
      this.playerFleet.some((ship) => ship.tilesArray.includes(tile))
    ) {
      return "[P] ";
    } else if (this.enemyFleet.some((ship) => ship.tilesArray.includes(tile))) {
      return "[E] ";
    }
    return "[ ] ";
  }

  // Mostra Mapa c/ Todos os Navios
  showMeAll() {
    for (let j = 0; j < MAP_SIZE; j++) {
      let rowOutput = "";
      for (let i = 0; i < MAP_SIZE; i++) {
        const tile = this.mapTiles[j][i];
        rowOutput += this.getTileRepresentation(tile);
      }
      console.log(rowOutput.trim());
    }
  }

  // Inicializa o mapa com MAP_SIZExMAP_SIZE Tiles
  initializeMap() {
    for (let j = 0; j < MAP_SIZE; j++) {
      const row = [];
      for (let i = 0; i < MAP_SIZE; i++) {
        row.push(new Tile());
      }
      this.mapTiles.push(row);
    }
  }

  // Inicializa as frotas de navios do jogador e do inimigo
  initializeShips() {
    for (let i = 0; i < InGameState.shipClasses.length; i++) {
      const shipType = InGameState.shipClasses[i];
      const playerShipName = InGameState.playerShipNames[i];
      const enemyShipName = InGameState.enemyShipNames[i];

      const shipData = this.getShipData(shipType);

      if (shipData) {
        this.playerFleet.push(
          new Ship(playerShipName, shipType, shipData.playerTiles)
        );
        this.enemyFleet.push(
          new Ship(enemyShipName, shipType, shipData.enemyTiles)
        );
      }
    }
  }

  // Obtém os dados de posicionamento dos navios com base no tipo
  getShipData(shipType) {
    switch (shipType) {
      case "Carrier":
        return {
          playerTiles: this.mapTiles[0].slice(0, 5),
          enemyTiles: this.mapTiles[5].slice(0, 5),
        };
      case "Battleship":
        return {
          playerTiles: this.mapTiles[1].slice(0, 4),
          enemyTiles: this.mapTiles[6].slice(0, 4),
        };
      case "Destroyer":
        return {
          playerTiles: this.mapTiles[2].slice(0, 3),
          enemyTiles: this.mapTiles[7].slice(0, 3),
        };
      case "Submarine":
        return {
          playerTiles: this.mapTiles[3].slice(0, 3),
          enemyTiles: this.mapTiles[8].slice(0, 3),
        };
      case "Patrol":
        return {
          playerTiles: this.mapTiles[4].slice(0, 2),
          enemyTiles: this.mapTiles[9].slice(0, 2),
        };
      default:
        return null;
    }
  }
}

// Inicialização do estado do jogo
const gameState = new InGameState();

// gameState.mapTiles[0][0].foundMe();

// gameState.playerFleet[0].sink();

gameState.showMeAll();
