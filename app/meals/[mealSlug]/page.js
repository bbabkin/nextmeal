export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Item
      </h1>
      <p>ID: {params.slug} </p>
    </main>
  );
}
