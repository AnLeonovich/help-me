module.exports = function count(s, pairs) {
    var N = 1;
    var i, k, f, check;
    var arr = [];
    var primes = [];

    for (i = 0; i < pairs.length; i++){
        N *= Math.pow(pairs[i][0] ,pairs[i][1]);
        primes.push(pairs[i][0]);
    }
 
    if(N > 1000000) return 0;

    for(i = 0; i <= N; i++){
        arr[i] = i;
    }
 
    for (var j = 0; j < s.length; j++){

        if (s[j] === '0'){  
            for (i = 0; i < arr.length; i++){
                check = false;
                k = arr[i] + j;       
                for(f = 0; f < primes.length; f++){
                    if((k % primes[f] == 0)){
                    check = true;
                    } 
                }
                if (k == 0) {
            	    check = false;
                }
                if (!check) {
                    arr.splice(i,1);
                    i--;
                }
            }
        }

        if (s[j] === '1'){  
            for (i = 0; i < arr.length; i++){
                k = arr[i] + j;   
                if(nod(k, N) != 1) {
                    arr.splice(i,1);
                    i--;
                }
            }
        }
    }

    return arr.length % 1000000007;
}

function nod(k, N) {

	if (N == 0){
		return k;
    }
    return nod(N, k % N);
}
