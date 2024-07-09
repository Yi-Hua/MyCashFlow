import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { HttpClient } from '@angular/common/http';
import { PostService } from '@shared/post.service';

interface Expense {
  id: number;
  description: string;
  amount: number;
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

  expenses: Expense[] = [];

  account = {
    //name: "",
    total: 600000,
    id:"", //(INT, Primary Key, Auto Increment)
    user_id:"", //(INT, Foreign Key)
    method_type:"", //(ENUM('cash', 'bank', 'credit_card'))
    method_name:"", //(VARCHAR(255))
    cashback_rate:"", //(DECIMAL(5, 2), Nullable)
    created_at:"", //(TIMESTAMP, Default CURRENT_TIMESTAMP)
  }
  constructor(private http: HttpClient,
    private _postService: PostService,
  ) {}
  
  ngOnInit(): void {
    this.getExpenses();
  }

  create(): void {

  }

  getExpenses(): void {
    this._postService.sendGet('expenses').subscribe(data => {
      console.log(data);
      this.expenses = data;
    });
  }
}
