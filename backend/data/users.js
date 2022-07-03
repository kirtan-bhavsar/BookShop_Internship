import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@user.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Kirtan Bhavsar",
    email: "kirtan@bhavsar.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "Test User",
    email: "test@user.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
