import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LocaleProvider } from 'antd';
import ReactI18nProvider from '@feizheng/react-i18next-provider';
import kebabCase from '@feizheng/next-kebab-case';
import moment from 'moment';

const CLASS_NAME = 'react-ant-i18n';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    provider: PropTypes.func,
    i18nOptions: PropTypes.object
  };

  static defaultProps = {
    value: 'en',
    provider: LocaleProvider
  };

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.props.value) {
      moment.locale(kebabCase(value));
    }
    return true;
  }

  render() {
    const {
      className,
      resources,
      children,
      value,
      provider,
      i18nOptions,
      ...props
    } = this.props;
    const localeAntd = resources.antd[value];
    const resourcesI18n = resources.i18next;
    const AntdProvider = provider;

    return (
      <AntdProvider
        locale={localeAntd}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <ReactI18nProvider
          value={value}
          resources={resourcesI18n}
          i18nOptions={i18nOptions}>
          {children}
        </ReactI18nProvider>
      </AntdProvider>
    );
  }
}
