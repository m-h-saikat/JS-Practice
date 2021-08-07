/* Declare array ,Number of element , 4th position , replace/update ,Add or Remove / Check 
Specific Value in the array  */

let myFriends=['Rakib','Robin','Sabbir','Tariqul','Shariful','Idbal','Mahmudul'];
console.log('Nymber of Element' +' '+ myFriends.length);
console.log('4th position of Element' +' '+ myFriends[3]);

//Add  New Friend using Push
myFriends.push('Jayed');

console.log(myFriends);

//Delete Element 
//Array.splice(position,num);
let updateFriend=myFriends.splice(3,1);
console.log(updateFriend);
