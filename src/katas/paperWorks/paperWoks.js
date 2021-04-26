export const paperWorksNeed = (classmates, paperWorks) => {
  if (classmates < 0 || paperWorks < 0) {
	return 0;
  } else {
	return classmates * paperWorks;
  }
}