import bcrypt from "bcryptjs";

const users = [
  {
    name: "Pradeep",
    email: "pradeep@grootify.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Anshuman",
    email: "anshuman@grootify.com",
    password: bcrypt.hashSync("test@123", 10),
    isAdmin: true,
  },
  {
    name: "Admin",
    email: "admin@mbdd.com",
    password: bcrypt.hashSync("test@123", 10),
    isAdmin: true,
  },
];

export default users;
