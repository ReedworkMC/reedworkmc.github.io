// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import opengraphImages from 'astro-opengraph-images';

import * as fs from 'fs';

import { ogLayout } from '@/og/ReedworkMC-OG.ts';

export default defineConfig({
    site: 'https://reedworkmc.github.io/',

    integrations: [
        sitemap(),

        starlight({
            title: 'ReedworkMC',
            description:
                'Open-source tools, libraries and frameworks for Minecraft and PaperMC development. Created by 0kAj and built together with the community.',

            components: {
                Head: '@components/Head.astro',
                Footer: '@components/Footer.astro',
            },

            customCss: [
                '@/styles/default.css',
            ],

            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/ReedworkMC',
                },
            ],

            sidebar: [
                {
                    label: 'Reedwork',
                    items: [
                        {
                            label: 'Getting Started',
                            items: [
                                {
                                    autogenerate: {
                                        directory: 'reedwork/getting-started',
                                    },
                                },
                            ],
                        },
                        {
                            label: 'Features',
                            items: [
                                {
                                    autogenerate: {
                                        directory: 'reedwork/features',
                                    },
                                },
                            ],
                        },
                        {
                            label: 'Utilities',
                            items: [
                                {
                                    autogenerate: {
                                        directory: 'reedwork/utilities',
                                    },
                                },
                            ],
                        },
                        {
                            label: 'Tutorials',
                            items: [
                                {
                                    label: 'Learn Reedwork in 5 Minutes', items: [
                                        {
                                            label: 'Create a PaperMC Brigadier Command',
                                            slug: 'reedwork/tutorials/five-minute-command',
                                        },
                                        {
                                            label: 'Create a PaperMC Event Listener',
                                            slug: 'reedwork/tutorials/five-minute-event-listener',
                                        },
                                        {
                                            label: 'Create a PaperMC Custom Enchantment',
                                            slug: 'reedwork/tutorials/five-minute-enchantment',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },

                {
                    label: 'More Projects',
                    items: [
                        {
                            label: 'ReedworkConfig · Coming Soon',
                            link: '/#projects',
                        },
                        {
                            label: 'ReedworkUtils · Coming Soon',
                            link: '/#projects',
                        },
                    ],
                },

                {
                    label: 'External Resources',
                    items: [
                        {
                            label: 'Official PaperMC Documentation',
                            link: 'https://docs.papermc.io/paper/',
                        },
                        {
                            label: 'ReedworkMC on GitHub',
                            link: 'https://github.com/ReedworkMC',
                        },
                    ],
                },
            ],
        }),

        icon(),
        mdx(),

        opengraphImages({
            options: {
                fonts: [
                    {
                        name: 'Roboto',
                        weight: 400,
                        style: 'normal',
                        data: fs.readFileSync(
                            'node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff',
                        ),
                    },
                ],
            },
            render: ogLayout,
        }),
    ],
});