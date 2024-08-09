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
          <Col md={12}>
            <h2 className="subtitle text-center">Notre mission</h2>
            <Container>
              <Row>
                <Col md={6} data-aos="fade-right">
                  <div className="flex-image">
                    <Image
                      src="/images/icons/success-green-check-mark-icon.svg"
                      width={48}
                      height={48}
                      alt="usaii certification"
                      className="image"
                    />
                    <p className="text medium-text mt-4">
                      Offrir des services et produits de haute qualité
                      dans le respect des meilleures pratiques en
                      termes de TI, cybersécurité et des capacités du
                      client
                    </p>
                  </div>
                </Col>
                <Col md={6} data-aos="fade-left">
                  <div className="flex-image">
                    <Image
                      src="/images/icons/success-green-check-mark-icon.svg"
                      width={48}
                      height={48}
                      alt="usaii certification"
                      className="image"
                    />
                    <p className="text medium-text mt-4">
                      Établir un modèle de partenariat flexible et
                      personnalisé pour le client, incluant le partage
                      de risques, le forfait et les services à la
                      demande.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
