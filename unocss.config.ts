import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2
    }),
    presetWebFonts({
      fonts: {
        'Nunito Sans': ['Nunito Sans', 'sans-serif']
      }
    }),
    presetTypography()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
