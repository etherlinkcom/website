import Container from '../components/container'
import { Header } from '../cookies/Header'
import { Content } from '../cookies/Content'

const startStyle =
  'text-grey-50 text-lg font-light leading-[28px] -tracking-[0.36px]'
const olStyle =
  'list-decimal space-y-4 font-light text-grey-50 mb-[40px] md:mb-[80px]'
const olItemStyle = 'grid grid-cols-[2rem_1fr] gap-4'

const Privacy = () => {
  return (
    <Container className='max-w-[800px] mt-[40px] md:mt-[60px]'>
      <h1 className='text-neonGreen-500 font-semibold mb-[40px] text-4xl'>
        <span className='text-grey-50'>Website</span> Privacy Notice
      </h1>

      <p className='text-neonGreen-500 text-2xl font-semibold -tracking-[0.48px] mb-3'>
        Tezos Foundation
      </p>

      <p className={`mb-4 ${startStyle}`}>
        The privacy of users of the website is paramount for the Tezos
        Foundation, Baarerstrasse 22, 6300 Zug, Switzerland (“we” or “us”). We
        greatly appreciate the trust that you have placed in us and will do our
        best to protect your personal data.
      </p>
      <p className={`mb-4 ${startStyle}`}>
        We will process your personal data in accordance with the Swiss Federal
        Act on Data Protection (“FADP”) and the European Union (“EU”) General
        Data Protection Regulation (“GDPR”), which is considered by many as the
        world’s strictest data protection regime.
      </p>
      <p className={`mb-8 ${startStyle}`}>
        Personal data is any information that relates to an identifiable natural
        person and includes inter alia name, address, e-mail address and user
        behaviour. The collection, use and disclosure (“processing”) of your
        personal data by us or any third-party recipient at all times will be in
        accordance with the terms of this Privacy Note.
      </p>

      <Header text='1. OUR COMMITMENT TO DATA PROTECTION PRINCIPLES' />
      <p className={`mb-4 ${startStyle}`}>
        We are responsible for the processing of your personal data (as a “data
        controller” pursuant to the GDPR / FADP). In order to protect your
        personal data in connection with the usage of the website, we are
        committed to adhering to the GDPR/FADP principles outlined below. All
        individuals working for us are required to follow these principles in
        their daily activities. We will therefore make sure that your personal
        data is:
      </p>
      <ul className='list-disc ml-6 mb-[40px] text-grey-50 space-y-2'>
        <li>
          processed lawfully, fairly and in a transparent manner (lawfulness,
          fairness and transparency);
        </li>
        <li>
          collected for specified, explicit and legitimate purposes and not
          further processed in a manner that is incompatible with those purposes
          (purpose limitation);
        </li>
        <li>
          adequate, relevant and limited to what is necessary in relation to the
          purposes for which it is processed (data minimisation);
        </li>
        <li>
          accurate and, where necessary, kept up to date; every reasonable step
          will be taken to ensure that your personal data that is inaccurate,
          having regard to the purposes for which it is processed, is erased or
          rectified without delay (accuracy);
        </li>
        <li>
          kept in a form which permits your identification for no longer than is
          necessary for the purposes for which personal data is processed
          (storage limitation); and
        </li>
        <li>
          processed in a manner that ensures appropriate security of your
          personal data, including protection against unauthorised or unlawful
          processing and against accidental loss, destruction or damage using
          appropriate technical or organisational measures (integrity and
          confidentiality).
        </li>
      </ul>
      <p className={`mb-8 ${startStyle}`}>
        The controller of your personal data is the Tezos Foundation. If you
        have any question, you can reach out to{' '}
        <a href='mailto:support@tezos.com' className='underline'>
          support@tezos.com
        </a>
        .
      </p>

      <Header text='2. DISCLOSURE AND TRANSFER OF YOUR PERSONAL DATA' />
      <p className={`mb-4 ${startStyle}`}>
        We will not share any of your personal data with any government
        authorities, except in order to comply with legal or regulatory
        requirements. If we receive a request to disclose your personal data to
        a government authority, we will thoroughly assess the request and will
        in particular consider possible legal challenges against such request.
        We will only comply with any such request that is binding, enforceable
        and issued in full compliance with applicable law.
      </p>
      <p className={`mb-8 ${startStyle}`}>
        We may transfer your personal data to third-party service providers and
        partners located outside of Switzerland and the European Economic Area
        (EEA), including to the United States. Where such transfers occur, we
        ensure a similar degree of protection by implementing at least one of
        the following safeguards:
      </p>
      <ol className={olStyle}>
        <li className={olItemStyle}>
          <span className='font-semibold'>2.1</span>
          <p>
            <span className='font-semibold'>Adequacy Decisions:</span> We will
            only transfer your personal data to countries that have been deemed
            to provide an adequate level of protection for personal data.
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>2.2</span>
          <p>
            <span className='font-semibold'>Legal Basis and Safeguards:</span>{' '}
            If the country to which we transfer your personal data does not have
            an adequacy decision, we will ensure that there is a legal basis for
            the transfer and, if required, implement appropriate safeguards to
            ensure your data is protected.
          </p>
        </li>
        <li className={olItemStyle}>
          <span className='font-semibold'>2.3</span>
          <p>
            <span className='font-semibold'>Standard Contractual Clauses:</span>{' '}
            Where we use service providers outside Switzerland and/or the EEA,
            we may use specific contracts approved for use in these regions,
            which give your personal data the same protection it has in
            Switzerland and/or the EEA.
          </p>
        </li>
      </ol>

      <Header text='3. COLLECTING OF PERSONAL DATA' />
      <p className={`mb-4 ${startStyle}`}>
        If you merely use this website for informational purposes, we will only
        collect your personal data that is transferred by your browser to our
        server. We collect online properties, identification data, professional
        life data, personal life data, connection data and localization data
        (including IP addresses), which is technically necessary for us to show
        you our website and ensure security and stability. The data collected is
        not linked to or stored with any personal data.
      </p>
      <p className={`mb-4 ${startStyle}`}>
        We evaluate the IP addresses together with other data, in case of
        attacks on our infrastructure or where unauthorized or abusive use of
        our website is suspected, for the purpose of intelligence and
        protection, and if appropriate, used in criminal proceedings for
        identification and civil and criminal proceedings against the relevant
        users. This is our legitimate interest in the processing of data in the
        sense of the relevant laws.
      </p>
      <p className={`mb-8 ${startStyle}`}>
        Our website provider is Blokhaus Inc, who uses Amazon Web Services as a
        hosting provider, Cloudflare as content distribution network and Google
        Inc. as analytics provider. The transfer of data is for the purpose of
        providing and maintaining the functionality of our website.
      </p>
      <p className={`mb-8 ${startStyle}`}>
        We may also obtain personal data about you from third-party sources,
        including public registers, business partners, and affiliates. This data
        may include professional details, online publicly available information,
        or transaction-related information where permitted by law.
      </p>
      <p className={`mb-8 ${startStyle}`}>
        Providing personal data is voluntary. However, if you choose not to
        provide certain data that is necessary for specific services (e.g.,
        newsletter subscriptions, etc.), we may not be able to provide those
        services to you.
      </p>

      <Header text='4. COLLECTING OF PERSONAL DATA WHEN SIGNING UP FOR THE NEWSLETTER' />
      <p className={`mb-8 ${startStyle}`}>
        When signing up for the Newsletter on our website, you need to enter
        your email address. You must enter the email address voluntarily, in
        order for us to be able to contact. Therefore, the processing of this
        data is in our legitimate interest in accordance in the sense of the
        relevant laws.
      </p>

      <Header text='5. COOKIES – USE OF GOOGLE ANALYTICS' />
      <p className={`mb-4 ${startStyle}`}>
        We also use Google Analytics to help us understand how our customers use
        our site. You can read more about how Google uses your personal
        information here:{' '}
        <a
          href='https://policies.google.com/privacy'
          target='_blank'
          className='underline'
          rel='noreferrer'
        >
          Google Privacy Policy
        </a>
        . You can also opt-out of Google Analytics here:{' '}
        <a
          href='https://tools.google.com/dlpage/gaoptout'
          target='_blank'
          className='underline'
          rel='noreferrer'
        >
          Google Analytics Opt-Out
        </a>
        .
      </p>
      <p className={`mb-8 ${startStyle}`}>
        For further details, please refer to our separate Cookie Policy.
      </p>

      <Header text='6. SECURING YOUR DATA' />
      <p className={`mb-8 ${startStyle}`}>
        We have implemented various technical and organizational security
        measures to ensure that your personal data is adequately protected from
        unauthorized access or other unlawful use. We use CloudFlare Inc. to
        secure and ensure reliability of our website. We have contractual
        arrangements with all of our IT and other third party service providers
        in place, which require them to also implement the necessary security
        measures. Our commitment to security also means that we have imposed
        strict confidentiality obligations on all of our staff and that we have
        implemented various data security policies to protect your personal
        data.
      </p>

      <Header text='7. DATA RETENTION' />
      <p className={`mb-8 ${startStyle}`}>
        We will retain your personal data only for as long as necessary to
        fulfill the purposes for which we collected it, including to comply with
        legal, regulatory, tax, accounting, or reporting requirements. In
        certain circumstances, we may retain your data for a longer period, for
        example, if required by law or to resolve disputes. When determining the
        appropriate retention period, we consider factors such as the nature of
        the data, the potential risk of harm from unauthorized use or
        disclosure, and our legal obligations. Once retention is no longer
        necessary, we securely delete or anonymize your data.
      </p>

      <Header text='8. YOUR RIGHTS IN CONNECTION WITH YOUR DATA' />
      <ul className='list-disc ml-6 mb-[40px] text-grey-50 space-y-2'>
        <li>
          to request access to your personal data, including to obtain a copy of
          such data;
        </li>
        <li>
          to request correction of inaccurate personal data or to have
          incomplete personal data completed;
        </li>
        <li>to request the erasure of your personal data;</li>
        <li>
          to restrict or object to the processing of your data under certain
          conditions;
        </li>
        <li>
          to withdraw consent at any time, where processing is based on consent,
          but this will not affect the lawfulness of the processing until the
          revocation;
        </li>
        <li>
          to request data portability where the data is processed on the basis
          of your consent or the necessity for the performance of a contract
          concluded with you; and
        </li>
        <li>
          to lodge a complaint with the relevant data protection authority. In
          Switzerland, this is the Federal Data Protection and Information
          Commissioner (FDPIC). If you are located in the European Economic Area
          (EEA), you can contact your local data protection authority.
        </li>
      </ul>

      <Header text='9. CHANGES TO THIS PRIVACY POLICY' />
      <p className={`mb-8 ${startStyle}`}>
        We keep this Privacy Policy under regular review and may update it from
        time to time. We reserve the right to make amendments to our Privacy
        Policy at any time. Any changes we may make to this Privacy Policy will
        be posted on our website. Unless otherwise provided in this Privacy
        Policy, it is important that the personal data we hold about you is
        accurate and current. Please keep us informed if your personal data
        changes during your relationship with us.
      </p>

      <Header text='10. CONTACT' />
      <p className={`mb-4 ${startStyle}`}>
        If you would like to exercise your rights listed under point 8 above or
        if you have any request regarding our use of your personal data you may
        contact us by emailing{' '}
        <a href='mailto:support@tezos.com' className='underline'>
          support@tezos.com
        </a>{' '}
        or by letter to:
      </p>
      <p className={`mb-4 ${startStyle}`}>
        Tezos Foundation
        <br />
        Attention: Data Protection
        <br />
        Baarerstrasse 22
        <br />
        6300 Zug
        <br />
        Switzerland
      </p>
      <p className={`mb-4 ${startStyle}`}>
        If you are an individual in the EU, you can also contact VeraSafe, which
        has been appointed as Tezos Foundation’s representative in the EU
        pursuant to Article 27 GDPR, only on matters related to the processing
        of personal data. To make such an inquiry, please contact VeraSafe using
        this contact form:{' '}
        <a
          href='https://www.verasafe.com/privacy-services/contact-article-27-representative'
          target='_blank'
          className='underline'
          rel='noreferrer'
        >
          https://www.verasafe.com/privacy-services/contact-article-27-representative
        </a>
        .
      </p>
      <p className={`mb-8 ${startStyle}`}>
        Alternatively, VeraSafe may be contacted at:
      </p>
      <p className={`mb-4 ${startStyle}`}>
        Matthew Joseph
        <br />
        Zahradníčkova 1220/20A
        <br />
        Prague 15000
        <br />
        Czech Republic
      </p>
      <p className={`mb-8 ${startStyle}`}>
        or
        <br />
        VeraSafe Ireland Ltd.
        <br />
        Unit 3D North Point House
        <br />
        North Point Business Park
        <br />
        New Mallow Road
        <br />
        Cork T23AT2P
        <br />
        Ireland
      </p>
    </Container>
  )
}

export default Privacy
