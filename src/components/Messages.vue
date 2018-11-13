<template>
    <div v-if="messages.length">
        <h2>Messages</h2>
        <button class="clear" v-on:click="clear()">clear</button>
        <div v-for="(message, i) of messages" :key="i">{{message}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CLEAR_MESSAGES } from '@/store/mutation-types';

@Component
export default class Messages extends Vue {
  private get messages(): string[] {
    return this.$store.state.messages;
  }

  private clear(): void {
    this.$store.commit(CLEAR_MESSAGES);
  }
}
</script>


<style lang="scss">
</style>
