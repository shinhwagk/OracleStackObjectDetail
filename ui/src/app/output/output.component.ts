import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  detailName = 'aa';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // this.a = Array.from(p)
      const b = <string[]>params
      console.info(b,11)
      console.info(Object.keys(params).length)
    });

  }
}
