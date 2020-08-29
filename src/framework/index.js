import React from 'react';
import WarningComponent from './components/WarningComponent';
import DemoAppConfig from './components/DemoAppConfig';

const ComponentComposer = require('./components/ComponentComposer/ComponentComposer').default;
const PageComposer = require('./components/PageComposer/PageComposer').default;

class Application extends React.Component {
  render () {
    const { userComponents } = this.props;
    const href = window.location.href;
    if (href.indexOf('/webcodesk__component_view') > 0) {
      return (
        <ComponentComposer userComponents={userComponents} />
      );
    } else if(href.indexOf('/webcodesk__page_composer') > 0) {
      return (
        <PageComposer userComponents={userComponents} />
      )
    } else if(href.indexOf('/webcodesk__demo_app_config') > 0) {
      return (
        <DemoAppConfig />
      )
    }
    return (
      <WarningComponent message="The page was not found." />
    );
  }
}

export default Application;