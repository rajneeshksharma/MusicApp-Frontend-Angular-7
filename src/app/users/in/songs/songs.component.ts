import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  msg: string;

    handleRate(event) {
        this.msg = "You have rated " + event.value +" Star :)";
    }

  ngOnInit() {
  }

}
