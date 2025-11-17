let adsDataCache = null;

function loadAdsData() {
  if (adsDataCache) {
    return adsDataCache;
  }
  
  if (typeof window === 'undefined') {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'data', 'ads', 'ads.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    adsDataCache = JSON.parse(fileContents);
  } else {
    return [];
  }
  
  return adsDataCache;
}

export function getRandomAd() {
  const ads = loadAdsData();
  if (!ads || ads.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * ads.length);
  return ads[randomIndex];
}

export function getAllAds() {
  return loadAdsData() || [];
}

export function getAdById(id) {
  const ads = loadAdsData();
  return ads.find(ad => ad.id === id) || null;
}

export function getAdByHash(hash) {
  const ads = loadAdsData();
  const crypto = require('crypto');
  return ads.find(ad => {
    const adHash = crypto.createHash('md5').update(ad.url).digest('hex');
    return adHash === hash;
  }) || null;
}

export async function getAdsForClient() {
  try {
    const response = await fetch('/api/ads');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Failed to load ads:', error);
  }
  return [];
}

