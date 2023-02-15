import type { QwikVitePluginOptions } from '@builder.io/qwik/optimizer'
import type { QwikCityVitePluginOptions } from '@builder.io/qwik-city/vite'
import type { WebConfig } from '@adaliszk/web-compiler'


export interface QwikConfig extends WebConfig
{
    qwik?: QwikVitePluginOptions
    city?: QwikCityVitePluginOptions
}