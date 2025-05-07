function* generator() {
    console.log('start1')
    const tem = yield 1;
    console.log(tem)
    console.log('start2')
    const tem2 = yield 2;
    console.log(tem2)
    console.log('start3')
    const tem3 = yield 3;
    console.log(tem3)
    console.log('start4')
    return 4
}
const g = generator();
console.log(g.next())
console.log(g.next(10))
console.log(g.next(20))
console.log(g.next(30))
console.log(g.next(40))      



var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) return reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

function run(gen){
    var g = gen();
  
    function next(data){
      var result = g.next(data);
      if (result.done) return result.value;
      result.value.then(function(data){
        next(data);
      });
    }
  
    next();
  }
  
  run(gen);