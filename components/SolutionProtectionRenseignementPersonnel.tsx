import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SolutionProtectionRenseignementPersonnel() {
  const { t } = useTranslation();

  return (
    <section className="solution protection-renseignement-personnel">
      <Container>
        <Row>
          <Col md={9} data-aos="fade-right">
            <h2 className="subtitle mb-4">
              Solution pour la protection des renseignements
              personnels (loi 25)
            </h2>
            <ul>
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
          <Col md={3}>
            <Image
              src="/images/loi-25-compliant.jpg"
              width={400}
              height={400}
              alt="loi 25 compliant"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
