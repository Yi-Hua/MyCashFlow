import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AccountService } from '../accounts.service';
import { PostService } from '@shared/post.service';

@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.scss'
})
export class DeleteAccountComponent {
  transPage = 'pages.accounts.';
  rowData = this._accountService.getAccountData()

  constructor(
    private _accountService: AccountService,
    private _postService: PostService,
  ){}

  deleteAccount(): void {
    this._postService.sendDelete('paymentMethods', this.rowData.id).subscribe({
      next: data => {
        console.log("Delete successful!", data);
      },
      error: error => {
        console.error("Error during post:", error);
      }
    });
  }
}
