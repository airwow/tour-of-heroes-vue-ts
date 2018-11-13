<template>
  <div v-if="hero">
    <h2>{{hero ? hero.name.toUpperCase() : ''}} Details</h2>
    <div>
      <span>id:</span>
      {{hero.id}}
    </div>
    <div>
      <label>
        name:
        <input v-model="name" placeholder="name">
      </label>
    </div>
    <button v-on:click="goBack()">go back</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Hero } from '@/models/Hero';
import { SET_HEROES } from '@/store/mutation-types';

@Component
export default class HeroDetail extends Vue {
  private get hero(): Hero {
    const hero: Hero = this.$store.state.heroes
      ? this.$store.state.heroes.slice().find((h: Hero) => {
          return h.id === Number(this.$router.currentRoute.params.id);
        })
      : {};
    return hero;
  }

  private get name(): string {
    return this.hero.name;
  }
  private set name(name: string) {
    const heroes = this.$store.state.heroes.slice();
    heroes.find((h: Hero) => h.id === this.hero.id).name = name;
    this.$store.commit(SET_HEROES, { heroes });
  }

  private goBack(): void {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
