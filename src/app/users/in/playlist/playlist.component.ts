import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { DataService } from 'src/app/shared/services/data.service';
import { type } from 'os';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  songs: any;



  constructor(private dataService: DataService) {
    console.log(this.test, 'out');
  }

  ngOnInit() {
    this.dataService.getSongData().subscribe(data => {
      this.songs = data.docs;

    });
  }

}
