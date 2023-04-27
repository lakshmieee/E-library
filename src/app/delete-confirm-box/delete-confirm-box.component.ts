import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-box',
  templateUrl: './delete-confirm-box.component.html',
  styleUrls: ['./delete-confirm-box.component.css']
})
export class DeleteConfirmBoxComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteConfirmBoxComponent>,
  ) {}

  deleteItem() {
    this.dialogRef.close(true);
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}