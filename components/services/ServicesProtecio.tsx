import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const services_professionnels_en_infonuagique = [
  'ConseilStrategique',
  'FrameworkDeModernisation',
  'MesureAdoptionInfonuagique',
  'FinOp',
  'Loi25',
  'EncadrementsTechnologiques',
  'CreationModernisationIA',
  'IntegrationSolutionsSecurityDesign',
];

export default function ServicesProtecio() {
  const { t } = useTranslation();

  return (
    <>
      <section className="alt small-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h2 className="section-title">Notre offre</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center p-4">
              <Image
                src="/images/icons/audit-diagnostique-cybersecurite.png"
                width="128"
                height="128"
                alt="Audit et diagnostic cybersécurité, conformité & TI"
              />
              <p className="text-medium max-width-300">
                {t('Services.Offres.offre1')}
              </p>
            </Col>
            <Col md={4} className="text-center p-4">
              <Image
                src="/images/icons/vision-feuille-route-strategique-ti.png"
                width="128"
                height="128"
                alt="Vision et feuille de route stratégique TI"
              />
              <p className="text-medium max-width-300">
                {t('Services.Offres.offre2')}
              </p>
            </Col>
            <Col md={4} className="text-center p-4">
              <Image
                src="/images/icons/gouvernance-optimisation-infonuagique.png"
                width="128"
                height="128"
                alt="Gouvernance et optimisation des services infonuagique – coûts et sécurité"
              />
              <p className="text-medium max-width-300">
                {t('Services.Offres.offre3')}
              </p>
            </Col>
            <Col md={6} className="text-center p-4">
              <Image
                src="/images/icons/integration-solution-cybersecurite.png"
                width="128"
                height="128"
                alt="Intégration de solution en gouvernance de données, conformité et cybersécurité"
              />
              <p className="text-medium max-width-300">
                {t('Services.Offres.offre4')}
              </p>
            </Col>
            <Col md={6} className="text-center p-4">
              <Image
                src="/images/icons/accompagnement-demarrage-programmation-ti-cybersecurite.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p className="text-medium max-width-300">
                {t('Services.Offres.offre5')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-5">
              <h2 className="section-title">
                {t(
                  'Services.Services_professionnels_en_infonuagique'
                )}
              </h2>
            </Col>
          </Row>
          {services_professionnels_en_infonuagique.map((el, id) => (
            <Row key={id}>
              <Col md={3} className="text-center mb-5">
                <div className="service-image">
                  <Image
                    src={`/images/${el}.jpg`} //"/images/conseils-strategique.jpg"
                    width={500}
                    height={el === 'Loi25' ? 500 : 400}
                    alt={t(`Services.${el}.title`)}
                  />
                </div>
              </Col>
              <Col md={9} className="text-left">
                <h3>{t(`Services.${el}.title`)}</h3>
                <Trans
                  i18nKey={t(`Services.${el}.liste`)} // optional -> fallbacks to defaults if not provided
                  components={{
                    ul: <ul />,
                    li: <li />,
                  }}
                />
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
}
