import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from '@shared/post.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module'

import { MethodType, PaymentMethodUnit } from './accounts.model';
import { AccountService } from './accounts.service';
import { CreateAccountComponent } from './create-account/create-account.component'
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit{
  transPage = 'pages.accounts.';
  accountsData: PaymentMethodUnit[] = [];
  methodType = MethodType;
  methodTypeArray = Object.values(MethodType);
  total: number = 0;

  constructor(
    private _accountService: AccountService,
    private _postService: PostService,
    private _dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.getPaymentMethodsData();
  }

  calculateTotal(accountsData: PaymentMethodUnit[]): void {
    this.total = accountsData.map(data => data.original_balance).reduce((a, b) => a + b, 0)
  }

  getPaymentMethodsData(): void {
    this._postService.sendGet('paymentMethods').subscribe({
      next: data => {
        console.log("Get successful!", data);
        this.accountsData = data;
        this.calculateTotal(data);
      },
      error: error => {
        console.error("Error during get:", error);
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this._dialog.open(CreateAccountComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getPaymentMethodsData();
    });
  }

  openEditDialog(data: { id: number, [key: string]: any }): void {
    this._accountService.setAccountData(data);
    const dialogRef = this._dialog.open(EditAccountComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getPaymentMethodsData();
    });
  }

  openDeleteDialog(data: { id: number, [key: string]: any }): void {
    this._accountService.setAccountData(data);
    const dialogRef = this._dialog.open(DeleteAccountComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getPaymentMethodsData();
    });
  }
}
