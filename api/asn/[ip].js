import iplookup from '../../lib/iplookup';

export default async (req, res) => iplookup(req, res, 'GeoLite2-ASN');
