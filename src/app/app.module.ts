import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './sidebar/menu/menu.component';

import { IconComponent } from './shared/icon/icon.component';
import { HeaderComponent } from './header/header.component';
import { FilterbuttonComponent } from './header/filterbutton/filterbutton.component';
import { MenuitemComponent } from './sidebar/menu/menuitems/menuitem.component';
import { PhotogridComponent } from './photogrid/photogrid.component';
import { GridComponent } from './photogrid/grid/grid.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SkillComponent } from './progressbar/skill/skill.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';
import { SkillpriceComponent } from './pricingtable/skillprice/skillprice.component';
import { ButtonComponent } from './shared/icon/button/button.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [						
    AppComponent,
    MenuComponent,
    MenuitemComponent,
    IconComponent,
    HeaderComponent,
    FilterbuttonComponent,
    PhotogridComponent,
    GridComponent,
    AboutmeComponent,
    ProgressbarComponent,
    SkillComponent,
    PricingtableComponent,
    SkillpriceComponent,
    ButtonComponent,
      ContactComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
