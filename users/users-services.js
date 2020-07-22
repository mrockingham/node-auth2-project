module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(user.name && user.password && typeof user.password === "string");
  }