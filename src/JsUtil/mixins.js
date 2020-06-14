export const mixins = {
  data() {
    return {
      name: "mixins",
    };
  },
  created() {
    console.log("mixins");
  },
  methods: {
    logData() {
      console.log("mixins");
    },
  },
};
