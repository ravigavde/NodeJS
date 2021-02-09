try {
  let a = 10;
  let b = 0;
  if (b == 0) {
    throw new Error("Divide by zero Exception");
  }
  let c = a / b;
  console.log(c);
} catch (error) {
  console.warn(error.message);
}

// in terms of promises we can implicitly declare the error using the catch block or we can explicitly define our own exception

async function someFunction() {
  try {
    await someOtherFunction();
  } catch (err) {
    console.error(err.message);
  }
}
someFunction();

function first(message) {
  return new Promise((resolve, reject) => {
    if (message != "break") {
      resolve("Process done");
    } else {
      throw new Error("The reject process is called");
      reject("Process breaked!!");
    }
  });
}

first("break")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.message);
  });

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)

  setTimeout(() => reject("process stopped"), 900); // process stopped
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 8
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 16
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 32
    return result * 2;
  })
  .catch(function (error) {
    console.log(error); // error catched
  });
