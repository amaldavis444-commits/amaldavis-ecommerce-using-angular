import { Component } from '@angular/core';
import { Accordion } from "../accordion/accordion";
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [Accordion, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
