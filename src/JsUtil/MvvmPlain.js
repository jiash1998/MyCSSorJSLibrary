Object.defineProperty(input1,"text",{
    get:function () {
        console.log("get");
    },
    set:function (item) {
        document.getElementById("test").innerHTML = item;
    }
})