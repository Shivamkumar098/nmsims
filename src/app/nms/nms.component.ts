import { Component, OnInit } from '@angular/core';
import { Nms } from '../models/nms.model';
import { NmsService } from '../service/nms.service';

@Component({
  selector: 'app-nms',
  templateUrl: './nms.component.html',
  styleUrls: ['./nms.component.css']
})
export class NmsComponent implements OnInit{
  nms?: Nms[];
  currentNms: Nms = {};
  currentIndex = -1;
  title = '';

  constructor(private nmsService : NmsService){}

  ngOnInit(): void {
    this.retrieveNms();
  }

  retrieveNms(): void {
    this.nmsService.getAll()
      .subscribe({
        next: (data) => {
          this.nms = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveNms();
    this.currentNms = {};
    this.currentIndex = -1;
  }
  setActiveNms(nms: Nms, index: number): void {
    this.currentNms = nms;
    this.currentIndex = index;
  }
}
