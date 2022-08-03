import requestIp from 'request-ip'

export default async (req, res) => {
  const ip = req.query.ip || requestIp.getClientIp(req);

  res.setHeader('content-type', 'text/plain');
  res.status(200);
  return res.json({
    ip
  });
};
