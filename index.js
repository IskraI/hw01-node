const functionByContacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await functionByContacts.listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await functionByContacts.getContactById(id);
      return console.log(contactById);

    case "delete":
      const deleteContact = await functionByContacts.deleteContact(id);

      return console.log(deleteContact);

    case "add":
      const addContact = await functionByContacts.addContact({
        name,
        email,
        phone,
      });
      return console.log(addContact);
    default:
      return console.log("Unknown action type!");
  }
};

invokeAction(argv);
