import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { PostService } from '@shared/post.service';
import { PaymentMethodUnit } from './accounts.model';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit{
  transPage = 'pages.accounts.';
  paymentType = ['cash', 'bank', 'credit_card']
  accountsData: PaymentMethodUnit[] = [];
  data = [
    {
      id: 1,
      user_id: 1,
      method_name: "錢包",
      method_type: "cash",
      balance: 500,
      cashback_rate: 0,
      cashback_type: null,
    },
    {
      id: 2,
      user_id: 1,
      method_name: "Richart",
      method_type: "bank",
      balance: 70000,
      cashback_rate: 0,
      cashback_type: null,
    },
    {
      id: 3,
      user_id: 1,
      method_name: "台新玫瑰卡",
      method_type: "credit_card",
      balance: -1000,
      cashback_rate: 3,
      cashback_type: "cash",
    },
    {
      id: 4,
      user_id: 1,
      method_name: "國泰 Cube 卡",
      method_type: "credit_card",
      balance: -1789,
      cashback_rate: 3,
      cashback_type: "points",
    },
    {
      id: 4,
      user_id: 1,
      method_name: "零錢桶",
      method_type: "cash",
      balance: 293,
      cashback_rate: 0,
      cashback_type: null,
    }
  ]
  total = this.data.map((data) => data.balance).reduce((a, b) => a + b, 0)

  constructor(
    private _postService: PostService,
  ){}

  ngOnInit(): void {
    this.getPaymentMethodsData();
  }

  calculateTotal(): void {
    this.accountsData.map((data) => data.balance).reduce((a, b) => a + b, 0)
  }

  getPaymentMethodsData(): void {
    this._postService.sendGet('paymentMethods').subscribe({
      next: data => {
        console.log("Get successful!", data);
        this.accountsData = data;
        this.calculateTotal()
      },
      error: error => {
        console.error("Error during get:", error);
      }
    });
  }

  create(data: { [key: string]: any }): void {
    this._postService.sendPost('paymentMethods', data).subscribe({
      next: data => {
        console.log("Post successful!", data);
        this.getPaymentMethodsData();
      },
      error: error => {
        console.error("Error during post:", error);
      }
    });
  }
}
