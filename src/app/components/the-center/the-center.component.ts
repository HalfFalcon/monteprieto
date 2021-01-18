import {Component} from '@angular/core';
import {Slides} from '../carousel/carousel.component';

@Component({
    selector: 'the-center',
    templateUrl: './the-center.component.html',
    styleUrls: ['./the-center.component.scss']
})
export class TheCenterComponent {
    slides: Slides[] = [
        {path: '/assets/the-ranch-center-1.jpg', label: 'The Gang', subLabel: null},
        {path: '/assets/the-ranch-center-2.jpg', label: 'Making Rings', subLabel: 'Using CAST kits to make jewellery'},
        {path: '/assets/the-ranch-center-3.jpg', label: 'Parry Sanding', subLabel: 'Molly specifically told her not to'},
        {path: '/assets/the-ranch-center-4.jpg', label: 'Dining al Fresco', subLabel: 'No one looks good in this one'},
    ];
}
