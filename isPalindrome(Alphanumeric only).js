function isPalindrome(A){
    //check if length 1, then palindrome
    if (A.length == 1) return 1;
    //check if no alphanumeric value exists in A, then palindrome
    if (A.search(/[A-Za-z0-9]/g) == -1) return 1;

    var i=0;
    var j=A.length-1;

    //Loop through the string
    while (j>i) {
        //loop until alphanumeric string not reached
        while(this.notAlphanumeric(A[j])) j--;
        while(this.notAlphanumeric(A[i])) i++;
        //check if starting char != ending char then not palindrome
        if (!(A[i].toLowerCase() == A[j].toLowerCase())) return 0;
        j--; i++;
    }
    return 1;
}

function notAlphanumeric (B){
    return B.match(/[^A-Za-z0-9]/g);
} 