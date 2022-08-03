import path from 'path';
import maxmind from 'maxmind';
import requestIp from 'request-ip';

export default async (req, res, db) => {
  const ip = req.query.ip || requestIp.getClientIp(req);

  console.log(process.cwd());

  const lookup = await maxmind.open(`public/geo/GeoLite2-${db}.mmdb`);

  const result = lookup.get(ip);

  res.status(200).json(result);
};
