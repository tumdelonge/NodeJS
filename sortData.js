function dataSort(array) {
    // hitung jumlah array
    let len = array.length;
    
    // perulangan pertama
    for(let i = 0; i < len; i++) {

        // perulangan kedua
        for(let j = 0; j < (len - i - 1); j++) {

            // perbandingan isi array
            if(array[j] > array[j+1]) {

                // ubah posisi array
                let temp = array[j]; array[j] = array[j+1]; array[j+1] = temp;
                
                console.log('-->',array);
            }
        }
    }
    console.log()
    console.log(array);
    console.log('-------------------------------')
    return array;
    
}

dataSort([1,2,3,4,5,0])