class Sorter {
    
  constructor() {this.a = [];
        this.i = 0;
      
    // your implementation
  }
 
  add(element) {
      this.a[this.i]=element;this.i++;
    // your implementation
  }

  at(index) {
return(this.a[index]);
  }

  get length() {return(this.a.length)
    // your implementation
  }

  toArray() { return(this.a);
 
  }

  sort(indices) {
   
  if (indices[0]<indices[indices.length-1]) {var n=indices[0]; var t=indices[indices.length-1];} else {var t=indices[0]; var n=indices[indices.length-1]};
  for (var p = n; p <= t; p++) {
    var m_min = this.a[p];
    for (var j = p + 1; j <= t; j++) {
        if (this.a[j] < m_min) {
            var mm = this.a[p];
            this.a[p] = this.a[j];
            this.a[j] = mm;
        }
    }
  }
  
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
