let myExtend = {};
export default myExtend = {
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
