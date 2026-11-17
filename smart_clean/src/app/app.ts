import { Component, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart_clean');

  sidebarExpanded = true;
  showSidebar = true;

  constructor(private router: Router) {}

  toggleSidebar(){
    this.sidebarExpanded = !this.sidebarExpanded;
    localStorage.setItem('sidebarExpanded', JSON.stringify(this.sidebarExpanded));
    localStorage.setItem('sidebarExpaded', JSON.stringify(this.sidebarExpanded));
  }

  ngOnInit(){
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebarExpaded');
      if(saved !== null){
        this.sidebarExpanded = JSON.parse(saved);
      }
    }

    this.updateSidebarVisibility(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSidebarVisibility(event.urlAfterRedirects || event.url);
      }
    });
  }

  private updateSidebarVisibility(url: string) {
    const hiddenRoutes = ['/', '/home', '/login'];
    this.showSidebar = !hiddenRoutes.includes(url);
  }
}
