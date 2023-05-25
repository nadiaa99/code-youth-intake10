//1. create marks array with 7-8 elements
//2. find the size of marks array
//3.display all elements of his array
//4. access first element,5th element and last element

let marks=[10,20,66,45,85,100]
console.log("elements",marks.length)
console.log("element 1",marks[0])
console.log("element 5",marks[4])
console.log("last element",marks[marks.length-1])
//change value of any array element
marks[1] = 100;
console.log("array",marks);

//access every elemen of array
for(i=0;i<marks.length;i++){
    marks[i] = marks[i]+2;
    console.log(marks[i]);
}
