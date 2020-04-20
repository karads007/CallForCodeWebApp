import { Component, OnInit } from '@angular/core';
import { Interaction } from '../models/interaction';
import { InteractionService } from '../services/interactions.service';

@Component({
  selector: 'app-view-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit {
  interactions : Interaction[];

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.getInteractions();
  }

  getInteractions(): void{
    this.interactionService.getInteractions()
    .subscribe(interactions => this.interactions = interactions);
  }
}
