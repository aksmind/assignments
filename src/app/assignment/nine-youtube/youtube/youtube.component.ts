import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Youtube Embedding';

  // player: YT.Player;
  // private id: string = 'qDuKsiwS5xw';

  // savePlayer(player){
  //   this.player = player;
  //   console.log('player instance', player);
  // }

  // onStateChange(event){
  //  console.log('player instance',event.data); 
  // }
  
  video: any = {
    url: 'https://www.youtube.com/embed/XZmGGAbHqa0',
    title: 'youtube video'
  };


}
