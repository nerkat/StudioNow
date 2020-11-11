import { Component, OnInit } from '@angular/core';
import { TALENTS } from '../mock-data';

@Component({
  selector: 'app-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.scss']
})
export class TalentsListComponent implements OnInit {

  talents = TALENTS;

  constructor() { }

  ngOnInit(): void {
  
  }

}
