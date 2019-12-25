import ReactAntI18n from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import moment from 'moment';
import { Calendar } from 'antd';
import i18next from 'i18next';
import './assets/style.scss';

class App extends React.Component {
  state = {
    lang: 'zhCn',
    resources: {
      antd: {
        zhCn: require(`antd/es/locale-provider/zh_CN.js`).default,
        zhTw: require(`antd/es/locale-provider/zh_TW.js`).default,
        en: require(`antd/es/locale-provider/en_US.js`).default
      },
      i18next: {
        zhCn: {
          translation: require(`./assets/locale/zh_CN.json`)
        },
        zhTw: {
          translation: require(`./assets/locale/zh_TW.json`)
        },
        en: {
          translation: require(`./assets/locale/en.json`)
        }
      }
    }
  };

  onSelectChange = (inEvent) => {
    const { value } = inEvent.target;
    this.setState({ lang: value });
  };

  render() {
    const { lang } = this.state;
    return (
      <div className="app-container">
        <ReactAntI18n value={lang} resources={this.state.resources}>
          {() => {
            return (
              <React.Fragment>
                <select value={lang} onChange={this.onSelectChange}>
                  <option value="zhCn">Chinese</option>
                  <option value="zhTw">Chinese TW</option>
                  <option value="en">English</option>
                </select>
                <Calendar fullscreen={false} value={moment()} />
                <p>
                  {i18next.t('hello')} - {i18next.t('world')}
                </p>
              </React.Fragment>
            );
          }}
        </ReactAntI18n>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
