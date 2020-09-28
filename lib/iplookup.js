import maxmind from 'maxmind';
import path from "path";

export default async (req, res, db) => {
  const {
    query: { ip },
  } = req;

  const lookup = await maxmind.open(path.resolve(__dirname, `dbs/${db}.mmdb`));

  const result = lookup.get(ip);

  res.status(200).json(result);
};
