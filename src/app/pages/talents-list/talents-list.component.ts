import { Component, OnInit } from '@angular/core';
import { TALENTS } from '../../data/mock-data';
import { HttpClient } from '@angular/common/http';
import { TalentService } from 'src/app/data/talent.service';

@Component({
  selector: 'app-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.scss']
})
export class TalentsListComponent implements OnInit {

  talents = TALENTS;


  selectedTalent;

  onSelect(talent): void {
    this.talentService.selectedTalent = talent;
  }

  constructor(private http: HttpClient, public talentService: TalentService) { }

  ngOnInit(): void {

    // this.http.get('http://localhost:8080/api/site-admin/constants').subscribe((data) => {debugger;});

  }

}
