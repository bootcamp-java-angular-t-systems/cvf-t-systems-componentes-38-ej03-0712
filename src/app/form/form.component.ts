import { EventEmitter, Component, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Article } from '../interfaces/Article';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Output() clientRegistered = new EventEmitter<Article>();
  @Input() selectedArticle: Article;
  @Input() crear: boolean = true; 
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.selectedArticle = {code: 0, description: '', price: 0}; 
    this.myForm = this.formBuilder.group({
      code: ['', Validators.required],
      description: '',
      price: '',
    });
  }

  ngOnChanges() {
    if (this.selectedArticle) {
      this.myForm.patchValue(this.selectedArticle);
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.clientRegistered.emit(formData);
      this.myForm.reset();
    }
  }

}
