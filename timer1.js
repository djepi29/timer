// Get the command line arguments
const args = process.argv.slice(2);

// Set up the alarms
args.forEach((arg) => {
  
  // parseInt() is another option in this case to convert the inputs to numbers
  const time = Number(arg);

  // If the input is not a number or not positive, skip it
  if (isNaN(time) || time <= 0) {
    console.log(`Invalid input: ${arg}`);
    return;
  }

  // Print a message to indicate that the alarm has been set to follow the control flow
  console.log(`Alarm set for ${time} seconds.`);

  // Set a timer for the specified time before beeping
  setTimeout(() => {
    // Beep to indicate that the time has elapsed
    process.stdout.write('\x07');
    // console implemented for beep sound not working!
    console.log(`The ${time} seconds beep!`);
  }, time * 1000);
});

