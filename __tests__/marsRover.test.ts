import { MarsRover } from "../src/marsRover";

describe('MarsRover', () => {
    test('initialPosition', () => {
      const rover = new MarsRover(0, 0, 'N');
      expect(rover.getPosition()).toEqual({ x: 0, y: 0 });
      expect(rover.getDirection()).toEqual('N');
    });
  
    test('curentPosition', () => {
      const rover = new MarsRover(2, 3, 'E');
      expect(rover.isAtPosition(2, 3)).toBe(true);
      expect(rover.isFacingDirection('E')).toBe(true);
      expect(rover.isAtPosition(0, 0)).toBe(false);
      expect(rover.isFacingDirection('N')).toBe(false);
    });
  
    test('moveForward', () => {
      const rover = new MarsRover(0, 0, 'N');
      rover.moveForward();
      expect(rover.getPosition()).toEqual({ x: 0, y: 1 });
  
      rover.setDirection('E');
      rover.moveForward();
      expect(rover.getPosition()).toEqual({ x: 1, y: 1 });
  
      rover.setDirection('S');
      rover.moveForward();
      expect(rover.getPosition()).toEqual({ x: 1, y: 0 });
  
      rover.setDirection('O');
      rover.moveForward();
      expect(rover.getPosition()).toEqual({ x: 0, y: 0 });
    });
  
    test('moveLeft', () => {
      const rover = new MarsRover(0, 0, 'N');
      rover.turnLeft();
      expect(rover.getDirection()).toEqual('O');
  
      rover.turnLeft();
      expect(rover.getDirection()).toEqual('S');
  
      rover.turnLeft();
      expect(rover.getDirection()).toEqual('E');
  
      rover.turnLeft();
      expect(rover.getDirection()).toEqual('N');
    });
  
    test('moveRight', () => {
      const rover = new MarsRover(0, 0, 'N');
      rover.turnRight();
      expect(rover.getDirection()).toEqual('E');
  
      rover.turnRight();
      expect(rover.getDirection()).toEqual('S');
  
      rover.turnRight();
      expect(rover.getDirection()).toEqual('O');
  
      rover.turnRight();
      expect(rover.getDirection()).toEqual('N');
    });
  
    test('executeCommands', () => {
      const rover = new MarsRover(0, 0, 'N');
      rover.executeCommands('FFRFF');
      expect(rover.getPosition()).toEqual({ x: 2, y: 2 });
      expect(rover.getDirection()).toEqual('E');
    });
  });
  
