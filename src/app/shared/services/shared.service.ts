import { Injectable, signal, WritableSignal } from "@angular/core";
import { DEFAULT_TAG, TAGS_LIST } from "../tags-list/core/tags-list.constant";
import { CardDetailsModel } from "../../core/app.models";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    showComponentContainer = signal(false);
    showTagContainer = signal(true);
    selectedTag:WritableSignal<CardDetailsModel> = signal(DEFAULT_TAG);
    tagList = signal(TAGS_LIST);

}