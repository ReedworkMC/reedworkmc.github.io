import type {RenderFunctionInput} from 'astro-opengraph-images';
// @ts-ignore
import {createElement} from 'react';

const {twj} = await import('tw-to-css');

export function ogLayout({
                             title,
                             description, // @ts-ignore
                         }: RenderFunctionInput): Promise<React.ReactNode> {
    return Promise.resolve(
        createElement(
            'div',
            {
                style: {
                    ...twj(
                        'relative h-full w-full overflow-hidden flex flex-col',
                    ),
                    background:
                        'radial-gradient(circle at 82% 18%, rgba(124, 58, 237, 0.18), transparent 32%), radial-gradient(circle at 18% 85%, rgba(6, 182, 212, 0.10), transparent 28%), #07070a',
                },
            },

            // Ambient glow — top right
            createElement('div', {
                style: {
                    ...twj(
                        'absolute rounded-full pointer-events-none',
                    ),
                    width: '720px',
                    height: '720px',
                    right: '-280px',
                    top: '-330px',
                    background:
                        'radial-gradient(circle, rgba(139, 92, 246, 0.20) 0%, rgba(139, 92, 246, 0.05) 38%, transparent 70%)',
                    filter: 'blur(20px)',
                },
            }),

            // Ambient glow — bottom left
            createElement('div', {
                style: {
                    ...twj(
                        'absolute rounded-full pointer-events-none',
                    ),
                    width: '600px',
                    height: '600px',
                    left: '-300px',
                    bottom: '-320px',
                    background:
                        'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 68%)',
                    filter: 'blur(30px)',
                },
            }),

            // Technical grid
            createElement('div', {
                style: {
                    ...twj(
                        'absolute inset-0 pointer-events-none',
                    ),
                    opacity: 0.16,
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                    maskImage:
                        'linear-gradient(to bottom, black 0%, transparent 82%)',
                },
            }),

            // Main container
            createElement(
                'div',
                {
                    style: twj(
                        'relative flex flex-col justify-between w-full h-full px-24 py-20',
                    ),
                },

                // ─────────────────────────────────────────────
                // Header
                // ─────────────────────────────────────────────
                createElement(
                    'div',
                    {
                        style: twj(
                            'flex flex-row items-start justify-between w-full',
                        ),
                    },

                    // Reedwork brand + framework label
                    createElement(
                        'div',
                        {
                            style: twj(
                                'flex flex-col',
                            ),
                        },

                        // Reedwork brand
                        createElement(
                            'span',
                            {
                                style: {
                                    ...twj(
                                        'text-[32px] font-bold tracking-[-0.02em]',
                                    ),
                                    fontWeight: 750,
                                    background:
                                        'linear-gradient(90deg, #8b5cf6 0%, #22d3ee 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                },
                            },
                            'REEDWORK',
                        ),

                        // Plugin framework label
                        createElement(
                            'div',
                            {
                                style: {
                                    ...twj(
                                        'flex flex-row items-center mt-3',
                                    ),
                                },
                            },

                            createElement('div', {
                                style: {
                                    width: '28px',
                                    height: '2px',
                                    marginRight: '10px',
                                    background:
                                        'linear-gradient(90deg, #8b5cf6, #22d3ee)',
                                    borderRadius: '999px',
                                },
                            }),

                            createElement(
                                'span',
                                {
                                    style: twj(
                                        'text-[16px] text-slate-500 font-bold tracking-[0.22em] uppercase',
                                    ),
                                },
                                'PLUGIN FRAMEWORK',
                            ),
                        ),
                    ),

                    // Platform badge
                    createElement(
                        'div',
                        {
                            style: {
                                ...twj(
                                    'flex items-center rounded-full px-6 py-3',
                                ),
                                background:
                                    'rgba(255, 255, 255, 0.035)',
                                border:
                                    '1px solid rgba(255, 255, 255, 0.10)',
                            },
                        },

                        createElement(
                            'span',
                            {
                                style: twj(
                                    'text-[20px] text-slate-300 font-semibold tracking-[0.12em] uppercase',
                                ),
                            },
                            'BUILT FOR',
                        ),

                        createElement(
                            'span',
                            {
                                style: {
                                    ...twj(
                                        'text-[20px] font-bold tracking-[0.12em] uppercase',
                                    ),
                                    color: '#a78bfa',
                                    marginLeft: '8px',
                                },
                            },
                            'PAPERMC',
                        ),
                    ),
                ),

                // ─────────────────────────────────────────────
                // Main content
                // ─────────────────────────────────────────────
                createElement(
                    'div',
                    {
                        style: twj(
                            'flex flex-col max-w-[1950px]',
                        ),
                    },

                    // Title
                    createElement(
                        'h1',
                        {
                            style: {
                                ...twj(
                                    'text-white font-bold tracking-[-0.045em] m-0',
                                ),
                                fontSize: '82px',
                                lineHeight: '1.02',
                                maxWidth: '1850px',
                            },
                        },
                        title as string,
                    ),

                    // Description
                    createElement(
                        'p',
                        {
                            style: {
                                ...twj(
                                    'font-medium m-0',
                                ),
                                fontSize: '30px',
                                lineHeight: '1.4',
                                maxWidth: '1450px',
                                marginTop: '30px',
                                color: '#a1a1aa',
                            },
                        },
                        description as string,
                    ),
                ),

                // ─────────────────────────────────────────────
                // Footer
                // ─────────────────────────────────────────────
                createElement(
                    'div',
                    {
                        style: twj(
                            'flex flex-row items-end justify-between w-full',
                        ),
                    },

                    createElement(
                        'div',
                        {
                            style: twj(
                                'flex flex-col',
                            ),
                        },

                        createElement('div', {
                            style: {
                                width: '100%',
                                height: '1px',
                                marginBottom: '20px',
                                background:
                                    'linear-gradient(90deg, rgba(139,92,246,0.65), rgba(255,255,255,0.08), transparent)',
                            },
                        }),

                        createElement(
                            'span',
                            {
                                style: twj(
                                    'text-[21px] text-slate-500 font-medium tracking-wide',
                                ),
                            },
                            'A modern PaperMC plugin framework',
                        ),
                    ),

                    // Technical indicator
                    createElement(
                        'div',
                        {
                            style: twj(
                                'flex flex-row items-center',
                            ),
                        },

                        createElement(
                            'span',
                            {
                                style: twj(
                                    'text-[18px] text-slate-600 font-semibold tracking-[0.16em] uppercase',
                                ),
                            },
                            'JAVA · PAPER · PLUGINS',
                        ),
                    ),
                ),
            ),
        ),
    );
}
