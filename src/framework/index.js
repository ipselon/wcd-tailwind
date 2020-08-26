import React from 'react';
import { getSchema, getSettings, saveSchema, saveSettings } from './store/storage';
import WarningComponent from './components/WarningComponent';
import DemoAppConfig from './components/DemoAppConfig';

const constants = require('./commons/constants');
const ComponentComposer = require('./components/ComponentComposer/ComponentComposer').default;
const PageComposer = require('./components/PageComposer/PageComposer').default;

export function getDemoFiles({schema, settings}) {
  const newFiles = {schema, settings};
  return getSchema()
    .then(schemaFromStorage => {
      if (schemaFromStorage) {
        newFiles.schema = schemaFromStorage;
      }
      return getSettings();
    })
    .then(settingsFromStorage => {
      if (settingsFromStorage) {
        newFiles.settings = settingsFromStorage;
      }
      return newFiles;
    })
    .catch((error) => {
      console.error(error.message);
      return newFiles;
    });
}

class Application extends React.Component {

  componentDidMount () {
    window.addEventListener("message", this.handleReceiveMessage, false);
  }

  componentWillUnmount () {
    window.removeEventListener("message", this.handleReceiveMessage);
  }

  handleReceiveMessage = (event) => {
      const {data: message} = event;
      if (message) {
        const { type, payload } = message;
        if (type === constants.WEBCODESK_MESSAGE_START_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = true;
          setTimeout(() => {
            window.__sendFrameworkMessage({
              type: constants.FRAMEWORK_MESSAGE_INIT_DEBUG,
              payload: {
                actionSequences: this.actionSequences
              },
            });
          }, 0);
        } else if (type === constants.WEBCODESK_MESSAGE_STOP_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = false;
        } else if (type === constants.WEBCODESK_MESSAGE_SAVE_DEMO_FILES && payload) {
          const {schema, settings} = payload;
          saveSchema(schema)
            .then(() => {
              return saveSettings(settings);
            })
            .then(() => {
              window.__sendFrameworkMessage({
                type: constants.FRAMEWORK_MESSAGE_DEMO_FILES_SAVED,
              });
            })
            .catch((error) => {
              console.error(error.message);
              window.__sendFrameworkMessage({
                type: constants.FRAMEWORK_MESSAGE_DEMO_FILES_SAVED,
              });
            });
        }
      }
  };

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