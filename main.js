TweenMax.to(".tittle-1", 2, {
  x:30,
  opacity:1,
  ease: Expo.easeInOut
});

TweenMax.to(".tittle-2", 2, {
  delay: 0.2,
  x: -80,
  opacity:1,
  ease: Expo.easeInOut
});

TweenMax.from(".runner", 2, {
  delay: 1.2,
  x: -80,
  opacity:0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-1", 4, {
  delay: 1,
  x: -180,
  rotation: 200,
  transformOrigin: "50% 50%",
  opacity:0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-2", 4, {
  delay: 1.4,
  x: -180,
  rotation: 500,
  transformOrigin: "50% 50%",
  opacity:0,
  ease: Expo.easeInOut
});
TweenMax.from(".box-3", 4, {
  delay: 1,
  x: -180,
  rotation: 500,
  transformOrigin: "50% 50%",
  opacity:0,
  ease: Expo.easeInOut
});

TweenMax.from(".pattern", 2, {
  delay: 1,
  width: 0,
  opacity:0,
  ease: Expo.easeInOut
});

TweenMax.from(".content", 4, {
  delay: 2,
  y: 80,
  opacity:0,
  ease: Expo.easeInOut
});

