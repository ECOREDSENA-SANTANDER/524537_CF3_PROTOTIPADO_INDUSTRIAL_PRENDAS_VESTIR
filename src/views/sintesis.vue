<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5 Los temas desarrollados abarcan el patronaje e interpretación de modelos de sastrería, incluyendo chaquetas, pantalones, mangas, abrigos y capas; el patronaje de línea interior y deportiva mediante #[em software] de patronaje, con el trazado e interpretación de prendas como pantis, brasieres, bralettes, bóxeres y tangas; y las operaciones de preparación para la elaboración de muestras en tejido plano, donde se estudian las rutas operacionales y las técnicas de ensamble de camisas, blusas, faldas, pantalones y prendas de ropa interior. Estos temas proporcionan los conocimientos necesarios para desarrollar patrones, interpretar diseños y comprender los procesos de confección. El siguiente esquema presenta la organización de los contenidos que se abordarán.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis.svg", alt="El diagrama presenta los diferentes procesos que se explican detalladamente dentro del componente, con trazos e interpretaciones de las prendas de vestir expuestas para cada proceso.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
