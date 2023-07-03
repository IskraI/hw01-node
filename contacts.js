// contacts.js
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

// fs.readFile("./db/contacts.json")
//   .then((data) => console.log("data", data))
//   .catch((error) => console.log("error", error));

// Раскомментируй и запиши значение

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  console.log("listContacts");
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
  //   console.log("data2", data2);

  // ...твой код. Возвращает массив контактов.
};

function getContactById(contactId) {
  console.log("getContactById");
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  console.log("removeContact");
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  console.log("addContact");
  // ...твой код. Возвращает объект добавленного контакта.
}

module.exports = { listContacts, getContactById, removeContact, addContact };
