import classes from './meals-grid.module.css';
import MealItem from './meal-item';
export default function MealsGrid({ meals }) {
  return <ul className={classes.meals}>
    {meals.map(meal => (
      <li key={meal.id}>
        <MealItem {...meal} /> 
        {/* spread operator to pass all properties of meal object */}
      </li>
    ))}
  </ul>
}