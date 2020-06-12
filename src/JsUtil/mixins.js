export const mixins = {
  data() {
    return {
      mix1: 1,
      mix2: { a: "asd" },
    };
  },
  methods: {
    logData() {
      console.log(this.mix1);
    },
  },
};
