module.exports = function toReadable (number) {
   const zeroNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const twentyNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   let res = '';

   if (number < 20) {
      res = zeroNineteen[number];
   } else if (number >= 20 && number < 100) {
      if(number % 10 === 0) {
         res = twentyNinety[number/10];
      } else {
         res = `${twentyNinety[Math.floor(number/10)]} ${zeroNineteen[number%10]}`
      }
   } else if (number > 99) {
      if(number % 100 === 0) {
         res = `${zeroNineteen[number/100]} hundred`;
      } else if(number % 100 < 20) {
         res = `${zeroNineteen[Math.floor(number/100)]} hundred ${zeroNineteen[number%100]}`
      } else if(number % 10 === 0) {
         res = `${zeroNineteen[Math.floor(number/100)]} hundred ${twentyNinety[Math.floor(number/10 % 10)]}`
      } else {
         res = `${zeroNineteen[Math.floor(number/100)]} hundred ${twentyNinety[Math.floor(number/10 % 10)]} ${zeroNineteen[number % 10]}`
      }
   } return res.trim();
}
