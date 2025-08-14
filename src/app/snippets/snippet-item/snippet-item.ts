import { DatePipe } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/core/auth.service';
import { SharedService } from '../../shared/services/shared.service';
import { Snippet } from '../core/snippets.model';

@Component({
  selector: 'app-snippet-item',
  imports: [DatePipe, RouterOutlet],
  templateUrl: './snippet-item.html',
  styleUrl: './snippet-item.scss'
})
export class SnippetItem {
  router = inject(Router);
  selectedSnippet:WritableSignal<Snippet> = inject(SharedService).selectedSnippet; 
  authService = inject(AuthService);
  
  onBackFn() {
    this.router.navigate(['/']);
  }
}
