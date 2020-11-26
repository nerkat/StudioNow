import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesModalComponent } from '../modals/notes-modal/notes-modal.component';

@Component({
  selector: 'app-talent-details',
  templateUrl: './talent-details.component.html',
  styleUrls: ['./talent-details.component.scss']
})
export class TalentDetailsComponent implements OnInit {

  @Input() talent;

  closeResult = '';

  open(talent) {
    const modalRef = this.modalService.open(NotesModalComponent)
    modalRef.componentInstance.talent = talent;
  }


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
