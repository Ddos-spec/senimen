export const driveThumb = (id: string, width = 800) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const brand = {
  logo: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 480),
  logoSmall: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 240),
  favicon: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 64),
  og: driveThumb('1WcNTXZukNGLHyLMMpoa96MVr7mFmy3Qy', 1200),
  joinQr: driveThumb('1Ca-qvkdfy41g0bhX1G2VXyigXvRvFOnP', 520),
  submitQr: driveThumb('1jmaic3O1B0XI3VITk6m5GbpTHqnjagSk', 520),
  collab: driveThumb('1Tbz74iL_LszmL4URqijS6XO6-v45gauk', 720),
  tanyaTanya: driveThumb('1HqJgW3NZAxasePYN8kM2D_2kwpWRGDbl', 480),
  balikLayar: driveThumb('1l-GM4csTrOVcWwkI-L0XB8HnF8bUQZMb', 480),
} as const;
