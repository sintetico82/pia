import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguagesService {
  selectedLanguage: string;

  constructor(private _translateService: TranslateService) { }

  /**
   * Initialize languages on the PIA tool
   */
  initLanguages() {
    this._translateService.addLangs(['en', 'cs', 'it', 'nl', 'fr', 'pl', 'de', 'es', 'fi', 'pt', 'ro', 'el', 'hu', 'no']);
    this._translateService.setDefaultLang('fr');
  }

  /**
   * Get the current language or set it
   */
  getOrSetCurrentLanguage() {
    let language = localStorage.getItem('userLanguage');
    // If there is already a language choosen
    if (language && language.length > 0) {
      this._translateService.use(language);
    } else { // Set default language
      const browserLang = this._translateService.getBrowserLang();
      language = browserLang.match(/en|cs|it|nl|fr|pl|de|es|fi|pt|ro|el|hu|no/) ? browserLang : 'fr';
      this._translateService.use(language);
    }
    this.selectedLanguage = language;
  }

  /**
   * Update the current language after choosing a new one
   * @param {string} selectedLanguage
   * @memberof HeaderComponent
   */
  updateCurrentLanguage(selectedLanguage: string) {
    localStorage.setItem('userLanguage', selectedLanguage);
    this._translateService.use(selectedLanguage);
    this.selectedLanguage = selectedLanguage;
  }
}
