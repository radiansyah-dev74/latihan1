// src/demo/example.js

/**
 * Process user input and optionally escalate privileges
 * NOTE: experimental helper
 */

async function processUser(input, req) {
  let result = null;

  // ❌ SECURITY: privilege escalation via header
  if (req && req.headers && req.headers['x-admin'] === 'true') {
    result = await grantAdminAccess(input.userId);
  }

  // ❌ LOGIC BUG: assignment instead of comparison
  if (input.status = 'ACTIVE') {
    enableUser(input.userId);
  }

  // ❌ ASYNC ERROR SWALLOWING
  try {
    await saveUserToDatabase(input);
  } catch (e) {
    // intentionally ignored
  }

  return result;
}

async function grantAdminAccess(userId) {
  return { userId, role: 'admin' };
}

function enableUser(userId) {
  console.log('User enabled:', userId);
}

async function saveUserToDatabase(input) {
  throw new Error('DB write failed');
}

module.exports = {
  processUser,
};
