import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';



@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  songs: any;



  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getSongData().subscribe(data => {
      this.songs = data.docs;

    });
  }

}
