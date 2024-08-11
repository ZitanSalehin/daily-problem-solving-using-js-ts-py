function humanReadable(seconds) {
  // Calculate hours, minutes, and seconds
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  // Format each part to be two digits
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  secs = String(secs).padStart(2, '0');

  // Return the formatted time
  return `${hours}:${minutes}:${secs}`;
}

// Example usage
console.log(humanReadable(0));       // Output: "00:00:00"
console.log(humanReadable(5));       // Output: "00:00:05"
console.log(humanReadable(60));      // Output: "00:01:00"
console.log(humanReadable(86399));   // Output: "23:59:59"
console.log(humanReadable(359999));  // Output: "99:59:59"
