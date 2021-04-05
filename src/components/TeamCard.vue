<template>
  <div class="bg-white px-8 py-4 rounded-lg">
    <p class="text-xl font-semibold mb-4 capitalize ">
      {{ randomTeamNameGenerator }}
    </p>

    <div class="flex mb-4" v-for="(name, index) in names" :key="index">
      <img
        class="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"
        :src="randomAvatar()"
        alt="participant_img"
      />
      <p class="text-xl font-light ml-2 mt-2">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      required: true,
    },
  },
  computed: {
    randomTeamNameGenerator() {
      const generator = require("project-name-generator");
      return generator().spaced;
    },
  },

  methods: {
    randomAvatar() {
      return `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg?mood[]=happy`;
    },
  },
};
</script>
