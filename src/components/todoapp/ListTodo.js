
function ListTodo(props) {
  const {items, phrase} = props

  function deleteItem(e) {
    e.preventDefault()
    props.onDeleteItem(parseInt(e.target.dataset.iditem))
  }

  return (
<div className="govuk-grid-column-one-half">
  <h2 className="govuk-heading-m">{phrase["List of all tasks"]}:</h2>
  <table className="govuk-table">
    <tbody className="govuk-table__body">

      { items.map((item, index) => (

        <tr key={index} className="govuk-table__row">
          <td className={item[1] === true ? 'govuk-fieldset__legend--s govuk-table__cell' : 'govuk-table__cell'}>{item[0]}</td>
          <td className="govuk-table__cell govuk-table__cell--numeric" style={{"verticalAlign": "middle"}}>
            <a className="govuk-link" href="#" data-iditem={index} onClick={deleteItem}> {phrase["Delete"]} </a>
          </td>
        </tr>
      )) }

    </tbody>
  </table>
</div>
  );
}

export default ListTodo;
