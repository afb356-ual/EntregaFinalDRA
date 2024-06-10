import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../harrypotter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  harryPotterInfo: string = '';

  constructor(private harrypotterService: HarrypotterService) { }

  ngOnInit(): void {
    this.harrypotterService.getHarryPotterInfo().subscribe(data => {
      this.harryPotterInfo = data;
    });
  }
}
