class QuickFind {
  static arr = [];

  static quickFind = (N) => {
    for (let i = 0; i < N; i++) {
      this.arr.push(i);
    }
  };

  static connected = (p, q) => this.arr[p] === this.arr[q];

  static union = (p, q) => {
    const pId = this.arr[p];
    const qId = this.arr[q];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === pId) {
        this.arr[i] = qId;
      }
    }
  };
}

QuickFind.quickFind(10);
QuickFind.union(1, 2);
console.log(QuickFind.connected(1, 3));
QuickFind.union(3, 2);
console.log(QuickFind.connected(1, 3));
