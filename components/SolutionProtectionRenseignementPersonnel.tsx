import { Trans, useTranslation } from 'next-i18next';
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
              {t('SolutionProtectionRenseignementPersonnel.title')}
            </h2>
            <Trans
              i18nKey={t(
                'SolutionProtectionRenseignementPersonnel.services'
              )} // optional -> fallbacks to defaults if not provided
              components={{
                ul: <ul />,
                li: <li />,
              }}
            />
          </Col>
          <Col md={3}>
            <Image
              src="/images/Loi25.jpg"
              width={400}
              height={400}
              alt="loi 25 compliant"
            />
          </Col>
        </Row>
        <span id="notre-mission-et-vision"></span>
      </Container>
    </section>
  );
}
