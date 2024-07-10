import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'

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

  data = [
    {
      id: 1,
      user_id: 1,
      method_name: "錢包",
      method_type: "cash",
      balance: 500,
      cashback_rate: 0,
      cashback_type: "",
      created_at: "",
    },
    {
      id: 2,
      user_id: 1,
      method_name: "Richart",
      method_type: "bank",
      balance: 70000,
      cashback_rate: 0,
      cashback_type: "",
      created_at: "",
    },
    {
      id: 3,
      user_id: 1,
      method_name: "台新玫瑰卡",
      method_type: "credit_card",
      balance: -1000,
      cashback_rate: 3,
      cashback_type: "cash",
      created_at: "",
    },
    {
      id: 4,
      user_id: 1,
      method_name: "國泰 Cube 卡",
      method_type: "credit_card",
      balance: -1789,
      cashback_rate: 3,
      cashback_type: "points",
      created_at: "",
    },
    {
      id: 4,
      user_id: 1,
      method_name: "零錢桶",
      method_type: "cash",
      balance: 293,
      cashback_rate: 0,
      cashback_type: "",
      created_at: "",
    }
  ]
  total = this.data.map((data) => data.balance).reduce((a, b) => a + b, 0)

  constructor(){}

  ngOnInit(): void {
    console.log('accounts!!!')
  }

  create(): void {

  }

}
