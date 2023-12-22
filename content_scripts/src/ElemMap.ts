export const ElemMap: Record<string, { name: string; query: string }[]> = {
  Base: [
    { name: "Root", query: `div[class*='Base__Container']` },
    { name: "NavBar", query: `div[class*='NavBar__NavigationWrapper']` },
    { name: "Body", query: `div[class*='Base__Container'] > div:nth-child(2)` },
  ],
  NavBar: [
    { name: "Root", query: `div[class*='NavBar__NavigationWrapper']` },
    { name: "Logo", query: `a[class*='NavBar___StyledAnchor'][href='/']` },
    { name: "Home", query: `a[class*="NavItem__NavItemWrap"][href='/']` },
    {
      name: "Recommend",
      query: `a[class*='NavItem__NavItemWrap'][href='/recommend']`,
    },
    { name: "Me", query: `a[class*='NavBar'][href='/me']` },
    {
      name: "Left",
      query: `div[class*='NavBar__NavigationContainer'] > div:last-child`,
    },
  ],
  NewPost: [
    {
      name: "Root",
      query: `div[class*='Base__Container'] > div:nth-child(2) > div > div`,
    },
  ],
  UserSideCard: [
    { name: "Root", query: `div[class*='UserSideCard__Container']` },
  ],
  MyGroup: [
    { name: "Root", query: `div[class*='UserSideCard__Container'] + div` },
    {
      name: "List",
      query: `div[class*='UserSideCard__Container'] + div :nth-child(2)`,
    },
  ],
  FooterWebsiteInfo: [
    { name: "Root", query: `footer[class*='FooterWebsiteInfo__Container']` },
  ],
};
