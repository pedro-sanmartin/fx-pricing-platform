<template>
  <section class="py-md md:py-lg lg:py-xxl">
    <div class="max-w-7xl mx-auto px-md md:px-lg">
      <div class="conversion-container">
        <div class="grid lg:grid-cols-2 gap-md md:gap-lg items-center">
          <!-- Contenido izquierdo -->
          <div>
            <h2
              class="text-3xl md:text-4xl font-poppins font-bold mb-md leading-tight"
            >
              <span class="tittle-black">{{ titleText }}</span>
              <br />
              <span class="tittle-blue">{{ titleBlueText }}</span>
            </h2>
            <p class="description-text">
              {{ descriptionText }}
            </p>

            <!-- Botones de app stores -->
            <div class="flex flex-col sm:flex-row gap-md mt-lg">
              <a
                href="#"
                class="inline-block"
                aria-label="Descargar en Google Play"
              >
                <img
                  :src="require('~/assets/images/playstore.svg')"
                  alt="GET IT ON Google Play"
                  class="h-12 w-auto"
                />
              </a>
              <a
                href="#"
                class="inline-block"
                aria-label="Descargar en App Store"
              >
                <img
                  :src="require('~/assets/images/appstore.svg')"
                  alt="Download on the App Store"
                  class="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          <!-- Visual derecho: Mockups de teléfonos y tarjeta -->
          <div class="relative mt-lg lg:mt-0">
            <img
              :src="require('~/assets/images/banner-img.png')"
              alt="Global66 App Mockups"
              class="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    titleText() {
      return this.$t ? this.$t('conversion.title') : 'Sé Global,'
    },
    titleBlueText() {
      return this.$t ? this.$t('conversion.titleBlue') : 'paga como local'
    },
    descriptionText() {
      return this.$t
        ? this.$t('conversion.description')
        : 'Tu Cuenta Global para pagar, convertir, enviar dinero y más.'
    }
  }
}
</script>

<style scoped>
.conversion-container {
  background-color: #e0e6ff;
  border-radius: 0.5rem;
  min-height: auto;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tittle-black {
  color: var(--dark-text);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
}

.tittle-blue {
  color: var(--blue-text);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
}

.description-text {
  color: var(--dark-text);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .conversion-container {
    border-radius: 0.75rem;
    padding: 2rem;
  }

  .tittle-black {
    font-size: 2rem;
  }

  .tittle-blue {
    font-size: 2rem;
  }

  .description-text {
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .conversion-container {
    border-radius: 1rem;
    height: 400px;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .tittle-black {
    font-size: 2.5rem;
  }

  .tittle-blue {
    font-size: 2.5rem;
  }

  .description-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>
