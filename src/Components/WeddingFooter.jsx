const WeddingFooter = () => {
  return (
    <footer className="w-full bg-pink-100 py-6 flex flex-col items-center text-center" style={styles.footer}>
      <div style={styles.names}>Harley & Yulieth</div>
      <div style={styles.date}>❤️ 23 • 03 • 2025 ❤️</div>
    </footer>
  );
};

const styles = {
  footer: {
    fontFamily: '"Dancing Script", cursive',
    backgroundColor: '#FADADD',
  },
  names: {
    fontSize: '2rem',
    color: '#7B1E26',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '1.25rem',
    color: '#A52A2A',
    marginTop: '0.5rem',
  }
};

export default WeddingFooter;
