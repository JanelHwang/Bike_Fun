export const API_URL = "https://ptx.transportdata.tw/MOTC/v2";
//bike
export const API_STATION = API_URL + "/Bike/Station";
export const API_AVAILABLE = API_URL + "/Bike/Availability";
export const API_NEAYBY_STATION = API_URL + "/Bike/Station/NearBy";
export const API_NEAYBY_AVAILABLE = API_URL + "/Bike/Availability/NearBy";

import JsSHA from 'jssha';

export default function GetAuthorizationHeader() {
  const AppID = process.env.VUE_APP_APPID;
  const AppKey = process.env.VUE_APP_APPKEY;
  const GMTString = new Date().toGMTString();
  const ShaObj = new JsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString };
}
