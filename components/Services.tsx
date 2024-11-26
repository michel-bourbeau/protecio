'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <section className="small-padding strategie">
        <Container>
          <Row>
            <Col>
              <h3 className="title-services strategie">
                {t('Solutions.Strategie')}
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Direction-Virtuelle-vCIO-vCTO-vCISO.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Direction-Virtuelle-vCIO-vCTO-vCISO.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Direction-Virtuelle-vCIO-vCTO-vCISO.title'
                        )}
                      </strong>
                    </h5>
                    <p>
                      {t(
                        'Solutions.Direction-Virtuelle-vCIO-vCTO-vCISO.paragraphe'
                      )}
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Audit-et-Diagnostic.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.Audit-et-Diagnostic.title')}
                      priority
                    />
                    <h5>
                      <strong>
                        {t('Solutions.Audit-et-Diagnostic.title')}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t('Solutions.Audit-et-Diagnostic.paragraphe')}
                    </p>{' '}
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Conseil-Strategique.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.Conseil-Strategique.title')}
                      priority
                    />
                    <h5>
                      <strong>
                        {t('Solutions.Conseil-Strategique.title')}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t('Solutions.Conseil-Strategique.paragraphe')}
                    </p>{' '}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding alt gouvernance">
        <Container>
          <Row>
            <Col>
              <h3 className="title-services gouvernance">
                {t('Solutions.Gouvernance')}
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Gouvernance-des-Solutions.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Gouvernance-des-Solutions.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Gouvernance-des-Solutions.title'
                        )}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t(
                        'Solutions.Gouvernance-des-Solutions.paragraphe'
                      )}
                    </p>{' '}
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Encadrements-Technologiques.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Encadrements-Technologiques.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Encadrements-Technologiques.title'
                        )}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t(
                        'Solutions.Encadrements-Technologiques.paragraphe'
                      )}
                    </p>{' '}
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/FinOps.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.FinOps.title')}
                      priority
                    />
                    <h5>
                      <strong>{t('Solutions.FinOps.title')}</strong>{' '}
                    </h5>
                    <p>{t('Solutions.FinOps.paragraphe')}</p>{' '}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding application">
        <Container>
          <Row>
            <Col>
              <h3 className="title-services application">
                {t('Solutions.Application')}
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Creation-de-Solutions.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.Creation-de-Solutions.title')}
                      priority
                    />
                    <h5>
                      <strong>
                        {t('Solutions.Creation-de-Solutions.title')}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t(
                        'Solutions.Creation-de-Solutions.paragraphe'
                      )}
                    </p>{' '}
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Modernisation-et-IA.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.Modernisation-et-IA.title')}
                      priority
                    />
                    <h5>
                      <strong>
                        {t('Solutions.Modernisation-et-IA.title')}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t('Solutions.Modernisation-et-IA.paragraphe')}
                    </p>{' '}
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Integration-de-Solutions-Security-by-Design.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Integration-de-Solutions-Security-by-Design.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Integration-de-Solutions-Security-by-Design.title'
                        )}
                      </strong>{' '}
                    </h5>
                    <p>
                      {t(
                        'Solutions.Integration-de-Solutions-Security-by-Design.paragraphe'
                      )}
                    </p>{' '}
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding alt cybersecurite">
        <Container>
          <Row>
            <Col>
              <h3 className="title-services">
                {t('Solutions.Cybersecurite')}
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Direction-Virtuelle-vCISO.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Direction-Virtuelle-vCISO.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Direction-Virtuelle-vCISO.title'
                        )}
                      </strong>
                    </h5>
                    <p>
                      {t(
                        'Solutions.Direction-Virtuelle-vCISO.paragraphe'
                      )}
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Securite-et-Conformite-As-A-Service.png"
                      width="128"
                      height="128"
                      alt={t(
                        'Solutions.Securite-et-Conformite-As-A-Service.title'
                      )}
                      priority
                    />
                    <h5>
                      <strong>
                        {t(
                          'Solutions.Securite-et-Conformite-As-A-Service.title'
                        )}
                      </strong>
                    </h5>
                    <p>
                      {t(
                        'Solutions.Securite-et-Conformite-As-A-Service.paragraphe'
                      )}
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/MSSP.png"
                      width="128"
                      height="128"
                      alt={t('Solutions.MSSP.title')}
                      priority
                    />
                    <h5>
                      <strong>{t('Solutions.MSSP.title')}</strong>
                    </h5>
                    <p>{t('Solutions.MSSP.paragraphe')}</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
