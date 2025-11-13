<template>
  <section class="bg-primary-blue pt-md md:pt-lg lg:pt-xl">
    <div class="max-w-7xl mx-auto px-md md:px-lg">
      <div
        class="grid lg:grid-cols-2 gap-md md:gap-lg items-center min-h-[400px] md:min-h-[500px]"
      >
        <!-- Contenido izquierdo -->
        <div class="text-left mb-md lg:mb-0">
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          <h1 class="hero-title">
            {{ $t('hero.title', { rate: formattedRate, currency }) }}
          </h1>
          <p class="hero-timestamp">
            {{ $t('hero.timestamp', { date: formattedDate }) }}
          </p>
        </div>

        <!-- Visual derecho: Banderas con flecha y pedestal -->
        <div
          class="hero-visual-container relative flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] lg:min-h-[450px]"
        >
          <!-- Pedestal blanco translúcido 3D - fondo, centrado -->
          <div
            class="pedestal-container absolute bottom-0 left-1/2 z-0 w-full opacity-80"
          >
            <img
              :src="require('~/assets/images/stand.svg')"
              alt="Stand"
              class="w-full h-auto"
              loading="lazy"
            />
          </div>

          <!-- Contenedor de banderas y flecha - centrado verticalmente -->
          <div
            class="flags-container relative z-20 flex flex-col items-center justify-center"
          >
            <!-- Flecha verde - arriba de las banderas, centrada -->
            <div class="arrow-container">
              <img
                :src="require('~/assets/images/arrow.svg')"
                alt="Arrow"
                class="arrow-image"
                loading="lazy"
              />
            </div>

            <!-- Contenedor de banderas - juntas con superposición, centradas -->
            <div
              class="flags-wrapper relative z-30 flex items-center justify-center"
            >
              <!-- Bandera Chile - izquierda -->
              <div class="flag-chile-container relative z-20">
                <!-- Bandera circular con doble borde -->
                <div
                  class="flag-circle flag-circle-chile relative z-10 overflow-hidden rounded-full shadow-lg"
                >
                  <img
                    :src="require('~/assets/images/Flag.svg')"
                    alt="Chile"
                    class="flag-image flag-image-chile object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Bandera US - derecha, ligeramente encima -->
              <div class="flag-us-container relative z-30">
                <!-- Bandera circular con doble borde -->
                <div
                  class="flag-circle flag-circle-us relative z-10 overflow-hidden rounded-full shadow-lg"
                >
                  <img
                    :src="
                      require('~/assets/images/united-states-of-america.svg')
                    "
                    alt="United States"
                    class="flag-image flag-image-us object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    rate: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slugName: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedRate() {
      return new Intl.NumberFormat('es-CL', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(this.rate)
    },
    formattedDate() {
      if (!this.date) {
        return 'fecha no disponible'
      }
      return this.date
    }
  }
}
</script>

<style scoped>
.flag-circle-chile {
  border: 4px solid #899fe4;
  box-shadow: 0 0 0 10px #5979da, 0 3px 6px rgba(0, 0, 0, 0.15);
}

.flag-circle-us {
  border: 5px solid #84b4d8;
  box-shadow: 0 0 2px 15px rgba(72, 130, 192, 0.7),
    0 3px 6px rgba(0, 0, 0, 0.15);
}

@media (min-width: 640px) {
  .flag-circle-chile {
    border: 6px solid #899fe4;
    box-shadow: 0 0 0 15px #5979da, 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .flag-circle-us {
    border: 8px solid #84b4d8;
    box-shadow: 0 0 2px 22px rgba(72, 130, 192, 0.7),
      0 4px 8px rgba(0, 0, 0, 0.15);
  }
}

@media (min-width: 1024px) {
  .flag-circle-chile {
    border: 9px solid #899fe4;
    box-shadow: 0 0 0 22.5px #5979da, 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .flag-circle-us {
    border: 12px solid #84b4d8;
    box-shadow: 0 0 3px 30px rgba(72, 130, 192, 0.7),
      0 6px 12px rgba(0, 0, 0, 0.15);
  }
}

.flag-image-chile {
  width: 6rem;
  height: 6rem;
}

.flag-image-us {
  width: 7rem;
  height: 7rem;
}

.pedestal-container {
  transform: translateX(-50%);
  max-width: 300px;
}

.flags-container {
  transform: translateY(-30px);
}

.flags-wrapper {
  margin-left: -16px;
  margin-right: -16px;
}

.flag-us-container {
  transform: translateY(-3px);
}

.arrow-container {
  position: relative;
  z-index: 40;
  margin-bottom: -0.5rem;
  right: 0;
}

.arrow-image {
  width: 50%;
  position: relative;
  right: 0;
  transform: scale(1);
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.hero-timestamp {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;
}

@media (min-width: 640px) {
  .flag-image-chile {
    width: 8rem;
    height: 8rem;
  }

  .flag-image-us {
    width: 9rem;
    height: 9rem;
  }

  .pedestal-container {
    max-width: 450px;
  }

  .flags-container {
    transform: translateY(-50px);
  }

  .flags-wrapper {
    margin-left: -24px;
    margin-right: -24px;
  }

  .flag-us-container {
    transform: translateY(-5px);
  }

  .arrow-container {
    margin-bottom: -0.75rem;
    right: 0.25rem;
  }

  .arrow-image {
    width: 60%;
    transform: scale(1.2);
  }

  .hero-subtitle {
    font-size: 0.875rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-timestamp {
    font-size: 0.875rem;
  }
}

@media (min-width: 1024px) {
  .flag-image-chile {
    width: 11rem;
    height: 11rem;
  }

  .flag-image-us {
    width: 12.5rem;
    height: 12.5rem;
  }

  .pedestal-container {
    max-width: 675px;
  }

  .flags-container {
    transform: translateY(-75px);
  }

  .flags-wrapper {
    margin-left: -36px;
    margin-right: -36px;
  }

  .flag-us-container {
    transform: translateY(-7.5px);
  }

  .arrow-container {
    margin-bottom: -1.35rem;
    right: 0.5rem;
  }

  .arrow-image {
    width: 75%;
    transform: scale(1.5);
  }

  .hero-subtitle {
    font-size: 0.875rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-timestamp {
    font-size: 1rem;
  }
}
</style>
