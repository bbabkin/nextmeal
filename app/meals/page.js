import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
export default async function MealsPage() { // server funcs can be async
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>Delicios meals, created <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favorite meal and enjoy a delicious lunch or dinner at home.</p>
        <p className={classes.cta}>
          <Link href="/meals/share" >Share your own meal!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
}
