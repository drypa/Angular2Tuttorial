import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'modal-dialog',
  styleUrls: ['app/modal-dialog.component.css'],
  templateUrl: 'app/modal-dialog.component.html'
})
export default class ModalDialogComponent {
  @Input() title:string;
  @Input() text:string;
  @Input() isVisible:boolean = false;
  @Output() isApproved:EventEmitter< boolean> = new EventEmitter<boolean>();

  private onConfirm(confirm:boolean):void {
    this.isApproved.emit(confirm);
  }
}
