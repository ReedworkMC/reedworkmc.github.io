// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';
import opengraphImages from "astro-opengraph-images";
import * as fs from "fs";

import {ogLayout} from "@/og/ReedworkOG.ts";

export default defineConfig({
    site: 'https://reedworkmc.github.io/',

    integrations: [
        sitemap(),
        starlight({
            title: 'Reedwork',
            description:
                'A modern framework for building PaperMC plugins with less boilerplate.',

            components: {
                Head: '@components/Head.astro',
            },

            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/ReedworkMC/Reedwork',
                },
            ],

            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        {label: 'Introduction', slug: 'getting-started/introduction'},
                        {label: 'Installation', slug: 'getting-started/installation'},
                        {label: 'Quick Start', slug: 'getting-started/quick-start'},

                    ],
                },
                {
                    label: 'Features',
                    items: [
                        {label: 'Commands', slug: 'features/commands'},
                        {label: 'Events', slug: 'features/events'},
                        {label: 'Enchantments', slug: 'features/enchantments'},
                        {label: 'Dependency Injection', slug: 'features/dependency-injection'},
                    ],
                },
                {
                    label: 'Utilities',
                    items: [
                        {label: 'Utilities Overview', slug: 'utilities'},
                        {label: 'Bedrock Utils', slug: 'utilities/bedrock-utils'},
                        {label: 'Bukkit to String', slug: 'utilities/bukkit-to-string'},
                        {label: 'Color Utils', slug: 'utilities/color-utils'},
                        {label: 'Colorfulness Finder', slug: 'utilities/colorfulness-finder'},
                    ],
                },
                {
                    label: 'Tutorials',
                    items: [
                        {
                            label: 'Learn Reedwork in 5 Minutes', items: [
                                {
                                    label: 'Create a PaperMC Brigadier Command',
                                    slug: 'tutorials/five-minute-command',
                                },
                                {
                                    label: 'Create a PaperMC Event Listener',
                                    slug: 'tutorials/five-minute-event-listener',
                                },
                                {
                                    label: 'Create a PaperMC Custom Enchantment',
                                    slug: 'tutorials/five-minute-enchantment',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'PaperMC Documentation',
                    link: 'https://docs.papermc.io/paper/',
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
                        data: fs.readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
                    }
                ],
            },
            render: ogLayout
        }),
    ],
});