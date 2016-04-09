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

    it("pay for one hour at after BEDTIME_RATE is 8", function() {
      setSchedule(22,23);
      expect(sitting.calculatePay()).toEqual(8);
    })

    it("pay for one hour at after MIDNIGHT_RATE is 16", function() {
      setSchedule(24, 25);
      expect(sitting.calculatePay()).toEqual(16);
    })

  });
});



