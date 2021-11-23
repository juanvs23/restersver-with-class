const UseController = require("../controllers/usersController");
const useController = new UseController();
class Users {
  constructor(router) {
    this.router = router;
  }
  userList() {
    this.router.get("/list", useController.getListUser);
    this.router.post("/new", useController.newUser);
    this.router.put("/update/:id", useController.updateUser);
    this.router.delete("/delete", useController.deleteUser);
  }
}
module.exports = Users;
