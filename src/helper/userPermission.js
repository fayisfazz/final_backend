const userType = {
    student: 1,
    admin: 2,
  };
  const checkUserHavePermission = (permitedUser, givenUser) =>
    Object.keys(userType).includes(givenUser) &&
    userType[givenUser] >= userType[permitedUser]
      ? false
      : true;
  
  module.exports = {
    checkUserHavePermission,
  };