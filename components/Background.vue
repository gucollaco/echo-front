<template>
  <div class="ech-background">
    <div class="circles"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circles: [
        {
          x: -64,
          y: -24,
          radius: 148,
          angle: 50,
          opacity: 0.15
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/styles.sass'

.ech-background
  position: relative
  $bg-colors: $primary-base 0%, $primary-darken-1 100%
  @include gradient(top, $bg-colors)
  width: 100%
  min-height: 100%
  display: flex
  flex-direction: column

  > *
    z-index: 1

  .circles
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    background-image: url('/img/bg--circles.png')
    background-position: 40% 10%
    z-index: 0
</style>
