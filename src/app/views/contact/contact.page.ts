import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://127.0.0.1:8000/novel/serch').subscribe((res) => {
      console.log(res);
    });
  }
}
