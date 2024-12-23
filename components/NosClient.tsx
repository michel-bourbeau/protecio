'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const clients = [
  {
    name: 'Financière des professionnels',
    logo: '/images/logos/fdp.png',
  },
  { name: 'BBQ Quebec', logo: '/images/logos/bbq-quebec.png' },
  { name: 'Triasima', logo: '/images/logos/triasima.png' },
  {
    name: 'Industrielle Alliance, Assurance et services financiers inc. – iA Groupe financier.',
    logo: '/images/logos/ia-groupe-financier.png',
  },
  { name: 'JDHM Nettoyage', logo: '/images/logos/jdhm.png' },
  {
    name: 'Hyundai',
    logo: '/images/logos/hyundai.png',
  },
  {
    name: 'Gouvernement du Québec',
    logo: '/images/logos/gouvernement-du-quebec.png',
  },
  {
    name: 'Construction Côté et Fils',
    logo: '/images/logos/construction-cote-fils.png',
  },
  // Ajoutez plus de clients ici
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4, // Nombre d'images à afficher sur les grands écrans
    slidesToSlide: 1, // Nombre d'images à faire défiler à chaque fois
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Nombre d'images à afficher sur les tablettes
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Nombre d'images à afficher sur les mobiles
    slidesToSlide: 1,
  },
};

const NosClient = (props: any) => {
  const { t } = useTranslation();

  return (
    <section className="our-clients text-center small-padding">
      <h2 className="section-title text-center mb-5">
        {t('NosClient.title')}
      </h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={10} lg={10} className="text-center">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // Means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {clients.map((client, index) => (
                <div key={index} className="p-5">
                  {client && (
                    <div className="text-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={300} // Ajuste cette valeur selon la largeur maximale souhaitée
                        height={150} // Ajuste cette valeur pour respecter le ratio de ton image
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                        }}
                        priority
                      />
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NosClient;
