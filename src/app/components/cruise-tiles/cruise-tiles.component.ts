import { Component, OnInit } from '@angular/core';
import { CruisesService } from '../../config/cruises.service'
import { Config } from 'protractor';

@Component({
  selector: 'app-cruise-tiles',
  templateUrl: './cruise-tiles.component.html',
  styleUrls: ['./cruise-tiles.component.css']
})
export class CruiseTilesComponent implements OnInit {
  tiles: any;

  constructor(private service: CruisesService) { }

  ngOnInit() {
    this.tiles = this.service.getCofig();
    console.log(this.service.getCofig());
  }

}
