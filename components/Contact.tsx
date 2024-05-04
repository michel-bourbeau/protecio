'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Map from '@components/Map';
import FormContact from './Forms/FormContact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type PropsContact = { hideTitle?: boolean };

export default function Contact({ hideTitle = false }: PropsContact) {
  const { t } = useTranslation();

  return (
    <section className="contact-section section">
      <p className="construction">{t('UnderConstruction')}</p>

      <Container className="container">
        <Row>
          <Col>
            <Map />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contact-form-box contact-form contact-form-3">
              <FormContact />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
