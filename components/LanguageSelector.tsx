import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';

import { En, Fr, Es } from '@components/svg/flags';

export const LanguageSelector = () => {
  const router = useRouter();

  const { locale, pathname } = router;

  let lng;

  // Gestion des langues avec if-else
  if (locale === 'fr') {
    lng = (
      <>
        <span className="flag">
          <Fr />
        </span>
      </>
    );
  } else if (locale === 'en') {
    lng = (
      <>
        <span className="flag">
          <En />
        </span>
      </>
    );
  } else if (locale === 'es') {
    lng = (
      <>
        <span className="flag">
          <Es />
        </span>
      </>
    );
  } else {
    // Si la langue n'est pas reconnue, affichez un composant par défaut ou un message d'erreur
    lng = 'English';
  }

  return (
    <>
      <Dropdown className="bg-transparent w-auto">
        <Dropdown.Toggle
          className="bg-transparent border-0 text-dark"
          id="dropdown-lng"
        >
          {lng}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locale !== 'en' && (
            <Dropdown.Item
              id="en"
              title="English"
              href={`/en/${pathname}`}
            >
              <span className="flag">
                <En />
              </span>
              English
            </Dropdown.Item>
          )}
          {locale !== 'es' && (
            <Dropdown.Item
              id="es"
              title="Espaniol"
              href={`/es/${pathname}`}
            >
              <span className="flag">
                <Es />
              </span>
              Español
            </Dropdown.Item>
          )}
          {locale !== 'fr' && (
            <Dropdown.Item
              id="fr"
              title="Francais"
              href={`/fr/${pathname}`}
            >
              <span className="flag">
                <Fr />
              </span>
              Français
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LanguageSelector;
