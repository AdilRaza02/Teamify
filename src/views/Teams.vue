<template>
  <div class="lg:mt-14 lg:mx-36  mx-4">
    <div
      class="flex justify-between font-normal lg:text-4xl lg:mb-8 mb-4 lg:mt-0 mt-4 text-2xl"
    >
      <div>
        <span class="text-blue-700 font-semibold uppercase ">{{
          responses[0]
        }}</span>
        Teams
      </div>

      <DownloadButton
        text="Download"
        :fileName="getFilename"
        url="this.href='data:text/html;charset=UTF-8,'+encodeURIComponent(document.documentElement.outerHTML)"
      />
    </div>
    <div class=" lg:grid-cols-4 md:grid-cols-2  grid grid-cols-1 gap-4 mb-8">
      <TeamCard :names="team" v-for="(team, index) in teams" :key="index" />
    </div>
  </div>
</template>

<script>
import TeamCard from "../components/TeamCard";
import DownloadButton from "../components/DownloadButton";

import generator from "../mixins/generator";

export default {
  components: {
    TeamCard,
    DownloadButton,
  },
  computed: {
    getFilename() {
      return `${this.responses[0]}.html`;
    },
  },

  created() {
    if (!this.$route.params.submittedData) {
      this.$router.push({
        name: "Home",
      });
    } else {
      this.responses = this.$route.params.submittedData.answers;
      this.teams = generator.createTeams(this.responses);
    }
  },
  data() {
    return {
      teams: [],
      responses: [],
    };
  },
};
</script>
