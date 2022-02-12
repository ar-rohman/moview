<template>
    <div class="flex gap-x-6 items-center">
        <button>
            <BaseIcon name="sunOutline" />
        </button>
        <button>
            <BaseIcon name="languageOutline" />
        </button>
    </div>
</template>

<script>
import BaseIcon from '@/components/icon/BaseIcon.vue';
export default {
    components: { BaseIcon },
};
</script>
