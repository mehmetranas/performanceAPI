const calculateTTFB = (navigationEntries) => {
  return navigationEntries.responseStart - navigationEntries.requestStart;
};

const calculateDomLoad = (navigationEntries) => {
  return navigationEntries.responseStart - navigationEntries.requestStart;
};

const performanceData = (entries) => {
  const navigationEntries = entries.find((i) => i.entryType === "navigation");
  const TTFB = navigationEntries.responseStart - navigationEntries.requestStart;
  const FCP = entries.find((i) => i.name === "first-contentful-paint");
  const domLoad =
    navigationEntries.domComplete - navigationEntries.domInteractive;
  const windowLoadEvent =
    navigationEntries.loadEventEnd - navigationEntries.loadEventStart;
};
