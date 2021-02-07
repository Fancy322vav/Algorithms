class WeightedQuickUnion {
  static arr = [];
  static sizes = [];

  static quickUnion = (N) => {
    for (let i = 0; i < N; i++) {
      this.arr.push(i);
      this.sizes.push(1);
    }
  };

  static root = (i) => {
    while (i !== this.arr[i]) {
      this.arr[i] = this.arr[this.arr[i]];
      i = this.arr[i];
    }
    return i;
  };

  static connected = (p, q) => this.root(p) === this.root(q);

  static union = (p, q) => {
    const i = this.root(p);
    const j = this.root(q);
    if (i === j) return;
    if (this.sizes[i] < this.sizes[j]) {
      this.arr[i] = j;
      this.sizes[j] += this.sizes[i];
    } else {
      this.arr[j] = i;
      this.sizes[i] += this.sizes[j];
    }
  };
}

WeightedQuickUnion.quickUnion(10);
WeightedQuickUnion.union(1, 2);
console.log(WeightedQuickUnion.connected(1, 3));
WeightedQuickUnion.union(3, 2);
WeightedQuickUnion.union(3, 4);
console.log(WeightedQuickUnion.connected(1, 3));
console.log(WeightedQuickUnion.sizes);
