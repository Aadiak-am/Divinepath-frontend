import React from 'react';

function AboutUs() {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: 'auto',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
      color: '#1e2a38',
    },
    heading: {
      fontSize: '40px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px',
      background: 'linear-gradient(90deg, #ff914d, #ff5e62)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    section: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      marginBottom: '60px',
    },
    image: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    text: {
      maxWidth: '600px',
    },
    subheading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ff914d',
      marginBottom: '16px',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.6',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
    },
    card: {
      flex: '1 1 300px',
      maxWidth: '500px',
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#ff914d',
    },
    whyDivinePathSection: {
      backgroundColor: '#efe033',
      padding: '60px 30px',
      borderRadius: '20px',
      marginTop: '60px',
    },
    whyHeading: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#1e1e1e',
    },
    whyParagraph: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#1e1e1e',
      textAlign: 'center',
      maxWidth: '900px',
      margin: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <div style={styles.section}>
        <img
          src="/images/ganeshji.jpg"
          alt="About DivinePath"
          style={styles.image}
        />
        <div style={styles.text}>
          <h2 style={styles.subheading}>Welcome to DivinePath</h2>
          <p style={styles.paragraph}>
            At DivinePath, our mission is to guide individuals toward spiritual
            clarity and personal peace through expert astrological advice and sacred pooja services.
            We are committed to providing an authentic and divine experience that
            brings harmony to your life's journey.
          </p>
        </div>
      </div>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Trusted Astrologers</h3>
          <p>
            Our team is composed of experienced and verified astrologers who
            follow traditional Vedic principles with a modern approach.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Online Pooja Booking</h3>
          <p>
            Book personalized poojas from the comfort of your home, performed
            by professional pandits at sacred temples across India.
          </p>
        </div>
      </div>

      <div style={styles.whyDivinePathSection}>
        <h2 style={styles.whyHeading}>WHY DIVINEPATH</h2>
        <p style={styles.whyParagraph}>
          DivinePath stands apart for its dedication to authenticity, trust, and
          transparency. Whether you're looking for astrological guidance or sacred pooja rituals,
          we ensure everything is done according to Vedic traditions with utmost devotion.
          <br /><br />
          🌿 100% authentic poojas performed by verified and experienced pandits.<br />
          🔮 Accurate and personalized astrology reports you can rely on.<br />
          📿 Live pooja streaming to bring you spiritually closer.<br />
          🛕 Book poojas in renowned temples across India from the comfort of your home.<br />
          🧘‍♂️ Genuine remedies and spiritual solutions for real-life problems.<br />
          ❤️ Trusted by thousands seeking divine direction and peace.
          <br /><br />
          Experience devotion that transforms your life – only on DivinePath.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
