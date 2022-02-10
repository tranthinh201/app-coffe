import Users from "../Data/Users";
export default User = function (user) {
  this.id = user?.id;
  this.name = user?.name;
  this.email = user?.email;
  this.password = user?.password;
  this.phone = user?.phone;
  this.diachi = user?.diachi;
  this.avatar = user?.avatar;
  this.gioitinh = user?.gioitinh;
};
User.FindUserbyPhone = (phone) => {
  let user = new User(null);
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].phone == phone) {
      user = Users[i];
    }
  }
  return user;
};
