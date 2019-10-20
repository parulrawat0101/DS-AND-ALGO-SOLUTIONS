function countBST(key){
    var arr=[];
    arr[0]=arr[1]=1;

    var temp=0;
    for (var i=2;i<key;i++) {

        for (var j=0;j<i;j++){
                temp= (arr[j]*arr[i-j-1]) + temp;
                arr.push(temp);
        }
        
    }
    return arr;
}

countBST(5);