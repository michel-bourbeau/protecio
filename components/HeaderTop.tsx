'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSelector from '@components/LanguageSelector';
import Link from 'next/link';

export default function HeaderTop() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div
      id="header-top"
      className="header-top d-flex align-items-center sticked stikcy-menu"
    >
      Header Top
    </div>
  );
}
