import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @Input('ratio') parallaxRatio: number = 1;
  @Input('path') path: string = '';

  initialTop: number = 0;
  imageRatio: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  ngOnInit(): void {
    let image = new Image();
    image.src = this.path;
    let that = this;
    image.onload = function() {
        that.imageRatio = image.width / image.height;
    };
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    event.preventDefault();

    let backgroundImageWidth = document.getElementsByClassName('background-main')[0].clientWidth;
    let backgroundImageHeight = backgroundImageWidth /  this.imageRatio;

    let bodyHeight = 0;
    let body = document.getElementById('body');
    if (body) bodyHeight = body.clientHeight;

    this.parallaxRatio = (backgroundImageHeight - window.innerHeight) / bodyHeight;

    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }
}
