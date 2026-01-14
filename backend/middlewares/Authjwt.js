const jwt = require("jsonwebtoken");

const validationJwt = (req, res, next) => {
  const AuthHeader = req.headers.authorization;

  if (!AuthHeader) {
    return res.status(401).json({
      ok: false,
      message: "token no encontrado",
    });
  }

  if (!AuthHeader.startsWith("Bearer ")) {
    return res.status(400).json({ ok: false, message: "Token Invalido" });
  }
  const token = AuthHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res
      .status(401)
      .json({ ok: false, message: "Token invalido o expirado" });
  }
};

module.exports = validationJwt;
