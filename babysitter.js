var BabySitter = function(startTime, endTime) {
  var valid = false;

  this.schedule = function() {
    if (startTime >= 17 && endTime <= 28) {
      valid = true;
    };
    return valid;
  };

  this.calculatePay = function() {
    var total = 0;
    for (var i = startTime; i < endTime; i++ ) {
      if (i < 22) {
        total += 12;
      }
    }
    return total;
  };

  this.valid = function() { 
    return valid; 
  };

};

var GuessingGame = function(answer) {
  var isSolved = false;

  this.guess = function(guess) {
    if (guess === answer) {
      isSolved = true;
      return 'correct';
    }
    else if (guess > answer) {
      isSolved = false;
      return 'high';
    }
    else {
      isSolved = false;
      return 'low';};
  }
  this.isSolved = function() {return isSolved;}
};