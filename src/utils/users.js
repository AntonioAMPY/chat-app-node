const users = [];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase().trim() + string.slice(1);
}

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = capitalizeFirstLetter(username);
  room = capitalizeFirstLetter(room)

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  // Check for existing users
  const existingUsers = users.find(
    (user) => user.room === room && user.username === username
  );

  // Validate username
  if (existingUsers) {
    return {
      error: "Username is currently online",
    };
  }

  // Store User
  const user = { id, username, room };
  users.push(user);

  return {
    user,
  };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id); // Filter doesn't work because it continues searching but with findIndex stops.

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};
