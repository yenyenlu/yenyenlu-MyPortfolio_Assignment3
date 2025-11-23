import jwt from 'jsonwebtoken';
export const requireAuth = (roles = []) => {
  const allowed = Array.isArray(roles) ? roles : [roles];
  return (req, res, next) => {
    const token = (req.headers.authorization||'').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'No token' });
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      if (allowed.length && !allowed.includes(payload.role)) return res.status(403).json({ message: 'Forbidden' });
      req.user = payload; next();
    } catch (e) { return res.status(401).json({ message: 'Invalid token' }); }
  };
};