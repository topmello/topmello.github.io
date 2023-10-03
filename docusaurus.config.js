// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Settle Aid",
  tagline:
    "Melbourne Unveiled: Your Guide to Embracing the City and Fitting In with Confidence.",
  favicon: "img/settle-aid-icon.png",

  // Set the production url of your site here
  url: "https://topmello.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "topmello", // Usually your GitHub org/user name.
  projectName: "topmello.github.io", // Usually your repo name.
  deploymentBranch: "deployment",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/settle-aid-icon.png",
      navbar: {
        title: "Settle Aid",
        logo: {
          alt: "My Site Logo",
          src: "img/settle-aid-icon.png",
        },
        items: [
          {
            to: "/blog", label: "Product", position: "left"
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Support & Maintainance",
          },
          {
            href: "https://github.com/topmello",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Project Governance",
                href: "https://drive.google.com/drive/folders/14EiOCMIgbjgytfxUQqypD7dSrMTFhjqR?usp=share_link",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LeanKit",
                href: "https://monashie.leankit.com/board/1972989374",
              },
              {
                label: "Mahara",
                href: "https://mahara.infotech.monash.edu/group/view.php?id=2413",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/topmello",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Top Mello Team
        , Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
