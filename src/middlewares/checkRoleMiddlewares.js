module.exports = (requiredRoles) => {
  return (req, res, next) => {
    const user = req.user;
    if (!user || !user.categories) {
      return res.status(403).json("Access negado. Usuário não autenticado.");
    }

    const hasRole = user.categories.some((category) =>
      requiredRoles.includes(category.nome)
    );
    if (!hasRole) {
      return res
        .status(403)
        .json("Access negado. Você não possui a permissão necessária.");
    }

    next();
  };
};
