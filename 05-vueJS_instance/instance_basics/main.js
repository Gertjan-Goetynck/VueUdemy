const vm1 = new Vue({
  data: {
    title: "The VueJS instance",
    showParagraph: false
  },
  computed: {
    lowerCaseTitle() {
      return this.title.toLowerCase();
    }
  },
  methods: {
    show() {
      this.showParagraph = !this.showParagraph;
      this.updateTitle("The VueJS instance (updated)");
      console.log(this.$refs.myButton);
      this.$refs.myButton.innerHTML = "test";
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  watch: {
    title(value) {
      alert(`The title has changed to ${value}`);
    }
  }
});

const vm2 = new Vue({
  el: "#app2",
  data: {
    title: "Vue instance 2"
  },
  methods: {
    onClick() {
      vm1.title = "This is changed in vue 2";
    }
  }
});

const vm3 = new Vue({
  el: ".hello",
  template: "<h1>Hello world</h1>"
});

//vm3.$mount("#app3");

// vm3.$mount();

// document.getElementById("app3").appendChild(vm3.$el);

vm1.$mount("#app1");

//DON'T DO THIS. Use $refs to get values, not to change them
//vm1.$refs.heading.innerText = "Something else";

setTimeout(function() {
  vm1.title = "Changed by timer";
  //vm1.show();
}, 5000);

vm1.newProp = "New prop!";

// console.log(vm1);
// console.log(vm2);
