//  https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/javascript
// Aspect Ratio Cropping - Part 1

function aspectRatio(x, y) {
  let one = Math.ceil(x * 1.7777777777)
  let two = Math.ceil(y * 1)
  return [one, two]
}

// round up to nearest int
// for each pixel in Y = 1.77 in X
// 16/9 = 1.77 (same same)
// 4/3 =1.3333 (same same)

// y = 1
// x = 1.77
// to round-up Math.ceil()

// kata says want to do 16:9 ration - however solution/testing aksing for 4:3 - so 1.33333333

console.log(aspectRatio(640, 480));
console.log(aspectRatio(960, 720));
console.log(aspectRatio(1440, 1080));
console.log(aspectRatio(1920, 1440));

1.24
0.52
0.9
