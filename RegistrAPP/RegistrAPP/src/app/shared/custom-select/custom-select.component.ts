import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() icon!: string;
  @Input() options: Array<{ label: string; value: any }> = [];

  constructor() { }

  ngOnInit() {}
}

