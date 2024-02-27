import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../core/components/banner/banner.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, CommonModule, BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  name = 'Cristian';
  userProfileImg = 'https://github.com/chiky222.png';
}
