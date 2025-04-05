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
    this.title.setTitle('Home - My Website');

    this.meta.updateTag({ name: 'description', content: 'This is the homepage of My Website' });
    
    // Open Graph Meta Tags (for Facebook, LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: 'Home - My Website' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'This is the homepage of My Website',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'malwike1.png',
    });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.mysite.com' });

    // Twitter Card Meta Tags (for Twitter)
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Home - My Website' });
    this.meta.updateTag({ name: 'twitter:description', content: 'This is the homepage of My Website' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.mysite.com/assets/og-image.jpg' });
    this.meta.updateTag({ name: 'twitter:site', content: '@mysite' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@creatorhandle' });
  }
  
}
