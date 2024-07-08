import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  transPage = 'pages.home.';
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
  constructor(){}

  ngOnInit(): void {
    console.log('Home!!!')
  }

  create(): void {

  }

}
