const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
	return Promise.all(allUsers.map((user) => {
		return new Promise((resolve,reject) => {
			const updatedUser = user.name === userName 
				? { name: user.name, active: !user.active }
				: user;

			resolve(updatedUser);
		});
	}));
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
