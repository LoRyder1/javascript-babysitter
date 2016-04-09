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

    it("schedule earlier than 5PM returns false", function() {
      setSchedule(16, 28);
      expect(sitting.schedule()).toBe(false);
    })

    it("schedule later than 4AM returns false", function() {
      setSchedule(17, 29);
      expect(sitting.schedule()).toBe(false);
    })

    it("pay for one hour at before BEDTIME RATE is 12", function() {
      setSchedule(17, 18);
      expect(sitting.calculatePay()).toEqual(12);
    })

  });
});



// it 'schedule begins no earlier than 5PM' do
//     set_schedule(17, 28)
//     expect(subject.valid?).to eq true
//   end

//   it 'schedule earlier than 5PM returns false' do
//     set_schedule(16, 28)
//     expect(subject.valid?).to eq false
//   end

//   it 'schedule later than 4AM returns false' do
//     set_schedule(17, 29)
//     expect(subject.valid?).to eq false
//   end

//   it 'pay for one hour at before BEDTIME RATE is 12' do
//     set_schedule(17,18)
//     expect(subject.calculate_pay).to eq 12
//   end

//   it 'pay for one hour at before MIDNIGHT RATE is 8' do
//     set_schedule(22, 23)
//     expect(subject.calculate_pay).to eq 8
//   end

//   it 'pay for one hour at after MIDNIGHT RATE is 16' do
//     set_schedule(24, 25)
//     expect(subject.calculate_pay).to eq 16
//   end

//   it 'calculate_pay for full night' do
//     set_schedule(17, 28)
//     expect(subject.calculate_pay).to eq 140
//   end
// end




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
