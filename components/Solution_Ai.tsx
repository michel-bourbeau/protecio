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
            <h2 className="subtitle text-center">
              {t('SolutionIA.title')}
            </h2>
            <Container>
              <Row className="mt-5">
                <Col md={4} data-aos="fade-right">
                  <div className="flex-image">
                    <Image
                      src="/images/icons/success-green-check-mark-icon.svg"
                      width={48}
                      height={48}
                      alt="usaii certification"
                      className="image"
                    />
                    <p className="text medium-text mt-4">
                      Pour la croissance
                    </p>
                  </div>
                </Col>
                <Col md={4} data-aos="fade-left">
                  <div className="flex-image">
                    <Image
                      src="/images/icons/success-green-check-mark-icon.svg"
                      width={48}
                      height={48}
                      alt="usaii certification"
                      className="image"
                    />
                    <p className="text medium-text mt-4">
                      Pour la finance
                    </p>
                  </div>
                </Col>
                <Col md={4} data-aos="fade-left">
                  <div className="flex-image">
                    <Image
                      src="/images/icons/success-green-check-mark-icon.svg"
                      width={48}
                      height={48}
                      alt="usaii certification"
                      className="image"
                    />
                    <p className="text medium-text mt-4">
                      Pour les services TI
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
