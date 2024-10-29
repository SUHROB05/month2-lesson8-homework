import path from "path";
import { readUsersDB, writeUsersDB } from "./db.js";

// const arr = [{
//     id : 1,
//     name : "Ali",
//     sum : 12332,
//     startDate : "10.02.2024",
//     endDate : "10.19.2024",
//     status : "true",
//     card : "1234 5678 1232 2345"
// }]

const dbFilePath = path.join(import.meta.dirname, "..", "database", "db.json");
export const readAllDebit = async () => {
  const result = await readUsersDB(dbFilePath);
  return result;
};
export const createDebit = async (user) => {
  const users = (await readUsersDB(dbFilePath)) || [];
  users.push(user);

  writeUsersDB(dbFilePath, users);
  return user;
};

export const getDebitById = async (id) => {
  const data = await readUsersDB(dbFilePath);

  const result = data.find((item) => item.id === id);
  return result;
};

export const updateDebitById = async (id, body) => {
  const data = await readUsersDB(dbFilePath);

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i].name = body.name;
      await writeUsersDB(dbFilePath, data);
      break;
    }
  }
};

export const deleteDebitById = async (id) => {
  const data = await readUsersDB(dbFilePath);

  let res = data.filter((item) => item.id !== id);

  await writeUsersDB(dbFilePath, res);
};
