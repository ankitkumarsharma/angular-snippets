import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/core/auth.service';
import { SnippetsService } from '../core/snippets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-snippet',
  imports: [ContainerRow, ReactiveFormsModule],
  templateUrl: './add-snippet.html',
  styleUrl: './add-snippet.scss'
})
export class AddSnippet implements OnInit {
  addSnippetForm!: FormGroup;
  coverImageUrl: string | ArrayBuffer | null = null;
  tagList: string[] = [];
  @ViewChild('addTag') addTag!: ElementRef;
  authService = inject(AuthService);
  snippetsService = inject(SnippetsService);
  router = inject(Router);

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addSnippetForm = new FormGroup({
      title: new FormControl(''),
      desc: new FormControl(''),
      coverImg: new FormControl(''),
    })
  }

  onCoverImageSelectedFn(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.coverImageUrl = reader.result;
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
    if (!confirm('Are you sure you want to add this snippet? Please check preview before add your snippet. Thanks')) {
      return;
    }
    let data = {
      title: this.addSnippetForm.controls['title'].value,
      desc: this.addSnippetForm.controls['desc'].value,
      coverImage: this.coverImageUrl,
      tagList: this.tagList,
      username: this.authService.isLoggedIn()?.username || 'Anonymous'
    }
    this.snippetsService.addSnippets(data).subscribe({
      next: (res) => {
        this.addSnippetForm.reset();
        this.coverImageUrl = null;
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
