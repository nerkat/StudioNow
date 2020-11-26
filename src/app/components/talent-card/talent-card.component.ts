import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.scss']
})
export class TalentCardComponent implements OnInit {

  @Input() talent;
  @Input() selectedTalent;

  constructor() { }

  ngOnInit(): void {
  }

}
