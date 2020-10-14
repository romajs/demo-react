import React from 'react';

import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{t('features.hello.title')}</h1>
      <div>
        {t('features.hello.content')}
      </div>
    </div>
  )
}
