import getSystem from "@/utils/get-system";
const OS = getSystem();

// default theme setting
export const defaultTheme = {
  primary_color: "#007AFF",
  secondary_color: "#FFCC00",
  primary_text: "#000000",
  secondary_text: "rgba(60, 60, 67, 0.60)",
  info_color: "#007AFF",
  error_color: "#FF3B30",
  warning_color: "#FF9500",
  success_color: "#34C759",
  background_color: "#f5f5f5",
  font_family: `"Roboto", "Helvetica", "Arial", sans-serif, ${
    OS === "windows" ? "twemoji mozilla" : ""
  }`,
};

// dark mode
export const defaultDarkTheme = {
  ...defaultTheme,
  primary_color: "#0A84FF",
  secondary_color: "#FF9F0A",
  primary_text: "#ffffff",
  background_color: "#2e303d",
  secondary_text: "rgba(235, 235, 245, 0.60)",
  info_color: "#0A84FF",
  error_color: "#FF453A",
  warning_color: "#FF9F0A",
  success_color: "#30D158",
};
