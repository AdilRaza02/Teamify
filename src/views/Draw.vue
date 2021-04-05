<template>
  <div>
    <div class="lg:grid lg:grid-cols-3">
      <div class="lg:mt-12 ">
        <CupIllustrator v-if="showId === 'tournament_name'" />
        <BasketIllustrator v-if="showId === 'participants_name'" />
        <FootballIllustrator v-if="showId === 'choose_path'" />
        <FutsulIllustrator v-if="showId === 'no_of_teams'" />
        <HockeyIllustrator v-if="showId === 'no_of_participants'" />
        <WinnersIllustrator v-if="showId === '_submit'" />
      </div>
      <div class="lg:col-span-2 lg:-ml-16 lg:mt-0 -mt-12">
        <TeamDraw @next="changeIllustrator" />
      </div>
    </div>
  </div>
</template>

<script>
import TeamDraw from "../components/TeamDraw";
import WinnersIllustrator from "../components/icons/WinnersIllustrator";
import BasketIllustrator from "../components/icons/BasketIllustrator";
import FootballIllustrator from "../components/icons/FootballIllustrator";
import FutsulIllustrator from "../components/icons/FutsulIllustrator";
import HockeyIllustrator from "../components/icons/HockeyIllustrator";
import CupIllustrator from "../components/icons/CupIllustrator";

export default {
  name: "Draw",
  components: {
    TeamDraw,
    BasketIllustrator,
    WinnersIllustrator,
    FootballIllustrator,
    FutsulIllustrator,
    HockeyIllustrator,
    CupIllustrator,
  },
  data() {
    return {
      showId: "tournament_name",
    };
  },
  methods: {
    changeIllustrator(id) {
      this.showId = id;
    },
  },
};
</script>
