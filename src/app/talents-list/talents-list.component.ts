import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TALENTS } from '../data/mock-data';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-talents-list',
  templateUrl: './talents-list.component.html',
  styleUrls: ['./talents-list.component.scss']
})
export class TalentsListComponent implements OnInit {

  talents = TALENTS;

  selectedTalent;

  onSelect(talent): void {
    this.selectedTalent = talent;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.talents.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8080/api/site-admin/constants').subscribe((data) => {debugger;});

  }

}
