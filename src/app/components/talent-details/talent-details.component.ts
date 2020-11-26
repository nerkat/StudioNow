import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.scss']
})
export class TalentDetailsComponent implements OnInit {
  @Input() talent;

  constructor() { }

  ngOnInit(): void {
  }

}
