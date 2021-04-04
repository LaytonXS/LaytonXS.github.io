<template>
  <div id="WelcomePage">
    <v-app id="inspire">
      <v-card class="overflow-hidden">
        <v-app-bar
            absolute
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-app-bar-title>胡健榕论文答辩</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            max-height="1000"
        >
          <v-container style="height: 1500px;">
            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
            <balance-sheet></balance-sheet>
          </v-container>
        </v-sheet>

      </v-card>

    </v-app>
  </div>


</template>

<script>
import balanceSheet from '../components/balanceSheet';

export default {

  name: 'WelcomePage',

  components: {
    balanceSheet,

  }
}
</script>

<style scoped>

</style>

