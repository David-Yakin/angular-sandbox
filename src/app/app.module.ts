import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { BindingPropertiesComponent } from './components/binding-properties/binding-properties.component';

@NgModule({
  declarations: [AppComponent, StringInterpolationComponent, BindingPropertiesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
