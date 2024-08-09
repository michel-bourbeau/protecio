import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OffreServices() {
  const { t } = useTranslation();

  return (
    <section className="solution services">
      <Container>
        <Row>
          <Col className="p-5" md={6} data-aos="fade-right">
            <h3 className="subtitle mt-4 mb-4">CIO virtuel</h3>
            <Image
              src="/images/cio-virtual.jpg"
              width={800}
              height={532}
              alt="cio virueln"
            />
          </Col>
          <Col md={6} className="p-5" data-aos="fade-left">
            <h3 className="subtitle mt-4 mb-4">
              Solution innovante avec AI
            </h3>
            <Image
              src="/images/solution-ai.jpg"
              width={800}
              height={533}
              alt="solution ai"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
