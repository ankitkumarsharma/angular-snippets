import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgAksForms } from "@ng-aks/forms";
import { AuthService } from '../../auth/core/auth.service';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { SNIPPETS_CONSTANTS } from '../core/snippets.constant';
import { SnippetsService } from '../core/snippets.service';

@Component({
  selector: 'app-add-snippet',
  imports: [ContainerRow, ReactiveFormsModule, NgAksForms],
  templateUrl: './add-snippet.html',
  styleUrl: './add-snippet.scss'
})
export class AddSnippet {
  formConfig = SNIPPETS_CONSTANTS.addSnippetsFormConfig;
  addSnippetForm = signal<FormGroup<any> | null>(null);
  coverImageUrl = signal<string | ArrayBuffer | null>(null);
  tagList: string[] = [];
  @ViewChild('addTag') addTag!: ElementRef;
  authService = inject(AuthService);
  snippetsService = inject(SnippetsService);
  router = inject(Router);

  onGetForm(e: FormGroup) {
    this.addSnippetForm.set(e);
  }

  onCoverImageSelectedFn(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.coverImageUrl.set(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  onAddTagFn(tag: string) {
    this.tagList = [tag, ...this.tagList];
    this.addTag.nativeElement.value = '';
  }

  onRemoveTagFn(index: number) {
    console.log(index)
    this.tagList.splice(index, 1);
  }

  onAddSnippetFn() {
    if (!this.addSnippetForm()?.valid) {
      this.addSnippetForm()?.markAllAsTouched();
      return;
    }
    if (!confirm('Are you sure you want to add this snippet? Please check preview before add your snippet. Thanks')) {
      return;
    }
    let data = {
      ...this.addSnippetForm()?.value,
      coverImage: this.coverImageUrl(),
      tagList: this.tagList,
      username: this.authService.isLoggedIn()?.username || 'Anonymous'
    }
    console.log("Snippet Data:", data);
    this.snippetsService.addSnippets(data).subscribe({
      next: (res) => {
        this.addSnippetForm()?.reset();
        this.coverImageUrl.set(null)
        this.tagList = [];
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error("Error adding snippet", err);
        alert('Failed to add snippet. Please try again later.');
      }
    });
  }
}
