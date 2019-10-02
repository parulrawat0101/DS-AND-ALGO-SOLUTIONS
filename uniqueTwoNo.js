twoUniqueNo([1,2,3,5,6,3,2,1],8)
function twoUniqueNo(arr,n){
	//step1 xor
	for (i=0;i<n;i++){
		xorRes = xorRes^arr[i];
    }
    //step 2 find rightmost set bit of xorresult
    var no=0;
    var temp=xorRes;
    while (no>0) {
        if(temp & 1){
            break;
        }
        else {
            temp=temp>>1;
        }
    }
    var mask = 1<<no;

    //step 3 find out al no.s in array having that ith bit set
    var setBitArray = [];
    for (j=0;j<n;j++){
		if ((arr[j] & mask) !=0){
            setBitArray.push(arr[j]);
        }
    }

    //step4 find out 1st number by xoring all similar numbers contributing to ith 1
    var number1=0;
    for (k=0;k<n;k++){
        number1=number1^setBitArray[k];
    }
    console.log(number1, ' ', number1^xorRes)

}