import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Iadmin } from './../../models/iadmin';

@Component({
  selector: 'app-admins-data',
  templateUrl: './admins-data.component.html',
  styleUrls: ['./admins-data.component.scss']
})
export class AdminsDataComponent implements OnInit {

  searchText:string = "" ;
  faTrash = faTrash ;
  faSearch = faSearch;
  adminsList : Iadmin[]=[] ;
  adminsListApi : Iadmin[]=[] ;
  selected:string = '' ;


  constructor(public dialog :MatDialog) {
    this.adminsListApi = [
      {name:"martina",photo_path:"assets/Admin.jpg",account_state:"active" ,phone_number:"01276333291" ,created_at:"1676833668910"},
      {name:"martina",photo_path:"assets/Admin.jpg",account_state:"suspended" ,phone_number:"01276333291",created_at:"1676833668910"},
      {name:"martina",photo_path:"assets/Admin.jpg",account_state:"active" ,phone_number:"01276333291",created_at:"1676833668910"},
      {name:"martina",photo_path:"assets/Admin.jpg",account_state:"suspended" ,phone_number:"01276333291",created_at:"1676833668910"},
      {name:"martina",photo_path:"assets/Admin.jpg",account_state:"active" ,phone_number:"01276333291",created_at:"1676833668910"}
    ]
    this.adminsList = this.adminsListApi ;
   }

  ngOnInit(): void {
  }
  openDialog(dialogMessage:string)
  {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { dialogMessage: dialogMessage },
    });
  }

}
