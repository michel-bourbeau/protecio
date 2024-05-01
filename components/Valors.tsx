import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Valors() {
  const { t } = useTranslation();

  return (
    <section className="about valors">
      <Container className="aos-init aos-animate">
        <Row>
          <Col>
            <div className="witr_section_title">
              <div className="witr_section_title_inner text-center mb-5">
                <h2>{t('Valors.title')}</h2>
                <div className="witr_bar_main">
                  <div className="witr_bar_inner witr_bar_innerc"></div>
                </div>
              </div>
            </div>
            <Row>
              <Col md={9}>
                <div className="p-2" data-aos="zoom-out">
                  <Trans
                    i18nKey={t('Valors.valor1')} // optional -> fallbacks to defaults if not provided
                    components={{
                      title: <h3 />,
                      br: <br />,
                      paragraph: <p />,
                    }}
                  />
                </div>
                <div className="p-2" data-aos="zoom-out">
                  <Trans
                    i18nKey={t('Valors.valor2')} // optional -> fallbacks to defaults if not provided
                    components={{
                      title: <h3 />,
                      br: <br />,
                      paragraph: <p />,
                    }}
                  />
                </div>
              </Col>
              <Col md={9}>
                <div className="p-2" data-aos="zoom-out">
                  <Trans
                    i18nKey={t('Valors.valor3')} // optional -> fallbacks to defaults if not provided
                    components={{
                      title: <h3 />,
                      br: <br />,
                      paragraph: <p />,
                    }}
                  />
                </div>
                <div className="p-2" data-aos="zoom-out">
                  <Trans
                    i18nKey={t('Valors.valor4')} // optional -> fallbacks to defaults if not provided
                    components={{
                      title: <h3 />,
                      br: <br />,
                      paragraph: <p />,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
