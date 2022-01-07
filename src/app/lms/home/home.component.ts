import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GENERIC_CONSTANTS, ROUTES } from 'src/app/core';
import { EventService } from 'src/app/core/services/event.service';

import {
  LAYOUT_VERTICAL, LAYOUT_HORIZONTAL, LAYOUT_WIDTH, TOPBAR
} from './layouts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  layoutwidth: string;
  topbar: string;
  @ViewChild('roleBasedScreen', { read: ViewContainerRef })
  
  roleBasedScreen: ViewContainerRef;
  constructor(private eventService: EventService,
    private router: Router) { 

    }

  ngOnInit() {
    
    // default settings
    this.layoutType = LAYOUT_HORIZONTAL;
    this.layoutwidth = LAYOUT_WIDTH;
    this.topbar = TOPBAR;

    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout) => {
      this.layoutType = layout;
    });

    this.LayoutWidth(this.layoutwidth);

    this.eventService.subscribe('changeWidth', (width) => {
      this.layoutwidth = width;
      this.LayoutWidth(this.layoutwidth);
    });

    let userDetails = JSON.parse(localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_USER));
    if(userDetails.role && userDetails.role.length> 0) {
      userDetails.role.forEach((item) => {
        if( item.authority == 'ADMIN' ) {
         // this.router.navigate(['admin']); 
        }
      });
    }
  }

  ngAfterViewInit() {
  }

  LayoutWidth(width: string) {
    switch (width) {
      case "fluid":
        document.body.setAttribute("data-layout-size", "fluid");
        document.body.classList.remove("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      case "boxed":
        document.body.setAttribute("data-layout-size", "boxed");
        document.body.classList.add("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      case "scrollable":
        document.body.removeAttribute("data-layout-size");
        document.body.setAttribute("data-layout-scrollable", "true");
        document.body.setAttribute("data-layout-size", "fluid");
        document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
      default:
        document.body.setAttribute("data-layout-size", "fluid");
        break;
    }
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }
}

