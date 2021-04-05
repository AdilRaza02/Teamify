<template>
  <div class="flex justify-evenly lg:mt-16 lg:mt-0 lg:ml-0 mt-20 ml-4 ">
    <div class="font-light">
      <div
        class="h-7 w-8 bg-red-400 rounded-3xl mb-4 lg:-ml-8 ml-2 mt-5 lg:mt-0 "
      ></div>

      <div class="lg:text-6xl text-5xl">Are you ready</div>
      <div class="lg:text-6xl text-5xl">
        <span class="font-semibold "> for a</span>
        <span class="text-blue-700 font-semibold "> Tournament?</span>
      </div>

      <div class="lg:mt-8 mt-4 lg:text-3xl text-2xl text-gray-700">
        Create team draws using Team<span class="text-yellow-500">ify. </span>
        <br />
        It's that simple.
      </div>

      <Button
        @click="getStarted"
        class="mt-6 rounded-full"
        text="Get Started"
      />
    </div>
    <div class="md:w-2/5 md:h-2/5 ">
      <TeamIllustrator />
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TeamIllustrator from "../components/icons/TeamIllustrator";

export default {
  name: "App",
  components: {
    Button,
    TeamIllustrator,
  },
  methods: {
    getStarted() {
      this.$router.push({ name: "TeamDraw" });
    },
  },
};
</script>
