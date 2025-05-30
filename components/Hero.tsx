import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {
  title?: string;
  description?: string;
  button?: boolean;
  id?: string;
  isPage?: boolean;
  className?: string;
}

export default function Hero({
  title = 'Hero.title',
  description = 'Hero.description',
  button,
  id = 'hero',
  isPage,
  className,
}: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section
      id={id}
      className={`hero sticked-header-offset ${className}`}
    >
      <Container className="container position-relative">
        <Row className="row gy-5">
          <Col
            md={6}
            sm={12}
            className="dark-bg order-lg-1 d-flex flex-column justify-content-start text-left"
          >
            <h1 data-aos="fade-down">
              <Trans
                i18nKey={title} // optional -> fallbacks to defaults if not provided
                components={{
                  guidelines: <span />,
                  br: <br />,
                }}
              />
              <span className="circle"></span>
            </h1>
            {isPage ? (
              <p>
                <Trans
                  i18nKey={description} // optional -> fallbacks to defaults if not provided
                  components={{
                    guidelines: <span />,
                    br: <br />,
                  }}
                />
              </p>
            ) : (
              <p>
                <Trans
                  i18nKey={description} // optional -> fallbacks to defaults if not provided
                  components={{
                    guidelines: <span />,
                    br: <br />,
                  }}
                />
              </p>
            )}
            <div className="d-flex justify-content-start">
              {button && (
                <a href={`/${router.locale}/contact`} className="btn">
                  {t('Cta.button')}
                </a>
              )}
            </div>
          </Col>
        </Row>
        <span id="our-services"></span>
      </Container>
    </section>
  );
}
