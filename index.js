// code your solution here
function superbowlWin(record) {
  // Find the first game where result is "W"
  const win = record.find(game => game.result === "W");
  
  // If found, return the year; otherwise return undefined
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}
