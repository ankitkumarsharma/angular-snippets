import { Injectable, signal, WritableSignal } from "@angular/core";
import { CardDetailsModel } from "../../core/app.models";
import { DEFAULT_TAG, TAGS_LIST } from "../../layout/tags-list/core/tags-list.constant";
import { HEADER } from "../../layout/core/layout.constant";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    selectedTag:WritableSignal<CardDetailsModel> = signal(DEFAULT_TAG);
    tagList = signal(TAGS_LIST);
    menu = signal<any[]>(HEADER.menuList);
}