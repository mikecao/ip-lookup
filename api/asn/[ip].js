import path from 'path';
import iplookup from '../../lib/iplookup';

export default async (req, res) =>
  iplookup(req, res, path.resolve(__dirname, `dbs/GeoLite2-ASN.mmdb`));
