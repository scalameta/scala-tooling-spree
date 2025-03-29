import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Scala Tooling Spree',
  tagline: 'Improve Scala tooling and meet great people',
  favicon: 'img/favicon.ico',

  url: 'https://majk-p.github.io/', // todo change to scalameta.org once moved to the org
  baseUrl: '/scala-tooling-spree/',
  organizationName: 'scalameta',
  projectName: 'scala-tooling-spree',
  trailingSlash: false,
  plugins: ['docusaurus-plugin-sass', "@easyops-cn/docusaurus-search-local"],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Scala Tooling Spree',
      logo: {
        alt: 'Scala Tooling Spree',
        src: 'img/scalameta.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/3eHeFJ2XhJ',
            }
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Metals',
              href: 'https://github.com/scalameta/metals/',
            },
            {
              label: 'Scala CLI',
              href: 'https://github.com/VirtusLab/scala-cli/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Scala tooling spree  #1 recap',
              href: 'https://blog.michal.pawlik.dev/posts/scala/tooling-spree-recap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scalameta.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java', 'scala', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
