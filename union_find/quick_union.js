class QuickUnion {
  static arr = [];

  static quickUnion = (N) => {
    for (let i = 0; i < N; i++) {
      this.arr.push(i);
    }
  };

  static root = (i) => {
    while (i !== this.arr[i]) {
      i = this.arr[i];
    }
    return i;
  };

  static connected = (p, q) => this.root(p) === this.root(q);

  static union = (p, q) => {
    const i = this.root(p);
    const j = this.root(q);
    this.arr[i] = j;
  };
}

QuickUnion.quickUnion(10);
QuickUnion.union(1, 2);
console.log(QuickUnion.connected(1, 3));
QuickUnion.union(3, 2);
console.log(QuickUnion.connected(1, 3));
console.log(QuickUnion.arr);
