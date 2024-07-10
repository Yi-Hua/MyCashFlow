import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { HttpClient } from '@angular/common/http';
import { PostService } from '@shared/post.service';

interface Expense {
  id: number;
  name: string;
  user_id: number;
  category_id: number;
  payment_method_id: number;
  amount: number;
  type: string;
  date: string;
  note: string;
  created_at: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  transPage = 'pages.home.';

  transactionsData: Expense[] = [];

  data1 = {
    name: 'Lunch',
    id: 1,
    user_id: 1,
    category_id: 1,
    payment_method_id: 1,
    amount: 100,
    type: 'expense',
    date: '2024/07/01',
    note: 'AAAAAA',
    created_at: '2024/07/01',
  };

  data2 = {
    name: 'Buy Books',
    id: 2,
    user_id: 2,
    category_id: 1,
    payment_method_id: 1,
    amount: 375,
    type: 'expense',
    date: '2024/07/07',
    note: 'BBBBB',
    created_at: '2024/07/06',
  };

  data3 = {
    name: 'Interest income',
    id: 3,
    user_id: 2,
    category_id: 1,
    payment_method_id: 1,
    amount: 200,
    type: 'income',
    date: '2024/07/05',
    note: 'ABCDE',
    created_at: '2024/07/05',
  };

  constructor(private http: HttpClient,
    private _postService: PostService,
  ) {}

  ngOnInit(): void {
    this.getTransactions();
    this.create(this.data1);
  }


  getTransactions(): void {
    this._postService.sendGet('transactions').subscribe({
      next: data => {
        console.log("Get successful!", data);
        this.transactionsData = data;
      },
      error: error => {
        console.error("Error during get:", error);
      }
    });
  }

  create(data: { [key: string]: any }): void {
    this._postService.sendPost('transactions', data).subscribe({
      next: data => {
        console.log("Post successful!", data);
        this.getTransactions(); // 插入資料後立即獲取資料
      },
      error: error => {
        console.error("Error during post:", error);
      }
    });
  }


  update(data: { id: number, [key: string]: any }): void {
    this._postService.sendPatch('transactions/' + data.id, data).subscribe({
      next: data => {
        console.log("Patch successful!", data);
        this.getTransactions(); // 插入資料後立即獲取資料
      },
      error: error => {
        console.error("Error during patch:", error);
      }
    });
  }

  delete(id: number): void{
    this._postService.sendDelete('transactions/', id).subscribe({
      next: data => {
        console.log(`Delete id:${id} successful!`, data);
        this.getTransactions(); // 插入資料後立即獲取資料
      },
      error: error => {
        console.error("Error during patch:", error);
      }
    });
  }

}
