import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("321654", 10),
    isAdmin: true,
  },
  {
    name: "John Bravo",
    email: "john@example.com",
    password: bcrypt.hashSync("321654", 10),
  },
  {
    name: "Anwer Pakora",
    email: "anwer@example.com",
    password: bcrypt.hashSync("321654", 10),
  },
];

export default users;
