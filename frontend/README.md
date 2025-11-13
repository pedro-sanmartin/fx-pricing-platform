# Global66 - Frontend Technical Test

Aplicación frontend desarrollada con Nuxt 2, TailwindCSS y SSR para mostrar tipos de cambio de divisas.

## 📋 Descripción del Proyecto

Esta aplicación permite consultar el valor del dólar estadounidense (USD) en diferentes divisas latinoamericanas. La aplicación está construida con Nuxt 2, utiliza Server-Side Rendering (SSR) para SEO y rendimiento, y TailwindCSS para el diseño responsive.

### Características principales

- ✅ **SSR habilitado** - Renderizado del lado del servidor para mejor SEO
- ✅ **Rutas dinámicas** - `/precio/*` con mapeo de slugs a divisas
- ✅ **SEO optimizado** - Meta tags dinámicos, canonical y hreflang
- ✅ **Internacionalización (i18n)** - Soporte para español (es-CL) e inglés (en-US)
- ✅ **Responsive** - Diseño adaptativo con TailwindCSS
- ✅ **Optimizado para Lighthouse** - Lazy loading de imágenes, optimización de fuentes

## 🚀 Instalación y Ejecución

### Requisitos previos

- Node.js (versión 14.x o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Servidor de desarrollo con hot reload en localhost:3000
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Producción

```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start
```

### Generación estática

```bash
# Generar sitio estático
npm run generate
```

## 📁 Estructura del Proyecto

```
frontend/
├── assets/              # Recursos estáticos
│   ├── css/            # Estilos globales (TailwindCSS)
│   └── images/         # Imágenes SVG y PNG
├── components/         # Componentes Vue reutilizables
│   ├── Conversion/     # Componente de conversión/app stores
│   ├── Header/         # Componente de navegación
│   └── Hero/           # Componente hero con tasas de cambio
├── layouts/            # Layouts de la aplicación
├── locales/            # Archivos de traducción i18n
│   ├── es-CL.json      # Español (Chile)
│   └── en-US.json      # Inglés (Estados Unidos)
├── pages/              # Páginas y rutas
│   └── precio/         # Rutas dinámicas de precios
│       └── _slug.vue   # Página dinámica de divisas
├── static/             # Archivos estáticos servidos directamente
│   └── data/           # Datos JSON (tasas de cambio)
├── utils/              # Utilidades y funciones helper
│   ├── constants.js    # Constantes del proyecto
│   └── formatters.js   # Funciones de formateo
├── nuxt.config.js      # Configuración de Nuxt
└── tailwind.config.js  # Configuración de TailwindCSS
```

## 🛣️ Rutas Disponibles

### Rutas principales

- `/precio/peso-chileno` - Tipo de cambio USD/CLP (Peso Chileno)
- `/precio/sol-peruano` - Tipo de cambio USD/PEN (Sol Peruano)

### Mapeo de slugs

Los slugs se mapean a códigos de divisa mediante el diccionario en `utils/constants.js`:

```javascript
{
  'peso-chileno': 'CLP',
  'sol-peruano': 'PEN'
}
```

## 🎨 Tecnologías Utilizadas

- **Nuxt 2** - Framework Vue.js con SSR
- **TailwindCSS** - Framework CSS utility-first
- **Vue.js** - Framework JavaScript progresivo
- **nuxt-i18n** - Internacionalización para Nuxt
- **ESLint + Prettier** - Linting y formateo de código

## 📊 Datos

Los datos de tasas de cambio se encuentran en `static/data/rates.json` con el siguiente formato:

```json
{
  "base": "USD",
  "rates": {
    "CLP": 987.62,
    "PEN": 3.75
  },
  "asOf": "2025-10-31T17:51:00Z"
}
```

## 🔧 Configuración

### TailwindCSS

Los tokens de diseño están configurados en `tailwind.config.js`:

- **Colores**: primary-blue, dark-text, bg-light, hover-text, blue-text
- **Espaciado**: sm, md, lg, xl, xxl
- **Tipografías**: Poppins (títulos), Montserrat (cuerpo)

### i18n

Configurado en `nuxt.config.js` con:
- Idioma por defecto: `es-CL`
- Idiomas disponibles: `es-CL`, `en-US`
- Carga lazy de traducciones

## 📝 Scripts Disponibles

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run generate # Generar sitio estático
npm run lint     # Ejecutar ESLint
```

## 🧪 Testing

Para verificar que todo funciona correctamente:

1. Ejecutar `npm run dev` y visitar `http://localhost:3000/precio/peso-chileno`
2. Verificar que se muestre el tipo de cambio correctamente
3. Probar la ruta `/precio/sol-peruano`
4. Verificar que las rutas inexistentes muestren error 404

## 📦 Build de Producción

El build de producción genera:
- Código optimizado y minificado
- Assets procesados y optimizados
- SSR configurado para servidor Node.js

## 🔍 SEO

Cada página incluye:
- `<title>` dinámico según la divisa
- `<meta name="description">` personalizado
- `link rel="canonical"` para evitar contenido duplicado
- `hreflang="es-CL"` para internacionalización

## 📄 Licencia

Este proyecto es parte de una prueba técnica para Global66.
