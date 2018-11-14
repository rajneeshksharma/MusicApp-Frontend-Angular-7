import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editsong',
  templateUrl: './editsong.component.html',
  styleUrls: ['./editsong.component.css']
})
export class EditsongComponent implements OnInit {


  editSongForm: FormGroup;
songId: any;
sucess = false;
failed = false;
constructor(private dataservice: DataService, private fb: FormBuilder) {

this.editSongForm = fb.group({
'title': ['', Validators.required],
'url': ['', Validators.required],
'rating': ['', Validators.required],
});
   }



  onSubmit() {
    if (this.editSongForm.valid) {
      console.log(this.editSongForm.value);
const newSongEdit = {
  id : this.songId,
  data : this.editSongForm.value
};
this.dataservice.editSong(newSongEdit).subscribe(
  res => { this.sucess = true;

   }, err => {this.failed = true; }
);
    }
}


  ngOnInit() {
  this.dataservice.getEditSongData().subscribe(editsongData => {
    this.songId = editsongData._id;
    this.editSongForm.patchValue(editsongData);
  });
  }


}
