module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoleName = req.tokenData.userRoleName;
    // Roles that are always allowed
    const adminGroupRoles = ["admin"];

    // Access if user is an admin group role
    if (adminGroupRoles.includes(userRoleName)) {
      return next();
    }

    // Access if user belongs to allowed group
    if (allowedRoles.includes(userRoleName)) {
      return next();
    }

    // If any condition is not met, return forbidden access
    res.status(403).json({
      success: true,
      message: "Forbidden access",
    });
  };
};
