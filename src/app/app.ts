import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentContainer } from "./shared/component-container/component-container";
import { Header } from './shared/header/header';
import { SharedService } from './shared/services/shared.service';
import { TagsList } from './shared/tags-list/tags-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ComponentContainer, TagsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
}
