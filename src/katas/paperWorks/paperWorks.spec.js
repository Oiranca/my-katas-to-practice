/*
* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
* */


import {paperWorksNeed} from './paperWoks'

describe('Calculate paperwoks i need', () => {
  test('calculate paperWorks bigger than 0', () => {
	const classmate = 5;
	const paperWorks = 5;
	
	expect(paperWorksNeed(classmate, paperWorks)).toBe(25)
	
  });
  
  test('calculate paperWorks if less 0', () => {
	const classmate = -5;
	const paperWorks = 5;
	
	expect(paperWorksNeed(classmate, paperWorks)).toBe(0);
	
  })
})