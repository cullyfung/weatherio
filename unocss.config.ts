import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
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
        lato: 'Lato'
      }
    }),
    presetTypography()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
