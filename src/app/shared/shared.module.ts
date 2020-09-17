import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderComponent } from '../components/header/header.component';
import { SearchComponent } from '../components/search/search.component';
import { SlideComponent } from '../components/slide/slide.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,     
        ReactiveFormsModule,
        SlickCarouselModule
    ],
    declarations:[        
        HeaderComponent,
        SearchComponent,
        SlideComponent,
        CardComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SlickCarouselModule,
        HeaderComponent,
        SearchComponent,
        SlideComponent,
        CardComponent

    ]
})

export class SharedModule {

}