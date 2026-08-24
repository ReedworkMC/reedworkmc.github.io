// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://reedworkmc.github.io/Reedwork',

    integrations: [
        starlight({
            title: 'Reedwork',
            description:
                'A modern framework for building PaperMC plugins with less boilerplate.',

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
                        {label: 'Dependency Injection', slug: 'features/dependency-injection'},
                        {label: 'Commands', slug: 'features/commands'},
                        {label: 'Events', slug: 'features/events'},
                        {label: 'Enchantments', slug: 'features/enchantments'},
                    ],
                },
                {
                    label: 'Utilities',
                    items: [
                        {label: 'Bedrock Utils', slug: 'utilities/bedrock-utils'},
                        {label: 'Bukkit to String', slug: 'utilities/bukkit-to-string'},
                        {label: 'Color Utils', slug: 'utilities/color-utils'},
                        {label: 'Colorfulness Finder', slug: 'utilities/colorfulness-finder'},
                    ],
                },
            ],
        }),
        icon(),
        mdx()
    ],
});