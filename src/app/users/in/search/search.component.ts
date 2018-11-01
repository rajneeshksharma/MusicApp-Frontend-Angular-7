import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  songs: any[] = [];
  cols: any[];
  searchResults = false;
  constructor(fb: FormBuilder, private dataService: DataService) {
    this.searchForm = fb.group({
      'search': ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.dataService.searchSong(this.searchForm.value).subscribe(res => {
        res.forEach(song => {
          this.songs.push({
            title: song.title,
            url: song.url,
            artist: song.artist.firstName,
            rating: song.rating
          });
          this.searchResults = true;
        });

        console.log(this.songs);
      }, err => {
        console.error(err);
      });

    }
  }

  ngOnInit() {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'url', header: 'Link' },
      { field: 'artist', header: 'Created by' },
      { field: 'rating', header: 'Rating' }
    ];
  }

}
