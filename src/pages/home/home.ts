import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  duration: any
  targetTime: any
  currentTime: any

  days: string = '02'
  hours: string = '00'
  minutes: string = '00'
  seconds: string = '00'

  tikInterval: any
  
  constructor(public navCtrl: NavController) { }

  ionViewDidEnter() {
  }

  start() {
    this.targetTime = moment(moment()).add(2,'days');
    let self = this

    this.tikInterval = setInterval(function(){
      self.currentTime = moment();
      var diffTime = self.targetTime - self.currentTime ;
      self.duration = moment.duration(diffTime, 'milliseconds');
      self.updateDisplays()
    }, 1000);
  }

  stop() {
    clearInterval(this.tikInterval)
  }

  reset() {
    this.days = '02'
    this.hours = '00'
    this.minutes = '00'
    this.seconds = '00'
    this.targetTime = moment(moment()).add(2,'days');
  }

  updateDisplays() {
    this.days = this.duration.days()
    this.hours = this.duration.hours()
    this.minutes = this.duration.minutes()
    this.seconds = this.duration.seconds()
    console.log(this.days + ":" + this.hours + ":" + this.minutes + ":" + this.seconds)
  }

}
