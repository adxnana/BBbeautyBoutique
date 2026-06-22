// Lightweight runtime error reporter for B&B Boutique.
// Replace the console transport with a real logging endpoint if desired.

export function reportBBError(error, options = {}) {
  const { boundary = "unknown", extra } = options;
  // eslint-disable-next-line no-console
  console.error(`[BB:${boundary}]`, error, extra ?? "");
}

export const BBErrorOptions = {
  defaultBoundary: "app_root",
};
