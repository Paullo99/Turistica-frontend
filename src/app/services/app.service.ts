import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private snackBar: MatSnackBar) {}

  showSnackBar(message:string){
    this.snackBar.open(message, "Zamknij", {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['snackbar']
    });
  }
}
