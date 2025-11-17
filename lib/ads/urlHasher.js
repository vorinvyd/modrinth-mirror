async function hashUrlMD5(url) {
  if (typeof window === 'undefined') {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(url).digest('hex');
  }
  
  const encoder = new TextEncoder();
  const data = encoder.encode(url);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 32);
}

export async function getHashedUrl(originalUrl) {
  const hash = await hashUrlMD5(originalUrl);
  return `/api/ad-redirect/${hash}`;
}

export function hashUrlSync(url) {
  const crypto = require('crypto');
  return crypto.createHash('md5').update(url).digest('hex');
}

