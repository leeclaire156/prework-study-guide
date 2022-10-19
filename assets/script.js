var topics = ['HTML','CSS','Git','JavaScript'];
/*Math.floor() returns the largest integet less than or equal to x;
Math.random returns a number from 0 (inclusive) to 1 (exclusive);
*/
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  //breakdown of the "for" loop: (starting with array item 0 (HTML); so long as x is less than the array length; keep going down the array by adding +1 to x)
  for(var x=0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }  
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();