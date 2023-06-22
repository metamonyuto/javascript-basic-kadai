//変数numに0~100までのランダムな整数を代入する
let num = Math.floor(Math.random()*100);

//変数numの値を出力する。
//console.log(num);

//変数numが3の倍数なら3の倍数、5の倍数なら5の倍数、3と5の倍数なら3と5の倍数です。
if (num % 3 === 0 & num % 5 === 0){
  console.log('3と5の倍数です');
}
else if (num % 3 === 0){
  console.log('3の倍数です');
}
else if (num % 5 === 0){
  console.log('5の倍数です');
}
else{
  console.log(num);
}


