import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
name: string;
  constructor(private router: Router) { }

  ngOnInit() {
   this.name = localStorage.getItem('username');
  }
  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
