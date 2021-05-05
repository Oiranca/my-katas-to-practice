export const countTheDuplicates = (item) => {
    let count = 0;
    let c=0;
    let d=0;
    const order = [...item.toLowerCase()].sort();
    for (const character of order) {
        c=order.indexOf(character);
        d=order.lastIndexOf(character);
        if(c===d){
            count++
        }

    }
    return count;
};