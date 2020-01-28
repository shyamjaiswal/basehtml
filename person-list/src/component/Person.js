import React, { PureComponent } from "react";

class Person extends PureComponent {
  render() {
    const { name, city, info } = this.props;
    return (
      <div>
        <p>
          I am {name} form {city}
        </p>
        <p>{info}</p>
      </div>
    );
  }
}

export default Person;
