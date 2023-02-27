import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  addAdminForm: UntypedFormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  addAdminMessage:string = '' ;
  addImage:boolean = false ;
  @ViewChild('AdminImage') AdminImage!: ElementRef;
  constructor( private FormBuild: UntypedFormBuilder, private Route: Router , private addAdminSnackBar: MatSnackBar) {
    this.addAdminForm = FormBuild.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z0-9 /s]{5,}')],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9]{4,}(@)[a-zA-Z0-9]{3,}(.com)'),
          ],
        ],
        password: [
          '',
          [Validators.required, Validators.pattern('[a-z0-9A-Z]{8,}')],
        ],
        confirmPassword: [
          '',
          [Validators.required, Validators.pattern('[a-z0-9A-Z]{8,}')],
        ],
        phoneNumber:[
          '',
          [Validators.required]
        ]
        ,
        imageURL: [[Validators.required]],
      },
      { validators: this.PasswordMatch }
    );
   }

  ngOnInit(): void {
  }
  get Email() {
    return this.addAdminForm.get('email');
  }

  get Password() {
    return this.addAdminForm.get('password');
  }

  get ConfirmPassword() {
    return this.addAdminForm.get('confirmPassword');
  }

  get Name() {
    return this.addAdminForm.get('name');
  }

  get ImageURL() {
    return this.addAdminForm.get('imageURL');
  }
  get PhoneNumber (){
    return this.addAdminForm.get('phoneNumber') ;
  }

  SubmitForm() {
    // let ProfileImageURL = (<HTMLInputElement>this.AdminImage.nativeElement)
    //   .files![0];
    // this.AdminAuth.SignUp(this.Email?.value, this.Password?.value)
    //   .then((data) => {
    //     this.AdminServ.AddAdmin(
    //       data.user?.uid,
    //       this.Email?.value,
    //       this.Name?.value,
    //       ProfileImageURL
    //     ).then(() => {
    //       openSnackBar("bg-success")
    //       setTimeout(() => {
    //         this.Route.navigate(['/Home/dashboard']);
    //       }, 5000);
    //     });
    //   })
    //   .catch((err) => {
    //     this.addAdminMessage = err;
    //     openSnackBar("bg-danger")

    //   });
  }
  PasswordMatch: ValidatorFn = (
    frmGroup: AbstractControl
  ): ValidationErrors | null => {
    let PassControl = frmGroup.get('password');
    let ConfirmPassControl = frmGroup.get('confirmPassword');
    if (
      !PassControl ||
      !ConfirmPassControl ||
      !PassControl.value ||
      !ConfirmPassControl.value
    )
      return null;

    let valErr = {
      UnmatchedPassword: {
        pass: PassControl?.value,
        confrim: ConfirmPassControl?.value,
      },
    };
    return PassControl?.value == ConfirmPassControl?.value ? null : valErr;
  };
  openSnackBar(text_color:string) {
    this.addAdminSnackBar.open(this.addAdminMessage ,"" ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5* 1000,
      panelClass:["mt-5","fs-6","fw-bold",text_color]
    });
  }
}



