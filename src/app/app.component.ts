import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minimal-dev-stuff';
  pdfEndPoint = 'assets/CESCO_Detailed_Notification_English-Odia.pdf';
  constructor(private readonly http: HttpClient) {}
  downloadFile() {
    this.http
      .get(this.pdfEndPoint, {
        responseType: 'blob',
        headers: { Accept: 'application/pdf' },
      })
      .subscribe((blob) => {
        saveAs(blob, 'download.pdf');
      });
  }
}
