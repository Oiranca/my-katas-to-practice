export const sumNumber = (numbers) => {
  const separator=',';
  let item;
  
  const arrayResult=numbers.split(separator);
 
  let sum=0;
    for (let i = 0; i < arrayResult.length; i++) {
	if (!isNaN(arrayResult[i])) {
	  item=Number(arrayResult[i]);
	  sum+=item;
	}
  }
  return sum;
  
  
};