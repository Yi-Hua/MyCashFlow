import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountData: any;

  setAccountData(data: any) {
    this.accountData = data;
  }

  getAccountData() {
    return this.accountData;
  }
}
