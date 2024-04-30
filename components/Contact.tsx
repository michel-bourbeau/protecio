'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type PropsContact = { hideTitle?: boolean };

export default function Contact({ hideTitle = false }: PropsContact) {
  const { t } = useTranslation();

  return (
    <div className="contact-section section">
      <p className="construction">{t('UnderConstruction')}</p>

      <Container className="container">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <div className="contact-form-box contact-form contact-form-3">
              <div className="form-container-box">
                <form
                  className="contact-form form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  action="/success"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                  />
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-input-box">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder={t(
                              'Contact.form.fields.name'
                            )}
                            required
                            data-error={t('Contact.form.errors.name')}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-input-box">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder={t(
                              'Contact.form.fields.email'
                            )}
                            required
                            data-error={t(
                              'Contact.form.errors.email'
                            )}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group form-input-box">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder={t(
                              'Contact.form.fields.subject'
                            )}
                            required
                            data-error={t(
                              'Contact.form.errors.subject'
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group form-input-box">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows={7}
                            placeholder={t(
                              'Contact.form.fields.message'
                            )}
                            required
                            data-error={t(
                              'Contact.form.errors.message'
                            )}
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="button"
                          type="submit"
                          data-text={t('Contact.form.button')}
                        >
                          {t('Contact.form.button')}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
