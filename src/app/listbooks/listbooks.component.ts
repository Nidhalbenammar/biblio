import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListBooksComponent implements OnInit {
  filtre="";
  books = [
    {id:1, titre : "Titre 1", auteur : "Auteur 1", prix : 20},
    {id:2, titre : "Titre 2", auteur : "Auteur 2", prix : 30},
    {id:3, titre : "Titre 3", auteur : "Auteur 3", prix : 40},
  ]

  constructor() { }

  filtredBooks=()=>{
    return this.books.filter(
      book=>book.titre.includes(this.filtre)
    )
  }
  ngOnInit(): void {
  }

}
  /*title="tableau des livres";
  books = [
    {id:1, titre:'Atomic habits', auteur:'James Clear', prix:30},
    {id:2, titre:'Power of habits', auteur:'Jeff Olsen', prix:25}
  ];*/

