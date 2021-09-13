"use strict";
const Book = require("../models/books.model");


const bookShelf = ()=>{

const book1 = new Book({
  title: "The Autobiography of Malcolm X",
  imgUrl:
    "https://target.scene7.com/is/image/Target/GUEST_6bd5c285-7c98-4c6e-b0bc-153e540738e6?fmt=webp&wid=1400&qlt=80",
  description:
    "In the searing pages of this classic autobiography, originally published in 1964, Malcolm X, the Muslim leader, firebrand, and anti-integrationist, tells the extraordinary story of his life and the growth of the Black Muslim movement. His fascinating perspective on the lies and limitations of the American Dream, and the inherent racism in a society that denies its nonwhite citizens the opportunity to dream, gives extraordinary insight into the most urgent issues of our own time. The Autobiography of Malcolm X stands as the definitive statement of a movement and a man whose work was never completed but whose message is timeless. It is essential reading for anyone who wants to understand America.",
  status: "Available",
  email:"bayan@gmail.com"
});



const book2 = new Book({
    title: "How to Win Friends & Influence People ",
    imgUrl:
      "https://m.media-amazon.com/images/I/51PWIy1rHUL.jpg",
    description:
      "You can go after the job you want...and get it! You can take the job you have...and improve it! You can take any situation you're in...and make it work for you!Simon & Schuster Audio is proud to present one of the best-selling books of all time, Dale Carnegie's perennial classic How to Win Friends and Influence People, presented here in its entirety.For over 60 years the rock-solid, time-tested advice in this audiobook has carried thousands of now-famous people up the ladder of success in their business and personal lives.",
    status: "Available",
    email:"bayan@gmail.com"
  });

  const book3 = new Book({
    title: "Think and Grow Rich",
    imgUrl:
      "https://m.media-amazon.com/images/I/51BI1tsc8fL.jpg",
    description:
      "The most famous of all teachers of success spent a fortune and the better part of a lifetime of effort to produce the law of success philosophy that forms the basis of his books and that is so powerfully summarized and explained for the general public in this book.In Think and Grow Rich, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles. This book will teach you the secrets that could bring you a fortune. It will show you not only what to do, but how to do it. Once you learn and apply the simple, basic techniques revealed here, you will have mastered the secret of true and lasting success. ",
    status: "Available",
    email:"bayan@gmail.com"
  });

  const book4 = new Book({
    title: "Talk Like TED",
    imgUrl:
      "https://m.media-amazon.com/images/I/41TB92AuG+L.jpg",
    description:
      "Many people have a fear of public speaking or are insecure about their ability to give a successful presentation. Now public speaking coach and best-selling author Carmine Gallo explores what makes a great presentation by examining the widely acclaimed TED Talks, which have redefined the elements of a successful presentation and become the gold standard for public speaking. TED - which stands for technology, entertainment, and design - brings together the world's leading thinkers. These are the presentations that set the world on fire, and the techniques that top TED speakers use will make any presentation more dynamic, fire up any team, and give anyone the confidence to overcome their fear of public speaking.",
    status: "Available",
    email:"bayan@gmail.com"
  });

  const book5 = new Book({
    title: "How We Learn",
    imgUrl:
      "https://m.media-amazon.com/images/I/41PweSBBDhL.jpg",
    description:
      "w We Learn, award-winning science reporter Benedict Carey sifts through decades of education research and landmark studies to uncover the truth about how our brains absorb and retain information. What he discovers is that, from the moment we are born, we are all learning quickly, efficiently, and automatically; but in our zeal to systematize the process we have ignored valuable, naturally enjoyable learning tools like forgetting, sleeping, and daydreaming. Is a dedicated desk in a quiet room really the best way to study? Can altering your routine improve your recall? Are there times when distraction is good? Is repetition necessary? Carey's search for answers to these questions yields a wealth of strategies that make learning more a part of our everyday lives - and less of a chore. ",
    status: "Available",
    email:"bayan@gmail.com"
  });

  book1.save();
  book2.save();
  book3.save();
  book4.save();
  book5.save();

  console.log("successfully saved in database!");
}

module.exports = bookShelf;