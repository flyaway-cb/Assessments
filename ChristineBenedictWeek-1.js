// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if( false ) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}

// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.
// Uses a counter variable of i, starts it at 10, executes the loop as long as i is greater than or equal to 0
// decreases the counter by 1 each time the loop runs
for( i = 10; i >= 0; i-- ) {

// your code here
// prints the value of i to the console
  console.log(i)

}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var myArray = Array(4).fill(0)
console.log(myArray[1])
myArray[3] = "duck"


// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(door = "open"){
  closeDoor()
} else {
  openDoor()
}

//or the overly complicated way
function doorStatus(whichDoor){
  var door = {
    name: whichDoor,
    status: "Open"
  }
  return {
    openDoor: function(){
      if ( door.status == "Closed" ){
        door.status = "Open"
        return console.log(door.name+" is now "+ door.status)
      } else {
        return console.log(door.name+" is already "+ door.status)
      }
    },
    closeDoor: function(){
      if ( door.status == "Open" ){
        door.status = "Closed"
      return console.log(door.name+" is now "+ door.status)
      } else {
        return console.log(door.name+" is already "+door.status)
      }
    }
  }
}

var door1 = "door1"
var newDoor = doorStatus(door1)


// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
	// your code here
  var sum = arg1 + arg2
  if (sum < 20){
    console.log(sum)
  } else if ( sum > 20 ){
    console.log("I can't count that high!")
  } else {
    console.log("The sum is exactly 20!")
  }
}
