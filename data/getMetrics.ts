const dayjs = require("dayjs");

interface Metrics {
  fcp: Values;
  ttfb: Values;
  domLoad: Values;
  windowLoad: Values;
}

interface Values {
  type: string;
  time: string;
  value: number;
}

export function getMetrics(data: Metrics) {
  const getMetrics = {
    fcp: {
      type: "fcp",
      time: dayjs().format("HH:mm:ss"),
      value: data.fcp,
    },
    ttfb: {
      type: "ttfb",
      time: dayjs().format("HH:mm:ss"),
      value: data.ttfb,
    },
    domLoad: {
      type: "domLoad",
      time: dayjs().format("HH:mm:ss"),
      value: data.domLoad,
    },
    windowLoad: {
      type: "windowLoad",
      time: dayjs().format("HH:mm:ss"),
      value: data.windowLoad,
    },
  };

  return getMetrics;
}
