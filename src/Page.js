import React, { PureComponent } from 'react';

class Page extends PureComponent {
  render() {
    let page = this.props.page;

    let choices = page.choices.map(choice => (
      <div key={choice.name} className="choice" onClick={this.props.choose.bind(null, choice.name)}>{choice.title}</div>
    ));

    return (
      <div className="page">
        <div className="title">{page.title}</div>
        <div className="description">{page.description}</div>
        <div className="choices">{choices}</div>
      </div>
    );
  }
}

export default Page;
