import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  error: boolean;
  textError: string

  constructor(private _shortUrlServices: ShortUrlService) {
    this.nombreUrl = ""
    this.urlShort = ""
    this.urlProcesada = false
    this.loading = false
    this.error = false
    this.textError = ""
  }

  ngOnInit(): void {
  }

  shortURL() {


    if (this.nombreUrl == '') {
      this.error = true
      this.urlProcesada = false
      this.textError = 'Please enter a URL'
      console.log('error');
      
      return
    }

    this.loading = true
    this.urlProcesada = false
    this.error = false

    setTimeout(() => {
      this._shortUrlServices.getUrlShort(this.nombreUrl).subscribe(data => {
        this.loading = false
        this.nombreUrl = data.long_url
        
        this.urlProcesada = true
        this.urlShort = data.link

      }, error => {
        
        this.loading = false
        this.error = true
        this.textError = error.error.description
      })
      
    }, 1500);


  }


  copyLink(inputElement){

    inputElement.select();  

    document.execCommand('copy'); 

    inputElement.setSelectionRange(0, 0); 

    alert("Copied to Clipboard" );
  }

  

}
