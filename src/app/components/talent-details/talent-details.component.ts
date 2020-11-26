import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesModalComponent } from '../modals/notes-modal/notes-modal.component';

@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.scss']
})
export class TalentDetailsComponent implements OnInit {

  @Input() talent;

  closeResult = '';

  open(talent, note) {
    const modalRef = this.modalService.open(NotesModalComponent)
    modalRef.componentInstance.note = note;
  }


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
