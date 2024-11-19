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
              <h3 className="title-services strategie">Stratégie</h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Direction-Virtuelle-vCIO-vCTO-vCISO.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>
                        Direction Virtuelle (vCIO, vCTO, vCISO)
                      </strong>
                    </h5>
                    <p>
                      Service spécifique pour les fonctions exécutives
                      de TI à la demande.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Audit-et-Diagnostic.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>Audit et Diagnostic</strong>
                    </h5>
                    <p>
                      Pour toutes les analyses et audits
                      préliminaires.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Conseil-Strategique.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>Conseil Stratégique</strong>
                    </h5>
                    <p>
                      Un espace dédié à l'expertise consultative sur
                      les décisions technologiques. Inclut Vision et
                      feuille de route stratégique TI pour aligner la
                      stratégie TI avec les objectifs d'affaires.
                    </p>
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
                Gouvernance
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Gouvernance-des-Solutions.png"
                      width="128"
                      height="128"
                      alt="Gouvernance et optimisation des services infonuagique – coûts et sécurité"
                    />
                    <h5>
                      <strong>Gouvernance des Solutions</strong>
                    </h5>
                    <p>
                      Concentre les efforts sur la Gouvernance et
                      optimisation des solutions pour assurer la
                      cohérence et la conformité.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Encadrements-Technologiques.png"
                      width="128"
                      height="128"
                      alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
                    />
                    <h5>
                      <strong>Encadrements Technologiques</strong>
                    </h5>
                    <p>
                      Conseils et encadrement technique pour
                      l’optimisation des projets et technologies.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/FinOps.png"
                      width="128"
                      height="128"
                      alt="Vision et feuille de route stratégique TI"
                    />
                    <h5>
                      <strong>FinOps</strong>
                    </h5>
                    <p>
                      Optimisation des coûts liés aux infrastructures
                      et solutions technologiques.
                    </p>
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
                Application
              </h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Creation-de-Solutions.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>Création de Solutions</strong>
                    </h5>
                    <p>
                      Services personnalisés pour la Création de
                      solution sur demande.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Modernisation-et-IA.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>Modernisation et IA</strong>
                    </h5>
                    <p>
                      Création/Modernisation de solution avec l’IA et
                      Modernisation d’application grâce à l’IA pour
                      mettre en avant l'innovation et la
                      transformation numérique.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Integration-de-Solutions-Security-by-Design.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>
                        Intégration de Solutions (Security by Design)
                      </strong>
                    </h5>
                    <p>
                      Une offre d'intégration sécurisée dès la
                      conception des solutions.
                    </p>
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
              <h3 className="title-services">Cybersécurité</h3>
              <Container>
                <Row className="g-5">
                  <Col md={4}>
                    <Image
                      src="/images/icons/Direction-Virtuelle-vCISO.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>Direction Virtuelle (vCISO)</strong>
                    </h5>
                    <p>
                      Service spécifique pour les fonctions exécutives
                      de CISO à la demande.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/Securite-et-Conformite-As-A-Service.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>
                        Sécurité et Conformité (As A Service)
                      </strong>
                    </h5>
                    <p>
                      Gouvernance de données, conformité et
                      cybersécurité pour une gestion de la sécurité en
                      continu.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image
                      src="/images/icons/MSSP.png"
                      width="128"
                      height="128"
                      alt="Audit et diagnostic cybersécurité, conformité & TI"
                    />
                    <h5>
                      <strong>MSSP</strong>
                    </h5>
                    <p>Une offre clé en main TI et Cybersécurité</p>
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
