// compression.js
import compression from 'compression';

export default function compress(req, res, next) {
  // Enable Gzip compression for text-based assets
  compression()(req, res, next);
}
