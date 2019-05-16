exports.addSuffix = function(num) {
      let j = num % 10;
      let k = num % 100;
      if (j == 1 && k != 11) {
          return num + "st";
      }
      if (j == 2 && k != 12) {
          return num + "nd";
      }
      if (j == 3 && k != 13) {
          return num + "rd";
      }
      return num + "th";
}
