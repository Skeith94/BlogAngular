import { Component, OnInit,Input } from '@angular/core';
import { BlogPreview } from "../models/blog-preview";
import { Router } from "@angular/router";
@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.html',
  styleUrls: ['./postpreview.component.css']
})
export class PostpreviewComponent implements OnInit {
  @Input() post:BlogPreview;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }


}
