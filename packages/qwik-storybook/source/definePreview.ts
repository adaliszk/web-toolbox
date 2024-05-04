import { qwikCityDecorator } from "storybook-framework-qwik/qwik-city-decorator"
import type { ThemeVars, ThemeVarsPartial } from "@storybook/theming";
import type { Preview, Decorator } from "storybook-framework-qwik"

import { withThemeByDataAttribute } from "@storybook/addon-themes"
import { create } from "@storybook/theming/create";

export function definePreview(config?: Preview & { theme: ThemeVarsPartial }): Preview {
    const theme = create({
        base: "dark",
        brandTarget: "_self",
        ...(config?.theme ?? {}),
    }) as ThemeVars;

    const customDecorators = (config?.decorators ?? []) as Decorator[];

    return {
        decorators: [
            qwikCityDecorator,
            withThemeByDataAttribute({
                defaultTheme: "dark",
                themes: {
                    light: "light",
                    dark: "dark",
                },
            }),
            ...customDecorators,
        ],
        parameters: {
            layout: "fullscreen",
            options: {
                showRoots: true,
            },
            a11y: {
                config: {},
                options: {
                    checks: { "color-contrast": { options: { noScroll: true } } },
                    restoreScroll: true,
                },
            },
            actions: { argTypesRegex: '^on[A-Z].*' },
            controls: {
                sort: "requiredFirst",
                exclude: ["class"],
            },
            docs: {
                iframeHeight: "200px",
                theme,
                ...(config?.parameters?.docs ?? {}),
            },
            ...(config?.parameters ?? {}),
        },
    }
}
