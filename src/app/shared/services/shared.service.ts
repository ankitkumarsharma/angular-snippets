import { Injectable, signal, WritableSignal } from "@angular/core";
import { HEADER } from "../../layout/core/layout.constant";
import { SNIPPETS_CONSTANTS } from "../../snippets/core/snippets.constant";
import { Snippet } from "../../snippets/core/snippets.model";
import { SNIPPETS_LIST } from "../../snippets/snippets-list/core/snippets-list.constant";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    selectedSnippet:WritableSignal<Snippet> = signal(SNIPPETS_CONSTANTS.defaultSnippet);
    snippetsList = signal(SNIPPETS_LIST);
    menu = signal<any[]>(HEADER.menuList);
}