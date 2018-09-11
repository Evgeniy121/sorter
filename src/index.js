class Sorter {
    
  constructor() {
   this.array = [];
    function comparator (a,b) {
     return(a-b);
 }
  }
 
  add(element) {
  this.array.push(element);
  }

  at(index) {
  return(this.array[index]);
  }

  get length() {
  return (this.array.length);
  }

  toArray() {
  return(this.array);
  }

  sort(indices) {
   indices.sort();
   var temp =[];
   for ( var i=0;i<indices.length; i++ ) {
        temp.push(this.array[indices[i]]);
   }
   temp.sort(this.comparator);
for (var i=0;i<indices.length;i++){
    this.array[indices[i]]=temp[i];
}  
}

  setComparator(compareFunction) {
   this.comparator=compareFunction;
  };
}

module.exports = Sorter;

  