import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  addSongForm: FormGroup;

  msg: string;
  userRating: number;
  constructor(private dataservice: DataService, private fb: FormBuilder) {
this.addSongForm = fb.group({
'title': ['', Validators.required],
'url': ['', Validators.required],
});
   }


handleRate(event) {

    this.msg = 'You have rated ' + event.value + ' Star :)';
    this.userRating = event.value;
  }

  onSubmit() {
    if (this.addSongForm.valid) {
      console.log(this.addSongForm.value);
      const songData = {
        title : this.addSongForm.value.title,
        url : this.addSongForm.value.url,
        rating: this.userRating,
      };
     this.dataservice.addSong(songData).subscribe(res => {console.log(res, 'formServer'); });
    }

    }


  ngOnInit() {
    this.userRating = 0;
  }

}
