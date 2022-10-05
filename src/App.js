import React, {useState, useEffect} from 'react';
import logo_white from './img/alarm_white.svg';
import alarm_black from './img/alarm_black.svg';
import AppNavigation from './components/AppNavigation';
import TodoApp from './components/todoapp/TodoApp';
import Weather from './components/weatherforecast/Weather';
import lang from './lang';
import { Routes, Route, Link } from "react-router-dom";


function App() {

  const [phrase, setPhrase] = useState(lang["sk"].phrase)

  const handleLangChange = (langVer) => {
    setPhrase(lang[langVer].phrase)
  }


  return (
    <div className="App">
      <header className="govuk-header " role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <Link to="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <img src={logo_white}
                  role="presentation"
                  focusable="false"
                  className="govuk-header__logotype-crown"
                  height="30"
                  width="30" /> {' '}
                <span className="govuk-header__logotype-text">
                  {phrase["React examples"]}
                </span>
              </span>
            </Link>
          </div>
            
          <AppNavigation phrase={phrase} onLangChange={handleLangChange} />

        </div>
      </header>

      <div className="govuk-width-container">
        <div className="govuk-breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="/section"></a>
            </li>
          </ol>
        </div>
        <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing" id="main-content">
          <div className="app-whitespace-highlight">
            <Routes>
              <Route path="/" element={<TodoApp phrase={phrase} />} />
              <Route path="/weather" element={<Weather phrase={phrase} />} />
            </Routes>
            </div>
        </main>
      </div>


      <footer className="govuk-footer">
        <div className="govuk-width-container">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">

              <img src={alarm_black}
                role="presentation"
                focusable="false"
                className="govuk-footer__licence-logo"
                height="17"
                width="17" />
              <span className="govuk-footer__licence-description">
                {phrase["The application is also available on"]} {' '}
                <a className="govuk-footer__link"
                  href="https://github.com/Lukas1990/react-todo"
                  rel="license"
                >github.com</a>
              </span>
            </div>
            <div className="govuk-footer__meta-item">
              <a className="govuk-footer__link govuk-footer__copyright-logo"
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >© gov.sk copyright</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
