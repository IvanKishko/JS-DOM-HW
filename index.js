//* TASK 1
const users = [
  { name: "Cody", balance: 1000 },
  { name: "Bob", balance: 2000 },
  { name: "Casey", balance: 1500 },
  { name: "Jimmy", balance: 5000 },
];

function calculateTotalBalance(users) {
  return users.reduce((total, user) => total + user.balance, 0);
}

console.log(calculateTotalBalance(users));

//* TASK 2
const usersAndFriends = [
  { name: "Vasyl", friendsName: ["Bob", "Ajax", "Nicholas", "Marc"] },
  { name: "Charlie", friendsName: ["Carl", "Michael", "Christopher"] },
  { name: "David", friendsName: ["Jimmy"] },
  { name: "Jimmy", friendsName: ["Casey", "Frank"] },
];
function getFriends(friendName) {
  let friendsArray = [];

  for (const userKey in friendName) {
    if (friendName.hasOwnProperty(userKey)) {
      const user = friendName[userKey];
      friendsArray = friendsArray.concat(user.friendsName);
    }
  }

  return friendsArray;
}

console.log(getFriends(usersAndFriends));

//* TASK 3
function sortUsersByFriends(usersArray) {
  return usersArray.sort((a, b) => b.friendsName.length - a.friendsName.length);
}

console.log(sortUsersByFriends(usersAndFriends));

//* TASK 4
const usersAndSkills = [
  { name: "Charlie", skills: ["Cooking", "Skiing", "Language speaking"] },
  { name: "Ajax", skills: ["Time-Managment", "Leadership"] },
  { name: "Orange", skills: ["Communication", "Coding"] },
  { name: "Johnny", skills: ["Problem solving", "Math", "Teamwork"] },
  { name: "Walter", skills: ["Creativity", "Adaptability"] },
];
function getAndSortUniqueSkills(users) {
  const allSkills = users.reduce((acc, user) => {
    return acc.concat(user.skills);
  }, []);
  const uniqueSkills = [...new Set(allSkills)].sort();
  return uniqueSkills;
}

console.log(getAndSortUniqueSkills(usersAndSkills));
