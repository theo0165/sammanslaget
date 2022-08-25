const testMobile = () => {
  const ua = navigator.userAgent;

  return /IEMobile|Windows Phone|Lumia/i.test(ua)
    ? true
    : /iPhone|iP[oa]d/.test(ua)
    ? true
    : /Android/.test(ua)
    ? true
    : /BlackBerry|PlayBook|BB10/.test(ua)
    ? true
    : /Mobile Safari/.test(ua)
    ? true
    : /webOS|Mobile|Tablet|Opera Mini|\bCrMo\/|Opera Mobi/i.test(ua)
    ? true
    : false || window.matchMedia("(hover: none)").matches;
};

export default testMobile;
