const { createApp } = Vue

  createApp({
    data() {
      return {
        testoInput: '',
        object: null,
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
      }
    },
    methods: {
        Invio(){
            this.object={
                text: this.testoInput,
                done: false
            }
            this.todos.push(this.object)
        }
    }
  }).mount('#app')