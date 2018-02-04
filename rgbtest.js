let colors = require('./colors');

colors = JSON.parse(colors);

console.log(colors.length);

console.log(colors[0]);

let found = {
  r: [],
  g: [],
  b: []
};

for (let color of colors) {
  if (!found.r.includes(color.rgb.r)) found.r.push(color.rgb.r);
  if (!found.g.includes(color.rgb.g)) found.g.push(color.rgb.g);
  if (!found.b.includes(color.rgb.b)) found.b.push(color.rgb.b);
};

console.log(found.r.length, found.g.length, found.b.length)

let sort = (a, b) => {
  return a - b;
};

found.r.sort((a, b) => {
  return a - b;
});
found.g.sort((a, b) => {
  return a - b;
});
found.b.sort((a, b) => {
  return a - b;
});

for (let [index, r] of found.r.entries()) {
  if (found.g[index] !== r || found.b[index] !== r) console.log('found');
};

let last = 0;
for (let r of found.r) {
  console.log(r - last);
  last = r;
};

// console.log(found.r)

// let r = 128, g = 0, b = 0;
//
// let color = (r*6/256)*36 + (g*6/256)*6 + (b*6/256)
//
// console.log(color);
// console.log(found.r);
