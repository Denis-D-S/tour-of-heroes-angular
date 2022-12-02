import { Injectable, OnDestroy, OnInit } from '@angular/core';

type MediaQueryType = '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Target {
  innerHeight: number;
  innerWidth: number;
}

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService implements OnInit, OnDestroy {

  public currentHeigh: number;
  public currentWidth: number;

  public currentScreenSize: MediaQueryType;

  constructor() {
    this.currentScreenSize = ''; //inicia por default entendendo que a tela é tamanho médio (tablet)
    this.currentHeigh = window.innerHeight;
    this.currentWidth = window.innerWidth;

    this.onResizeScreenHandler.bind(this);
    window.addEventListener("resize", event => this.onChangeScreenSize(event.target as any));
  }

  private onResizeScreenHandler(event: any) {
    this.onChangeScreenSize(event.target);
  }

  ngOnInit(): void {
    window.addEventListener("resize", this.onResizeScreenHandler);
  }
  ngOnDestroy(): void {
    window.removeEventListener("resize", this.onResizeScreenHandler);
  }

  private onChangeScreenSize(target: Target) {
    this.currentHeigh = target.innerHeight;
    this.currentWidth = target.innerWidth;
    this.updateScreenSize();
  }

  private updateScreenSize() {
    if (this.currentWidth < 600) {
      this.currentScreenSize = 'xs';
    } else if (this.currentWidth < 768) {
      this.currentScreenSize = 'sm';
    } else if (this.currentWidth < 992) {
      this.currentScreenSize = 'md';
    } else if (this.currentWidth < 1200) {
      this.currentScreenSize = 'lg';
    } else {
      this.currentScreenSize = 'xl';
    }
  }

  // init() {
  //   this.updateScreenSize();
  // }
}

