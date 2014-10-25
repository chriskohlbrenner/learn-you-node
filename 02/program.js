// args = process.argv;
// sum = 0;

// for (var i in args) {
//   if (Number(args[i])){
//     sum += Number(args[i]);
//   }
// };

// console.log(sum)


sum = 0

for (var i = process.argv.length - 1; i >= 2; i--) {
  sum += Number(process.argv[i])
};

console.log(sum);