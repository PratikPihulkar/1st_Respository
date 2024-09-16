import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStoreService } from '../../../Services/data-store.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {

  transectionForm!: FormGroup;
  id: any;
  date = new Date();
  formattedDate = this.date.toLocaleString();
  ammountVar: any[] = [];
  availBalance: number = 0;
  temp: any;

  constructor(
    private fb: FormBuilder,
    private dataStoreService: DataStoreService,
    private router: ActivatedRoute,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");

    this.transectionForm = this.fb.group({
      id: [ new Date().getTime().toString() ],
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)?$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', [Validators.required]],
      currentBalence: [''],
      debit: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),]]// this.amountLessThanBalanceValidator(this.availBalance)
    });

    this.fetchArr();
  }

  transectionList() {
    this.rout.navigate(['list/' + this.id]);
  }

  goBack() {
    window.history.back();
  }

  // amountLessThanBalanceValidator(currentBalance: number): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     const amount = control.value;
  //     if (amount !== null && amount > currentBalance) {
  //       return { 'amountExceedsBalance': true };
  //     }
  //     return null;
  //   };
  // }

  fetchArr() {
    this.dataStoreService.fetchArr(this.id).subscribe((res) => {
      this.temp = res;
      this.ammountVar = this.temp.transectionList;
      this.availBalance = this.ammountVar[this.ammountVar.length - 1].currentBalence;

      this.transectionForm.patchValue({
        date: this.formattedDate,
        currentBalence: this.availBalance
      });
      console.log(this.availBalance)
    });
  }

  performTransection() {
    this.transectionForm.value.currentBalence = Number(this.availBalance) - Number(this.transectionForm.value.debit);
    this.ammountVar.push(this.transectionForm.value);

    this.dataStoreService.addTransection(this.id, this.ammountVar).subscribe(() => {
      alert("Debit Transection Complete");
      window.location.reload();
    });
  }
}
