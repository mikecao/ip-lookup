const maxmind = require('maxmind');
const geolite2 = require('geolite2-redist');

export default async (req, res, db) => {
  const {
    query: { ip },
  } = req;

  const lookup = await geolite2.open(db, path => {
    return maxmind.open(path);
  });

  const result = lookup.get(ip);

  lookup.close();

  res.status(200).json(result);
};
