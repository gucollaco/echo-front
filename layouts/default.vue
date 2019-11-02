<template>
    <div>
        <nuxt />
        <BottomNav />
    </div>
</template>

<style>

</style>

<script>
import BottomNav from '../components/BottomNav'

export default {
    components: { BottomNav },
    data () {
        return {
            activeBtn: 1,
        }
    }
}
</script>