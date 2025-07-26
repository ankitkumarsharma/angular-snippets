import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/core/auth.service';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { SnippetsList } from '../../snippets/snippets-list/snippets-list';

@Component({
  selector: 'app-dashboard',
  imports: [ContainerRow, SnippetsList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  authService = inject(AuthService);
}
