<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Son varios los procesos por los cuales pasa una prenda de vestir antes de llegar al consumidor, el cual se ha vuelto más exigente en los últimos años, pues la globalización ha abierto las puertas para conocer otras tendencias de moda.  En este orden de ideas, quienes trabajan en confección, diseño y moda deben estar en vanguardia y poder analizar bocetos y crear prendas únicas, novedosas y llamativas de la más alta calidad. En el siguiente cuadro se presenta el contenido del componente, con los diferentes procesos trabajados en varios tipos de prendas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis.png", alt="El diagrama presenta los diferentes procesos que se explican detalladamente dentro del componente, con trazos e interpretaciones de las prendas de vestir expuestas para cada proceso.")
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
