export const getAvgCirgoal = (users, fgw) =>
  users &&
  Math.floor(
    Object.values(users).reduce((totalFun, user) => totalFun + user[fgw], 0) /
      Object.values(users).length +
      0.5
  );
