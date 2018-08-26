import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  hifi: service(),
  song: "sparta.mp3",

  actions: {

    playSound() {
      this.get('hifi').play(this.get(song)).then(({sound}) => {}).catch(error => {
        console.log(error);
        });
    }
  }
});

