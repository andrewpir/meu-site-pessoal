import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    constructor(private http: HttpClient) { }

    // Criamos o grupo do formulário com validações básicas
    contactForm = new FormGroup({
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mensagem: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

    enviarContato() {
        const dados = this.contactForm.value;
        const urlFormspree = `https://formspree.io/f/${environment.formspreeId}`;

        this.http.post(urlFormspree, dados).subscribe({
            next: (response) => {
                alert('Mensagem enviada com sucesso!');
                this.contactForm.reset();
            },
            error: (error) => {
                alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
            }
        });
    }
}
