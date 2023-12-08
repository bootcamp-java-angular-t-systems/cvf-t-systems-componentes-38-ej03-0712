import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../interfaces/Article';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input() clients: Article[] = [];
  @Output() articleDeleted = new EventEmitter<number>();
  @Output() selectedArticle = new EventEmitter<number>();


  selectArticle(clientCode: number) {
    this.selectedArticle.emit(clientCode);
  }


  deleteArticle(clientCode: number) {
    this.clients = this.clients.filter(article => article.code !== clientCode);
    this.articleDeleted.emit(clientCode);
  }
}
