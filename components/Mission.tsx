'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Mission() {
  const { t } = useTranslation();

  return (
    <section className="mission">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="subtitle">{t('Mission.title')}</h2>
            <p className="medium-text mt-4">
              Offrir des services et produits de haute qualité dans le
              respect des meilleures pratiques en termes de TI,
              cybersécurité et des capacités du client
            </p>
            <p className="medium-text mt-4">
              Établir un modèle de partenariat flexible et
              personnalisé pour le client, incluant le partage de
              risques, le forfait et les services à la demande.
            </p>
          </Col>
          <Col
            className="thumb hide-mobile"
            md={5}
            data-aos="fade-left"
          >
            <Image
              src=""
              width={900}
              height={550}
              alt={`Protecio ${t('Mission.title')}`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
