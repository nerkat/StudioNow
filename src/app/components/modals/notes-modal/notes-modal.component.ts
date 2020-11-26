import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TalentService } from 'src/app/data/talent.service';

@Component({
  selector: 'app-notes-modal',
  templateUrl: './notes-modal.component.html',
  styleUrls: ['./notes-modal.component.scss']
})
export class NotesModalComponent implements OnInit {
  @Input() note;
  textVal ='';

  constructor(public activeModal: NgbActiveModal, public talentService: TalentService) { }

  ngOnInit(): void {
    if (this.note) {
      this.textVal = this.note.text;
    }
  }

  close(text) {
    if (this.note) {
      this.note.text = text;
    }
    else {
      this.talentService.selectedTalent.producerNotes.push({
        name: 'Some User',
        date: '6/27/20',
        text: text
      })
    }

    this.activeModal.close();
  }

}
