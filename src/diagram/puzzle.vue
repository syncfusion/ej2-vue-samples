<template>
  <div class="control-section diagram-puzzle-container">
    <div id="sample-section">
      <ejs-diagram id="diagram" ref="diagramObj" class="puzzle-diagram" height="800px"
        :nodes="nodes" :constraints="constraints" :snapSettings="snapSettings" :selectedItems="selectedItems" @click="onDiagramClick" @created="onCreated"
        :load="onLoad"></ejs-diagram>

      <!-- Win Dialog (initially hidden) -->
      <div
        v-if="showWinDialog"
        id="winDialog"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000;">
        <div style="background: #2c2c2c; padding: 40px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); color: white; font-family: Arial, sans-serif; position: relative; display: inline-block;">
          <!-- Close Icon -->
          <div
            id="winClose"
            style="position: absolute; top: 15px; right: 20px; font-size: 24px; cursor: pointer; color: #ccc;"
            title="Close" tabindex="0" aria-label="Close dialog" @click="closeWinDialog"
          >✕</div>
          <!-- Celebration Icon -->
          <div style="font-size: 80px; margin-bottom: 20px;">🎉</div>
          <!-- Congratulations Text -->
          <h1 style="color: white; margin-bottom: 20px; font-size: 36px; font-weight: bold;">
            Congratulations!
          </h1>
          <!-- Steps Text -->
          <p style="color: #ccc; font-size: 18px; margin-bottom: 30px;">
            you did it in <span id="finalMoves">{{ moveCount }}</span> steps in {{ timeDisplay }}
          </p>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample showcases an interactive sliding image puzzle game built using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component, transforming images into a 4x4 grid of draggable tiles, with features like move and time tracking.
      </p>
    </div>
    <div id="description">
      <p>
        This interactive 4x4 sliding image puzzle challenges users to reconstruct an image by moving tiles adjacent to an empty space. The game dynamically tracks moves and time, offering multiple image themes, pause/resume functionality, and a "Clue" option. A congratulatory message with statistics appears upon puzzle completion.
      </p>
    </div>
  </div>
</template>

<style>
.diagram-puzzle-container .timer {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 15px rgba(173, 216, 230, 0.2);
    border: 1px solid rgba(33, 150, 243, 0.3);
    transition: all 0.2s ease-in-out;
    justify-content: center;
    gap: 10px;
}

.diagram-puzzle-container .moves-counter {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 15px rgba(144, 238, 144, 0.2);
    border: 1px solid rgba(76, 175, 80, 0.3);
    transition: all 0.2s ease-in-out;
    justify-content: center;
    gap: 10px;
}

.diagram-puzzle-container .moves-counter .label,
.diagram-puzzle-container .timer .label {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    color: white;
    padding: 0
}

.diagram-puzzle-container .moves-counter .count,
.diagram-puzzle-container .timer .time-display {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: white;
}

.diagram-puzzle-container .pause-btn {
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.diagram-puzzle-container .pause-btn:hover {
    background-color: #1976D2;
}

.diagram-puzzle-container .pause-btn .icon {
    font-size: 16px;
}

.diagram-puzzle-container .new-game-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    white-space: nowrap;
}

.diagram-puzzle-container .new-game-btn:hover {
    background-color: #45a049;
}

.diagram-puzzle-container .new-game-btn .icon {
    font-size: 16px;
}

.diagram-puzzle-container .number-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    margin-left: 2px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #333333 0%, #000000 100%);
    border: 3px solid #666;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    font-family: 'Arial Black', Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.diagram-puzzle-container .number-badge::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: rotate(45deg);
    pointer-events: none;
}

.diagram-puzzle-container .game-button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
    min-width: 140px;
    position: relative;
    overflow: hidden;
}

.diagram-puzzle-container .game-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.diagram-puzzle-container .game-button:hover::before {
    left: 100%;
}

.diagram-puzzle-container .new-game-btn {
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    color: white;
    border: 2px solid #45a049;
}

.diagram-puzzle-container .new-game-btn:hover {
    background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);
}

.diagram-puzzle-container .new-game-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.4);
}

.diagram-puzzle-container .pause-btn {
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    color: white;
    border: 2px solid #1976D2;
}

.diagram-puzzle-container .pause-btn:hover {
    background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(33, 150, 243, 0.4);
}

.diagram-puzzle-container .pause-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(33, 150, 243, 0.4);
}

.diagram-puzzle-container .game-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

.diagram-puzzle-container .game-button:disabled:hover {
    transform: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.diagram-puzzle-container .puzzle-tile {
    position: relative;
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, #d4a574 0%, #c49660 50%, #b8864d 100%);
    border: 3px solid #8b6914;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
}

.diagram-puzzle-container .puzzle-tile:hover {
    transform: translateY(-2px);
    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), 2px 4px 12px rgba(0, 0, 0, 0.4);
}

.diagram-puzzle-container .puzzle-tile.selected {
    border-color: #ffd700;
    box-shadow: 0 0 0 3px #ffd700, inset 2px 2px 4px rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), 2px 4px 12px rgba(255, 215, 0, 0.5);
}

.diagram-puzzle-container .tile-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: repeating-linear-gradient( 90deg, transparent, transparent 1px, rgba(139, 105, 20, 0.1) 1px, rgba(139, 105, 20, 0.1) 2px ), repeating-linear-gradient( 0deg, transparent, transparent 1px, rgba(139, 105, 20, 0.1) 1px, rgba(139, 105, 20, 0.1) 2px );
}

.diagram-puzzle-container .tile-number {
    font-family: 'Arial Black', Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #4a3728;
    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.3), -1px -1px 0px rgba(0, 0, 0, 0.3);
    user-select: none;
}

.diagram-puzzle-container .tile-highlight {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
    pointer-events: none;
    border-radius: 5px;
}

.diagram-puzzle-container .puzzle-tile::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(139, 105, 20, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 105, 20, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(139, 105, 20, 0.1) 0%, transparent 50%);
    pointer-events: none;
    border-radius: 5px;
}

.diagram-puzzle-container .puzzle-tile.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

.diagram-puzzle-container .puzzle-tile.disabled:hover {
    transform: none;
    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.diagram-puzzle-container .diagram-panel {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #20B2AA 0%, #7B68EE 100%);
    border-radius: 20px;
    margin-right: 20px;
    box-shadow: 0 15px 35px rgba(32, 178, 170, 0.4);
    position: relative;
    overflow: hidden;
}

.diagram-puzzle-container .diagram-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
}

.diagram-puzzle-container .clue-btn {
    background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
    color: white;
    border: 2px solid #F57C00;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    white-space: nowrap;
}

.diagram-puzzle-container .clue-btn:hover {
    background: linear-gradient(135deg, #F57C00 0%, #E65100 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(255, 152, 0, 0.4);
}

.diagram-puzzle-container .clue-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(255, 152, 0, 0.4);
}

.diagram-puzzle-container .clue-btn .icon {
    font-size: 16px;
}

.diagram-puzzle-container .puzzle-diagram .e-diagram-selector {
    stroke-width: 0;
}
</style>

<script>
import { DiagramComponent, NodeConstraints, SnapConstraints, SelectorConstraints, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: 'InteractiveImagePuzzle',
  components: {
    'ejs-diagram': DiagramComponent
  },
  data() {
    return {
      // Game state
      gameBoard: Array(16).fill(0),
      emptyIndex: 0,
      moveCount: 0,
      gameTimer: null,
      elapsedSeconds: 0,
      timeDisplay: "00:00",
      isPaused: false,
      gameStarted: false,
      showWinDialog: false,
      showClue: false,
      isPuzzleSolved: false,
      diagramCreated: false,
      nodes: [],
      
      // Image collections
      imageCollections: [],
      currentImageMap: {},
      currentThemeIndex: 0,
      imageRandom: Math.random,
      
      // Constants
      tileWidth: 130,
      tileHeight: 130,
      gridSize: 4,
      
      // Diagram settings
      snapSettings: {
        constraints: SnapConstraints.None
      },
      selectedItems: {
        constraints: SelectorConstraints.None
      },
      constraints: DiagramConstraints.Default & ~DiagramConstraints.UndoRedo,
    };
  },
  computed: {
    movesTemplate() {
      return `<div class="moves-counter">
                <span class="label">MOVES: </span>
                <span class="count">${this.moveCount}</span>
              </div>`;
    },
    timeTemplate() {
      return `<div class="timer">
                <span class="label">TIME: </span>
                <span class="time-display">${this.timeDisplay}</span>
              </div>`;
    },
    newGameTemplate() {
      return `<button class="new-game-btn" id="newGameBtn">
                <span class="icon">🎮</span>
                NEW GAME
              </button>`;
    },
    clueTemplate() {
      return `<button class="clue-btn" id="clueBtn">
                <span class="icon">💡</span>
                <span class="text">${this.showClue ? "HIDE CLUE" : "SHOW CLUE"}</span>
              </button>`;
    },
    pauseTemplate() {
      return `<button class="pause-btn" id="pauseBtn">
                <span class="icon">${this.isPaused ? "▶️" : "⏸️"}</span>
                <span class="text">${this.isPaused ? "RESUME" : "PAUSE"}</span>
              </button>`;
    }
  },
  mounted() {
    this.initializeImageCollections();
    this.initializeGame();
    this.setupTimer();
    this.$nextTick(() => {
      let diagram = this.$refs.diagramObj.ej2Instances;
      diagram.fitToPage();
    });
  },
  beforeDestroy() {
    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }
  },
  methods: {
    initializeImageCollections() {
      // Bridge theme
      const bridgeTheme = {};
      // Nature theme
      const natureTheme = {};
      // Man theme
      const manTheme = {};

      for (let i = 1; i <= 16; i++) {
        const row = Math.ceil(i / 4);
        const col = ((i - 1) % 4) + 1;
        bridgeTheme[i] = `./src/diagram/Images/puzzle/bridge${col}x${row}.png`;
        natureTheme[i] = `./src/diagram/Images/puzzle/image${col}x${row}.png`;
        manTheme[i] = `./src/diagram/Images/puzzle/man${col}x${row}.png`;
      }

      this.imageCollections = [bridgeTheme, natureTheme, manTheme];
      this.currentImageMap = this.imageCollections[0];
      this.currentThemeIndex = 0;
    },

    initializeGame() {
      // Initialize solved state
      this.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
      this.emptyIndex = 15;
      this.shuffleBoard();
      this.moveCount = 0;
      this.isPuzzleSolved = false;
      this.elapsedSeconds = 0;
      this.updateTimeDisplay();
      this.gameStarted = false;
      this.createNodes();
    },

    createNodes() {
      this.nodes = [];
      
      // Background Node
      const backgroundNode = {
        id: "backgroundNode",
        offsetX: 788,
        offsetY: 392,
        height: 755,
        width: 639,
        style: {
          fill: "#B0C4DE",
          opacity: 0.5
        },
        constraints: NodeConstraints.None,
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
          cornerRadius: 5
        }
      };
      this.nodes.push(backgroundNode);

      // Moves counter node
      const moveNode = {
        id: "moves",
        offsetX: 615,
        offsetY: 80,
        width: 160,
        height: 100,
        constraints: NodeConstraints.None,
        shape: {
          type: 'HTML',
          content: this.movesTemplate
        }
      };
      this.nodes.push(moveNode);

      // Time node
      const timeNode = {
        id: "time",
        offsetX: 976,
        offsetY: 80,
        width: 160,
        height: 100,
        constraints: NodeConstraints.None,
        shape: {
          type: 'HTML',
          content: this.timeTemplate
        }
      };
      this.nodes.push(timeNode);

      // New game button
      const newGameNode = {
        id: "newgame",
        offsetX: 610,
        offsetY: 725,
        width: 150,
        height: 50,
        constraints: NodeConstraints.PointerEvents,
        shape: {
          type: 'HTML',
          content: this.newGameTemplate
        }
      };
      this.nodes.push(newGameNode);

      // Pause button
      const pauseNode = {
        id: "pause",
        offsetX: 980,
        offsetY: 725,
        width: 150,
        height: 50,
        constraints: NodeConstraints.PointerEvents,
        shape: {
          type: 'HTML',
          content: this.pauseTemplate
        }
      };
      this.nodes.push(pauseNode);

      // Clue button
      const clueNode = {
        id: "clue",
        offsetX: 795,
        offsetY: 725,
        width: 150,
        height: 50,
        constraints: NodeConstraints.PointerEvents,
        shape: {
          type: 'HTML',
          content: this.clueTemplate
        }
      };
      this.nodes.push(clueNode);

      // Create puzzle tiles
      for (let i = 0; i < this.gameBoard.length; i++) {
        if (this.gameBoard[i] !== 0) {
          const pieceNumber = this.gameBoard[i];

          const node = {
            id: `tile${pieceNumber}`,
            width: this.tileWidth,
            height: this.tileHeight,
            offsetX: this.getTileX(i),
            offsetY: this.getTileY(i),
            annotations: [{
              id: `annotation${pieceNumber}`,
              width: 25,
              height: 25,
              template: this.getAnnotationTemplate(pieceNumber),
              visibility: false,
              offset: { x: 0.7, y: 0.1 },
              horizontalAlignment: 'Center',
              verticalAlignment: 'Center'
            }],
            style: {
              strokeColor: "white"
            },
            shape: {
              type: 'Image',
              source: this.getImageSourceForTile(pieceNumber)
            }
          };

          if (this.canMoveTile(i)) {
            node.constraints = NodeConstraints.PointerEvents;
          } else {
            node.constraints = NodeConstraints.None;
          }

          this.nodes.push(node);
        }
      }
    },

    getAnnotationTemplate(pieceNumber) {
      return `<div class="number-badge">${pieceNumber}</div>`;
    },

    setupTimer() {
      if (this.gameTimer) {
        clearInterval(this.gameTimer);
      }
      this.gameTimer = setInterval(() => {
        this.onTimerElapsed();
      }, 1000);
    },

    onTimerElapsed() {
      if (!this.isPaused && this.gameStarted && !this.isPuzzleSolved && this.diagramCreated) {
        this.elapsedSeconds++;
        this.updateTimeDisplay();
        this.updateUI();
      }
    },

    updateTimeDisplay() {
      const minutes = Math.floor(this.elapsedSeconds / 60);
      const seconds = this.elapsedSeconds % 60;
      this.timeDisplay = this.padZero(minutes) + ':' + this.padZero(seconds);
    },

    padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },

    getTileX(index) {
      const col = index % this.gridSize;
      const startX = 600;
      return startX + (col * this.tileWidth);
    },

    getTileY(index) {
      const row = Math.floor(index / this.gridSize);
      const startY = 200;
      return startY + (row * this.tileHeight);
    },

    canMoveTile(tileIndex) {
      const tileRow = Math.floor(tileIndex / 4);
      const tileCol = tileIndex % 4;
      const emptyRow = Math.floor(this.emptyIndex / 4);
      const emptyCol = this.emptyIndex % 4;

      const isVerticallyAdjacent = (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol);
      const isHorizontallyAdjacent = (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow);

      return isVerticallyAdjacent || isHorizontallyAdjacent;
    },

    shuffleBoard() {
      for (let i = 0; i < 1000; i++) {
        const validMoves = this.getValidMoves();
        if (validMoves.length > 0) {
          const randomMove = validMoves[Math.floor(this.imageRandom() * validMoves.length)];
          this.gameBoard[this.emptyIndex] = this.gameBoard[randomMove];
          this.gameBoard[randomMove] = 0;
          this.emptyIndex = randomMove;
        }
      }
    },

    getValidMoves() {
      const validMoves = [];
      const emptyRow = Math.floor(this.emptyIndex / 4);
      const emptyCol = this.emptyIndex % 4;
      const directions = [-4, 4, -1, 1];

      for (const dir of directions) {
        const newIndex = this.emptyIndex + dir;
        if (newIndex >= 0 && newIndex < 16) {
          const newRow = Math.floor(newIndex / 4);
          const newCol = newIndex % 4;
          if ((dir === -1 || dir === 1) && Math.abs(newRow - emptyRow) === 0 && Math.abs(newCol - emptyCol) === 1) {
            validMoves.push(newIndex);
          } else if ((dir === -4 || dir === 4) && Math.abs(newRow - emptyRow) === 1 && Math.abs(newCol - emptyCol) === 0) {
            validMoves.push(newIndex);
          }
        }
      }

      return validMoves;
    },

    moveTileToEmptySpace(tileNumber) {
      const tileIndex = this.gameBoard.indexOf(tileNumber);
      if (!this.canMoveTile(tileIndex)) return;

      if (!this.gameStarted) {
        this.gameStarted = true;
        this.elapsedSeconds = 0;
        this.updateTimeDisplay();
      }

      const oldEmptyIndex = this.emptyIndex;
      this.gameBoard[this.emptyIndex] = tileNumber;
      this.gameBoard[tileIndex] = 0;
      this.emptyIndex = tileIndex;
      this.moveCount++;

      const node = this.$refs.diagramObj.ej2Instances.getObject(`tile${tileNumber}`);
      if (node) {
        node.offsetX = this.getTileX(oldEmptyIndex);
        node.offsetY = this.getTileY(oldEmptyIndex);
        this.$refs.diagramObj.ej2Instances.dataBind();
      }

      this.enableAdjacentNodes();
      this.checkPuzzleSolved();
      this.updateUI();
    },

    checkPuzzleSolved() {
      let solved = true;
      for (let i = 0; i < 15; i++) {
        if (this.gameBoard[i] !== i + 1) {
          solved = false;
          break;
        }
      }
      if (solved && this.gameBoard[15] !== 0) {
        solved = false;
      }
      if (solved && this.emptyIndex === 15) {
        this.isPuzzleSolved = true;
        if (this.gameTimer) {
          clearInterval(this.gameTimer);
        }
        this.addFinalPiece();
        this.showCompletionMessage();
      }
    },

    addFinalPiece() {
      const finalPiece = {
        id: "tile16final",
        width: 130,
        height: 130,
        offsetX: this.getTileX(15),
        offsetY: this.getTileY(15),
        style: {
          fill: "transparent",
          strokeColor: "#FFD700",
          strokeWidth: 4
        },
        shape: {
          type: 'Image',
          source: this.getImageSourceForTile(16)
        },
        annotations: [{
          id: "annotation16",
          width: 25,
          height: 25,
          template: this.getAnnotationTemplate(16),
          offset: { x: 0.9, y: 0.1 },
          horizontalAlignment: 'Center',
          verticalAlignment: 'Center'
        }],
        constraints: NodeConstraints.None
      };

      this.$refs.diagramObj.ej2Instances.add(finalPiece);
    },

    showCompletionMessage() {
      this.showWinDialog = true;
    },

    closeWinDialog() {
      this.showWinDialog = false;
      this.newGame();
    },

    newGame() {
      if (this.gameTimer) {
        clearInterval(this.gameTimer);
      }
      this.selectRandomImageCollection();
      this.moveCount = 0;
      this.elapsedSeconds = 0;
      this.gameStarted = false;
      this.isPaused = false;
      this.isPuzzleSolved = false;
      this.showWinDialog = false;
      this.showClue = false;

      // Reset board
      this.gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
      this.emptyIndex = 15;

      this.updateTimeDisplay();
      this.shuffleBoard();
      this.clearDiagramNodes();
      this.createNodes();
      this.enableAdjacentNodes();
      this.setupTimer();
      this.updateUI();
    },

    togglePause() {
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
        if (this.gameTimer) {
          clearInterval(this.gameTimer);
        }
        this.disableAllNodes();
      } else {
        this.setupTimer();
        this.enableAdjacentNodes();
      }

      this.updateUI();
    },

    toggleClue() {
      this.showClue = !this.showClue;
      const diagram = this.$refs.diagramObj.ej2Instances;
      for (const node of diagram.nodes) {
        if (node.annotations && node.annotations.length > 0) {
          node.annotations[0].visibility = this.showClue;
        }
      }
      diagram.dataBind();
      this.updateUI();
    },

    disableAllNodes() {
      const diagram = this.$refs.diagramObj.ej2Instances;
      for (const node of diagram.nodes) {
        if (node.id && node.id.startsWith("tile")) {
          node.constraints = NodeConstraints.None;
        }
      }
      diagram.dataBind();
    },

    clearDiagramNodes() {
      const diagram = this.$refs.diagramObj.ej2Instances;
      if (diagram) {
        const existingNodes = [...diagram.nodes];
        for (const node of existingNodes) {
          diagram.remove(node);
        }
      }
      this.nodes = [];
    },

    enableAdjacentNodes() {
      const diagram = this.$refs.diagramObj.ej2Instances;
      for (const node of diagram.nodes) {
        if (node.id && node.id.startsWith("tile")) {
          const tileNumber = parseInt(node.id.substring(4));
          const tileIndex = this.gameBoard.indexOf(tileNumber);

          if (this.canMoveTile(tileIndex)) {
            node.constraints = NodeConstraints.PointerEvents;
          } else {
            node.constraints = NodeConstraints.None;
          }
        }
      }
      diagram.dataBind();
    },

    selectRandomImageCollection() {
      if (this.imageCollections.length > 1) {
        let newIndex;
        do {
          newIndex = Math.floor(this.imageRandom() * this.imageCollections.length);
        } while (newIndex === this.currentThemeIndex);

        this.currentThemeIndex = newIndex;
        this.currentImageMap = this.imageCollections[this.currentThemeIndex];
      }
    },

    getImageSourceForTile(tileNumber) {
      return this.currentImageMap && this.currentImageMap[tileNumber]
        ? this.currentImageMap[tileNumber]
        : "";
    },

    updateUI() {
      if (!this.$refs.diagramObj || !this.$refs.diagramObj.ej2Instances) {
        return;
      }
      
      const diagram = this.$refs.diagramObj.ej2Instances;
      
      // Update moves counter
      const moveNode = diagram.getObject('moves');
      if (moveNode && moveNode.shape) {
        moveNode.shape.content = this.movesTemplate;
      }

      // Update timer
      const timeNode = diagram.getObject('time');
      if (timeNode && timeNode.shape) {
        timeNode.shape.content = this.timeTemplate;
      }

      // Update pause button
      const pauseNode = diagram.getObject('pause');
      if (pauseNode && pauseNode.shape) {
        pauseNode.shape.content = this.pauseTemplate;
      }

      // Update clue button
      const clueNode = diagram.getObject('clue');
      if (clueNode && clueNode.shape) {
        clueNode.shape.content = this.clueTemplate;
      }

      diagram.dataBind();
    },

    onDiagramClick(args) {
      if (args.actualObject && args.actualObject.id) {
        const nodeId = args.actualObject.id;
        
        if (nodeId === 'newgame') {
          this.newGame();
        } else if (nodeId === 'pause') {
          this.togglePause();
        } else if (nodeId === 'clue') {
          this.toggleClue();
        } else if (nodeId.startsWith("tile")) {
          if (this.isPaused || this.isPuzzleSolved) return;

          if (!this.gameStarted) {
            this.gameStarted = true;
            this.elapsedSeconds = 0;
            this.updateTimeDisplay();
          }

          const tileNumber = parseInt(nodeId.substring(4));
          this.moveTileToEmptySpace(tileNumber);
        }
      }
    },

    onCreated() {
      this.diagramCreated = true;
      this.$refs.diagramObj.ej2Instances.fitToPage();
    },

    onLoad() {
      if (this.diagramCreated) {
        setTimeout(() => this.$refs.diagramObj.ej2Instances.fitToPage(), 100);
      }
    }
  }
};
</script>
