import { useTranslation } from 'next-i18next';
// import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WindTurbine() {
  const { t } = useTranslation();

  return (
    <section className="solar-panel">
      <h2 className="text-center">Wind urbine</h2>
      <Container>
        <Row>
          <Col md={6} className="text-center">
            LEFT
          </Col>
          <Col md={6} className="text-center">
            RIGHT
          </Col>
        </Row>
      </Container>
    </section>
  );
}
