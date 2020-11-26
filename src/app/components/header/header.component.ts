import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from '../sidebar/sidebar.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TALENTS } from '../../data/mock-data';
import { TalentService } from 'src/app/data/talent.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  talents = TALENTS;

  constructor(private sidebarService: SidebarService, public talentService: TalentService) { }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  ngOnInit(): void {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.talents.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  selectedItem(talent) {
    this.talentService.selectedTalent = talent;
  }

  format(talent){
    return talent.name
  }
}
