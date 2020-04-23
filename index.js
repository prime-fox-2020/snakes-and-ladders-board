function generateBoard(num){
let kotak = []
let angka = num
let kali = num*num
for(let i = 0; i < num; i++){
  kotak.push([])
}


for(let i = 0; i < kotak.length; i++){
  for(let j = 0; j < num; j++){
    kotak[i].push(kali)
    kali--
  }
  if(i%2 === 1){
  kotak[i].reverse()
  }
}
return kotak


}

console.log(generateBoard(8))