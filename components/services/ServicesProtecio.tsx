import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import SolutionProtectionRenseignementPersonnel from '@components/SolutionProtectionRenseignementPersonnel';
import NosClient from '@components/NosClient';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const services_professionnels_en_infonuagique = ['Loi25'];

export default function ServicesProtecio() {
  const { t } = useTranslation();

  return (
    <>
      <section className="small-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h2 className="section-title">Notre offre</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/audit-diagnostique-cybersecurite.png"
                width="128"
                height="128"
                alt="Audit et diagnostic cybersécurité, conformité & TI"
              />
              <p className="text-medium">
                Audit et diagnostic
                <br />
                Mesure d’adoption et de performance <br />
                FinOps
              </p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/vision-feuille-route-strategique-ti.png"
                width="128"
                height="128"
                alt="Vision et feuille de route stratégique TI"
              />
              <p className="text-medium">Conseil stratégique</p>
              <p>Vision et feuille de route stratégique TI</p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/gouvernance-optimisation-infonuagique.png"
                width="128"
                height="128"
                alt="Gouvernance et optimisation des services infonuagique – coûts et sécurité"
              />
              <p className="text-medium">
                vCIO, vCTO, vCISO sur demande
              </p>
              <p>Gouvernance et optimisation des solutions</p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/integration-solution-cybersecurite.png"
                width="128"
                height="128"
                alt="Intégration de solution en gouvernance de données, conformité et cybersécurité"
              />
              <p className="text-medium">
                Création de solution sur demande
              </p>
              <p>
                Gouvernance de données, conformité et cybersécurité
                (As A Service)
              </p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/accompagnement-demarrage-programmation-ti-cybersecurite.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p>Accompagnement de programme TI</p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/encadrement-technologique.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p className="text-medium">
                Encadrements technologiques
              </p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/creation-modernisation-ia.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p>Création / Modernisation de solution avec l’IA</p>
              <p>
                Modernisation d’application et de technologies grâce à
                l’IA
              </p>
            </Col>
            <Col md={3} className="text-center p-4 text-medium">
              <Image
                src="/images/icons/integration-de-solution-security-by-design.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p className="text-medium">
                Intégration de solutions (Security by Design)
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding">
        <SolutionProtectionRenseignementPersonnel />
        <NosClient />
      </section>
    </>
  );
}
