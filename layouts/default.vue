<template>
    <div>
        <nuxt />
        <BottomNav />
    </div>
</template>

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

<style>

</style>
