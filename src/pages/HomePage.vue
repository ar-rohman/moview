<template>
    <div class="">adasas</div>
    <!-- <div v-touch-pan="handler">...</div>
    <div v-touch-swipe="handler">...</div> -->
    <div v-ripple>Click me. I got ripples. {{ $route.path }}</div>
</template>

<script>
import { useQuasar } from 'quasar';

export default {
    setup() {
        const $q = useQuasar();

        console.log($q.platform.is);

        // showing an example on a method, but
        // can be any part of Vue script
        function show() {
            // prints out Quasar version
            console.log($q.version);
        }

        return {
            show,
        };
    },
};
</script>
