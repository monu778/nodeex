i = [1,2,3,5,6,7,8,10]

bin_arr={};

for (x in i) {
	result = [];
       for(j=i[x];j>0;j=parseInt(j/2)) {
	 result.push(j%2);
	}
        //console.log(result);
        //result.reverse().join(""));
	bin_arr[result.reverse().join("")] = i[x];
         
}
console.log(bin_arr);





