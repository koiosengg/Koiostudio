// Google Apps Script Web App Endpoints for Connections & Client Onboarding
export const CONNECTIONS_SHEET_ENDPOINT =
  import.meta.env.VITE_CONNECTIONS_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbz_SAMPLE_DEPLOYMENT_ID/exec";

export const ADS_ONBOARDING_ENDPOINT =
  import.meta.env.VITE_ADS_ONBOARDING_URL ||
  CONNECTIONS_SHEET_ENDPOINT;

export const BRANDING_ONBOARDING_ENDPOINT =
  import.meta.env.VITE_BRANDING_ONBOARDING_URL ||
  CONNECTIONS_SHEET_ENDPOINT;

export const PACKAGING_ONBOARDING_ENDPOINT =
  import.meta.env.VITE_PACKAGING_ONBOARDING_URL ||
  CONNECTIONS_SHEET_ENDPOINT;

