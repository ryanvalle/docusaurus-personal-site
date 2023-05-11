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
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-KC00M09NT5',
          anonymizeIP: true
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
          // {
          //   to: '/blog', 
          //   label: 'Random Thoughts in Writing', 
          //   position: 'left'
          // },
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Knowledge Share',
          },
          {
            position: 'left',
            label: 'photos.by.ryan',
            href: 'https://photos.ryanvalle.me'
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
                label: 'View Resume',
                to: '/resume/',
                target: 'blank'
              },
              {
                label: 'Running Stuff',
                to: '/running-stuff',
              },
              {
                label: 'Random Thoughts & Stuff',
                to: '/blog',
              },
              {
                label: 'photos.by.ryan',
                href: 'https://photos.ryanvalle.me',
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
                label: 'Tumblr',
                href: 'https://from-my-camera.tumblr.com'
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/ryanvalle',
              }
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
        copyright: `Copyright ©${new Date().getFullYear()}. Made for fun with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'L69P927TDR',
  
        // Public API key: it is safe to commit it
        apiKey: 'cf013a8603073d7294a1369c7bae47aa',
  
        indexName: 'ryanvalle',
  
        // Optional: see doc section below
        contextualSearch: true
      }
    }),
    
};

module.exports = config;
