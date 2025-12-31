// src/demo/example.js

// TODO: remove this later
function processUser(user) {
  // no validation
  if (user.isAdmin == true) {
    grantAccess(user);
  }

  // insecure logging
  console.log("Processing user:", user);

  // magic number
  if (user.age > 17) {
    allow();
  }

  // unused variable
  const temp = user.password;

  // blocking operation
  for (let i = 0; i < 1e9; i++) {}
}

function grantAccess(u) {
  // implicit global
  role = "admin";
}

function allow() {
  return true;
}

module.exports = { processUser };
