import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function ContactForm() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action={`${router.locale}/success`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">{t('contact.form.fullname')}</label>{' '}
        <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">{t('contact.form.email')}</label>{' '}
        <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          {t('contact.form.message')}
        </label>{' '}
        <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button className="btn" type="submit">
          {t('contact.form.send')}
        </button>
      </p>
    </form>
  );
}
