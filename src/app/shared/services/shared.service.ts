import { Injectable, signal, WritableSignal } from "@angular/core";
import { CardDetailsModel } from "../../core/app.models";
import { DEFAULT_SNIPPET, SNIPPETS_LIST } from "../../layout/snippets-list/core/snippets-list.constant";
import { HEADER } from "../../layout/core/layout.constant";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    selectedSnippet:WritableSignal<CardDetailsModel> = signal(DEFAULT_SNIPPET);
    snippetsList = signal(SNIPPETS_LIST);
    menu = signal<any[]>(HEADER.menuList);
}