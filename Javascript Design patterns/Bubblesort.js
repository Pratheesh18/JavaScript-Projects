let bubbleSort = (arr) => {
    let len  = arr.length;
    for(let i=0; i<len ; i++ ){
        for(let j=0 ; j<len ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [32,34,21,56,42];
const sortedArray = bubbleSort(arr);
console.log(sortedArray);