import { Component, OnInit } from '@angular/core';
import { PostService } from '@shared/post.service';
import { SharedModule } from '@shared/shared.module';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { CashbackType, MethodType } from '../accounts.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit {
  transPage = 'pages.accounts.';
  methodType = MethodType;
  methodTypeOption = Object.values(MethodType).map(value => {
    return { value: value, text: this._translate.instant(this.transPage + value)};
  });
  cashbackTypeOption = Object.values(CashbackType).map(value => {
    return { value: value, text: this._translate.instant(this.transPage + value)};
  });

  accountForm = new FormGroup({
    user_id: new FormControl(1, [Validators.pattern('^[0-9]*$')]),
    method_name: new FormControl('', Validators.required),
    method_type: new FormControl(MethodType.CreditCard, Validators.required),
    original_balance: new FormControl(0, [Validators.required, Validators.pattern('^-?[0-9]+(?:\.[0-9]{1,2})?$')]),
    cashback_rate: new FormControl(0, [Validators.pattern('^\\d*\\.?\\d*$')]),
    cashback_type: new FormControl(''),
  });
  constructor (
    private _postService: PostService,
    private _translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.accountForm.markAsPristine();
  }


  create(): void {
    const accountData = {
      user_id: this.accountForm.get('user_id')?.value,
      method_name: this.accountForm.get('method_name')?.value,
      method_type: this.accountForm.get('method_type')?.value,
      original_balance: this.accountForm.get('original_balance')?.value,
      cashback_rate: this.accountForm.get('cashback_rate')?.value,
      cashback_type: this.accountForm.get('cashback_type')?.value ? this.accountForm.get('cashback_type')?.value : null,
    }
    this._postService.sendPost('paymentMethods', accountData).subscribe({
      next: data => {
        console.log("Post successful!", data);
      },
      error: error => {
        console.error("Error during post:", error);
      }
    });
  }

  isCreditCard(): boolean {
    const isCreditCard = this.accountForm.get('method_type')?.value === MethodType.CreditCard
    if (isCreditCard){
      this.accountForm.controls['cashback_rate'].enable();
      this.accountForm.controls['cashback_type'].enable();
    } else {
      this.accountForm.controls['cashback_rate'].disable();
      this.accountForm.controls['cashback_type'].disable();
    }
    return isCreditCard;
  }
}
