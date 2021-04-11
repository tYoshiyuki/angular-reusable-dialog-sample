import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * ダイアログから返却されるデータのモデルです。
 *
 * @todo 別ファイルに切り出す必要があり。
 */
export interface DialogResult<T> {
  data: T;
}

/**
 * ダイアログ コンテナ部分 のコンポーネントです。
 */
@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.less'],
})
export class DialogContainerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogContainerComponent>,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {}

  /**
   * ダイアログのボタンが押下された際の処理です
   *
   */
  onSubmit(): void {
    this.dialogRef.close({
      data: this.form.get('name')?.value,
    } as DialogResult<string>);
  }
}
