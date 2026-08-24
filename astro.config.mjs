// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from 'astro-icon';

export default defineConfig({
    site: 'https://reedworkmc.github.io/Reedwork',

    integrations: [starlight({
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
                    {label: 'Utilities', slug: 'features/utilities'},
                ],
            },
        ],
    }),
        icon()
    ],
});