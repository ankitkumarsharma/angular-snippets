import { Component } from '@angular/core';
import { Logo } from "../../shared/utils/logo/logo";
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { SnippetsList } from '../snippets-list/snippets-list';

@Component({
  selector: 'app-home',
  imports: [Logo, ContainerRow, SnippetsList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
