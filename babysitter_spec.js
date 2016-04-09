require('./spec_helper.js');
include('babysitter.js');

describe("BabySitter", function() {
  var sitting;

  var setSchedule = function(x, y) {
    sitting = new BabySitter(x, y);
  };

  describe("schedule()", function() {
    it("is defined", function() {
      setSchedule(17, 28);
      expect(sitting.schedule).toBeDefined();
    });

    it("expects a two arguments", function() {
      expect(BabySitter.length).toBe(2);
    });

    it("schedule begins no earlier than 5PM", function() {
      setSchedule(17, 28);
      expect(sitting.schedule()).toBe(true);
    });

  });
});





xdescribe("GuessingGame", function() {
  var game;

  beforeEach(function() {
    game = new GuessingGame(10);
  });

  describe("guess()", function() {
    it("is defined", function() {
      expect(game.guess).toBeDefined();
    });

    it("expects a single argument", function() {
      expect(GuessingGame.length).toBe(1);
    });

    it("returns 'high' when the guess is too high", function() {
      expect(game.guess(100)).toEqual('high');
    });

    it("returns 'low' when the guess is too low", function() {
      expect(game.guess(0)).toEqual('low');
    });

    it("returns 'correct' when the guess is correct", function() {
      expect(game.guess(10)).toEqual('correct');
    });

    it("changes isSolved() when a correct guess is made", function() {
      expect(game.isSolved()).toBe(false);
      game.guess(10);
      expect(game.isSolved()).toBe(true);
    });

    it("doesn't change isSolved() when an incorrect guess is made", function() {
      expect(game.isSolved()).toBe(false);
      game.guess(5);
      expect(game.isSolved()).toBe(false);
    });

    it("reflects the last guess", function() {
      game.guess(10);
      expect(game.isSolved()).toBe(true);
      game.guess(5);
      expect(game.isSolved()).toBe(false);
    });
  });

  describe("isSolved()", function() {
    it("is defined", function() {
      expect(game.isSolved).toBeDefined();
    });

    it("expects no arguments", function() {
      expect(game.isSolved.length).toBe(0);
    });

    it("returns false before a guess is made", function() {
      expect(game.isSolved()).toBe(false);
    });
  });
});
