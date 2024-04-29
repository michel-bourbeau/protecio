import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function History() {
  const { t } = useTranslation();

  return (
    <section className="about history">
      <Container>
        <Row>
          <Col>
            <div className="witr_section_title">
              <div className="witr_section_title_inner text-center">
                <h2>{t('History.title')}</h2>
                <div className="witr_bar_main">
                  <div className="witr_bar_inner witr_bar_innerc"></div>
                </div>
              </div>
            </div>
            <Row className="paragraph">
              <Col md={3}>
                <p>{t('History.description')}</p>
              </Col>
              <Col md={5} className="thumb">
                <Image
                  src="/images/history-2.jpg"
                  width={512}
                  height={350}
                  alt={t('About.photoAlt')}
                  className="no-effect"
                />
              </Col>
              <Col md={4}>
                <p>{t('History.paragraph')}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
