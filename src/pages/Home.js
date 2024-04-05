const styles = {
  container: {
    minHeight: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // margin: 120,
    
  },
  title: {
    
    fontFamily: "Alfa Slab One",
    // fontWeight: 400,
    fontStyle: 'normal',



    fontWeight: 500,
    fontSize: 60,
    textAlign: 'center',
    color: '#F5F843',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook
      </h1>
      <h2 style={styles.title}>All your contacts in one place</h2>
    </div>
  );
}
