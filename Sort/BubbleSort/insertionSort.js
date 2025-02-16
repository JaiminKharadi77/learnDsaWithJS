function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
      let j=i-1;
      let nti=arr[i];
      while(j>=0 && arr[j]>nti){  
      arr[j+1]=arr[j];
      console.log(arr)
      j--;
    }
    arr[j+1]=nti;
    } 
  }
  
  //let b=[2,33,4,55,6,1];
  let b=[1,2,0,-1]
  insertionSort(b);
  
  console.log(b)
  
  //time complexity is O(n^2)