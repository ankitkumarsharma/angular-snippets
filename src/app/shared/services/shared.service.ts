import { Injectable, signal, WritableSignal } from "@angular/core";
import { TagModel } from "../tags-list/core/tags-list.model";
import { DEFAULT_TAG } from "../tags-list/core/tags-list.constant";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    showComponentContainer = signal(false);
    showTagContainer = signal(true);
    selectedTag:WritableSignal<TagModel> = signal(DEFAULT_TAG);
}