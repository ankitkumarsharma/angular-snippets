import { Injectable, signal, WritableSignal } from "@angular/core";
import { CardDetailsModel } from "../../core/app.models";
import { HEADER } from "../../layout/core/layout.constant";
import { DEFAULT_SNIPPET, SNIPPETS_LIST } from "../../snippets/snippets-list/core/snippets-list.constant";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    selectedSnippet:WritableSignal<CardDetailsModel> = signal(DEFAULT_SNIPPET);
    snippetsList = signal(SNIPPETS_LIST);
    menu = signal<any[]>(HEADER.menuList);
}