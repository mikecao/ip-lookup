import path from 'path';
import maxmind from 'maxmind';

export default async (req, res, db) => {
  const {
    query: { ip },
  } = req;

  const lookup = await maxmind.open(path.resolve(__dirname, `../node_modules/.dbs/GeoLite2-${db}.mmdb`));

  const result = lookup.get(ip);

  res.status(200).json(result);
};
