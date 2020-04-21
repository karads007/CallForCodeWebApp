import { Component, OnInit, OnDestroy } from '@angular/core';
import { Interaction } from '../models/interaction';
import { InteractionService } from '../services/interactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.css']
})
export class InteractionsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  interactions : Interaction[];
  interval: any;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.getInteractions();
    this.interval = setInterval(() => { 
      this.getInteractions();
     }, 5000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearInterval(this.interval);
  }

  getInteractions(): void{
      this.interactionService.getInteractions()
      .subscribe(interactions => this.interactions = interactions);  
  }
}
