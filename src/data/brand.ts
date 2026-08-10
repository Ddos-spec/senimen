export const driveThumb = (id: string, width = 800) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const brand = {
  logo: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 900),
  logoSmall: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 360),
  favicon: driveThumb('1-1AqcNq9xz7PKkkwfUoKkHy7LWEKZJ8H', 96),
  og: driveThumb('1WcNTXZukNGLHyLMMpoa96MVr7mFmy3Qy', 1600),
  joinQr: driveThumb('1Ca-qvkdfy41g0bhX1G2VXyigXvRvFOnP', 760),
  submitQr: driveThumb('1jmaic3O1B0XI3VITk6m5GbpTHqnjagSk', 760),
  collab: driveThumb('1Tbz74iL_LszmL4URqijS6XO6-v45gauk', 1000),
  tanyaTanya: driveThumb('1HqJgW3NZAxasePYN8kM2D_2kwpWRGDbl', 720),
  balikLayar: driveThumb('1l-GM4csTrOVcWwkI-L0XB8HnF8bUQZMb', 720),
} as const;
