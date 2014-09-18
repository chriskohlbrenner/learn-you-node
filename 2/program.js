args = process.argv;
sum = 0;

for (var i in args) {
  if (Number(args[i])){
    sum += Number(args[i]);
  }
};

console.log(sum)