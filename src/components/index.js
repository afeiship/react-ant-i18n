import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LocaleProvider } from 'antd';
import ReactI18nProvider from '@feizheng/react-i18next-provider';

const CLASS_NAME = 'react-ant-i18n';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'en'
  };

  render() {
    const { className, resources, children, value, ...props } = this.props;
    const localeAntd = resources.antd[value];
    const resourcesI18n = resources.i18next;

    return (
      <LocaleProvider
        locale={localeAntd}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <ReactI18nProvider value={value} resources={resourcesI18n}>
          {children}
        </ReactI18nProvider>
      </LocaleProvider>
    );
  }
}
