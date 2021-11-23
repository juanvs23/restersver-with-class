class Server {
  constructor(express) {
    this.app = express();
    this.uses(express.static("public"));
  }

  uses(element) {
    this.app.use(element);
  }
  sets(key, value) {
    this.app.set(key, value);
  }
  routes(endpoint, router) {
    this.app.use(endpoint, router);
  }
  listen(port) {
    this.app.listen(port, () => {
      console.log(`running at ${port} port`);
    });
  }
}

module.exports = {
  Server,
};
