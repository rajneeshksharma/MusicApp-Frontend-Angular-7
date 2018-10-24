import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  data: any;
  totalSongs: number;
  totalPlaylist: number;
  songsData: any;
  constructor(private dataservice: DataService) { }


  ngOnInit() {
    this.totalSongs = 0;
    this.totalPlaylist = 0;
    this.dataservice.getSongData().subscribe(res => {
      this.data = res;
      this.totalSongs = res.total;
      console.log(res, 'by service we get this');
    });
    this.dataservice.getSongs().subscribe(
      data => {
        console.log(data, 'at artist file');
        this.songsData = data.docs;
        this.dataservice.sendSongData(data);
      });
      this.dataservice.getPlaylist().subscribe(res2 => {
        this.totalPlaylist = res2.length;
        console.log(res2,  'Playlist'); } );

  }



}
