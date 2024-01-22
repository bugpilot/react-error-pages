import { BugpilotInterface, ReportData } from "../types";

const BUGPILOT_CHECK_INTERVAL_MS = 1.5 * 1000;
const BUGPILOT_CHECK_MAX_ATTEMPTS = 3;

// Augment the global Window interface to include the Bugpilot.
// Note that Bugpilot is loaded asynchronously and might not
// be immediately available.

declare global {
  interface Window {
    Bugpilot?: BugpilotInterface;
  }
}

const waitForBugpilot = (
  cb: (bugpilot: BugpilotInterface) => void,
  attempts_ = 0,
) => {
  if (typeof window === "undefined") {
    return;
  }

  if (attempts_ >= BUGPILOT_CHECK_MAX_ATTEMPTS) {
    console.debug(
      `window.Bugpilot not available after ${attempts_} attempts. Giving up.`,
    );
    return;
  }

  if (!window.Bugpilot) {
    setTimeout(
      () => waitForBugpilot(cb, attempts_ + 1),
      BUGPILOT_CHECK_INTERVAL_MS,
    );

    return;
  }

  cb(window.Bugpilot);
};

export const updateBugReport = (reportData: ReportData) => {
  waitForBugpilot((bugpilot) => {
    const report = bugpilot.report;

    if (!report) {
      console.debug("Bugpilot report not available. Skipping update.");
      return;
    }

    report.updateReportData(reportData);
    void bugpilot.requestSessionUpload(reportData.metadata, reportData);
  });
};
