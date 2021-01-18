import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

export interface Slides {
    path: string;
    label: string|null;
    subLabel: string|null;
}

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    @ViewChild('carousel', {static : true}) carousel: NgbCarousel|null = null;
    @Input('slides') slides: Slides[] = [];

    goFullscreen = false;

    setFullscreen(fullscreen: boolean): void {
        this.goFullscreen = fullscreen;
    }
}
