import React from "react";

export default component =>
  class AsynComponentLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    componentWillMount() {
      component().then(component => {
        this.setState({ component: component.default });
      });
    }

    render() {
      if (this.state.component) {
        return <this.state.component />;
      }

      return null;
    }
  };
