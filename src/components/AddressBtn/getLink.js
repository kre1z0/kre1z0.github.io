import { browser } from "../../utils/browser";

export const iOSurl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return `yandexmaps://maps.yandex.ru/?ll=${lat},${lng}`;
    case "google":
      return `comgooglemaps://?q=${lat},${lng}`;
    case "gis":
      return "Iosgoogle";
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const androidUrl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return `yandexmaps://maps.yandex.ru/?ll=${lat},${lng}`;
    case "google":
      return `geo:${lat},${lng}`;
    case "gis":
      return "androidgoogle";
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const desktopUrl = (name, lat, lng) => {
  switch (name) {
    case "yandex":
      return "androidyandex";
    case "google":
      return "androidgoogle";
    case "gis":
      return "androidgoogle";
    default:
      return `http://maps.google.com/?q=${lat},${lng}`;
  }
};

export const getLink = ({ name, lat, lng }) => {
  if (typeof window !== "object") {
    return null;
  }

  const { parsedResult } = browser();
  const { os } = parsedResult;
  const osName = os.name;

  if (osName === "iOS") {
    return iOSurl(name, lat, lng);
  } else if (osName === "Android") {
    return androidUrl(name, lat, lng);
  } else {
    return desktopUrl(name, lat, lng);
  }
};
