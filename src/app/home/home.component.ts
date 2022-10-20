import { Component, OnInit } from '@angular/core';
import storyJson from './_files/story.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public story:string[] = storyJson;

  constructor() { }

  ngOnInit(): void {
  }

}
