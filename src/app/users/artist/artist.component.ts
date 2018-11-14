import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs/Subscription';
import { SelectItem } from 'primeng/components/common/selectitem';
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
  display = false;
  display2 = false;
  editSongsData: any;
  videoUrl: any;
  selectedType: any;
  page: number;
  types: SelectItem[];
  constructor(private dataservice: DataService) {
    this.selectedType = 1;
    this.types = [
      {label: '1', value: 1},
      {label: '2', value: 2},
      {label: '3', value: 3},
      {label: '4', value: 4},
      {label: '5', value: 5},
      {label: '6', value: 6}
  ];
  console.log(this.selectedType, 'page');

  }


  ngOnInit() {
    this.page = 1;
    this.totalSongs = 0;
    this.totalPlaylist = 0;
    this.dataservice.getSongData().subscribe(res => {
      this.data = res;
      this.totalSongs = res.total;
      console.log(res, 'by service we get this');
    });
    this.dataservice.getSongs(this.data).subscribe(
      data => {
        console.log(data, 'at artist file');
        this.songsData = data.docs;
        this.dataservice.sendSongData(data);
      });
      this.dataservice.getPlaylist().subscribe(res2 => {
        this.totalPlaylist = res2.length;
        console.log(res2,  'Playlist'); } );

  }
  pageChange(data) {
    console.log(data, 'page :)');
    this.dataservice.getSongs(data).subscribe(
      data1 => {
        console.log(data1, 'at artist file');
        this.songsData = data1.docs;
      });

  }
  playSong(songdata) {
    this.videoUrl = songdata;
    this.display = true;
  }
editSong(editData) {
  this.editSongsData = editData;
  this.display2 = true;
}




}
