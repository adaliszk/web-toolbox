import type { StorybookConfig } from "storybook-framework-qwik"

export function defineConfig(config?: StorybookConfig): StorybookConfig {
    return {
        stories: ["../*.mdx", "../docs/**/*.mdx", "../src/**/Overview.mdx", "../src/**/*.stories.tsx"],
        ...(config ?? {}),
        core: {
            renderer: "storybook-framework-qwik",
        },
        framework: {
            name: "storybook-framework-qwik",
        },
        addons: [
            {
                name: "@storybook/addon-essentials",
                options: {
                    backgrounds: false,
                    code: false,
                    docs: true,
                },
            },
            {
                name: "@storybook/addon-storysource",
                options: {
                    loaderOptions: {
                        injectStoryParameters: false,
                    },
                },
            },
            "@storybook/addon-themes",
            "@storybook/addon-links",
            ...(config?.addons ?? []),
        ],
        docs: {
            defaultName: "Overview",
            autodocs: true,
        },
    }
}
