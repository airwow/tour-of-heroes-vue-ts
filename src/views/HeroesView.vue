<template>
  <div>
    <Heroes/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Heroes from '@/components/Heroes.vue';
import Messages from '@/components/Messages.vue';

@Component({
  components: { Heroes, Messages },
})
export default class HeroesView extends Vue {}
</script>
