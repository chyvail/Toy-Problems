// Function to show demerit points or license suspension depending on current speed

const speedDetector = (currentSpeed) => {
  // Initialized speed limit here
  
  let speedLimit = 70;

  // Conditions

  if (currentSpeed < 70) {
    return "Ok";
  } else if (currentSpeed > 70) {
    let demeritPoints = (currentSpeed - speedLimit) / 5;
    if (demeritPoints > 12) {
      return `License Suspended`;
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
};

// Tested this function when speed is 60
console.log(speedDetector(60));

// Tested this function when speed is 80
console.log(speedDetector(100));

// Tested this function when speed is 140
console.log(speedDetector(140));
