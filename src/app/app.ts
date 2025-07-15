import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentContainer } from "./layout/component-container/component-container";
import { SharedService } from './shared/services/shared.service';
import { Footer } from './layout/footer/footer';
import { TagsList } from './layout/tags-list/tags-list';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentContainer, TagsList, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
}
