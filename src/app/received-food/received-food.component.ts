import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDonoServiceService } from '../food-dono-service.service';

@Component({
  selector: 'app-received-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './received-food.component.html',
  styleUrl: './received-food.component.css'
})
export class ReceivedFoodComponent implements OnInit {
  private foodService = inject(FoodDonoServiceService);
  donations = this.foodService.foodDonoList;

  ngOnInit() {
    this.foodService.fetchFoodDonos();
  }
}
