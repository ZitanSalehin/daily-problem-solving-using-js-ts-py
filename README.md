What would be the output you think? :)

function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 1');
      const errorOccurred = Math.random() < 0.5;
      if (errorOccurred) {
        reject(new Error('Error occurred in Operation 1'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 2');
      const errorOccurred = Math.random() < 0.5;
      if (errorOccurred) {
        reject(new Error('Error occurred in Operation 2'));
      } else {
        resolve();
      }
    }, 4000);
  });
}

function asyncOperation3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Asynchronous Operation 3');
      const errorOccurred = Math.random() < 0.5;
      if (errorOccurred) {
        reject(new Error('Error occurred in Operation 3'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

async function performOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    console.log('All operations completed');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

performOperations();
