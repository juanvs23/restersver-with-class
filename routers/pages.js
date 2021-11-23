class Pages {
  constructor(router) {
    this.router = router;
  }
  unauthorized() {
    this.router.get("/", (req, res) => {
      res.status(401).render("Unauthorized", {
        titulo: "Acceso denegado",
        name: "Acceso denegado",
      });
    });
  }
  notFound() {
    this.router.get("*", (req, res) => {
      res.status(404).render("404", {
        name: "Upps... aquí no es",
        titulo: "404 | pagina no encontrada",
      });
    });
  }
}
module.exports = {
  Pages,
};
