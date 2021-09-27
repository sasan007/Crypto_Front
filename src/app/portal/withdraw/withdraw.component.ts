import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  walletList: any;

  constructor( private formBuilder: FormBuilder,
    private alertService:AlertService,
    private walletService:WalletService) { 
  }

  ngOnInit() {
        this.walletService.getAllForWithdraw().pipe(first())
    .subscribe((response) => {
      this.walletList = response.data;
    });
  }

}
