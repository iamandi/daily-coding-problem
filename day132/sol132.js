module.exports = class HitCounter {
  constructor() {
    this.hitArray = [];
  }

  record(timestamp) {
    this.hitArray.push({ timestamp });
  }

  total() {
    return this.hitArray.length;
  }

  range(lower, upper) {
    const filteredHitArr = this.hitArray.filter(
      hit => lower <= hit.timestamp && upper >= hit.timestamp
    );
    return filteredHitArr.length;
  }
};
