import React from 'react';

function raceCounter(data) {
  let raceCount = {};
  console.log(data);
  data.forEach( (y) => { 
    console.log(raceCount, y);
    if (!raceCount[y.type]) {
      raceCount[y.type] = 1;
    } else {
      raceCount[y.type]++;
    }
    console.log(raceCount);
  console.log('....') 
  });
  return raceCount;
}

export default function RaceCounterSummary({data}) {
  const raceSummary = raceCounter(data);
  console.log('raceSummary', raceSummary);
  return (
    <ul>
      <li>{raceSummary.marathon} marathons (26.2 miles)</li>
      <li>{raceSummary.half} half marathons (13.1 miles)</li>
      <li>{raceSummary['10k']} 10k races (6.21 miles)</li>
      <li>{raceSummary['5k']} 5k races (3.1 miles)</li>
    </ul>
  );
}
