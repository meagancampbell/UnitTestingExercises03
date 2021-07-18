const whoWon = require('../RPS.js');
const assert = require('assert');

describe("whoWon", function(){
  
  it("Return tie if players play the same move", function(){
    let output = test.whoWon('rock','rock');
      assert.strictEqual(whoWon('rock','rock'), 'TIE!');
  });

  it("Return Player 2 wins! if Player 1 = rock, and Player 2 = paper", function(){
    let output = test.whoWon('rock','paper');
      assert.strictEqual(whoWon('rock','paper'),'Player 2 wins!');
  });

  it("Return Player 2 wins! if Player 1 = paper, and Player 2 = scissors", function(){
    let output = test.whoWon('paper','scissors');
      assert.strictEqual(whoWon('paper','scissors'),'Player 2 wins!');
  });

  it("Return Player 2 wins! if Player 1 = scissors, and Player 2 = rock", function(){
    let output = test.whoWon('scissors','rock');
      assert.strictEqual(whoWon('scissors','rock'),'Player 2 wins!');
  });

}); 