import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @Input() path = '';

  initialTop = 0;
  imageRatio = 0;
  parallaxRatio = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  ngOnInit(): void {
    const image = new Image();
    image.src = this.path;
    image.onload = () => {
        this.imageRatio = image.width / image.height;
    };
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    event.preventDefault();

    const backgroundImageWidth = document.getElementsByClassName('background-main')[0].clientWidth;
    const backgroundImageHeight = backgroundImageWidth /  this.imageRatio;

    let bodyHeight = 0;
    const body = document.getElementById('body');
    if (body) { bodyHeight = body.clientHeight; }

    this.parallaxRatio = (backgroundImageHeight - window.innerHeight) / bodyHeight;

    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }
}
