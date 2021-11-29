const app = new Vue({
  el: '#root',
  data: {
    inputText: '',
    list: []
  },
  methods: {
    removeLi: function (index) {
      this.list.splice(index, 1)
    },
    addLi: function () {
      if (this.inputText != '') {
        const newLi = {
          text: this.inputText,
          notDone: true
        }
        this.list.push(newLi);
        this.inputText = '';
      } else {
        alert('Non hai inserito una commissione')
      }
    }
  },
})