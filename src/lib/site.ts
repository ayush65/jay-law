export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaylawlimited.co.nz";

export const siteName = "Jay Law";
export const siteDescription =
  "A leading New Zealand practice of Barristers and Solicitors in Property, Immigration, Family and Commercial Law. Established in 2022 by Jayanthi Vallipuram. Accessible, Affordable, Attentive.";
export const contactEmail = "info@jaylawlimited.co.nz";
export const contactPhone = "0223787992";

/** Jay Law official social profiles. Set values in env or here when confirmed. */
export const socialLinks = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
};
