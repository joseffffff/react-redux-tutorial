import * as React from "react";
import {Link} from "react-router-dom";

export default class Table extends React.Component {

  render() {
    return (
      <table className="table-styles">
        {this.renderHeader()}
        <tbody>
        {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderHeader() {
    if (!this.props.showHeader) {
      return null;
    }

    return (
      <thead>
        <tr>{this.renderHeaderColumns()}</tr>
      </thead>
    );
  }

  renderHeaderColumns() {
    return this.props.headers.map((header) => (<th key={header}>{header}</th>));
  }

  renderRows() {
    return this.props.rows.map((row, index) => (
      <tr key={row.id}>
        {this.renderColumns(row)}
        <td>
          <Link to={this.props.eyeLink + index}>
            <div className="eye-solid icon"/>
          </Link>
        </td>
      </tr>
    ));
  }

  renderColumns(row) {
    return this.props.keys.map(key => (<td key={key}>{row[key].toString()}</td>))
  }
}
