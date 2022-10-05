
function LangSelect(props) {

  function selectLang(e) {
    props.onLangChange(e.target.value)
  }

  return (
<select className="govuk-select" id="select-1" name="select-1" onChange={selectLang}>
    <option value="sk" defaultValue>SK</option>
    <option value="en">EN</option>
</select>
  );
}

export default LangSelect;
