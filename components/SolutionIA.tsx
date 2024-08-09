import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SolutionIA() {
  const { t } = useTranslation();

  return (
    <section className="solution ia">
      <Container>
        <Row>
          <Col md={3}>
            <Image
              src="/images/usaii-certification.jpg"
              width={600}
              height={600}
              alt="usaii certification"
            />
          </Col>
          <Col md={9} data-aos="fade-left">
            <h2 className="subtitle mb-4">
              Solution d’IA – Certifié USAII AI Leader
            </h2>
            <ul>
              <li>Pour la croissance</li>
              <li>Pour la finance</li>
              <li>Pour les services TI</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
