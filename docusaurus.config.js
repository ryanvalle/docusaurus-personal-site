// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ryan Valle',
  tagline: 'A dude behind a computer, building stuff for the world wide web. This site is really just my playground to try stuff out and share random thoughts.',
  url: 'https://www.ryanvalle.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/emoji-smile.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ryanvalle', // Usually your GitHub org/user name.
  projectName: 'personal-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ryan Valle',
        logo: {
          alt: 'Memoji Icon',
          src: 'img/emoji-think.png',
        },
        items: [
          {
            to: '/resume', 
            label: 'Resume', 
            position: 'left',
            target: 'blank'
          },
          {
            to: '/running-stuff', 
            label: 'Running Stuff', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: 'Random Thoughts in Writing', 
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'overview',
            position: 'right',
            label: 'Knowledge Base',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Site Links',
                to: '/resume',
              },
              {
                label: 'Running Stuff',
                to: '/running-stuff',
              },
              {
                label: 'Random Thoughts & Stuff',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Social Media Stuff',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/therunningryan',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/therunningryan',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/ryanvalle',
              },
            ],
          },
          {
            title: 'Keeping it Professional',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ryanvalle1/'
              },
              {
                label: 'Github',
                href: 'https://www.github.com/ryanvalle',
              },
            ]
          },
          {
            title: 'Quick Contact',
            items: [
              {
                label: 'ryanvalle@me.com',
                href: 'mailto: ryanvalle@me.com'
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      }
    }),
    
};

module.exports = config;
