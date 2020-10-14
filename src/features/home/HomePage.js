import React from 'react';

import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation('hello');
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{t('title')}</h1>
      <div>
        {t('content.text')}
      </div>
    </div>
  )
}
