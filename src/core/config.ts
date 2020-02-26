import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: "Braintree",
  DUMMY: "Dummy",
  STRIPE: "Stripe",
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "https://vk.com/krisall",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: "https://vk.com/krisall",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    href: "https://vk.com/krisall",
    path: require("../images/twitter-icon.svg"),
  },
  {
    ariaLabel: "youtube",
    href: "https://vk.com/krisall",
    path: require("../images/youtube-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description: "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "Demo PWA Storefront – Saleor Commerce",
  type: "website",
  url: window.location.origin,
};
