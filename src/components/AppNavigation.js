import LangSelect from './LangSelect';
import { NavLink } from "react-router-dom";


function AppNavigation(props) {

  const {phrase} = props

  return (
<div className="govuk-header__content">
  <button type="button" role="button" className="govuk-header__menu-button govuk-js-header-toggle" aria-controls="navigation" aria-label="Show or hide Top Level Navigation">Menu</button>
  <nav>
    <ul id="navigation" className="govuk-header__navigation " aria-label="Top Level Navigation">
      <li className="govuk-header__navigation-item">
        <NavLink to="/" className="govuk-header__link" end>
          {phrase["To do list"]}
        </NavLink>
      </li>
      <li className="govuk-header__navigation-item">
        <NavLink to="/weather" className="govuk-header__link">
          {phrase["Weather forecast"]}
        </NavLink>
      </li>
      <li className="govuk-header__navigation-item">
        
        <LangSelect onLangChange={props.onLangChange} />

      </li>
    </ul>
  </nav>
</div>
  );
}

export default AppNavigation;
