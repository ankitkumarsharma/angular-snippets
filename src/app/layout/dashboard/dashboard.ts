import { Component, inject } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { TagsList } from "../tags-list/tags-list";
import { AuthService } from '../../auth/core/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [ContainerRow, TagsList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  authService = inject(AuthService);
}
