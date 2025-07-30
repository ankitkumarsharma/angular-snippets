import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { LABELS } from "../../core/app.constant";
import { Snippet } from "./snippets.model";

@Injectable({
    providedIn: 'root'
})
export class SnippetsService {
    http = inject(HttpClient);
    editorContent = signal<string>('');
    addSnippets(snippet:Snippet){
        return this.http.post(`${environment.apiUrl}${LABELS.route.snippets}${LABELS.route.addsnippet}`,snippet);
    }

    getSnippets() {
        return this.http.post<Snippet[]>(`${environment.apiUrl}${LABELS.route.snippets}`, {});
    }

}