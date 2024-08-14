'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import FormContact from './Forms/FormContact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section section">
      <Container className="container">
        <Row>
          <Col md={4} className="mb-3">
            <Image
              src="/images/contact-us.jpg"
              width={825}
              height={550}
              alt={t('Contact.title')}
            />
          </Col>
          <Col md={8}>
            <FormContact />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
