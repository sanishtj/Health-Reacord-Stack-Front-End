import React from 'react';

class memberdetailsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
member details Page
        <p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
        </p>

        <p>
This paragraph
contains      a lot of spaces
in the source     code,
but the    browser
ignores it.
        </p>

        <p>
The number of lines in a paragraph depends on the size of the browser window. If you resize
the browser window, the number of lines in this paragraph will change.
        </p>
      </div>);
  }
}

export default memberdetailsPage;
