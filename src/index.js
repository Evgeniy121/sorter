class Sorter  {
    
  constructor() {
   this.array = [] ;
   this.comparator=function (a,b) {
    return (a-b);
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
for (var j=0;j<indices.length;j++){
    this.array[indices[j]]=temp[j];
}  
}

  setComparator(compareFunction) {
   this.comparator=compareFunction;
  };
}

module.exports = Sorter;

  
