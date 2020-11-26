import { Component, Input, OnInit } from '@angular/core';
import { TalentService } from 'src/app/data/talent.service';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.scss']
})
export class TalentCardComponent implements OnInit {

  @Input() talent;

  constructor(public talentService: TalentService) { }

  ngOnInit(): void {
  }

}
