export const myExtend = {
  data() {
    return {
      name: "extends",
    };
  },
  created() {
    console.log("extends");
  },
  methods: {
    logData() {
      console.log("extends");
    },
  },
};
