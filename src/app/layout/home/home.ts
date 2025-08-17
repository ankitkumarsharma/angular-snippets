import { Component } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { SnippetsList } from '../../snippets/snippets-list/snippets-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ContainerRow, SnippetsList, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
