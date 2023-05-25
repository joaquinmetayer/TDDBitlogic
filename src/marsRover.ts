export class MarsRover {
    private x: number;
    private y: number;
    private direction: string;
  
    constructor(x: number, y: number, direction: string) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
  
    getPosition(): { x: number; y: number } {
      return { x: this.x, y: this.y };
    }
  
    getDirection(): string {
      return this.direction;
    }
  
    isAtPosition(x: number, y: number): boolean {
      return this.x === x && this.y === y;
    }
  
    isFacingDirection(direction: string): boolean {
      return this.direction === direction;
    }
  
    setDirection(direction: string): void {
      this.direction = direction;
    }
  
    moveForward(): void {
      switch (this.direction) {
        case 'N':
          this.y++;
          break;
        case 'E':
          this.x++;
          break;
        case 'S':
          this.y--;
          break;
        case 'O':
          this.x--;
          break;
      }
    }

    moveBackward(): void {
      switch (this.direction) {
        case 'N':
          this.y--;
          break;
        case 'E':
          this.x--;
          break;
        case 'S':
          this.y++;
          break;
        case 'O':
          this.x++;
          break;
      }
    }
  
    turnLeft(): void {
      switch (this.direction) {
        case 'N':
          this.direction = 'O';
          break;
        case 'E':
          this.direction = 'N';
          break;
        case 'S':
          this.direction = 'E';
          break;
        case 'O':
          this.direction = 'S';
          break;
      }
    }
  
    turnRight(): void {
      switch (this.direction) {
        case 'N':
          this.direction = 'E';
          break;
        case 'E':
          this.direction = 'S';
          break;
        case 'S':
          this.direction = 'O';
          break;
        case 'O':
          this.direction = 'N';
          break;
      }
    }
  
    executeCommands(commands: string): void {
      for (const command of commands) {
        switch (command) {
          case 'F':
            this.moveForward();
            break;
          case 'B':
            this.moveBackward();
            break;
          case 'L':
            this.turnLeft();
            break;
          case 'R':
            this.turnRight();
            break;
        }
      }
    }       
}
  