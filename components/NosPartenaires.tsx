'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';

const clients = [
  /*   {
    name: 'Groupe Hi5',
    logo: '/images/logos/Hi5.png',
  }, */
  {
    name: 'Corsek Cyber Security',
    logo: '/images/logos/corsek-cybersecurity.png',
  },
  {
    name: 'Kelvin Zero',
    logo: '/images/logos/kelvin-zero.jpg',
  },
  {
    name: 'Prodago',
    logo: '/images/logos/prodago.webp',
  },
  {
    name: 'Microsoft',
    logo: '/images/logos/microsoft.jpg',
  },
  {
    name: 'Amazon',
    logo: '/images/logos/amazon.webp',
  },
  ,
  {
    name: 'Google Cloud Platform',
    logo: '/images/logos/gcp.png',
  },
  {
    name: 'Mantle Bloc Cain',
    logo: '/images/logos/mantle.png',
  },
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
    <section className=" small-padding our-clients nos-partenaires text-center ">
      <h2 className="section-title text-center mb-5">
        Nos partenaires
      </h2>
      <Container className="my-4">
        <Row className="justify-content-center">
          {clients.map((client, i) => {
            return (
              <Col
                xs={6}
                md={3}
                className="mb-4 d-flex justify-content-center align-items-center"
                key={i}
              >
                {client && (
                  <div className="partner-logo">
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default NosClient;
