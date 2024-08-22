import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ServicesProtecio() {
  const { t } = useTranslation();

  return (
    <>
      <section className="alt small-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h2>Notre offre</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center p-5">
              <Image
                src="/images/icons/audit-diagnostique-cybersecurite.png"
                width="128"
                height="128"
                alt="Audit et diagnostic cybersécurité, conformité & TI"
              />
              <p className="text-medium">
                {t('Services.Offres.offre1')}
              </p>
            </Col>
            <Col md={4} className="text-center p-5">
              <Image
                src="/images/icons/vision-feuille-route-strategique-ti.png"
                width="128"
                height="128"
                alt="Vision et feuille de route stratégique TI"
              />
              <p className="text-medium">
                {t('Services.Offres.offre2')}
              </p>
            </Col>
            <Col md={4} className="text-center p-5">
              <Image
                src="/images/icons/gouvernance-optimisation-infonuagique.png"
                width="128"
                height="128"
                alt="Gouvernance et optimisation des services infonuagique – coûts et sécurité"
              />
              <p className="text-medium">
                {t('Services.Offres.offre3')}
              </p>
            </Col>
            <Col md={6} className="text-center p-5">
              <Image
                src="/images/icons/integration-solution-cybersecurite.png"
                width="128"
                height="128"
                alt="Intégration de solution en gouvernance de données, conformité et cybersécurité"
              />
              <p className="text-medium">
                {t('Services.Offres.offre4')}
              </p>
            </Col>
            <Col md={6} className="text-center p-5">
              <Image
                src="/images/icons/accompagnement-demarrage-programmation-ti-cybersecurite.png"
                width="128"
                height="128"
                alt="Accompagnement en démarrage et exécution de programme TI et cybersécurité"
              />
              <p className="text-medium">
                {t('Services.Offres.offre5')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="small-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h1>Services professionnels en infonuagique</h1>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4">
              <Image
                src="/images/conseils-strategique.jpg"
                width={500}
                height={400}
                alt={t('Services.ConseilStrategique.title')}
              />
            </Col>
            <Col md={9} className="text-left">
              <h4>{t('Services.ConseilStrategique.title')}</h4>
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
            <Col md={3} className="text-center mb-4">
              <Image
                src="/images/exploration-cgp.jpg"
                width={500}
                height={400}
                alt="Exploration Google Cloud Platform"
              />
            </Col>
            <Col md={9} className="text-left">
              <h4>{t('Services.ExplorationGCP.title')}</h4>
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
            <Col md={3} className="text-center mb-4">
              <Image
                src="/images/framework-de-modernisation.jpg"
                width={500}
                height={400}
                alt={t('Services.FrameworkDeModernisation.title')}
              />
            </Col>
            <Col md={9} className="text-left">
              <h4>{t('Services.FrameworkDeModernisation.title')}</h4>
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
            <Col md={3} className="text-center mb-4">
              <Image
                src="/images/mesure-adoption-de-infonuagique.jpg"
                width={500}
                height={400}
                alt={t('Services.MesureAdoptionInfonuagique.title')}
              />
            </Col>
            <Col md={9} className="text-left">
              <h4>
                {t('Services.MesureAdoptionInfonuagique.title')}
              </h4>
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
            <Col md={3} className="text-center mb-4">
              <Image
                src="/images/finops.jpg"
                width={500}
                height={400}
                alt={t('Services.FinOp.title')}
              />
            </Col>
            <Col md={9} className="text-left">
              <h4>{t('Services.FinOp.title')}</h4>
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
