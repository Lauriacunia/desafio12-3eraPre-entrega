export function isAuth(req, res, next) {
  /**
   * req.isAuthenticated() es una función propia de passport que
   * verifica que el usuario este autenticado.
   */
  if (req.isAuthenticated()) {
    // Si esta autenticado sigue con la ejecucion que queremos
    return next();
  }
  res.redirect("/auth/login");
}

export function isUser(req, res, next) {
  if (req.session?.user?.email) {
    return next();
  }
  return res.status(401).render("error", { error: "Error de autenticación!" });
}

export function isAdmin(req, res, next) {
  if (req.session?.user.roles?.includes("Admin")) {
    return next();
  }
  return res.status(403).render("error", { error: "Error de autorización!" });
}

export function isCartOwner(req, res, next) {
  if (req.session?.user.cart == req.params.cid) {
    return next();
  }
  return res.status(403).render("error", { error: "Error de autorización!" });
}
