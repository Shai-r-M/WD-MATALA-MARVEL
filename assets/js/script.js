var tl = gsap.timeline(),
  split = new SplitText("#quote", { type: "words,chars" }),
  words = split.words; //an array of all the divs that wrap each character

tl.to(words, {
  duration: 7,
  "--weight": "300",
  ease: "power3.out",
  color: "hsl(+=0, +=70%, +=20%)",
  stagger: {
    each: 0.1
  }
});




