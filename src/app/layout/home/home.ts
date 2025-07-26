import { Component } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { SnippetsList } from '../../snippets/snippets-list/snippets-list';

@Component({
  selector: 'app-home',
  imports: [ContainerRow, SnippetsList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
