import { Component, inject } from '@angular/core';
import { TagsList } from '../tags-list/tags-list';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  imports: [TagsList],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
showTagContainer = inject(SharedService);
}
