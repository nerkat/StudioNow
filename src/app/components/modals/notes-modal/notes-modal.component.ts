import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notes-modal',
  templateUrl: './notes-modal.component.html',
  styleUrls: ['./notes-modal.component.scss']
})
export class NotesModalComponent implements OnInit {
  @Input() talent;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(note) {
    this.talent.producerNotes.push({
      name: 'Some User',
      date: '6/27/20',
      text: note
    })




    this.activeModal.close();
  }

}
