<template>
  <div>
    <AppHeader />

    <RateHero
      :rate="rateData.rate"
      :currency="rateData.currency"
      :date="rateData.date"
      :slug-name="rateData.slugName"
    />

    <ConversionBlock />
  </div>
</template>
<script>
// Importamos los componentes creados
import AppHeader from '~/components/Header/AppHeader.vue'
import RateHero from '~/components/Hero/RateHero.vue'
import ConversionBlock from '~/components/Conversion/ConversionBlock.vue'
import { SLUG_TO_CURRENCY, CURRENCY_NAMES } from '~/utils/constants'
import { formatRate, formatDate } from '~/utils/formatters'

export default {
  // Declaramos los componentes para poder usarlos en el template
  components: {
    AppHeader,
    RateHero,
    ConversionBlock
  },

  // Mantener la lógica de asyncData que ya está funcionando
  async asyncData({ params, error }) {
    const currencyCode = SLUG_TO_CURRENCY[params.slug]

    if (!currencyCode) {
      return error({
        statusCode: 404,
        message: 'Página de divisa no encontrada'
      })
    }

    const loadRates = async () => {
      if (process.server) {
        const module = await import('~/static/data/rates.json')
        return module.default || module
      }

      const response = await fetch('/data/rates.json')
      if (!response.ok) {
        throw new Error('No se pudo cargar la información de tasas')
      }
      return response.json()
    }

    try {
      const data = await loadRates()
      const rate = data.rates[currencyCode]

      if (!rate) {
        return error({
          statusCode: 404,
          message: 'Tasa no encontrada para ' + currencyCode
        })
      }

      // Formatear fecha desde ISO a formato legible
      const formattedDate = formatDate(data.asOf)

      // Obtener nombre de divisa
      const currencyName = CURRENCY_NAMES[currencyCode] || currencyCode

      return {
        rateData: {
          rate,
          date: formattedDate,
          currency: currencyCode,
          slugName: params.slug,
          currencyName,
          asOf: data.asOf
        }
      }
    } catch (e) {
      return error({
        statusCode: 500,
        message: 'Error interno al cargar los datos'
      })
    }
  },

  data() {
    return {
      rateData: {}
    }
  },

  head() {
    if (!this.rateData || !this.rateData.currency) {
      return {}
    }

    const { rate, currency, currencyName, slugName } = this.rateData
    const formattedRate = formatRate(rate)

    const title = this.$t('seo.title', {
      currencyName,
      currency,
      rate: formattedRate
    })
    const description = this.$t('seo.description', {
      currencyName,
      currency,
      rate: formattedRate
    })
    const canonical = `https://global66.com/precio/${slugName}`

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: canonical
        },
        {
          rel: 'alternate',
          hreflang: 'es-CL',
          href: canonical
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Page styles */
</style>
