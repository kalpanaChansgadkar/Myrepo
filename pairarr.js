function chkPair(A, size, x) {
    for (i = 0; i < (size - 1); i++) {
        for (j = i + 1; j < size; j++) {

            if (A[i] + A[j] == x) {
                document.write("Pair with a given sum" + x + "is (" + A[i] + ", " + A[j] + ")");
                return true;
            }
        }
    }
    return false;
}
let A = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let x = 160;
let size = A.length;

if (chkPair(A, size, x)) {
    document.write("</br>Valid pair");
}
else {
    document.write("</br>No valid pair exist for " + x);
}
console.log(A[i],A[j]);