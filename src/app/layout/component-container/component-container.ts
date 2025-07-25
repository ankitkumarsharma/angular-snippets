import { Component, inject, WritableSignal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CardDetailsModel } from '../../core/app.models';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-component-container',
  imports: [RouterOutlet],
  templateUrl: './component-container.html',
  styleUrl: './component-container.scss'
})
export class ComponentContainer {
  router = inject(Router);
  selectedSnippet:WritableSignal<CardDetailsModel> = inject(SharedService).selectedSnippet; 

  onBackFn() {
    this.router.navigate(['/']);
  }
}
