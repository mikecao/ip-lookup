import path from 'path';
import maxmind from 'maxmind';
import requestIp from 'request-ip';

export default async (req, res, db) => {
  const ip = req.query.ip || requestIp.getClientIp(req);

  const lookup = await maxmind.open(path.resolve(`public/geo/GeoLite2-${db}.mmdb`));

  const result = lookup.get(ip);

  res.status(200).json(result);
};
