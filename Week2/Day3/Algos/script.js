
var numArray = [
                [1, 2, 3], 
                [2, 3, 4,], 
                [3, 4, 5], 
                [4, 5, 6], 
                [5, 6, 7], 
                [6, 7, 8],
                [7, 8, 9]
                            ]

var newArr = []                            
for(var i = 0; i < numArray.length; i++) {
    console.log("*****************************")
    console.log("This is the array inside of numArray " + numArray[i])
    console.log("*****************************")
    for(var j = 0; j < numArray[i].length; j++) {
        console.log("*****************************")
        console.log(numArray[i][j])
        newArr.push(numArray[i][j])
        
    }

}
console.log(newArr)

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array




var newArray = []
for (var i = 0; i < arr2d.length; i++) {
    // get the size of the inner array
    var innerArrayLength = arr2d[i].length
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
    // console.log(arr2d[i][j]);
    newArray.push(arr2d[i][j])
  }
}
console.log(newArray)
