const fs = require('fs');
const path = require('path');

export default (req, res) => {
  const asn = fs.readFileSync(path.join(__dirname, '../public', 'GeoLite2-ASN.mmdb'), 'utf8');
  const city = fs.readFileSync(path.join(__dirname, '../public', 'GeoLite2-City.mmdb'), 'utf8');
  const country = fs.readFileSync(path.join(__dirname, '../public', 'GeoLite2-Country.mmdb'), 'utf8');

  res
    .status(200)
    .json({
      headers: req.headers,
      dirname: __dirname,
      files: { asn: asn.length, city: city.length, country: country.length },
    });
};
