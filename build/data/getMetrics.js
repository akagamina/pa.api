"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetrics = void 0;
const dayjs = require("dayjs");
function getMetrics(data) {
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
exports.getMetrics = getMetrics;
//# sourceMappingURL=getMetrics.js.map