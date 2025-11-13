<template>
  <header class="bg-primary-blue shadow-sm">
    <div class="max-w-7xl mx-auto px-md md:px-lg py-sm md:py-md">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            :src="require('~/assets/images/text-right.svg')"
            alt="Global66"
            class="logo-image h-6 w-auto"
            loading="eager"
          />
        </div>

        <!-- Navegación central -->
        <nav class="main-nav hidden lg:flex items-center space-x-lg">
          <NuxtLink
            to="/precio/peso-chileno"
            class="nav-link nav-link-active text-hover-text font-montserrat text-sm font-semibold pb-sm uppercase"
          >
            PERSONAS
          </NuxtLink>
          <NuxtLink
            to="/precio/sol-peruano"
            class="nav-link text-white font-montserrat text-sm font-semibold pb-sm hover:text-hover-text transition-colors uppercase"
          >
            EMPRESAS
          </NuxtLink>
        </nav>

        <!-- Links y acciones derecha -->
        <div class="header-actions hidden lg:flex items-center space-x-md">
          <div class="dropdown-item relative group">
            <button
              class="dropdown-button text-white font-montserrat text-sm flex items-center hover:text-hover-text transition-colors"
            >
              Productos
              <svg
                class="dropdown-icon w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div class="dropdown-item relative group">
            <button
              class="dropdown-button text-white font-montserrat text-sm flex items-center hover:text-hover-text transition-colors"
            >
              Beneficios
              <svg
                class="dropdown-icon w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div class="dropdown-item relative group">
            <button
              class="dropdown-button text-white font-montserrat text-sm flex items-center hover:text-hover-text transition-colors"
            >
              Ayuda
              <svg
                class="dropdown-icon w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div class="dropdown-item relative group">
            <button
              class="dropdown-button text-white font-montserrat text-sm flex items-center hover:text-hover-text transition-colors"
            >
              <img
                :src="require('~/assets/images/Flag.svg')"
                alt="Chile"
                class="flag-icon w-5 h-5"
                loading="lazy"
              />
              <svg
                class="dropdown-icon w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div class="separator h-6 w-px bg-white opacity-30"></div>
          <button
            class="login-button text-white font-montserrat text-sm font-semibold px-md py-sm hover:text-hover-text transition-colors"
          >
            Iniciar Sesión
          </button>
          <button
            class="signup-button bg-white text-primary-blue font-montserrat text-sm font-semibold px-md py-sm rounded-full hover:bg-bg-light transition-colors"
          >
            Crear cuenta
          </button>
        </div>

        <!-- Menú móvil -->
        <button
          class="mobile-menu-button lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white"
        >
          <span class="sr-only">Abrir menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown-button {
  gap: 4px;
}

.dropdown-icon {
  margin-left: 4px;
}

.flag-icon {
  margin-right: 4px;
}

.nav-link-active {
  @apply border-b-2 border-hover-text;
}

.signup-button {
  @apply border border-white;
}

.mobile-menu-button {
  @apply border border-white;
}
</style>
