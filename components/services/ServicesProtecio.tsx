import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IconDiagnostic from '@components/svg/services/icon-diagnostic';

export default function ServicesProtecio() {
  const { t } = useTranslation();

  return (
    <>
      <section className="alt">
        <Container>
          <Row>
            <Col md={1}></Col>
            <Col md={2} className="text-center">
              <IconDiagnostic />
              {t('Services.Offres.offre1')}
            </Col>
            <Col md={2} className="text-center">
              {t('Services.Offres.offre2')}
            </Col>
            <Col md={2} className="text-center">
              {t('Services.Offres.offre3')}
            </Col>
            <Col md={2} className="text-center">
              {t('Services.Offres.offre4')}
            </Col>
            <Col md={2} className="text-center">
              {t('Services.Offres.offre5')}
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={3} className="text-center mb-4 thumb">
              <Image
                src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
                width={1500}
                height={1102}
                alt="Image Services"
              />
            </Col>
            <Col md={9} className="text-left">
              <h2>{t('Services.ConseilStrategique.title')}</h2>
              <ul>
                <li>Participer ou animer les ateliers de travail</li>
                <li>
                  Aligner les requis avec les meilleures pratiques TI
                  du marché
                </li>
                <li>
                  Livrer des résultats de qualités rapidement en
                  suivant le modèle agile
                </li>
                <li>Répondre aux besoins du CoE Cloud</li>
                <li>
                  S’arrimer avec les secteurs, les CoEs et
                  l’architecture d’entreprise
                </li>
                <li>Faire évoluer les centres d’excellence</li>
                <li>Optmiser la gouvernance</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4 thumb">
              <Image
                src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
                width={1500}
                height={1102}
                alt="Image Services"
              />
            </Col>
            <Col md={9} className="text-left">
              <h2>{t('Services.ExplorationGCP.title')}</h2>
              <ul>
                <li>Prise de besoins</li>
                <li>États des lieux</li>
                <li>Opportunités d’affaires et technologiques</li>
                <li>Positionnement sur la platerforme</li>
                <li>Recommanations et feuille de route</li>
                <li>Projets et opératon</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4 thumb">
              <Image
                src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
                width={1500}
                height={1102}
                alt="Image Services"
              />
            </Col>
            <Col md={9} className="text-left">
              <h2>{t('Services.FrameworkDeModernisation.title')}</h2>
              <ul>
                <li>
                  Fermeture des centres de traitements (On-Prem vers
                  AVS) en cours Préparer la sortie de AVS
                </li>
                <li>Collecte des besoins</li>
                <li>Guide pour la modernisation</li>
                <li>Prioriser le SaaS, PaaS ou le CaaS</li>
                <li>
                  Normaliser les services pour soutenir la
                  modernisation (cartographie)
                </li>
                <li>Chemin de migration (arbre de decision)</li>
                <li>Architecture de références</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4 thumb">
              <Image
                src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
                width={1500}
                height={1102}
                alt="Image Services"
              />
            </Col>
            <Col md={9} className="text-left">
              <h2>
                {t('Services.MesureAdoptionInfonuagique.title')}
              </h2>
              <ul>
                <li>Identification des KPIs</li>
                <li>Revision du processus</li>
                <li>Collecte de données</li>
                <li>Rapports</li>
                <li>Suivi de performance</li>
                <li>Aligner les rôles et responsabilités</li>
                <li>
                  Suivi des actions à prendre selon la performance
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4 thumb">
              <Image
                src="/images/stock-photo-online-survey-digital-questionnaire-feedback-and-assess-customer-satisfaction-for-business-2370348031.jpg"
                width={1500}
                height={1102}
                alt="Image Services"
              />
            </Col>
            <Col md={9} className="text-left">
              <h2>{t('Services.FinOp.title')}</h2>
              <ul>
                <li>Optimiser et étendre le processus</li>
                <li>Instaurer la culture FinOps</li>
                <li>Responsabilisation</li>
                <li>Couverture IA</li>
                <li>
                  Couverture Azure, GCP, AWS et Exploration SaaS
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
