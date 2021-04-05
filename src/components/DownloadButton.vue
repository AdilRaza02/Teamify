<template>
  <a
    :onclick="url"
    href="#"
    :download="fileName"
    class="lg:text-lg bg-blue-700 text-white lg:px-4 lg:py-2 text-sm rounded-full lg:mt-2 p-2"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
