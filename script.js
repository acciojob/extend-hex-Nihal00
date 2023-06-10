const extendHex = (shortHex) => {
  // write your code her
	let ans = '#';

	if(shortHex[1] === shortHex[1].toUpperCase()){
		shortHex = shortHex.toUpperCase();
	}
	
	for(let i=1; i<shortHex.length; i++){
		ans += shortHex[i];
		ans += shortHex[i];
	}
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));   
