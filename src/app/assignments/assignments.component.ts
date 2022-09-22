import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les assignments !"
  assignments = [
    {
      nom:"TP1 Web Components à rendre",
      dateDeRendu:"15/09/2022",
      rendu: true
    },
    {
      nom:"TP2 Angular à rendre",
      dateDeRendu:"20/12/2022",
      rendu: false
    },
    {
      nom:"Mini Projet Angular à rendre",
      dateDeRendu:"4/01/2023",
      rendu: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
