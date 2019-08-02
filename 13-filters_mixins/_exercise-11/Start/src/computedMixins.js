export const mixins = {
  computed: {
    reversedText() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    countedText() {
      return `${this.text} (${this.text.length})`;
    }
  }
};
