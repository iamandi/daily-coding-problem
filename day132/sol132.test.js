const HitCounter1 = require("./sol132");

const HitCounter = new HitCounter1();

addHits = () => {
  HitCounter.record(1);
  HitCounter.record(2);
  HitCounter.record(3);
  HitCounter.record(4);
  HitCounter.record(5);
};

addHits();
console.log(`Total hits: ${HitCounter.total()}`);
console.log(`Hits in range (2, 4): ${HitCounter.range(2, 4)}`);
