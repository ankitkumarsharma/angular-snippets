import { Component, inject, WritableSignal } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Router } from '@angular/router';
import { CardDetailsModel } from '../../core/app.models';

@Component({
  selector: 'app-component-container',
  imports: [],
  templateUrl: './component-container.html',
  styleUrl: './component-container.scss'
})
export class ComponentContainer {
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
  router = inject(Router);
  selectedTag:WritableSignal<CardDetailsModel> = inject(SharedService).selectedTag; 

  onBackFn() {
    this.showComponentContainer.showComponentContainer.set(false);
    this.showTagContainer.showTagContainer.set(true);
    this.router.navigate(['/']);
  }
}
