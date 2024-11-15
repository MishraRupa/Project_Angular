import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  isSlideOut = true;
  constructor(private router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
    this.triggerGlitterEffect();
  }

  triggerGlitterEffect(): void {
    // Get the icon element and add the glitter class
    const icon = document.querySelector('.mat-icon');
    if (icon) {
      icon.classList.add('glitter');
      
      // Remove the glitter effect class after animation is complete (0.8s)
      setTimeout(() => {
        icon.classList.remove('glitter');
      }, 800);  // Same duration as the animation time
    }
  }

  onDash(){
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/budget-planner/profile']);
  }
  onHistory(){
    this.router.navigate(['/budget-planner/history']);
  }
  onLogout(){
    this.router.navigate(['/budget-planner/login']);
  }

}
