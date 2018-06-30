import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  title = 'Music App';

  public  audio = new Audio();

  constructor() { }

  ngOnInit() {
    this.audio.src = "../../../../assets/song.mp3";
  }

  playAudio(){
    // let audio = new Audio();
    // audio.src = "../assets/song.mp3";
    this.audio.load();
    this.audio.play();
  }

  pauseAudio(){
    this.audio.pause();
  }

}
