export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;`;
}

export function getCookieValue(name: string) {
  return (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  );
}

export function allDeleteCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;';
  }
}

export function createQueryString(paramsObj: { [key: string]: any }) {
  let queryString = '';
  for (const key in paramsObj) {
    if (
      paramsObj[key] !== '' &&
      paramsObj[key] !== null &&
      paramsObj[key] !== undefined
    ) {
      queryString += `${key}=${paramsObj[key]}&`;
    }
  }
  return queryString.slice(0, -1);
}
