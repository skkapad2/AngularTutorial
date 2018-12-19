import { Component, OnChanges, Input,EventEmitter, Output} from '@angular/core';



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>= // must be an event, nested component pass data to component which is product list component
    new EventEmitter<string>(); //output decorator


ngOnChanges(): void {
    this.starWidth=this.rating *75/5;
}

onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
}
}