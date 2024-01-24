// Type definitions; see ./script/src/classes/types.ts
// for complete types.

type NextError = Error & { digest?: string };

export type Metadata = {
  userProvidedDescription?: string;
  triggerType: "widget" | "error-page";
} & Record<string, unknown>;

export type ReportData = Record<string, unknown> & {
  metadata: Metadata;
};

type Report = {
  updateReportData: (reportData?: Partial<ReportData>) => void;
};

export type BugpilotInterface = {
  saveReport: (...args: unknown[]) => void;
  identify: (...args: unknown[]) => void;
  report?: Report;
  logout: () => void;
  requestSessionUpload: (
    metadata: Metadata, // userProvidedDescription is required by this library
    reportData: Partial<ReportData>,
  ) => Promise<void>;
};

export type ErrorPageProps = {
  error: NextError;
  reset: () => void;

  // (Optional Bugpilot integration props)

  // The callback to call when the user clicks the "Add details" button.
  // If not provided, the default Bugpilot bug reporting form is shown,
  // and the reported error will be sent to Bugpilot > User Reports.
  // If set to null, the button is hidden.
  onAddDetailsClick?: ((...args: unknown[]) => void) | null;

  // reportErrorFn is the function that will be called to report
  // the error to Bugpilot. If the default Bugpilot bug reporting
  // callback is provided the reported error will be sent to
  // Bugpilot > Errors Log.
  reportErrorFn?: (error: NextError) => void;
};
