'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Map from '@components/Map';
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
        <Row>
          <Col md={3}>
            <h4>
              Somos la primera empresa en todo el país y el único en
              la zona con los servicios de mantenimiento en turbinas
              eólicas. Ubicados en el centro de América a 140km de la
              capital de Managua-Nicaragua.
            </h4>
            <p>
              Rivas,Nicargua.
              <br />
              Frente al km114 carretera a Tola
            </p>
            <p>Teléfonos</p>
            <ul>
              <li>+505 8895 6347</li>
              <li>+5055 8257 6611</li>
              <li>+505 8399 7398</li>
            </ul>
          </Col>
          <Col md={9}>
            <Image
              src="/images/map-rivas.jpg"
              width={1296}
              height={460}
              alt={`UBICACION Kairos Technologies S.A`}
            />
            {/*             <Map /> */}
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
