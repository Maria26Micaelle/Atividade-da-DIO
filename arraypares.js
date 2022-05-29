function substituiPares(array) {
for (let i = 0; i < array.length; i++){
    if (array[i] === 0) {
        console.log("voce ja e zero!!");
    } else if (array[i] % 2 == 0){
        console.log('substituindo ${array[i]} ´pr 0...');
        array[i] = 0;
    }
}
     return array;

     }
     let arr = [1, 3, 4, 6, 80, 33, 23, 80];
     console.log(substutiPares(false));