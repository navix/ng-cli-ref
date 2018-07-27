import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MdRenderModule, MdRenderService } from '@nvxme/ngx-md-render';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentMessageComponent } from './content-message/content-message.component';
import { ContentTextComponent } from './content-text/content-text.component';
import { SectionHolderComponent } from './section/section-holder/section-holder.component';
import { SectionPageComponent } from './section/section-page/section-page.component';
import { VersionPageComponent } from './version-page/version-page.component';
import { SectionMenuComponent } from './section/section-menu/section-menu.component';
import { PageTextEntryComponent } from './section/section-page/page-text-entry/page-text-entry.component';
import { PageCommandParamEntryComponent } from './section/section-page/page-command-param-entry/page-command-param-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTextComponent,
    VersionPageComponent,
    ContentMessageComponent,
    SectionHolderComponent,
    SectionPageComponent,
    SectionMenuComponent,
    PageTextEntryComponent,
    PageCommandParamEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MdRenderModule,
  ],
  providers: [
    MdRenderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}