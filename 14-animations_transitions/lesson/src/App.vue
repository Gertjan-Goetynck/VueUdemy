<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-3">
        <h1>Animation</h1>
        <hr />
        <h2>CSS</h2>
        <br />
        <!-- Bind animation type -->
        <select v-model="animationType" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <button class="btn btn-primary" @click="showAlert = !showAlert">Toggle alert</button>
        <br />
        <br />

        <!-- Appear causes the animation to animate on page load animate with css using {name}-{enter, enter-active, leave, leave-active} as class -->
        <transition :name="animationType" appear>
          <div class="alert alert-info" v-if="showAlert">This is an alert using animation</div>
        </transition>

        <!-- Usually the transition looks at the lenghth of the longest transition/animation. Use type to override this. -->
        <transition :name="animationType" type="animation">
          <div class="alert alert-info" v-if="showAlert">This is an alert using animation</div>
        </transition>

        <!-- Cusomize the enter/enter-active/leave/leave-active css classes -->
        <transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
          <div class="alert alert-info" v-if="showAlert">This is an alert using transition</div>
        </transition>

        <!-- Use key to allow toggle between animations (max 2 elements, one visible at a time). Mode controls the order of animations (in-out first animates in, then out. out-in first animates out, then in. -->
        <transition :name="animationType" mode="out-in">
          <div class="alert alert-info" v-if="showAlert" key="info">This is an alert using animation</div>
          <div class="alert alert-warning" v-if="!showAlert" key="warning">This is a warning</div>
        </transition>
        <hr />
        <h2>JavaScript</h2>
        <br />
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br />
        <br />

        <!-- JavaScript hooks. :css="false" tells Vue not to look for css classes if you only use JS-->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-canceled="enterCanceled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-canceled="leaveCanceled"
          :css="false"
        >
          <div v-if="load" style="width: 300px; height: 100px; background-color: lightgreen"></div>
        </transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="selectedComponent =='app-succes-alert'?selectedComponent = 'app-danger-alert': selectedComponent = 'app-succes-alert'"
        >Toggle component</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <!-- Dynamic component based on data -->
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <h2>Animating lists</h2>
        <br />
        <button class="btn btn-primary" @click="addItem">Add item</button>
        <br />
        <br />
        <!-- While transition does not render a html element, transition does. Default is span, chance with tag="TAG" -->
        <ul class="list-group">
          <transition-group name="list">
            <li
              class="list-group-item"
              v-for="(number,index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor:pointer;"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./components/DangerAlert.vue";
import SuccesAlert from "./components/SuccesAlert.vue";
export default {
  components: {
    appDangerAlert: DangerAlert,
    appSuccesAlert: SuccesAlert
  },
  data() {
    return {
      showAlert: false,
      load: true,
      animationType: "slide",
      elementWidth: 100,
      selectedComponent: "app-succes-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },

    //call done() when the animation is done
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCanceled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = thos.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCanceled(el) {
      console.log("leaveCanceled");
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* Opacity is 1 by default, don't change it here */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
.list-enter {
  opacity: 0;
}
.list-enter-active {
  transition: opacity 0.5s;
  animation: slide-in 1s ease-out forwards;
}
.list-leave {
}
.list-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  position: absolute;
  opacity: 0;
}

.list-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
