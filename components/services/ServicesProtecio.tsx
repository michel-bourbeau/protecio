import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ServicesProtecio() {
  const { t } = useTranslation();

  return (
    <section className="solar-panel">
      <Container>
        <Row>
          <Col md={5} className="text-center mb-4 thumb">
            <Image
              src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
              width={1500}
              height={1102}
              alt="Image Services"
            />
          </Col>
          <Col md={7} className="text-left">
            <h2>Services</h2>
            <ul>
              <li>Liste des services</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
