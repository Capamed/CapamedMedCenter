import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  myVideo: any;
  ngOnInit(): void {
    this.myVideo = document.getElementById("video1");
  }

  playPause() {
    if (this.myVideo.paused)
      this.myVideo.play();
    else
      this.myVideo.pause();
  }

  makeBig() {
    this.myVideo.width = 560;
  }

  makeSmall() {
    this.myVideo.width = 320;
  }

  makeNormal() {
    this.myVideo.width = 420;
  }

}
