import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songsData: any;
  constructor(private dataservice: DataService) { }


  ngOnInit() {
    this.dataservice.getSongs().subscribe(
      data => {
        this.songsData = data.docs;
        console.log(this.songsData, 'SONGSSSSSSSSSSSSSSSSSSS');
      });
  }

}
