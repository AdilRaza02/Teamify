<template>
  <button 
  @click="$emit('click')" class="text-xl bg-blue-700 text-white px-4 py-2 focus:outline-none hover:bg-blue-600">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
