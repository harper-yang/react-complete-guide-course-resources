import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const sql = require('better-sqlite3');
const db = sql('meals.db');

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM meals").all();
}


export const getMealDetail = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, {lower: true})
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const imagedBuffer = await meal.image.arrayBuffer();
  console.log(imagedBuffer);
  stream.write(Buffer.from(imagedBuffer), (error) => {
    if (error) {
      throw new Error('Write image failed');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare('INSERT INTO meals(title, slug, image, summary, instructions, creator, creator_email) VALUES(@title, @slug, @image, @summary, @instructions, @creator, @creator_email)').run(meal);
}
