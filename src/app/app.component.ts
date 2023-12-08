import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Article } from './interfaces/Article';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'UD38-EJ02';
  clientsApp: Article[] = [];
  selectedArticle: Article;

  constructor() {
    this.selectedArticle = {code: 0, description: '', price: 0}; 
  }

  handleClientRegistered(client: Article) {
    this.clientsApp.push(client);
  }

  handleArticleDeleted(clientCode: number) {
    this.clientsApp = this.clientsApp.filter(article => article.code !== clientCode);
  }

  handleArticleSelected(clientCode: number) {
    console.log("aaaa")
    this.selectedArticle = this.clientsApp.find(article => article.code === clientCode) || { code: 0, description: '', price: 0 };
  }
}
