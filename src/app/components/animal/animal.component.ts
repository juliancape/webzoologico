import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: any;
  editableAnimal: boolean = false;
  idAnimal: any;

  constructor(private animalService: AnimalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: '',
      fecha: Date
    })
  }

  getAllAnimals() {
      this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
      this.animalForm = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }
  newAnimalEntry() {
    this.animalService.newAnimal(localStorage.getItem('accessToken'), this.animalForm.value ).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/animal']).then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }

}

