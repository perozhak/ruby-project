import consumer from "./consumer"

consumer.subscriptions.create("ActivityChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.perform("appear")
  },
  
  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);
    let array  = document.getElementsByClassName(`user-${data.user_id}-status`)
    for (let index = 0; index < array.length; index++) {
      if(data.status == 'online')
      array[index].classList.add('online')
      else
      array[index].classList.remove('online')

    }
  }
});
