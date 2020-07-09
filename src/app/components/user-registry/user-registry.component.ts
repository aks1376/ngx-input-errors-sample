import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registry',
  templateUrl: './user-registry.component.html',
  styleUrls: ['./user-registry.component.css']
})
export class UserRegistryComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    family: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    age: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    phone: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
