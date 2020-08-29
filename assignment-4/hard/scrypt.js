var mu = (function(mul){
	return (
            function abc(x){
            	return  mul*x;
            }
		);
})

doubleall = mu(2);
console.log(doubleall(10));