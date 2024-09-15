const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));
class dataManipulator {
  constructor(page) {}

  randomEmail() {
    let email = testData.registerUser.email;
    email = email.replace("<<increment>>", Math.floor(Math.random() * 1000));
    return email;
  }
}
export default dataManipulator;
