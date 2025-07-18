import { ElementRef, Renderer2 } from '@angular/core';
import { BigTitle } from './big-title';

describe('BigTitle', () => {
  it('should create an instance', () => {
    const mockRenderer = jasmine.createSpyObj<Renderer2>('Renderer2', ['setStyle']);
    const directive = new BigTitle(new ElementRef(null), mockRenderer);
    expect(directive).toBeTruthy();
  });
});
