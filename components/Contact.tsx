'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import FormContact from './Forms/FormContact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type PropsContact = { hideTitle?: boolean };

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section section">
      <Container className="container">
        <Row className="mb-5">
          <Col>
            <h4>Contact Title</h4>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={6}>
            <p>Adresse ici</p>
            <ul>
              <li>(418) 999-9999</li>
            </ul>
          </Col>
          <Col md={6}>
            <Image
              src="/images/stock-photo-map-of-quebec-canada-world-tourism-travel-destination-2405307165.jpg"
              width={1500}
              height={1225}
              alt={`Québec, QC Canada`}
            />
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
