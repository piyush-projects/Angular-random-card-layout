import { Injectable } from '@angular/core';
import { COLORS } from '../constants/colors'

@Injectable({
  providedIn: 'root'
})
export class Controls {
  private colors = COLORS;

  sort(): void {
    this.colors.availableColors.sort((a, b) => a.index > b.index ? 1 : -1)
  };

  getColors(): Object[] {
    return this.colors.availableColors;
  }

  randomize(): void {
    this.colors.availableColors.sort(() => Math.random() - 0.5);
  }
}
