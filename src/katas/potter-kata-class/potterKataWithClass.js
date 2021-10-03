export class Book {
  constructor(itemsToBuy) {
    this.book = itemsToBuy;
  }

  get pay() {
    return this.calculateToPay();
  }

  calculateToPay(books) {
    books = this.book;
    const price = 8;
    const sameBooks = this.searchSameBooks(books) * price;
    const differentBooks = books.length - this.searchSameBooks(books);
    return sameBooks + this.differentBooks(differentBooks, price);
  }

  searchSameBooks(allBooks) {
    let count = 0;
    allBooks.forEach((item) => {
      const sameBooks = allBooks.filter((title) => title === item);
      sameBooks.length > 1 ? count++ : count;
    });
    return count;
  }

  differentBooks(differentBook, price) {
    let total = 0;
    let totalWithoutDiscount;
    let totalToDiscount;
    const discount = {
      oneCopy: 0,
      twoDifferentCopy: 0.05,
      threeDifferentCopy: 0.1,
      fourDifferentCopy: 0.2,
      fiveDifferentCopy: 0.25,
    };
    switch (differentBook) {
      case 1:
        return (total = differentBook * price);

      case 2:
        totalWithoutDiscount = differentBook * price;
        totalToDiscount = totalWithoutDiscount * discount.twoDifferentCopy;
        return (total = totalWithoutDiscount - totalToDiscount);
      case 3:
        totalWithoutDiscount = differentBook * price;
        totalToDiscount = totalWithoutDiscount * discount.threeDifferentCopy;
        return (total = totalWithoutDiscount - totalToDiscount);
      case 4:
        totalWithoutDiscount = differentBook * price;
        totalToDiscount = totalWithoutDiscount * discount.fourDifferentCopy;
        return (total = totalWithoutDiscount - totalToDiscount);
      case 5:
        totalWithoutDiscount = differentBook * price;
        totalToDiscount = totalWithoutDiscount * discount.fiveDifferentCopy;
        return (total = totalWithoutDiscount - totalToDiscount);
    }
  }
}
