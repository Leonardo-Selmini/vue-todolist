const app = new Vue({
  el: '#root',
  data: {
    inputText: '',
    list: [
      {
        text: 'fare la spesa',
        notDone: false
      },
    ]

  },
  methods: {
    removeLi: function (index) {
      this.list.splice(index, 1)
    },
    addLi: function () {
      if (this.inputText != '') {
        const newLi = {
          text: this.inputText,
          notDone: false
        }
        this.list.push(newLi);
        this.inputText = '';
      } else {
        alert('Non hai inserito una commissione')
      }
    }
  },
})