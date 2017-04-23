import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailName = 'aa';

  constructor() { }

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //   console.info(Object.keys(params).length)
    // });

  }
}
