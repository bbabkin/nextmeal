import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');
export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // simulate a slow db
  return db.prepare('SELECT * FROM meals').all(); // returns all rows from meals table
  // get would only return one and run would add an entry
}
export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split('.').pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('saving image failed');
    }
  });
  meal.image = `/images/${filename}`;
  db.prepare(`
    INSERT INTO meals 
    (title, slug, summary, instructions, creator, creator_email, image) 
    VALUES (@title, @slug, @summary, @instructions, @creator, @creator_email, @image)
    `).run(meal);
}