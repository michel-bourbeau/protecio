import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <Container>
        <Row>
          <Col md={4} className="p-4">
            <Image
              src="/images/usaii-certification.jpg"
              width={600}
              height={600}
              alt="usaii certification"
            />
          </Col>
          <Col md={8} className="p-4">
            <h3 className="subtitle mb-4">
              Solution d’IA – Certifié USAII AI Leader
            </h3>
            <ul className="text-medium">
              <li>Pour la croissance</li>
              <li>Pour la finance</li>
              <li>Pour les services TI</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="p-4">
            <Image
              src="/images/loi-25-compliant.jpg"
              width={600}
              height={600}
              alt="loi 25 compliant"
            />
          </Col>
          <Col md={8} className="p-4">
            <h3 className="subtitle mb-4">
              Solution pour la protection des renseignements
              personnels (loi 25)
            </h3>
            <ul className="text-medium">
              <li>
                Solution de masquage de données
                <ul>
                  <li>
                    Datamask sur Google Chrome Solution de
                    classification MS Purview
                  </li>
                  <li>
                    Accélérateur Solution contre la fuite de données
                    MS Purview
                  </li>
                  <li>
                    Accélérateur Solution de reprise après sinistre
                    Azure, GCP et AWS
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
