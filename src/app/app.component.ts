import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js'
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Meta, Title],
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  // title = 'malwike';

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    this.title.setTitle('Malwike Technologies');

    this.meta.updateTag({ name: 'description', content: 'WELCOME TO MALWIKE TECHNOLOGIES  YOUR FIRST CLASS TECH PARTNER' });
    
    // Open Graph Meta Tags (for Facebook, LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: 'Malwike Technologies' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'WELCOME TO MALWIKE TECHNOLOGIES  YOUR FIRST CLASS TECH PARTNER',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://x.com/kmalomba/status/1908629920575602969/photo/1',
    });
    this.meta.updateTag({ property: 'og:url', content: 'https://malwike.vercel.app/malwike-technologies' });

    // Twitter Card Meta Tags (for Twitter)
    this.meta.updateTag({ name: 'twitter:card', content: 'WELCOME TO MALWIKE TECHNOLOGIES  YOUR FIRST CLASS TECH PARTNER' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Malwike Technologies' });
    this.meta.updateTag({ name: 'twitter:description', content: 'WELCOME TO MALWIKE TECHNOLOGIES  YOUR FIRST CLASS TECH PARTNER' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://x.com/kmalomba/status/1908629920575602969/photo/1' });
    this.meta.updateTag({ name: 'twitter:site', content: '@mysite' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@KMalomba' });
  }
  
}
