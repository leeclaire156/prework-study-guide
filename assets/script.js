var topics = ['HTML','CSS','Git','JavaScript'];

//breakdown of the "for" loop: (starting with array item 0 (HTML); so long as x is less than the array lengthl; keep going down the array by adding +1 to x)
for(var x=0; x < topics.length; x++) {
    console.log(topics[x]);
}

/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/