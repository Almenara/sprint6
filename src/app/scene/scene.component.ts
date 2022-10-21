import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  @Input() story:string[];

  public currentSentence:number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  next(){
    if(this.currentSentence < (this.story.length - 1)) this.currentSentence++
  }
  prev(){
    if(this.currentSentence > 0) this.currentSentence--
  }
}
