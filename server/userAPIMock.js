const ALL_USERS = [
  {
    id: 1,
    name: 'Benjie',
    website: 'https://graphile.org',
    avatarUrl: "https://en.gravatar.com/userimage/2548051/640bc01ac2de4f2e778e1120d68ab504.png"
  },
];

exports.getUserById = async function(id) {
  return ALL_USERS.find(user => user.id === id);
}

exports.updateUserById = async function(id, patch) {
  const user = ALL_USERS.find(user => user.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  Object.assign(user, patch);
  return user;
}
