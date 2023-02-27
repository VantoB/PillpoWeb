import { Component, OnInit } from '@angular/core';
export const ROUTES: any[] = [
  {path:"VideoReview/NewVideos" , title: 'Video Reviewing', icon: 'videocam' },
  {path:"Analytics" , title: 'Analytics', icon: 'bar_chart' },
  {path:"ContentCreators" , title: 'Content Creator', icon: 'perm_camera_mic' },
  {path:"Payments" , title: 'Payments', icon: 'payment' },
  {path:"Offers" , title: 'Offers', icon: 'card_giftcard' },
  {path:"Sellers" , title: 'Sellers', icon: 'store_mall_directory' },
  {path:"AdminsData" , title: 'Admins Data', icon: 'person_pin' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  isOpen: boolean = false;
  FormIsOpen: boolean = false;
  opened: boolean = true;
  adminName:any = '' ;
  adminImage:any = '';
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.adminImage = localStorage.getItem('photo_path');
    this.adminName = localStorage.getItem('name');
  }
  sidebarToggle() {
    this.isOpen = !this.isOpen;
    this.FormIsOpen = false;
  }

  FormToggle() {
    this.FormIsOpen = !this.FormIsOpen;
  }
  toggleNav() {
    this.opened = !this.opened;
  }
}
